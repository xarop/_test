import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    border: 1px solid var(--color-border);
    transition: box-shadow var(--transition-base), border-color var(--transition-base);
  }

  .card:hover {
    box-shadow: var(--shadow-md);
    border-color: #c0c0c0;
  }

  /* ─── Thumbnail ─── */
  .card__thumb {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--color-bg);
    position: relative;
    flex-shrink: 0;
  }

  .card__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--transition-slow);
  }

  .card:hover .card__thumb img {
    transform: scale(1.03);
  }

  /* Placeholder cuando no hay imagen */
  .card__thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;
    color: #d0d0d0;
  }

  /* ─── Categorías (chips) ─── */
  .card__cats {
    position: absolute;
    top: var(--space-3);
    left: var(--space-3);
    display: flex;
    gap: var(--space-1);
    flex-wrap: wrap;
  }

  .card__cat {
    font-size: var(--font-size-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    background: var(--color-primary);
    color: white;
    padding: 2px var(--space-2);
    border-radius: var(--radius-full);
    backdrop-filter: blur(4px);
  }

  /* ─── Contenido ─── */
  .card__body {
    padding: var(--space-4) var(--space-4) var(--space-3);
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .card__title {
    font-size: var(--font-size-base);
    font-weight: 700;
    line-height: 1.4;
    color: var(--color-text);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  .card__excerpt {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* ─── Footer ─── */
  .card__footer {
    padding: var(--space-3) var(--space-4);
    border-top: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
  }

  .card__author {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    gap: var(--space-1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card__date {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    white-space: nowrap;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--color-primary);
    font-size: var(--font-size-xs);
    font-weight: 700;
    white-space: nowrap;
  }
`;
