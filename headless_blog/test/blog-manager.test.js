import { expect } from '@open-wc/testing';
import { blogManager } from '../src/managers/blog-manager.js';

describe('BlogManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debería inicializar el tema por defecto en dark', () => {
    expect(blogManager._theme.value).to.equal('dark');
  });

  it('debería cambiar el tema al llamar a toggleTheme', () => {
    blogManager.toggleTheme();
    expect(blogManager._theme.value).to.equal('light');
    expect(localStorage.getItem('theme')).to.equal('light');
    
    blogManager.toggleTheme();
    expect(blogManager._theme.value).to.equal('dark');
    expect(localStorage.getItem('theme')).to.equal('dark');
  });

  it('debería navegar entre páginas correctamente', () => {
    const mockPost = { id: 1, title: 'Test Post' };
    blogManager.navigateToDetail(mockPost);
    
    expect(blogManager._currentPage.value).to.equal('detail');
    expect(blogManager._selectedPost.value).to.deep.equal(mockPost);

    blogManager.navigateToHome();
    expect(blogManager._currentPage.value).to.equal('home');
    expect(blogManager._selectedPost.value).to.be.null;
  });
});
