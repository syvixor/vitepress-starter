# Getting Started

This guide will help you get started quickly.

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/syvixor/vitepress-starter.git
cd vitepress-starter
pnpm install # or npm install
```

Start the dev server:

```bash
pnpm dev # or npm run dev
```

## Project Structure

```graphql
.
├── docs/          # Markdown content lives here
├── public/           # Static assets
├── .vitepress/       # VitePress config and theme
└── package.json

```

## Writing Content

All your pages go inside the `docs/` directory.

- `index.md` becomes the homepage (`/`)
- `documentation.md` is available at (`/documentation`)
- You can create folders and add nested pages too

## Customization

You can customize:

- **Navigation:** Edit nav in `.vitepress/config.ts`
- **Sidebar:** Configure sidebar for each section

You can find more here: https://vitepress.dev/reference/default-theme-config

## Useful Links

- [VitePress Documentation](https://vitepress.dev)
- [Markdown Reference](https://www.markdownguide.org/)