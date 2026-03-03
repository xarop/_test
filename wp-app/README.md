# 🍭 Xarop WP App

Web App modular construida con **Lit 3.0** y **Web Components nativos** que consume la REST API de WordPress de [xarop.com](https://xarop.com).

---

## Tecnologías

| Herramienta | Versión | Rol |
|---|---|---|
| [Lit](https://lit.dev) | 3.x | Framework de Web Components |
| [Vite](https://vitejs.dev) | 5.x | Dev server y bundler |
| WordPress REST API | v2 | Fuente de datos |

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview
```

---

## Estructura del proyecto

```
wp-app/
├── index.html                  ← Entry point HTML
├── package.json
├── vite.config.js
└── src/
    ├── app-main.js             ← Orquestador principal + Router
    ├── wp-service.js           ← Singleton: todas las llamadas a la API
    ├── styles/
    │   ├── shared.styles.js    ← Tokens de diseño + estados loading/error
    │   ├── home.styles.js
    │   ├── grid.styles.js
    │   ├── post.styles.js      ← Estilos para HTML generado por WordPress
    │   └── card.styles.js
    ├── views/
    │   ├── view-home.js        ← Pantalla de inicio con hero
    │   ├── view-grid.js        ← Listado paginado de posts
    │   └── view-post.js        ← Detalle de una entrada
    └── components/
        └── post-card.js        ← Tarjeta atómica reutilizable
```

---

## Arquitectura

### Router (hash-based)

El router está integrado en `app-main.js` y no requiere dependencias externas. Funciona escuchando el evento `hashchange` del navegador y el evento personalizado `navigate` que emiten las vistas.

| URL hash | Vista | Descripción |
|---|---|---|
| `#/` | `view-home` | Pantalla de bienvenida con últimos posts |
| `#/grid` | `view-grid` | Listado completo con paginación |
| `#/post/:id` | `view-post` | Detalle de una entrada |

Las vistas se cargan mediante **dynamic `import()`**, generando chunks separados automáticamente (lazy-loading).

### Singleton `WpService`

Centraliza todas las llamadas `fetch` a `https://xarop.com/wp-json/wp/v2` con:

- **Caché en memoria** (`Map`) para evitar peticiones duplicadas en la misma sesión.
- **Helpers estáticos** para extraer datos comunes de los objetos de la API.
- Método `clearCache()` para invalidar la caché manualmente.

```js
import { wpService } from './wp-service.js';

// Listado de posts (con _embed para imagen y autor)
const posts = await wpService.getPosts({ page: 1, perPage: 9 });

// Detalle por ID
const post = await wpService.getPostById(42);

// Helpers estáticos
const imgUrl = WpService.getFeaturedImageUrl(post, 'large');
const author = WpService.getAuthorName(post);
const cats   = WpService.getCategories(post);
```

### Estilos

Cada componente importa solo los módulos de estilos que necesita. El módulo `shared.styles.js` define todos los **tokens CSS** (colores, tipografía, espaciado, sombras…) como propiedades CSS en `:host`, aprovechando el Shadow DOM para el encapsulamiento.

```
shared.styles.js  →  tokens + utilidades de estado (loading / error)
card.styles.js    →  estilos de post-card
home.styles.js    →  estilos de view-home
grid.styles.js    →  estilos de view-grid + paginación
post.styles.js    →  estilos del contenido HTML de WordPress
```

---

## Componentes

### `<app-main>`

Punto de entrada y orquestador. Gestiona el router y el layout global (navbar + footer). No necesita atributos; se registra en `index.html`.

### `<view-home>`

Muestra un hero de bienvenida y una vista previa de los últimos 3 posts. Emite el evento `navigate` para cambiar de ruta.

### `<view-grid>`

Lista todos los posts en un grid responsive con paginación real basada en las cabeceras `X-WP-Total` y `X-WP-TotalPages` de la API.

### `<view-post>`

Recibe la propiedad `postId` del router y renderiza el detalle completo de la entrada, incluyendo:

- Imagen destacada a ancho completo.
- Metadatos (autor, fecha, tiempo estimado de lectura).
- **Contenido HTML de WordPress** renderizado con `unsafeHTML` de Lit (fuente de confianza: API propia) con estilos para todos los bloques nativos de Gutenberg.

### `<post-card>`

Tarjeta atómica reutilizable. Recibe un objeto `post` de la API y emite el evento `post-selected` con el ID del post al hacer clic.

```js
// Uso
html`<post-card .post="${postObject}" @post-selected="${handler}"></post-card>`

// Evento emitido
{ detail: { id: number } }
```

---

## Manejo de estados

Todos los componentes de vista implementan tres estados:

| Estado | Visualización |
|---|---|
| `loading` | Spinner animado con `aria-label` |
| `error` | Caja de error con mensaje y botón de reintento |
| `data` | Contenido renderizado |

---

## Accesibilidad

- Navegación por teclado en `post-card` (`Enter` / `Space`).
- `aria-current="page"` en los enlaces de navegación activos.
- `aria-label` en todos los elementos interactivos y regiones semánticas.
- Etiquetas semánticas: `<nav>`, `<header>`, `<main>`, `<footer>`, `<article>`.

---

## API de referencia

Base URL: `https://xarop.com/wp-json/wp/v2`

| Endpoint | Descripción |
|---|---|
| `GET /posts?_embed&page=1&per_page=9` | Listado de posts con imagen y autor embebidos |
| `GET /posts/:id?_embed` | Detalle de un post |
| `GET /pages?_embed` | Listado de páginas |
| `GET /pages/:id?_embed` | Detalle de una página |
| `GET /posts?search=término` | Búsqueda de posts |
