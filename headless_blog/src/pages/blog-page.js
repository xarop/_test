import { LitElement, html, css } from 'lit';
import { blogManager } from '../managers/blog-manager.js';
import '../components/blog-post-card.js';

export class BlogPage extends LitElement {
  static properties = {
    _posts: { type: Array, state: true },
    _categories: { type: Array, state: true },
    _activeCategory: { type: Object, state: true },
    _loading: { type: Boolean, state: true }
  };

  static styles = css`
    :host {
      display: block;
      padding: 2rem 0 6rem 0;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 4rem;
      justify-content: center;
    }

    .filter-btn {
      background: none;
      border: none;
      color: var(--text-dim);
      padding: 0.5rem 0;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 400;
      transition: all var(--transition);
      border-bottom: 2px solid transparent;
      font-family: var(--font-main);
    }

    .filter-btn:hover {
      color: var(--text);
    }

    .filter-btn.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
      font-weight: 600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 3rem;
    }

    .loading-state {
      text-align: center;
      padding: 4rem;
      color: var(--text-dim);
    }

    .loader {
      width: 40px;
      height: 40px;
      border: 2px solid var(--border);
      border-top-color: var(--primary);
      border-radius: 50%;
      display: inline-block;
      animation: rotation 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    @keyframes rotation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  constructor() {
    super();
    this._posts = [];
    this._categories = [];
    this._activeCategory = null;
    this._loading = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this._subs = [
      blogManager.posts$.subscribe(posts => { this._posts = posts; }),
      blogManager.categories$.subscribe(cats => { this._categories = cats; }),
      blogManager.activeCategory$.subscribe(cat => { this._activeCategory = cat; }),
      blogManager.loading$.subscribe(loading => { this._loading = loading; })
    ];
    blogManager.fetchPosts();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._subs.forEach(s => s.unsubscribe());
  }

  render() {
    if (this._loading && this._posts.length === 0) {
      return html`
        <div class="loading-state">
          <span class="loader"></span>
          <p>Cargando posts de WordPress...</p>
        </div>
      `;
    }

    const filteredPosts = this._activeCategory 
      ? this._posts.filter(post => post.categories.some(c => c.id === this._activeCategory))
      : this._posts;

    return html`
      <div class="filters">
        <button 
          class="filter-btn ${!this._activeCategory ? 'active' : ''}" 
          @click=${() => blogManager.setCategory(null)}>
          Todos los temas
        </button>
        ${this._categories.map(cat => html`
          <button 
            class="filter-btn ${this._activeCategory === cat.id ? 'active' : ''}" 
            @click=${() => blogManager.setCategory(cat.id)}>
            ${cat.name}
          </button>
        `)}
      </div>

      <div class="grid">
        ${filteredPosts.map(post => html`
          <blog-post-card .post=${post}></blog-post-card>
        `)}
      </div>
    `;
  }
}

customElements.define('blog-page', BlogPage);
