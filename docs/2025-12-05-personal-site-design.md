# Personal Website Design Document

**Date:** 2025-12-05
**Status:** Ready for implementation

## Overview

Personal website for Petr Stanislav - CTO & Co-Founder at Elm.ai, AI Consultant, PhD holder.

### Goals

1. **Professional credibility** - Polished presence for potential clients, employers, or partners
2. **Lead generation** - Attract consulting clients and speaking opportunities
3. **Content hub** - Central place to aggregate podcasts, talks, and projects

## Technical Decisions

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| Framework | Astro | Content-focused, component-based, zero JS by default, great DX |
| Hosting | GitHub Pages | Free, reliable, automatic HTTPS, git-based workflow |
| Domain | Custom domain (owned) | Link existing domain to GitHub Pages |
| Styling | Tailwind CSS | Utility-first, fast development, consistent design |
| Content | Markdown/MDX | Easy to write and maintain |

## Site Structure

```
/                 → Home (hero + value prop + CTAs + featured content)
/about            → Extended bio, journey, philosophy
/speaking         → Talks, podcasts, videos
/projects         → Key projects, open source, Elm.ai
/contact          → Contact form or Calendly link
/blog (optional)  → Articles if/when needed
```

## Project Structure

```
personal-site/
├── src/
│   ├── components/       → Reusable UI (Header, Footer, Card, etc.)
│   ├── layouts/          → Page templates (Base, Blog, Speaking)
│   ├── pages/            → Routes (index.astro, about.astro, etc.)
│   ├── content/          → Markdown files for talks, blog posts
│   │   ├── speaking/
│   │   └── blog/
│   └── styles/           → Global CSS
├── public/               → Static assets (images, resume PDF)
├── astro.config.mjs      → Config for GitHub Pages deployment
├── tailwind.config.mjs   → Tailwind configuration
└── package.json
```

## Page Details

### Home Page

**Hero section:**
- Professional photo
- Name: Petr Stanislav
- One-line positioning: "AI Leader | CTO | Consultant" (or similar)
- Value proposition: 2-3 sentences on what you do and who you help

**Social proof:**
- Company logos: Elm.ai, O2, AI Centre, University of West Bohemia
- Key metrics if relevant

**Featured content:**
- 2-3 recent talks or podcast appearances
- Card-based layout

**CTA:**
- Primary: "Book a consultation" (Calendly link)
- Secondary: "Get in touch"

### About Page

- Your story: PhD → BigData → AI Centre → Elm.ai
- What drives you
- Who you help
- Professional philosophy

### Speaking Page

- List of talks and podcast appearances
- Embedded videos or links
- Filterable by type (talk, podcast, workshop)
- Include: title, venue/show, date, description, media link

### Projects Page

- Elm.ai (co-founder story)
- Notable projects from AI Centre, O2
- Open source contributions (link to GitHub)
- Brief descriptions with outcomes/impact

### Contact Page

- Calendly embed or link for booking calls
- Contact form (or mailto link)
- LinkedIn and GitHub links
- Clear purpose statement ("Interested in working together?")

## Visual Design

### Colors

- **Primary:** Dark navy/slate (#1e293b or similar)
- **Background:** White (#ffffff) / Light gray (#f8fafc)
- **Accent:** Blue or teal (#3b82f6 or #14b8a6)
- **Text:** Dark gray (#334155)
- Personal brand - distinct from Elm.ai

### Typography

- Modern sans-serif (Inter, Plus Jakarta Sans)
- Clear hierarchy (large headings, readable body)
- Font sizes: responsive, mobile-first

### Layout

- Generous whitespace
- Card-based content sections
- Full-width hero
- Max content width ~1200px
- Mobile-first responsive design

### Tone

- Professional but approachable
- Technical credibility without jargon
- Confident but not salesy

## Content to Prepare

### Existing (from LinkedIn)

- [ ] Professional headshot
- [ ] List of podcast appearances with links
- [ ] Speaking engagements with details
- [ ] Project descriptions
- [ ] Company logos for social proof

### To Write

- [ ] Home page hero text / value proposition
- [ ] About page narrative
- [ ] Project descriptions with outcomes
- [ ] Speaking item descriptions

## Deployment

### GitHub Pages Setup

1. Create GitHub repository
2. Configure `astro.config.mjs` for GitHub Pages:
   ```js
   export default defineConfig({
     site: 'https://yourdomain.com',
     // If using github.io subdomain:
     // base: '/repo-name',
   });
   ```
3. Add GitHub Actions workflow for automatic deployment
4. Configure custom domain in repository settings
5. Set up DNS records pointing to GitHub Pages

### DNS Configuration

Point your domain to GitHub Pages:
- A records to GitHub's IPs, or
- CNAME record to `username.github.io`

## Maintenance

- **Update frequency:** Occasional (when new talks, projects, or content)
- **Workflow:** Edit markdown → push to main → auto-deploy
- **Monitoring:** GitHub Pages provides basic analytics (or add Plausible/Fathom for privacy-friendly analytics)

## Future Considerations

- Blog section if you want to write articles
- Newsletter signup integration
- Dark/light mode toggle
- Multi-language support (Czech/English) if relevant
