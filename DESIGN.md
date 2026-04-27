# Design Document — Petr Stanislav Personal Website

## Overview

Japanese Minimal is a Muji-inspired design philosophy that embraces radical simplicity, generous whitespace, and subtle details. Every element serves a purpose — nothing is decorative for decoration's sake.

---

## Design Philosophy

**Core Principle:** Less, but better. The beauty of empty space.

This design draws from Japanese aesthetics:
- **Ma (間)** — the beauty of empty space, the pause between notes
- **Seijaku (静寂)** — calm, silence, tranquility
- **Shibui (渋い)** — understated beauty, subtle elegance

The interface should feel like a breath of fresh air — unhurried, confident, and quietly sophisticated.

---

## Color System

### Palette

| Token | Light Mode | Usage |
|-------|------------|-------|
| `--primary` | `#1E4D6B` | Oil blue accent — links, highlights, key interactions |
| `--text` | `#1A1A1A` | Primary text — near black, softer than pure black |
| `--text-secondary` | `#6B6B6B` | Secondary text — descriptions, subtitles |
| `--text-muted` | `#999999` | Muted text — labels, metadata, timestamps |
| `--background` | `#FAFAFA` | Page background — off-white, easy on eyes |
| `--surface` | `#FFFFFF` | Card backgrounds, elevated surfaces |
| `--border` | `#EAEAEA` | Subtle 1px dividers — sections, code blocks |

### Color Usage

```
Primary accent (oil blue #1E4D6B):
  - Headline accent words
  - Links
  - Hover states
  - Key call-to-action buttons

Text hierarchy:
  - Headlines: --text (#1A1A1A)
  - Body: --text-secondary (#6B6B6B)
  - Labels: --text-muted (#999999)
  - Never use pure black (#000) — too harsh
```

---

## Typography

### Font Stack

```css
font-family: 'Inter', -apple-system, sans-serif;
font-family: 'JetBrains Mono', monospace;
```

### Type Scale

| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| Hero H1 | `2.75rem` (44px) | 300 | `-0.01em` | 1.35 |
| Section H2 | `1.75rem` (28px) | 300 | `-0.01em` | — |
| Project H3 | `1.35rem` (21.6px) | 400 | `-0.01em` | — |
| Skill H3 | `1rem` (18px) | 400 | `0.02em` | — |
| Body | `1rem` (18px) | 300 | `0.01em` | 1.8 |
| Small | `0.85rem` (15.3px) | 300 | — | 1.7 |
| Navigation | `13px` | 400 | `0.1em` | — |
| Buttons/Labels | `11-12px` | 500 | `0.15-0.2em` | — |
| Code | `13px` | 300 | — | — |

### Typography Rules

1. **Light weights** — Use 300 for body, 400 for headings. Never bold.
2. **Generous letter-spacing** — Uppercase text always has tracking
3. **High line-height** — 1.8 for body text creates breathing room
4. **Monospace for metadata** — Years, timestamps, code use JetBrains Mono

---

## Layout

### Container

```css
max-width: 680px;
padding: 0 32px;
```

Narrow content width encourages focused reading. Wide pages feel scattered.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `4px` | Tight spacing, inline elements |
| `sm` | `12px` | Small gaps |
| `md` | `20-24px` | Default element spacing |
| `lg` | `32-48px` | Section gaps |
| `xl` | `60-80px` | Major section separators |
| `2xl` | `100-120px` | Hero, section padding |

### Section Structure

```
Navigation:  48px padding top/bottom
Hero:        80px top, 120px bottom, border-bottom
Section:     100px padding, border-bottom
Footer:      48px padding, border-top
```

Every section is separated by a `1px solid var(--border)` line — subtle but clear visual hierarchy.

---

## Components

### Navigation

```
┌─────────────────────────────────────────────────────┐
│ PETR STANISLAV          O MNĚ  PROJEKTY  KONTAKT   │
└─────────────────────────────────────────────────────┘

- Logo: 15px, 400 weight, 0.15em tracking, uppercase
- Nav links: 13px, 400 weight, 0.1em tracking, uppercase
- Links in --text-muted, hover to --text
- 40px gap between links
```

### Hero Section

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Stavím AI systémy, které                          │
│  skutečně fungují                                  │
│                                                     │
│  AI/ML engineer & CTO @ Elin.ai.                   │
│  Pomáhám firmám přeměnit umělou                    │
│  inteligenci na reálný produkt.                    │
│                                                     │
│  SPOJME SE                                          │
│                                                     │
└─────────────────────────────────────────────────────┘
─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  (1px border)

