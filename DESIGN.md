---
name: Japanese Minimal
description: Muji-inspired design philosophy with radical simplicity and generous whitespace
colors:
  primary: "#1E4D6B"
  text: "#1A1A1A"
  text-secondary: "#6B6B6B"
  text-muted: "#999999"
  background: "#FAFAFA"
  surface: "#FFFFFF"
  border: "#EAEAEA"
typography:
  hero-h1:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: "300"
    letterSpacing: "-0.01em"
    lineHeight: "1.35"
  section-h2:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: "300"
    letterSpacing: "-0.01em"
  project-h3:
    fontFamily: Inter
    fontSize: 1.35rem
    fontWeight: "400"
    letterSpacing: "-0.01em"
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "300"
    letterSpacing: "0.01em"
    lineHeight: "1.8"
  small:
    fontFamily: Inter
    fontSize: 0.85rem
    fontWeight: "300"
    lineHeight: "1.7"
  nav:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: "400"
    letterSpacing: "0.1em"
  label:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "500"
    letterSpacing: "0.2em"
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: "300"
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  2xl: 120px
---

# Japanese Minimal

## Overview

Muji-inspired design philosophy that embraces radical simplicity, generous whitespace, and subtle details. Every element serves a purpose — nothing is decorative for decoration's sake.

The design draws from Japanese aesthetics:

- **Ma (間)** — the beauty of empty space, the pause between notes
- **Seijaku (静寂)** — calm, silence, tranquility
- **Shibui (渋い)** — understated beauty, subtle elegance

The interface should feel like a breath of fresh air — unhurried, confident, and quietly sophisticated.

## Colors

The palette is rooted in warm neutrals with a single oil blue accent.

- **Primary (#1E4D6B):** Oil blue accent — links, highlights, key interactions
- **Text (#1A1A1A):** Primary text — near black, softer than pure black
- **Text Secondary (#6B6B6B):** Secondary text — descriptions, subtitles
- **Text Muted (#999999):** Muted text — labels, metadata, timestamps
- **Background (#FAFAFA):** Page background — off-white, easy on eyes
- **Surface (#FFFFFF):** Card backgrounds, elevated surfaces
- **Border (#EAEAEA):** Subtle 1px dividers — sections, code blocks

Never use pure black (#000) — too harsh.

## Typography

- **Font Stack:** Inter for body/UI, JetBrains Mono for code/metadata
- **Weight:** Use 300 for body, 400 for headings. Never bold.
- **Letter-spacing:** Generous tracking on uppercase text
- **Line-height:** 1.8 for body text creates breathing room

Type scale from hero headlines (44px) down to labels (11px). Monospace for years, timestamps, and code.

## Layout

### Container

```css
max-width: 680px;
padding: 0 32px;
```

Narrow content width encourages focused reading. Wide pages feel scattered.

### Section Structure

- Navigation: 48px padding
- Hero: 80px top, 120px bottom, border-bottom
- Sections: 100px padding, 1px border separator
- Footer: 48px padding, border-top

Every section separated by a `1px solid var(--border)` line.

## Shapes

No rounded corners. Sharp 1px borders only. Minimal footprint.

## Components

### Navigation

- Logo: 15px, weight 400, 0.15em tracking, uppercase
- Nav links: 13px, weight 400, 0.1em tracking, uppercase
- Links in `text-muted`, hover to `text`
- 40px gap between links

### Buttons

Underline style, not filled buttons:

```css
.btn {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--text);
}
```

### Project Cards

- Grid: 100px meta column + 1fr content
- Meta: 12px label + monospace year
- 1px border separators, no shadows

## Do's and Don'ts

### Do

- Use generous whitespace
- Apply letter-spacing to uppercase text
- Keep 1px borders between sections
- Use oil blue (#1E4D6B) only for accents
- Maintain max-width 680px container

### Don't

- Use shadows
- Use gradients
- Use rounded corners
- Add decorative elements without purpose
- Use pure black (#000)

## Responsive Design

Breakpoint at 700px:

- Base font size: 16px (down from 18px)
- Single column layouts
- Stack footer elements vertically
- Reduce heading sizes
