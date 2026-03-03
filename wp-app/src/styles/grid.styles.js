import { css } from 'lit';

export const gridStyles = css`
  :host {
    display: block;
    font-family: var(--font-sans);
  }

  /* ─── Page Header ─── */
  .page-header {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-8) var(--content-padding);
  }

  .page-header__inner {
    max-width: var(--content-max-width);
    margin: 0 auto;
  }

  .page-header__title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    margin-bottom: var(--space-2);
  }

  .page-header__meta {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  /* ─── Grid ─── */
  .grid-section {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: var(--space-8) var(--content-padding);
  }

  .posts-grid {
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
`;
