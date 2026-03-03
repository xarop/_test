import { css } from 'lit';

export const categoryStyles = css`
  :host {
    display: block;
    font-family: var(--font-sans);
  }

  /* ─── Header de categoría ─── */
  .cat-header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-12) var(--content-padding) var(--space-8);
  }

  .cat-header__inner {
    max-width: var(--content-max-width);
    margin: 0 auto;
  }

  .cat-header__eyebrow {
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-primary);
    margin-bottom: var(--space-2);
  }

  .cat-header__title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    margin-bottom: var(--space-3);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
  }

  .cat-header__badge {
    display: inline-flex;
    align-items: center;
    padding: var(--space-1) var(--space-4);
    background: var(--color-primary);
    color: white;
    font-size: var(--font-size-sm);
    font-weight: 700;
    border-radius: var(--radius-full);
    vertical-align: middle;
  }

  .cat-header__description {
    font-size: var(--font-size-lg);
    color: var(--color-text-muted);
    max-width: 640px;
    line-height: 1.6;
    margin-bottom: var(--space-4);
  }

  .cat-header__meta {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
  }

  /* ─── Sibling category chips ─── */
  .sibling-bar {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-4) var(--content-padding);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
    border-bottom: 1px solid var(--color-border);
  }

  .sibling-bar__label {
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .sibling-chips {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  .sibling-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    font-weight: 700;
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: inherit;
  }

  .sibling-chip:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: #fff0f0;
  }

  .sibling-chip--active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
  }

  .sibling-chip--active:hover {
    background: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }

  .sibling-chip__count {
    font-weight: 400;
    opacity: 0.75;
  }

  /* ─── Grid ─── */
  .archive-section {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-8) var(--content-padding);
  }

  .archive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-6);
  }

  /* ─── Paginación ─── */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-12);
  }

  .pagination__btn {
    padding: var(--space-2) var(--space-6);
    border-radius: var(--radius-full);
    border: 2px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text);
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: inherit;
  }

  .pagination__btn:hover:not(:disabled) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .pagination__btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .pagination__info {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    min-width: 100px;
    text-align: center;
  }

  /* ─── Empty state ─── */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-16) var(--space-4);
    text-align: center;
    color: var(--color-text-muted);
  }

  .empty-state__icon { display: flex; color: #c8c8c8; }

  .empty-state__title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text);
  }
`;
