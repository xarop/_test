import { LitElement, html, css } from 'lit';

export class UserCard extends LitElement {
  static properties = {
    user: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      color: #f8fafc;
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: scale(1.02);
      border-color: #6366f1;
    }

    h3 {
      margin: 0 0 0.5rem 0;
      color: #6366f1;
    }

    p {
      margin: 0.25rem 0;
      font-size: 0.9rem;
      color: #94a3b8;
    }

    .email {
      font-weight: bold;
      color: #06b6d4;
    }
  `;

  render() {
    if (!this.user) return html`<p>Cargando...</p>`;

    return html`
      <div class="card">
        <h3>${this.user.name}</h3>
        <p>@${this.user.username}</p>
        <p class="email">${this.user.email}</p>
        <p>🏢 ${this.user.company.name}</p>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
