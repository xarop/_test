import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/user-card.js';

describe('UserCard Component', () => {
  const mockUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    company: { name: 'Test Corp' }
  };

  it('debería renderizar la información del usuario correctamente', async () => {
    const el = await fixture(html`<user-card .user=${mockUser}></user-card>`);
    
    expect(el.shadowRoot.querySelector('h3').textContent.trim()).to.equal('John Doe');
    expect(el.shadowRoot.querySelector('.email').textContent.trim()).to.equal('john@example.com');
    expect(el.shadowRoot.innerHTML).to.contain('Test Corp');
  });

  it('debería mostrar "Cargando..." cuando no hay usuario', async () => {
    const el = await fixture(html`<user-card></user-card>`);
    expect(el.shadowRoot.textContent.trim()).to.equal('Cargando...');
  });
});
