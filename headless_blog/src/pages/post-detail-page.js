import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { blogManager } from '../managers/blog-manager.js';

export class PostDetailPage extends LitElement {
  static properties = {
    post: { type: Object }
  };

  static styles = css`
    :host {
      display: block;
      padding: 4rem 0;
      color: var(--text);
    }

    .back-btn {
      background: none;
      border: 1px solid var(--border);
      color: var(--text-dim);
      padding: 0.75rem 1.5rem;
      border-radius: 999px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 4rem;
      font-weight: 500;
      transition: all var(--transition);
      font-family: var(--font-main);
    }

    .back-btn:hover {
      background: var(--bg-subtle);
      color: var(--text);
      border-color: var(--primary);
    }

    article {
      max-width: 750px;
      margin: 0 auto;
    }

    .meta {
      display: flex;
      gap: 1.5rem;
      color: var(--primary);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 3.5rem;
      line-height: 1.1;
      margin-bottom: 3rem;
      color: var(--text);
      font-weight: 800;
      letter-spacing: -0.04em;
    }

    .featured-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 4rem;
    }

    .post-content {
      line-height: 1.9;
      font-size: 1.25rem;
      color: var(--text);
      font-weight: 300;
    }

    .post-content p {
      margin-bottom: 2rem;
    }

    .post-content h2 {
      font-size: 2rem;
      margin: 3rem 0 1.5rem 0;
      font-weight: 700;
    }

    .post-content figure {
      margin: 3rem 0;
    }

    .post-content img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.2rem; }
      .featured-image { height: 300px; }
      .post-content { font-size: 1.1rem; }
    }
  `;

  render() {
    if (!this.post) return html`<p>Cargando artículo...</p>`;

    return html`
      <button class="back-btn" @click=${() => blogManager.navigateToHome()}>
        ← Volver al blog
      </button>

      <article>
        <div class="meta">
          <span>${this.post.categories[0]?.name || 'Xarop'}</span>
          <span>${this.post.date}</span>
        </div>
        <h1>${this.post.title}</h1>
        <img class="featured-image" src=${this.post.image} alt=${this.post.title}>
        
        <div class="post-content">
          ${unsafeHTML(this.post.content)}
        </div>
      </article>
    `;
  }
}

customElements.define('post-detail-page', PostDetailPage);
