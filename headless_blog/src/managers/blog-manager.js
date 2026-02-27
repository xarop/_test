import { BehaviorSubject } from 'rxjs';

export class BlogManager {
  constructor() {
    this._posts = new BehaviorSubject([]);
    this.posts$ = this._posts.asObservable();

    this._categories = new BehaviorSubject([]);
    this.categories$ = this._categories.asObservable();

    this._activeCategory = new BehaviorSubject(null);
    this.activeCategory$ = this._activeCategory.asObservable();
    
    this._selectedPost = new BehaviorSubject(null);
    this.selectedPost$ = this._selectedPost.asObservable();

    this._currentPage = new BehaviorSubject('home'); // 'home' or 'detail'
    this.currentPage$ = this._currentPage.asObservable();
    
    this._theme = new BehaviorSubject(localStorage.getItem('theme') || 'dark');
    this.theme$ = this._theme.asObservable();

    this._loading = new BehaviorSubject(false);
    this.loading$ = this._loading.asObservable();
    
    this.baseUrl = 'https://xarop.com/wp-json/wp/v2';
  }

  async fetchPosts() {
    this._loading.next(true);
    try {
      // Usamos _embed para traer imágenes destacadas y metadatos en una sola petición
      const response = await fetch(`${this.baseUrl}/posts?_embed=1&per_page=6`);
      if (!response.ok) throw new Error('Error al conectar con la API de WordPress');
      
      const posts = await response.json();
      
      const formattedPosts = posts.map(post => ({
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        date: new Date(post.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        link: post.link,
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x400?text=Xarop+Blog',
        author: post._embedded?.['author']?.[0]?.name || 'Admin',
        categories: post._embedded?.['wp:term']?.[0]?.map(term => ({ id: term.id, name: term.name })) || []
      }));

      // Extraer categorías únicas
      const catsMap = new Map();
      formattedPosts.forEach(p => {
        p.categories.forEach(c => catsMap.set(c.id, c.name));
      });
      this._categories.next(Array.from(catsMap.entries()).map(([id, name]) => ({ id, name })));

      this._posts.next(formattedPosts);
    } catch (error) {
      console.error('WP API Error:', error);
    } finally {
      this._loading.next(false);
    }
  }

  setCategory(categoryId) {
    this._activeCategory.next(categoryId);
  }

  navigateToDetail(post) {
    this._selectedPost.next(post);
    this._currentPage.next('detail');
    window.scrollTo(0, 0);
  }

  navigateToHome() {
    this._selectedPost.next(null);
    this._currentPage.next('home');
  }

  toggleTheme() {
    const newTheme = this._theme.value === 'dark' ? 'light' : 'dark';
    this._theme.next(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  initTheme() {
    document.documentElement.setAttribute('data-theme', this._theme.value);
  }
}

export const blogManager = new BlogManager();
