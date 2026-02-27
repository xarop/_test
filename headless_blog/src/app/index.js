import { LitElement, html, css } from 'lit';
import { blogManager } from '../managers/blog-manager.js';
import '../components/blog-header.js';
import '../pages/blog-page.js';
import '../pages/post-detail-page.js';
import '../styles/app.scss';

export class HeadlessApp extends LitElement {
  static properties = {
    _currentPage: { type: String, state: true },
    _selectedPost: { type: Object, state: true },
    _theme: { type: String, state: true }
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .top-bar {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 2rem;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    footer {
      text-align: center;
      padding: 6rem 0;
      color: var(--text-dim);
      font-size: 0.85rem;
      border-top: 1px solid var(--border);
      margin-top: 6rem;
      font-weight: 300;
      letter-spacing: 0.05em;
    }

    .toggle-icon {
      font-size: 1.2rem;
    }
  `;

  constructor() {
    super();
    this._currentPage = 'home';
    this._selectedPost = null;
    this._theme = 'dark';
    blogManager.initTheme();
  }

  connectedCallback() {
    super.connectedCallback();
    this._subs = [
      blogManager.currentPage$.subscribe(page => { this._currentPage = page; }),
      blogManager.selectedPost$.subscribe(post => { this._selectedPost = post; }),
      blogManager.theme$.subscribe(theme => { this._theme = theme; })
    ];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._subs.forEach(s => s.unsubscribe());
  }

  render() {
    return html`
      <div class="top-bar">
        <div class="theme-switch" @click=${() => blogManager.toggleTheme()} title="Cambiar tema"></div>
      </div>

      ${this._currentPage === 'home' ? html`<blog-header></blog-header>` : ''}
      
      <main class="fade-in">
        ${this._currentPage === 'home' 
          ? html`<blog-page></blog-page>`
          : html`<post-detail-page .post=${this._selectedPost}></post-detail-page>`
        }
      </main>

      <footer>
        &copy; 2026 Xarop Design & Development. Barcelona Experience.
      </footer>
    `;
  }
}

customElements.define('headless-app', HeadlessApp);
