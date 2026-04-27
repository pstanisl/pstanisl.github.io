# Petr Stanislav — Personal Website

Personal website built with Astro 5, Tailwind CSS v4, and Japanese Minimal design philosophy.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Design**: Japanese Minimal (Muji-inspired) — see [DESIGN.md](./DESIGN.md)
- **i18n**: English + Czech

## Development

```sh
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build
```

## Project Structure

```
/
├── src/
│   ├── components/     # Header, Footer, LanguageSwitcher
│   ├── content/        # Speaking & Projects collections
│   ├── i18n/           # Translations (EN/CS)
│   ├── layouts/        # BaseLayout
│   ├── pages/          # Route pages
│   └── styles/         # Global CSS
├── public/             # Static assets
├── DESIGN.md           # Design specification
└── package.json
```

## Design

This site follows the **Japanese Minimal** design philosophy — radical simplicity, generous whitespace, and subtle details. Oil blue (#1E4D6B) accent, Inter 300 weight, max-width 680px container.

See [DESIGN.md](./DESIGN.md) for the complete design specification.

## Deployment

Configured for GitHub Pages deployment via GitHub Actions. Push to `main` triggers automatic build and deploy.

## License

MIT
