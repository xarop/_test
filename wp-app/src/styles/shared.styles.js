/**
 * @file shared.styles.js
 * @description Tokens de diseño y estilos compartidos entre todos los componentes.
 * Importar en cada componente que necesite acceder a variables globales o mixins.
 */

import { css } from 'lit';

/** Variables CSS y reset compartido */
export const sharedStyles = css`
  :host {
    /* Paleta principal */
    --color-primary: #e63946;
    --color-primary-dark: #c1121f;
    --color-secondary: #457b9d;
    --color-accent: #a8dadc;

    /* Neutros */
    --color-bg: #f5f5f5;
    --color-surface: #ffffff;
    --color-border: #e0e0e0;
    --color-text: #1a1a1a;
    --color-text-muted: #6b7280;

    /* Tipografía */
    --font-sans: system-ui, -apple-system, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;

    /* Espaciado */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;

    /* Bordes */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-full: 9999px;

    /* Sombras — sutiles, sin profundidad agresiva */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
    --shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);

    /* Transiciones */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 400ms ease;

    /* Layout */
    --content-max-width: 1200px;
    --content-padding: var(--space-4);
  }
`;

/** Estilos de estado: loading y error */
export const stateStyles = css`
  .state-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    gap: var(--space-4);
    padding: var(--space-8);
    text-align: center;
  }

  /* ─── Loading Spinner ─── */
  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loading-text {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  /* ─── Error ─── */
  .error-box {
    background: #fff5f5;
    border: 1px solid #fed7d7;
    border-radius: var(--radius-md);
    padding: var(--space-6);
    max-width: 480px;
    color: #c53030;
  }

  .error-box h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-2);
  }

  .error-box p {
    font-size: var(--font-size-sm);
    opacity: 0.85;
  }

  .retry-btn {
    margin-top: var(--space-4);
    padding: var(--space-2) var(--space-6);
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .retry-btn:hover {
    background: var(--color-primary-dark);
  }
`;
