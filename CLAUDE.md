@AGENTS.md

# Project rules

Follow these for every page and feature. Don't over-engineer: use the simplest architecture that satisfies them.

## Before building a page

1. Inspect the project structure, existing components, design tokens (`src/app/globals.css`) and similar sections.
2. Reuse or extend existing components; decide which new parts should be reusable.
3. Decide what is server-rendered vs. what genuinely needs client-side JS.
4. Plan SEO, image loading, accessibility and responsive behavior up front.

## Components

- UI used on more than one page (sections, cards, buttons, header, footer, form elements, ...) must be a shared component in `src/components/`. Never duplicate markup across pages.
- Page-specific components stay colocated with the page (e.g. `src/app/<route>/_components/`).
- Keep components small and single-purpose; prefer composition over large components.

## Next.js

- App Router; Server Components by default. Add `"use client"` only for interactivity or browser APIs, and keep client components as small leaves.
- Use layouts / nested layouts, and `loading.tsx`, `error.tsx`, `not-found.tsx` where useful.
- Prefer Next.js built-ins over hand-rolled equivalents; choose caching based on how often data changes.
- No unnecessary dependencies, animation libraries or third-party scripts.

## SEO

- Every page exports metadata (Metadata API): meaningful `title` and `description`, canonical URL, Open Graph and Twitter/X where appropriate.
- One `<h1>` per page and a logical `h1 → h2 → h3` hierarchy.
- Semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) and descriptive link text.
- Important content must be in the server-rendered HTML.
- Add JSON-LD structured data where relevant; keep `sitemap` and `robots` up to date.
- Clean, meaningful URLs, logical internal linking, no duplicate content.

## Images, fonts and performance

- Use `next/image` with explicit dimensions/aspect ratio and responsive `sizes`.
- `priority` only for the genuine above-the-fold LCP image; let everything else lazy-load.
- Informative images get meaningful `alt`; decorative images get `alt=""`.
- Optimize background images/videos; don't load what isn't needed.
- Fonts via `next/font`, only the required weights/styles.
- Watch Core Web Vitals (LCP, CLS, INP), first-load JS, hydration and bundle size; avoid layout shifts from images, fonts, animations or late content.

## Accessibility

- Actions are `<button>`s, navigation uses links; all interactive elements have accessible names.
- Label every form control; keyboard navigation must work.
- Sufficient color contrast; never rely on color alone.

## Responsive

- Must work on mobile, tablet, laptop, desktop and large desktop, with one responsive implementation (no duplicated mobile/desktop markup without a real reason).

## Code quality

- Strict TypeScript, no `any` without justification; define types where needed.
- Extract shared logic into utilities/hooks; avoid deep nesting and duplication.
- No unused imports, variables, components or dependencies.

## Done means

Run `npm run check` and `npm run build`, and fix every issue before calling work complete.
