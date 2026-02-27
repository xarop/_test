import { LitElement, html, css } from 'lit';
import '../components/social-header.js';
import '../pages/home-page.js';
import '../styles/app.scss';

export class SocialApp extends LitElement {
  static styles = css`
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `;

  render() {
    return html`
      <social-header></social-header>
      <main>
        <home-page></home-page>
      </main>
    `;
  }
}

customElements.define('social-app', SocialApp);
