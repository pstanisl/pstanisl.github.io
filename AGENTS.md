# Personal Website

## Stack
- Astro 5 site with Tailwind CSS v4 wired through `@tailwindcss/vite` in `astro.config.mjs`; styles start in `src/styles/global.css` via `@import "tailwindcss"`.
- TypeScript uses `astro/tsconfigs/strict` via `tsconfig.json`.
- CI deploys GitHub Pages from `dist/` with `npm ci && npm run build` on pushes to `main` in `.github/workflows/deploy.yml`.

## Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Astro CLI checks: `npm run astro -- check`
- There is no repo-defined lint or test script; `npm run build` is the main verification path.

## Architecture
- `src/layouts/BaseLayout.astro` is the shared shell. It imports global CSS, renders `Header`/`Footer`, sets SEO tags, and always loads `public/js/lang-redirect.js`.
- Routes are file-based under `src/pages`. Czech pages live as separate route files under `src/pages/cs`, not generated from one source file.
- Shared UI strings live in `src/i18n/translations.ts`. Use `getLangFromUrl()`, `useTranslations()`, and `getLocalizedPath()` instead of hardcoding locale logic.
- Content comes from Astro content collections in `src/content/config.ts`. `speaking` and `projects` pages read markdown entries from `src/content/speaking/` and `src/content/projects/` with `getCollection()`.

## Content And i18n
- Content entries are shared across locales. The Czech pages currently reuse the same `speaking` and `projects` markdown content; only surrounding UI copy is translated.
- Keep collection frontmatter aligned with `src/content/config.ts`. Current required fields are stricter than the old examples: `projects` also supports `featured` and defaults `order` to `0`; `speaking.featured` defaults to `false`.
- If you add a new translation key, update both `en` and `cs` in `src/i18n/translations.ts`.

## Editing Gotchas
- Homepage behavior is duplicated across `src/pages/index.astro` and `src/pages/cs/index.astro`, including inline CSS and client-side scripts for rotating identities, counters, and parallax. If you change homepage structure or interactions, check both files.
- Other top-level pages also exist in English and Czech as separate files under `src/pages/` and `src/pages/cs/`; structural changes usually need to be mirrored manually.
- `public/js/lang-redirect.js` controls cookie-based locale redirects for static hosting. Be careful changing locale routing or root-path behavior without updating that script.
- The design spec in `DESIGN.md` is more opinionated than the codebase: narrow `680px` container, `700px` mobile breakpoint, sharp corners, 1px dividers, restrained use of `#1E4D6B`. Preserve that visual language unless the task says otherwise.
