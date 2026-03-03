import { css } from 'lit';

export const homeStyles = css`
  :host {
    display: block;
    font-family: var(--font-sans);
  }

  /* ─── Hero ─── */
  .hero {
    background: var(--color-surface);
    color: var(--color-text);
    padding: var(--space-16) var(--content-padding);
    text-align: center;
    border-bottom: 1px solid var(--color-border);
    position: relative;
    overflow: hidden;
  }

  /* Línea de acento superior */
  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--color-primary);
  }

  .hero__eyebrow {
    font-size: var(--font-size-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: var(--space-3);
  }

  .hero__title {
    font-size: clamp(1.9rem, 5vw, 3.25rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: var(--space-4);
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .hero__title span {
    color: var(--color-primary);
  }

  .hero__subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    max-width: 520px;
    margin: 0 auto var(--space-8);
    line-height: 1.65;
  }

  .hero__actions {
    display: flex;
    gap: var(--space-3);
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-6);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    border: 1.5px solid transparent;
    text-decoration: none;
    transition: all var(--transition-fast);
    font-family: inherit;
  }

  .btn--primary {
    background: var(--color-primary);
    color: white;
  }

  .btn--primary:hover {
    background: var(--color-primary-dark);
  }

  .btn--outline {
    background: transparent;
    color: var(--color-text-muted);
    border-color: var(--color-border);
  }

  .btn--outline:hover {
    color: var(--color-text);
    border-color: #999;
    background: var(--color-bg);
  }

  /* ─── Featured Posts ─── */
  .section {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-12) var(--content-padding);
  }

  .section__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: var(--space-8);
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .section__title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
  }

  .section__link {
    font-size: var(--font-size-sm);
    color: var(--color-primary);
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
  }

  .section__link:hover {
    text-decoration: underline;
  }

  .posts-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--space-6);
  }

  /* ─── Category Filter Bar ─── */
  .filter-bar {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-border);
  }

  .filter-bar__label {
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .filter-bar__chips {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    align-items: center;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-4);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    font-weight: 700;
    cursor: pointer;
    transition: all var(--transition-fast);
    white-space: nowrap;
    font-family: inherit;
  }

  .chip:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: #fff0f0;
  }

  .chip--active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }

  .chip--active:hover {
    background: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    color: white;
  }

  .chip__count {
    font-weight: 400;
    opacity: 0.75;
  }

  /* Skeleton de chips mientras cargan */
  .chip--skeleton {
    width: 72px;
    height: 28px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
    border-color: transparent;
    cursor: default;
    border-radius: var(--radius-full);
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Empty state cuando no hay posts para esa categoría */
  .empty-state {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-12) var(--space-4);
    color: var(--color-text-muted);
    text-align: center;
  }

  .empty-state__icon {
    display: flex;
    color: #c8c8c8;
  }

  .empty-state__text {
    font-size: var(--font-size-base);
    font-weight: 600;
  }

  .empty-state__sub {
    font-size: var(--font-size-sm);
  }
`;
