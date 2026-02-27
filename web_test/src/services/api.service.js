export class ApiService {
  constructor(baseUrl = "https://jsonplaceholder.typicode.com") {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }

  async getUsers() {
    return this.get("/users");
  }

  async getPosts() {
    return this.get("/posts?_limit=5");
  }
}

export const apiService = new ApiService();
