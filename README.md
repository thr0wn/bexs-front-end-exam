# Exame - Bexs Front-end
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c198d0e-0f14-4690-ba01-bfb24345cf75/deploy-status)](https://app.netlify.com/sites/relaxed-kowalevski-2f0a93/deploys)

[![](https://img.shields.io/badge/-React.js-blue?logo=react)]()
[![](https://img.shields.io/badge/-Storybook-blue?logo=Storybook)]()
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


Demo: https://relaxed-kowalevski-2f0a93.netlify.app

Storybook Demo: https://relaxed-kowalevski-2f0a93.netlify.app/storybook

[![](http://i.imgur.com/BxzSZW9.png)](https://relaxed-kowalevski-2f0a93.netlify.app)
[![](http://i.imgur.com/QZb09sd.gif)](http://i.imgur.com/QZb09sd.gif)

## Comandos
---
### Instalar dependências
```bash
npm install
```

### Rodar localmente
```bash
npm start
```

### Rodar o storybook localmente
```bash
npm run storybook
```

### Testes e2e
```bash
npm run test
```

Também é possível rodar os testes através do `Cypress Test Runner`:
```bash
npx cypress open
```

### Build
```bash
npm run build
```

### Build do storybook
```bash
npm run build-storybook
```

## Estrutura do projeto
---
```
project
└───src
│   └───components (Componentes usados pela página de Checkout)
│   │   └───Link
│   │   │   │   index.jsx (Marcação + Javascript)
│   │   │   │   index.scss (Estilos)
│   │   │   │   index.stories.jsx (Stories para documentação no storybook)
│   │   │   
│   │   └───...
│   │
│   └───pages (Página de Checkout)
│       └───Checkout
│           │   index.jsx (Marcação + Javascript)
│           │   index.scss (Estilos)
│           │   index.stories.jsx (Stories para documentação no storybook)
│
└───public (Assets usados no teste)
    │   index.html
    │   fonts
    │   icons
    │   images
```

## Candidato
---
Linkedin: https://www.linkedin.com/in/natan-dos-santos-camargos-7b8153122/

Github: https://github.com/thr0wn

Stack Overflow: https://stackoverflow.com/users/6489712/natan-camargos