# Template para proyecto en React usando Redux y Typescript

Luego de clonar el repositorio en el directorio local ejecutar el comando

`npm install`

Esto instala todas las dependencias que el proyecto requiere

Ejecutar, para navegar dentro de la carpeta del proyecto

`cd template-react-redux-typescript`

Una vez dentro, ejecutar la sentencia

`npm start`

## Estructura de carpetas
```
template-react-redux-typescript
├── .gitignore
├── README.md
├── package.json
├── node_modules
├── tsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.css
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTest.js
    ├── assets
    │   ├── icons
    │   ├── images
    │   ├── styles
    │   │   └── bootstrap-grid.min.css
    ├── components
    │   ├── Componente
    │   │   ├── Componente.tsx
    │   │   ├── Componente.css
    │   │   ├── utils.tsx
    │   │   └── lang.json
    ├── pages
    │   ├── index.tsx
    │   ├── Page
    │   │   ├── Page.tsx
    │   │   ├── Page.css
    │   │   ├── utils.tsx
    │   │   └── lang.json
    ├── parts
    │   ├── Part
    │   │   ├── Part.tsx
    │   │   ├── Part.css
    │   │   ├── utils.tsx
    │   │   └── lang.json
    ├── services
    │   ├── api
    │   │   └── api.tsx
    ├── store
    │   ├── hooks.ts
    └── └── store.ts
```
## Guia tecnica

Los detalles de como funciona el proyecto se encuentran en este [documento](https://docs.google.com/document/d/1lpKIL2W5_D556O3PJhsQLfvDKN7cJFsu-xEqE6kitg8/edit?usp=sharing)

## Ejemplo de uso

Ejecutar la sentencia:

`git checkout -b ejemplo01`

Luego:

`git pull origin ejemplo01`

Deberia descargar todo el proyecto de ejemplo. Ejecutamos:

`npm start`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
