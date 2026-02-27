import { BehaviorSubject } from 'rxjs';

export class SocialManager {
  constructor() {
    this._posts = new BehaviorSubject([]);
    this.posts$ = this._posts.asObservable();
  }

  async loadPosts() {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await resp.json();
      // Simular avatares y nombres para redes sociales
      const enriched = data.map(post => ({
        ...post,
        author: `Usuario ${post.userId}`,
        avatar: `https://i.pravatar.cc/150?u=${post.userId}`,
        likes: Math.floor(Math.random() * 100),
        timestamp: 'Hace 2 horas'
      }));
      this._posts.next(enriched);
    } catch (e) {
      console.error('Error loading social feed', e);
    }
  }

  addPost(content) {
    const current = this._posts.value;
    const newPost = {
      id: Date.now(),
      title: 'Nuevo Post',
      body: content,
      author: 'Tú',
      avatar: 'https://i.pravatar.cc/150?u=me',
      likes: 0,
      timestamp: 'Ahora mismo'
    };
    this._posts.next([newPost, ...current]);
  }
}

export const socialManager = new SocialManager();
