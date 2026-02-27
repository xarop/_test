import { LitElement, html, css } from 'lit';
import { socialManager } from '../managers/social-manager.js';
import '../components/social-post.js';

export class HomePage extends LitElement {
  static properties = {
    _posts: { type: Array, state: true }
  };

  static styles = css`
    :host {
      display: block;
      padding-top: 2rem;
    }

    .composer {
      background: #1e293b;
      padding: 1rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    textarea {
      width: 100%;
      background: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: white;
      padding: 1rem;
      resize: none;
      font-family: inherit;
      margin-bottom: 0.5rem;
    }

    .composer-footer {
      display: flex;
      justify-content: flex-end;
    }

    button {
      background: #8b5cf6;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.2s;
    }

    button:hover {
      background: #7c3aed;
    }
  `;

  constructor() {
    super();
    this._posts = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._subscription = socialManager.posts$.subscribe(posts => {
      this._posts = posts;
    });
    socialManager.loadPosts();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._subscription) this._subscription.unsubscribe();
  }

  _handlePost() {
    const textarea = this.shadowRoot.querySelector('textarea');
    if (textarea.value.trim()) {
      socialManager.addPost(textarea.value);
      textarea.value = '';
    }
  }

  render() {
    return html`
      <div class="composer">
        <textarea placeholder="¿Qué estás pensando?" rows="3"></textarea>
        <div class="composer-footer">
          <button @click=${this._handlePost}>Publicar</button>
        </div>
      </div>

      <div class="feed">
        ${this._posts.map(post => html`
          <social-post .post=${post}></social-post>
        `)}
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
