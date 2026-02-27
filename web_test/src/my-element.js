import { LitElement, html, css } from 'lit';
import { apiService } from './services/api.service.js';
import './components/user-card.js';
import './styles/main.scss'; // Import global SCSS

export class MyElement extends LitElement {
  static properties = {
    users: { type: Array },
    loading: { type: Boolean },
    error: { type: String },
  };

  constructor() {
    super();
    this.users = [];
    this.loading = false;
    this.error = null;
  }

  // Desactivamos Shadow DOM para que el SCSS global afecte si queremos, 
  // O lo mantenemos activado para demostrar dominio de Web Components.
  // Mantendremos Shadow DOM para demostrar encapsulación.
  
  static styles = css`
    :host {
      display: block;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 2.5rem;
      background: linear-gradient(to right, #6366f1, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .btn-action {
      background: #6366f1;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 1rem;
    }

    .btn-action:hover {
      background: #4f46e5;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }
  `;

  firstUpdated() {
    this.fetchData();
  }

  async fetchData() {
    this.loading = true;
    this.error = null;
    try {
      this.users = await apiService.getUsers();
    } catch (e) {
      this.error = 'Error al cargar usuarios';
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <div class="header">
        <h1>Second Window Lab</h1>
        <p>Práctica de LitElement + REST API + SCSS</p>
        <button class="btn-action" @click=${this.fetchData}>
          ${this.loading ? 'Cargando...' : 'Refrescar Usuarios'}
        </button>
      </div>

      ${this.error ? html`<div style="color: #ef4444; text-align: center;">${this.error}</div>` : ''}

      <div class="grid">
        ${this.users.map(
          (user) => html`<user-card .user=${user}></user-card>`
        )}
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