- H1: 44px, weight 300, max-width 540px
- "AI systémy" highlighted in --primary
- Paragraph: 1.1rem, --text-secondary, max-width 400px
- CTA: underline style, not button
```

### Skills Grid

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  EXPERTISE                                          │
│                                                     │
│  LLM Engineering          MLOps & Infrastructure   │
│  Finetuning, RAG...       GPU Cloud, vLLM...       │
│                                                     │
│  Technical Leadership     Smart Home & IoT         │
│  CTO zkušenost...         Homey, custom...         │
│                                                     │
└─────────────────────────────────────────────────────┘

- 2-column grid
- 60px row gap, 80px column gap
- H3: 1rem, 400 weight
- Description: 0.85rem, --text-secondary
```

### Project Cards

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  VYBRANÉ PROJEKTY                                   │
│                                                     │
│  STARTUP          │  Elin.ai                        │
│  2024—            │  AI asistent pro produktivitu.  │
│                   │  Pracuji jako CTO, vedu...      │
│                   │  elin.ai →                      │
│                                                     │
│  OPEN SOURCE      │  Hermes Agent                   │
│  2023—            │  Osobní AI agent běžící na...   │
│                   │  ┌──────────────────────────┐   │
│                   │  │ $ hermes --skill homey... │   │
│                   │  └──────────────────────────┘   │
│                   │  GitHub →                       │
│                                                     │
└─────────────────────────────────────────────────────┘

- Grid: 100px meta column + 1fr content
- 48px gap between columns
- Meta: 12px, --text-muted, uppercase tag + monospace year
- Code block: 1px border, JetBrains Mono 13px
```

### Buttons

```css
.btn {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--text);
  transition: all 0.3s;
}

.btn:hover {
  color: var(--primary);
  border-color: var(--primary);
}
```

Underline style, not filled buttons. Minimal footprint.

---

## Interactions

### Hover States

- Links: `color` transition 0.3s ease
- Buttons: `color` and `border-color` transition 0.3s ease
- No shadows, no transforms, no scale effects

### Animations

None by default. Japanese Minimal is about stillness. If animations are needed:
- Use only `opacity` and `transform`
- Duration: 300ms
- Easing: `ease` or `ease-out`

---

## Responsive Design

### Breakpoints

```css
@media (max-width: 700px) {
  html { font-size: 16px; }
  .skills-list { grid-template-columns: 1fr; }
  .project-item { grid-template-columns: 1fr; }
  .hero h1 { font-size: 2rem; }
}
```

### Mobile Adjustments

- Base font size: 16px (down from 18px)
- Single column layouts
- Stack footer elements vertically
- Reduce heading sizes

---

## Inspirations

- **Muji** — Radical simplicity, no branding, functional beauty
- **Japanese architecture** — Negative space as design element
- **Swiss design** — Grid systems, typography hierarchy
- **Apple product pages** — Premium whitespace

---

## Implementation Notes

### HTML Structure

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <!-- Inter + JetBrains Mono fonts -->
  <!-- All styles in <style> tag or external CSS -->
</head>
<body>
  <nav><!-- Logo + Links --></nav>
  <section class="hero"><!-- H1 + Intro + CTA --></section>
  <section class="section" id="about"><!-- Skills grid --></section>
  <section class="section" id="projects"><!-- Project list --></section>
  <section class="contact-section" id="contact"><!-- Contact --></section>
  <footer><!-- Links + Copyright --></footer>
</body>
</html>
```

### File Organization

```
/
├── index.html          # Main page
├── style.css           # Extracted styles (optional)
├── assets/
│   └── images/         # Photos, icons (if needed)
└── DESIGN.md           # This file
```

---

## Quality Checklist

Before publishing, verify:

- [ ] All text uses Inter font
- [ ] Letter-spacing applied to uppercase text
- [ ] 1px borders between sections
- [ ] No element touches viewport edges (32px padding)
- [ ] Max-width 680px container
- [ ] Hover states work on all interactive elements
- [ ] Mobile responsive at 700px breakpoint
- [ ] No shadows, no gradients, no decorative elements
- [ ] Oil blue (#1E4D6B) used only for accents
- [ ] Generous whitespace everywhere

---

*"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."*
— Antoine de Saint-Exupéry
