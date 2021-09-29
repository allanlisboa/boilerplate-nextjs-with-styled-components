# Estrutura de pastas do projeto

Estrutura de pastas sugerida seguindo boas praticas e design pattern recomendados:

```
📁 pernambucanas-ecommerce-react
├── 📁 public
│   ├── 📁 assets
│   │   └── ...
│   └── ...
├── 📁 src
│   ├── 📁 core
│   │   ├── 📁 books
│   │   │   └── index.ts
│   │   └── ...
│   ├── 📁 components
│   │   ├── 📁 book-shelf
│   │   │   ├── 📄 style.less
│   │   │   ├── 📄 skeleton.tsx
│   │   │   ├── 📄 component.tsx
│   │   │   ├── 📄 index.ts
│   │   │   └── 📄 index.test.tsx
│   │   └── ...
│   ├── 📁 hooks
│   │   ├── 📁 find-books
│   │   │   ├── 📄 index.ts
│   │   │   └── 📄 index.test.ts
│   │   └── ...
│   ├── 📁 i18n
│   │   ├── 📁 books
│   │   │   ├── 📄 en.json
│   │   │   ├── 📄 pt.json
│   │   │   └── 📄 ...
│   │   └── ...
│   ├── 📁 mocks
│   │   ├── 📄 get-books.json
│   │   └── ...
│   ├── 📁 pages
│   │   ├── 📁 books
│   │   │   ├── 📄 index.tsx
│   │   │   └── 📄 style.less
│   │   └── ...
│   │   ├── 📄 _app.tsx
│   │   └── 📄 app.less
│   ├── 📁 providers
│   │   ├── 📁 books
│   │   │   ├── 📄 types.ts
│   │   │   └── 📄 index.ts
│   │   └── ...
│   ├── 📁 stores
│   │   ├── 📁 books
│   │   │   └── 📄 index.ts
│   │   └── ...
│   ├── 📁 utils
│   │   └── ...
│   └── 📄 polyfills.ts
├── 📄 .env.example
├── 📄 .eslintrc.json
├── 📄 package.json
├── 📄 setup-tests.ts
├── 📄 tsconfig.json
├── 📄 tsconfig.spec.json
└── 📄 README.md
```
