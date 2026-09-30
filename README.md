# Azista

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · ESLint · Prettier

## Getting started

Requires Node.js `>=20.9` (see `.nvmrc`) and npm.

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts

| Script              | Description                                     |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server (Turbopack)                |
| `npm run build`     | Production build (includes type-checking)       |
| `npm run start`     | Serve the production build                      |
| `npm run lint`      | Lint with ESLint (`lint:fix` to auto-fix)       |
| `npm run format`    | Format with Prettier (`format:check` to verify) |
| `npm run typecheck` | Generate route types and run `tsc`              |
| `npm run check`     | Type-check + lint + format check (use in CI)    |

## Project structure

```
src/
├── app/            # Routing only: layouts, pages, route handlers, special files
│   ├── layout.tsx       # Root layout: <html>, fonts, metadata, viewport
│   ├── page.tsx         # Home page
│   ├── loading.tsx      # Suspense fallback
│   ├── error.tsx        # Route error boundary (client)
│   ├── global-error.tsx # Root layout error boundary (client)
│   ├── not-found.tsx    # 404 page
│   └── globals.css      # Tailwind + design tokens
├── assets/icons/   # Static SVGs imported by components (from Figma)
├── components/
│   └── ui/         # Generic, reusable UI primitives (Button, ...)
├── config/         # App-wide constants (site name, URL, ...)
└── lib/            # Framework-agnostic utilities (cn, ...)
```

As the app grows, add:

- `src/components/<area>/` for composed, app-specific components (e.g. `layout/`).
- `src/features/<feature>/` for feature-scoped components, actions and data access.
- `src/hooks/` for shared client hooks, `src/types/` for shared types.

Import from `src` with the `@/` alias, e.g. `import { cn } from "@/lib/utils"`.

## Conventions

- **Server Components by default.** Add `"use client"` only to components that need
  state, effects, event handlers or browser APIs, and keep them as small leaves.
- **Server-only code** (DB access, secrets) should `import "server-only"` (install the
  `server-only` package when first needed) so it can never be bundled for the client.
- **Environment variables:** `.env*` files are git-ignored except `.env.example`.
  Document every new variable in `.env.example`. Only `NEXT_PUBLIC_*` variables reach
  the browser; never put secrets in them.
- **Styling:** use the design tokens in `globals.css` instead of hard-coded values, and
  `cn()` to merge classes.
  - Colors: `primary` (#FF0000), `foreground` (#1A1A1A), `background` (#FFFFFF),
    `muted` (#E8E6E6) → `bg-primary`, `text-foreground`, ...
  - Text styles: `type-heading-1…3` (Bebas Neue) and `type-text-1…6` (Schibsted
    Grotesk). Add `text-trim-cap` to trim line-height to the cap height like Figma.
  - Buttons: `<Button variant="primary | framed | link">` and `<ButtonLink href>`.
- **Routes are typed** (`typedRoutes`): `<Link href>` is checked at compile time.
