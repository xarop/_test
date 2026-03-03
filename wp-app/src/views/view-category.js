/**
 * @file view-category.js
 * @description Archive de posts filtrados por categoría.
 * Recibe el slug de la categoría (URL amigable), lo resuelve a ID mediante
 * la API y muestra un grid paginado de posts.
 *
 * Ruta: #/category/:slug
 *
 * @prop {string} categorySlug — Slug de la categoría (p. ej. "backend-develop")
 * @fires navigate — { detail: { route: string } }
 */

import { LitElement, html, nothing } from 'lit';
import { wpService } from '../wp-service.js';
import { sharedStyles } from '../styles/shared.styles.js';
import { stateStyles } from '../styles/shared.styles.js';
import { categoryStyles } from '../styles/category.styles.js';
import { Icon } from '../icons.js';
import '../components/post-card.js';

const PER_PAGE = 9;

export class ViewCategory extends LitElement {
    static styles = [sharedStyles, stateStyles, categoryStyles];

    static properties = {
        /** Slug de la categoría activa, asignado por el router */
        categorySlug: { type: String },

        _category: { state: true },   // objeto completo de la categoría activa
        _allCats: { state: true },   // todas las categorías (para la barra hermana)
        _posts: { state: true },
        _loading: { state: true },
        _error: { state: true },
        _page: { state: true },
        _totalPages: { state: true },
        _total: { state: true },
    };

    constructor() {
        super();
        this.categorySlug = '';
        this._category = null;
        this._allCats = [];
        this._posts = [];
        this._loading = true;
        this._error = null;
        this._page = 1;
        this._totalPages = 1;
        this._total = 0;
    }

    // ─── Lifecycle ────────────────────────────────────────────────────────────

    connectedCallback() {
        super.connectedCallback();
        this.#init();
    }

    updated(changedProps) {
        // El slug cambia cuando el router navega entre categorías sin desmontar el componente
        if (changedProps.has('categorySlug') && this.categorySlug) {
            this._page = 1;
            this.#init();
        }
    }

    // ─── Data ─────────────────────────────────────────────────────────────────

    async #init() {
        this._loading = true;
        this._error = null;
        this._category = null;
        this._posts = [];

        try {
            // Resolvemos slug → objeto de categoría y cargamos las demás en paralelo
            const [category, allCats] = await Promise.all([
                wpService.getCategoryBySlug(this.categorySlug),
                wpService.getAllCategories(),
            ]);

            this._category = category;
            this._allCats = allCats;

            await this.#loadPage(this._page);
        } catch (err) {
            this._error = err.message;
            this._loading = false;
        }
    }

    async #loadPage(page) {
        this._loading = true;
        this._error = null;
        try {
            const { posts, total, totalPages } = await wpService.getPostsByCategoryPaged(
                this._category.id,
                { page, perPage: PER_PAGE }
            );
            this._posts = posts;
            this._total = total;
            this._totalPages = totalPages;
            this._page = page;
        } catch (err) {
            this._error = err.message;
        } finally {
            this._loading = false;
            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ─── Helpers ──────────────────────────────────────────────────────────────

    #navigate(route) {
        this.dispatchEvent(
            new CustomEvent('navigate', {
                detail: { route },
                bubbles: true,
                composed: true,
            })
        );
    }

    #onPostSelected(e) {
        this.#navigate(`/post/${e.detail.id}`);
    }

    // ─── Templates ────────────────────────────────────────────────────────────

    #renderError() {
        return html`
      <div class="state-wrapper">
        <div class="error-box" role="alert">
          <h3>No se pudo cargar la categoría</h3>
          <p>${this._error}</p>
          <button class="retry-btn" @click="${() => this.#init()}">Reintentar</button>
        </div>
      </div>
    `;
    }

    #renderHeader() {
        const cat = this._category;
        if (!cat) return nothing;

        return html`
      <header class="cat-header">
        <div class="cat-header__inner">
          <p class="cat-header__eyebrow">Archivo de categoría</p>
          <h1 class="cat-header__title">
            ${cat.name}
            <span class="cat-header__badge">${cat.count} posts</span>
          </h1>
          ${cat.description
                ? html`<p class="cat-header__description">${cat.description}</p>`
                : nothing}
          ${!this._loading
                ? html`<p class="cat-header__meta">
                Mostrando ${this._posts.length} de ${this._total} publicaciones
                · Página ${this._page} de ${this._totalPages}
              </p>`
                : nothing}
        </div>
      </header>
    `;
    }

    /** Barra de chips con todas las categorías hermanas */
    #renderSiblingBar() {
        if (!this._allCats.length) return nothing;

        return html`
      <nav class="sibling-bar" aria-label="Otras categorías">
        <!--<span class="sibling-bar__label">Categorías:</span>-->
        <div class="sibling-chips">
          ${this._allCats.map(
            (cat) => html`
              <button
                class="sibling-chip ${cat.slug === this.categorySlug ? 'sibling-chip--active' : ''}"
                @click="${() => this.#navigate(`/category/${cat.slug}`)}"
                aria-current="${cat.slug === this.categorySlug ? 'page' : nothing}"
                aria-label="${cat.name} — ${cat.count} posts"
              >
                ${cat.name}
                <span class="sibling-chip__count">(${cat.count})</span>
              </button>
            `
        )}
        </div>
      </nav>
    `;
    }

    #renderGrid() {
        if (this._loading) {
            return html`
        <div class="state-wrapper">
          <div class="spinner" role="status" aria-label="Cargando posts"></div>
          <p class="loading-text">Cargando posts…</p>
        </div>
      `;
        }

        if (!this._posts.length) {
            return html`
        <div class="empty-state">
          <span class="empty-state__icon">${Icon.folder({ size: 40 })}</span>
          <p class="empty-state__title">Sin publicaciones</p>
          <p>Esta categoría no tiene posts todavía.</p>
        </div>
      `;
        }

        return html`
      <section class="archive-section" aria-label="Posts de ${this._category?.name}">
        <div class="archive-grid">
          ${this._posts.map(
            (post) => html`
              <post-card
                .post="${post}"
                @post-selected="${this.#onPostSelected}"
              ></post-card>
            `
        )}
        </div>
        ${this.#renderPagination()}
      </section>
    `;
    }

    #renderPagination() {
        if (this._totalPages <= 1) return nothing;

        return html`
      <nav class="pagination" aria-label="Paginación">
        <button
          class="pagination__btn"
          ?disabled="${this._page === 1}"
          @click="${() => this.#loadPage(this._page - 1)}"
          aria-label="Página anterior"
        >
          ← Anterior
        </button>
        <span class="pagination__info" aria-live="polite">
          ${this._page} / ${this._totalPages}
        </span>
        <button
          class="pagination__btn"
          ?disabled="${this._page === this._totalPages}"
          @click="${() => this.#loadPage(this._page + 1)}"
          aria-label="Página siguiente"
        >
          Siguiente →
        </button>
      </nav>
    `;
    }

    render() {
        if (this._error && !this._category) return this.#renderError();

        return html`
      ${this.#renderHeader()}
      ${this.#renderSiblingBar()}
      ${this._error ? this.#renderError() : this.#renderGrid()}
    `;
    }
}

customElements.define('view-category', ViewCategory);
