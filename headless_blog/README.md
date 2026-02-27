# Headless Blog Xarop - SPA Experience

Este proyecto es una implementación avanzada de un blog Headless utilizando WordPress como CMS y un frontend reactivo basado en **Open Cells** y **Lit**.

## Características Premium

- **Diseño Minimalista**: Tipografía 'Outfit' y layout enfocado en la legibilidad.
- **Dark/Light Mode**: Interruptor minimalista con persistencia en `localStorage`.
- **SPA Navigation**: Transiciones suaves entre el feed y los artículos sin recargar.
- **Filtrado Reactivo**: Filtro por categorías integrado en tiempo real (RxJS).
- **WP REST API**: Integración optimizada con `xarop.com` usando `_embed` para imágenes y meta.

## Calidad de Código

- **Data Managers**: Lógica desacoplada de la UI.
- **Testing**: Pruebas unitarias configuradas para la lógica de negocio (`npm run test`).
- **Encapsulamiento**: Web Components nativos con Shadow DOM.

## Instalación y Uso

1. `npm install`
2. `npm run dev` (Puerto 3001)
3. `npm run test` (Verificación de lógica)

Construido para destacar en el proceso de selección de **Second Window**.
