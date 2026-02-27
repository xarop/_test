import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { blogManager } from '../managers/blog-manager.js';

export class BlogPostCard extends LitElement {
  static properties = {
    post: { type: Object }
  };

  static styles = css`
    :host {
      display: block;
      cursor: pointer;
    }

    .card {
      background: var(--bg-card);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
      transition: all var(--transition);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      box-shadow: var(--shadow);
      border-color: var(--primary);
      transform: translateY(-4px);
    }

    .image-container {
      width: 100%;
      height: 220px;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
      filter: grayscale(10%);
    }

    .card:hover img {
      transform: scale(1.05);
      filter: grayscale(0%);
    }

    .content {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .meta {
      display: flex;
      gap: 1rem;
      font-size: 0.75rem;
      color: var(--text-dim);
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
    }

    .category-label {
      color: var(--primary);
    }

    .category-label:hover {
      text-decoration: underline;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: var(--text);
      font-size: 1.4rem;
      line-height: 1.3;
      font-weight: 600;
    }

    .excerpt {
      color: var(--text-dim);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: 300;
    }

    .footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .author {
      font-size: 0.85rem;
      color: var(--text-dim);
      font-weight: 400;
    }
  `;

  render() {
    if (!this.post) return '';

    return html`
      <div class="card" @click=${() => blogManager.navigateToDetail(this.post)}>
        <div class="image-container">
          <img src=${this.post.image} alt=${this.post.title}>
        </div>
        <div class="content">
          <div class="meta">
            <span class="category-label" @click=${(e) => {
              e.stopPropagation();
              blogManager.setCategory(this.post.categories[0]?.id);
            }}>
              ${this.post.categories[0]?.name || 'Xarop'}
            </span>
            <span>${this.post.date}</span>
          </div>
          <h3>${this.post.title}</h3>
          <div class="excerpt">${unsafeHTML(this.post.excerpt)}</div>
          <div class="footer">
            <span class="author">Por ${this.post.author}</span>
            <span style="color: var(--primary); font-size: 0.8rem; font-weight: 600;">Leer →</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('blog-post-card', BlogPostCard);
