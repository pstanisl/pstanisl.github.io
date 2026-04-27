# Personal Website — Development Guide

This is an Astro 5 project with Tailwind CSS v4 and Japanese Minimal design.

## Project Overview

Personal website for Petr Stanislav — AI engineer, CTO @ Elin.ai, PhD researcher.

- **Framework**: Astro 5
- **Styling**: Tailwind CSS v4
- **i18n**: English (default) + Czech (`/cs/`)
- **Design**: See `DESIGN.md` for visual identity specification

## Codebase Structure

```
/
├── src/
│   ├── components/       # Header, Footer, LanguageSwitcher
│   ├── content/          # Speaking & Projects collections
│   │   ├── speaking/     # Podcasts, talks, workshops
│   │   └── projects/     # Project descriptions
│   ├── i18n/             # Translations (EN/CS)
│   ├── layouts/          # BaseLayout
│   ├── pages/            # Route pages
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro
│   │   ├── speaking.astro
│   │   ├── projects.astro
│   │   ├── contact.astro
│   │   └── cs/           # Czech versions
│   └── styles/           # Global CSS
├── public/               # Static assets
├── DESIGN.md             # Design specification
└── package.json
```

## Key Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build
```

## Design System

The site follows Japanese Minimal design philosophy:

- **Colors**: Oil blue (#1E4D6B) accent, warm neutrals
- **Typography**: Inter 300 weight, max-width 680px
- **Layout**: 1px borders as section separators, no shadows
- **See `DESIGN.md` for complete specification**

## Adding Content

### Speaking Engagements

Add new file to `src/content/speaking/`:

```markdown
---
title: "Talk Title"
date: 2025-01-15
type: talk | podcast | workshop | panel
venue: "Event Name"
description: "Description of the talk"
videoUrl: "https://youtube.com/..."  # optional
slidesUrl: "https://..."              # optional
featured: true
---
```

### Projects

Add new file to `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
role: "Your Role"
technologies: ["Python", "AI", "..."]
url: "https://..."         # optional
github: "https://..."      # optional
order: 1
---
```

## i18n

Translations live in `src/i18n/translations.ts`. Add keys to both `en` and `cs` objects.

## Deployment

Configured for GitHub Pages. Push to `main` triggers automatic deployment via `.github/workflows/deploy.yml`.
