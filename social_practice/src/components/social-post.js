import { LitElement, html, css } from 'lit';

export class SocialPost extends LitElement {
  static properties = {
    post: { type: Object }
  };

  static styles = css`
    .card {
      background: #1e293b;
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: border-color 0.2s;
    }

    .card:hover {
      border-color: rgba(139, 92, 246, 0.5);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .meta h4 {
      margin: 0;
      font-size: 0.95rem;
    }

    .meta span {
      font-size: 0.8rem;
      color: #94a3b8;
    }

    .content {
      font-size: 1rem;
      color: #f8fafc;
      margin-bottom: 1rem;
    }

    .footer {
      display: flex;
      gap: 1.5rem;
      color: #94a3b8;
      font-size: 0.85rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 0.75rem;
    }

    .action {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .action:hover {
      color: #8b5cf6;
    }
  `;

  render() {
    if (!this.post) return '';
    
    return html`
      <div class="card">
        <div class="header">
          <img class="avatar" src=${this.post.avatar} alt="avatar">
          <div class="meta">
            <h4>${this.post.author}</h4>
            <span>${this.post.timestamp}</span>
          </div>
        </div>
        <div class="content">
          <p>${this.post.body}</p>
        </div>
        <div class="footer">
          <div class="action">❤️ ${this.post.likes}</div>
          <div class="action">💬 Comentar</div>
          <div class="action">🔗 Compartir</div>
        </div>
      </div>
    `;
  }
}

customElements.define('social-post', SocialPost);
