# Azista

Next.js 16 (App Router) · React 19 · JavaScript (JSX) · CSS Modules · ESLint · Prettier

## Getting started

Requires Node.js `>=20.9` (see `.nvmrc`) and npm.

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # start the dev server
```

## Scripts

| Script           | Description                                     |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Start the dev server (Turbopack)                |
| `npm run build`  | Production build                                |
| `npm run start`  | Serve the production build                      |
| `npm run lint`   | Lint with ESLint (`lint:fix` to auto-fix)       |
| `npm run format` | Format with Prettier (`format:check` to verify) |
| `npm run check`  | Lint + format check (use in CI)                 |

## Project structure

```
src/
├── app/                      # Routing only: layouts, pages, special files
│   ├── layout.js             # Root layout: <html>, fonts, metadata, viewport
│   ├── page.js               # Home page (composes components/home)
│   ├── loading.js / error.js / global-error.js / not-found.js
│   ├── <route>/page.js       # + page.module.css when the page needs its own styles
│   └── globals.css           # Design tokens, reset, .container, text styles
├── assets/icons/             # Static SVGs imported by components (from Figma)
├── components/
│   ├── layout/               # Header, nav, footer  (+ css/<Name>.module.css)
│   ├── ui/                   # Primitives: Button, ... (+ css/<Name>.module.css)
│   ├── shared/components/    # Composed pieces used on several pages (+ shared/css/)
│   └── <page>/components/    # Sections for one page, e.g. home/components/Hero.jsx
│       <page>/css/           # …and their styles, e.g. home/css/Hero.module.css
├── config/                   # App-wide constants (site, navigation)
└── hooks/                    # Shared client hooks (add when needed)
```

Components are `.jsx`, PascalCase, one default export per file. Pages and
non-component modules are `.js`. Import from `src` with the `@/` alias.

## Conventions

- **Server Components by default.** Add `"use client"` only to components that need
  state, effects, event handlers or browser APIs, and keep them as small leaves.
- **Environment variables:** `.env*` files are git-ignored except `.env.example`.
  Document every new variable in `.env.example`. Only `NEXT_PUBLIC_*` variables reach
  the browser; never put secrets in them.
- **Styling:** CSS Modules per component; use the tokens in `globals.css` instead of
  hard-coded values. Breakpoints: tablet `768px`, desktop `1280px`.
  - Wrap section content in `<div className="container">` (1512px frame, 50/24/16px gutters).
  - Colors: `var(--primary)` (#FF0000), `var(--foreground)` (#1A1A1A),
    `var(--background)` (#FFFFFF), `var(--muted)` (#E8E6E6).
  - Text styles: global classes `heading-1…3` (Bebas Neue) and `text-1…6` (Schibsted
    Grotesk). Add `text-trim-cap` to trim line-height to the cap height like Figma.
  - Buttons: `<Button variant="primary | framed | framed-light | link">`; pass `href`
    to render a link.
- Mark dark sections with `data-bg="dark"` so the header turns transparent over them.
