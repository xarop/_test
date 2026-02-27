import { LitElement, html, css } from 'lit';

export class BlogHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 6rem 0 4rem 0;
      text-align: center;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .badge {
      display: inline-block;
      color: var(--primary);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin: 0 0 1.5rem 0;
      color: var(--text);
      line-height: 1;
      letter-spacing: -0.04em;
    }

    p {
      color: var(--text-dim);
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.5rem; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <span class="badge">Open Cells & WordPress</span>
        <h1>Xarop Insights</h1>
        <p>Explorando la intersección del diseño, la tecnología y el desarrollo web moderno desde Barcelona.</p>
      </div>
    `;
  }
}

customElements.define('blog-header', BlogHeader);
