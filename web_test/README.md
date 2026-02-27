# Proyecto de Práctica para Second Window

Este es un entorno base optimizado para practicar los requisitos de la posición Frontend Developer en **Second Window**.

## Requisitos Cubiertos

- **LitElement & Web Components**: Arquitectura moderna basada en componentes.
- **SCSS avanzado**: Estilos modulares y variables premium.
- **REST API Integration**: Servicio preparado para consumir APIs reales (`fetch`).
- **Unit Testing**: Configurado con Mocha, Chai y Web Test Runner.

## Estructura

- `/src/components`: Componentes Lit (ejemplo: `UserCard`).
- `/src/services`: Lógica de negocio y llamadas a API (`ApiService`).
- `/src/styles`: Estilos globales y variables de diseño.
- `/test`: Pruebas unitarias para asegurar la calidad del código.

## Comandos Rápidos

- `npm install`: Instala todas las dependencias.
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera el bundle de producción.
- `npm run test`: Ejecuta las pruebas unitarias.

## Consejos para la Entrevista

1. **Encapsulamiento**: Explica cómo el Shadow DOM de Lit protege tus estilos.
2. **Reactividad**: Habla sobre las `properties` y cómo Lit gestiona los ciclos de renderizado.
3. **Escalabilidad**: El uso de una capa de `services` separada de los componentes es clave para aplicaciones grandes.
4. **Testing**: Haber configurado un entorno de pruebas demuestra proactividad y enfoque en calidad.
