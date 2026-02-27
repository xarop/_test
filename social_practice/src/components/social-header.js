import { LitElement, html, css } from 'lit';

export class SocialHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav {
      max-width: 1000px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(to right, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .actions {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #8b5cf6;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="logo">CellsSocial</div>
        <div class="actions">
          <span>Home</span>
          <span>Explore</span>
          <img class="avatar" src="https://i.pravatar.cc/150?u=me" alt="me">
        </div>
      </nav>
    `;
  }
}

customElements.define('social-header', SocialHeader);
