import { css } from 'lit';

export const postStyles = css`
  :host {
    display: block;
    font-family: var(--font-sans);
  }

  /* ─── Back button ─── */
  .post-nav {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-6) var(--content-padding) 0;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-border);
    background: transparent;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-fast);
    text-decoration: none;
  }

  .back-btn:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .back-btn .icon {
    font-size: var(--font-size-base);
    line-height: 1;
  }

  /* ─── Hero de la entrada ─── */
  .post-hero {
    width: 100%;
    max-height: 480px;
    overflow: hidden;
    margin-top: var(--space-6);
    position: relative;
  }

  .post-hero img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
  }

  .post-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
  }

  /* ─── Cabecera del post ─── */
  .post-header {
    max-width: 800px;
    margin: var(--space-8) auto 0;
    padding: 0 var(--content-padding);
  }

  .post-categories {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-bottom: var(--space-4);
  }

  .post-category-tag {
    display: inline-flex;
    align-items: center;
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: var(--color-primary);
    color: white;
    padding: 2px var(--space-3);
    border-radius: var(--radius-full);
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: background var(--transition-fast), transform var(--transition-fast);
    text-decoration: none;
  }

  .post-category-tag:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  .post-category-tag:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  .post-title {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: var(--space-4);
    color: var(--color-text);
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    flex-wrap: wrap;
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-border);
  }

  .post-meta span {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
  }

  /* ─── Contenido WP ─── */
  .post-body {
    max-width: 800px;
    margin: var(--space-8) auto var(--space-16);
    padding: 0 var(--content-padding);
    line-height: 1.85;
    font-size: var(--font-size-lg);
    color: var(--color-text);
  }

  /* Estilos para el HTML generado por el editor de WordPress */
  .post-body h1,
  .post-body h2,
  .post-body h3,
  .post-body h4 {
    font-weight: 700;
    line-height: 1.3;
    margin: 2em 0 0.6em;
    color: var(--color-text);
  }

  .post-body h2 { font-size: 1.65em; }
  .post-body h3 { font-size: 1.35em; }
  .post-body h4 { font-size: 1.1em; }

  .post-body p {
    margin-bottom: 1.4em;
  }

  .post-body a {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .post-body a:hover {
    color: var(--color-primary-dark);
  }

  .post-body img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    margin: var(--space-4) 0;
  }

  .post-body blockquote {
    border-left: 4px solid var(--color-primary);
    padding: var(--space-4) var(--space-6);
    margin: var(--space-6) 0;
    background: #fff8f8;
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    font-style: italic;
    color: var(--color-text-muted);
  }

  .post-body ul,
  .post-body ol {
    padding-left: 1.5em;
    margin-bottom: 1.4em;
  }

  .post-body li {
    margin-bottom: 0.4em;
  }

  .post-body pre,
  .post-body code {
    font-family: 'Fira Code', 'Cascadia Code', monospace;
    font-size: 0.9em;
    background: #1e1e2e;
    color: #cdd6f4;
    border-radius: var(--radius-md);
  }

  .post-body pre {
    padding: var(--space-4) var(--space-6);
    overflow-x: auto;
    margin: var(--space-6) 0;
  }

  .post-body code {
    padding: 2px 6px;
  }

  .post-body pre code {
    background: transparent;
    padding: 0;
  }

  .post-body table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--space-6) 0;
    font-size: var(--font-size-base);
  }

  .post-body th,
  .post-body td {
    border: 1px solid var(--color-border);
    padding: var(--space-3) var(--space-4);
    text-align: left;
  }

  .post-body th {
    background: var(--color-bg);
    font-weight: 700;
  }

  .post-body tr:nth-child(even) td {
    background: #fafafa;
  }
`;
