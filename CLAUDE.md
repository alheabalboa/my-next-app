# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read before writing code

@AGENTS.md

Installed versions — **Next.js 16.2.4**, **React 19.2.4**, **Tailwind v4**, **ESLint 9 (flat config)** — likely differ from older majors in your training data. Before changing Next.js behavior (routing, data fetching, caching, Suspense/navigation, metadata, server/client components, fonts, images, middleware), consult the bundled docs at `node_modules/next/dist/docs/` — they match the installed version exactly. Entry point: `node_modules/next/dist/docs/index.md`; App Router material lives under `01-app/`.

**Version-specific traps already hit (don't re-learn these):**
- **`params` is a `Promise` in Next 16** dynamic route pages — always `await params` before destructuring. Example in `src/app/services/[category]/[subservice]/page.tsx`.
- **`sitemap.ts` / `robots.ts` need `export const dynamic = "force-static"`** under `output: "export"`, otherwise the build fails collecting page data. See `src/app/sitemap.ts` and `src/app/robots.ts`.
- **Slow client-side navigations require `unstable_instant`** exported from the route — Suspense alone is not enough. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx` before touching loading behavior.
- **Turbopack MDX plugins must be strings**, not function references — plain function imports won't work in plugin arrays.

## The project

Pixel-perfect rebuild of **rundlehornsmilesdental.com** (NE Calgary dental clinic, ~40 pages). Deploy target is static-only (originally FTP to cloudsector, currently localhost-only).

**Key constraints baked into the stack:**
- `output: "export"` + `trailingSlash: true` in `next.config.ts` — no API routes, no server actions, no middleware, no `next/image` optimization, no ISR. Every dynamic route needs `generateStaticParams` and **must set** `export const dynamicParams = false`.
- Content architecture: **MDX** under `src/content/services/{category}/{subservice}.mdx`, each exporting a `meta` object alongside its default component. Dynamically imported from `src/app/services/[category]/[subservice]/page.tsx`.
- All dental-service pages share one template (`[subservice]/page.tsx`) — do NOT fork per-service layouts.
- **Why Us** and **Dental Emergency** are landing pages (single conversion goal, strong CTA above the fold, benefits-over-features, minimal cross-linking) — not typical info pages.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — static export to `out/`
- `npm run preview` — `build` then serves `out/` at http://localhost:4173 (emulates production; `next start` does **not** work under `output: "export"`)
- `npm run serve` — serve pre-built `out/` without rebuilding
- `npm run lint` — ESLint
- `npm run test:visual` — Playwright visual regression (boots `next dev` via webServer config, compares against committed baselines under `tests/visual/routes.spec.ts-snapshots/`)
- `npm run test:visual:update` — accept current output as new baselines
- `npm run tokens:extract` — scrape rundlehornsmilesdental.com with Playwright and refresh `design/tokens.json` + `design/theme.generated.css`
- `npm run refs:capture` — refresh reference screenshots under `tests/visual/references/` (captured from the live site, used as the rebuild target)

## Architecture

- **App Router** in `src/app/`. Root layout loads Roboto + Poppins via `next/font/google`, renders `SiteHeader` + `{children}` + `SiteFooter`.
- **Path alias**: `@/*` → `./src/*`.
- **Styling**: Tailwind v4 via `@tailwindcss/postcss`. Design tokens live in `src/app/globals.css` under `@theme` (brand teal `#00a79d`, tonal `#13a89e`, accent `#279db7`, link `#046bd2` — extracted from the live Rundlehorn site; regenerate with `npm run tokens:extract`). There is no `tailwind.config.*`.
- **Content & data**
  - `src/content/clinic.ts` — single source of truth for phone, address, hours, booking URL, tagline. Used everywhere.
  - `src/content/services.ts` — the services taxonomy (9 categories, 25 sub-services with slugs). Drives the mega menu, footer, service routes, and sitemap.
  - `src/content/nav.ts` — top-level nav derived from the above.
  - `src/content/services/{category}/{slug}.mdx` — MDX content per sub-service.
- **Components**
  - `src/components/ui/` — primitives (`Button`, `Container`, `Section`) — all token-driven via CSS vars.
  - `src/components/layout/` — `SiteHeader` (sticky, client component with mega menu + mobile drawer), `SiteFooter` (4-column, Millbridge-style), `PageHero` (eyebrow + title + intro + breadcrumbs), `ServiceSidebar`.
  - `src/components/home/` — the 10 homepage sections composed in `src/app/page.tsx`.
- **MDX styling**: global component overrides in `src/mdx-components.tsx` (headings, paragraphs, lists, links mapped to token-based classes).
- **SEO**: `src/app/sitemap.ts` + `src/app/robots.ts` — both require `dynamic = "force-static"`. Base URL reads `NEXT_PUBLIC_SITE_URL`, falls back to `http://localhost:3000`.
- **Static assets**: `public/`.

## Workflow notes

- `src/app/layout.tsx` references fonts via CSS variables (`--font-heading`, `--font-display`). Don't hardcode font names in components.
- When adding a new sub-service: update `src/content/services.ts` **and** create the matching MDX file under `src/content/services/{cat}/{sub}.mdx`. Missing MDX will crash the build because `generateStaticParams` produces a path that dynamic-imports a non-existent file.
- Contact-form handler is intentionally not wired — static export means no server actions. When the client picks a strategy (Formspree / Web3Forms / Netlify Forms / `mailto:`), wire it in `src/app/contact/page.tsx`.
- Visual baselines live at `tests/visual/routes.spec.ts-snapshots/` (committed). Reference screenshots of the live Rundlehorn site live at `tests/visual/references/` (the rebuild target — eyeball diff manually).
