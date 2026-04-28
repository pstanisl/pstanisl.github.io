# Japanese Minimal

## 1. Visual Theme & Atmosphere

Muji-inspired design philosophy that embraces radical simplicity, generous whitespace, and subtle details. Every element serves a purpose — nothing is decorative for decoration's sake.

The design draws from Japanese aesthetics:

- **Ma (間)** — the beauty of empty space, the pause between notes
- **Seijaku (静寂)** — calm, silence, tranquility
- **Shibui (渋い)** — understated beauty, subtle elegance

The interface should feel like a breath of fresh air — unhurried, confident, and quietly sophisticated. Density is low. Content is focused within a narrow column. Typography carries the hierarchy — not color, not weight, not decoration.

## 2. Color Palette & Roles

The palette is rooted in warm neutrals with a single oil blue accent. Never use pure black (#000) — too harsh.

### Backgrounds

| Token              | Hex       | Usage                              |
|--------------------|-----------|-------------------------------------|
| Background         | `#FAFAFA` | Page background — off-white, easy on eyes |
| Surface            | `#FFFFFF` | Card backgrounds, elevated surfaces |
| Hover Background   | `rgba(30, 77, 107, 0.02)` | Subtle interactive hover fill |

### Text

| Token          | Hex       | Usage                                |
|----------------|-----------|---------------------------------------|
| Text           | `#1A1A1A` | Primary text — near black, softer than pure black |
| Text Secondary | `#6B6B6B` | Descriptions, subtitles              |
| Text Muted     | `#999999` | Labels, metadata, timestamps, inactive nav |
| Text Light     | `#BBBBBB` | Copyright, decorative text           |
| Placeholder    | `#CCCCCC` | Placeholder text                     |

### Brand / Accent

| Token   | Hex       | Usage                                 |
|---------|-----------|----------------------------------------|
| Primary | `#1E4D6B` | Oil blue — links, active nav, hover accents, key interactions |

### Border

| Token  | Hex       | Usage                       |
|--------|-----------|------------------------------|
| Border | `#EAEAEA` | 1px dividers, section separators, tag outlines |

### Overlay

| Token           | Value                        | Usage                |
|-----------------|------------------------------|----------------------|
| Header Backdrop | `rgba(250, 250, 250, 0.92)`  | Sticky header glass effect |

## 3. Typography Rules

**Font families:**

- Sans: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- Mono: `'JetBrains Mono', 'Fira Code', monospace`

**Principles:**

- Weight 300 for body, 400 for headings. Never bold.
- Generous letter-spacing on uppercase text.
- Line-height 1.8 for body creates breathing room.
- Monospace for years, timestamps, metadata, and code.

### Type Scale

| Role         | Font          | Size      | Weight | Line Height | Letter Spacing | Notes                  |
|--------------|---------------|-----------|--------|-------------|----------------|------------------------|
| Hero H1      | Inter         | 2.75rem   | 300    | 1.35        | -0.01em        | 2rem on mobile         |
| Section H2   | Inter         | 1.75rem   | 300    | 1.35        | -0.01em        | 1.5rem on mobile       |
| Project H3   | Inter         | 1.35rem   | 400    | 1.35        | -0.01em        |                        |
| Body         | Inter         | 1rem      | 300    | 1.8         | 0.01em         | Base 18px, 16px mobile |
| Small        | Inter         | 0.85rem   | 300    | 1.7         | 0.02em         | Descriptions           |
| Nav          | Inter         | 13px      | 400    | —           | 0.1em          | Uppercase              |
| Label        | Inter         | 11px      | 500    | —           | 0.2em          | Uppercase              |
| Button       | Inter         | 12px      | 500    | —           | 0.15em         | Uppercase              |
| Code / Meta  | JetBrains Mono| 13px      | 300    | —           | 0.02em         | Years, timestamps      |
| Tag          | Inter         | 12px      | 300    | —           | 0.03em         | Skill tags             |
| Tech Tag     | Inter         | 11px      | 300    | —           | 0.03em         | Technology labels      |

## 4. Component Stylings

### Buttons

Underline style, not filled buttons.

| Variant  | BG   | Text             | Padding          | Radius | Border                         | Shadow |
|----------|------|------------------|------------------|--------|--------------------------------|--------|
| Default  | none | `#1A1A1A`        | 0 0 4px 0        | 0      | bottom 1px solid `#1A1A1A`     | none   |
| Primary  | none | `#1E4D6B`        | 0 0 4px 0        | 0      | bottom 1px solid `#1E4D6B`     | none   |

**States:**

- Default hover: `color: #1E4D6B; border-color: #1E4D6B`
- Primary hover: `opacity: 0.7`
- Transition: `color 0.3s ease, border-color 0.3s ease`

### Navigation

- Logo: 15px, weight 400, 0.15em tracking, uppercase
- Links: 13px, weight 400, 0.1em tracking, uppercase
- Inactive: `color: #999999`
- Inactive hover: `color: #1A1A1A`
- Active: `color: #1E4D6B`
- Gap: 32px between links
- Transition: `color 0.3s ease`
- Header: `backdrop-filter: blur(8px); background: rgba(250, 250, 250, 0.92)`

### Cards / Project Items

- Grid: 100px meta column + 1fr content
- Meta: 12px label + monospace year
- 1px border separators between items, no shadows
- No background color (inherits page background)

### Tags / Badges

| Variant   | Font Size | Color     | Border               | Padding     | Letter Spacing |
|-----------|-----------|-----------|----------------------|-------------|----------------|
| Skill Tag | 12px      | `#6B6B6B` | 1px solid `#EAEAEA`  | 6px 12px    | 0.03em         |
| Tech Tag  | 11px      | `#999999` | 1px solid `#EAEAEA`  | 4px 10px    | 0.03em         |

### Social Links

- Default: `color: #999999`
- Hover: `color: #1E4D6B`
- Gap: 24px
- Transition: `color 0.3s ease`

### Stat Items

- Hover: `transform: translateY(-4px); border-color: #1E4D6B`
- Transition: `transform 0.5s ease, border-color 0.3s ease`

### Photo Frame (Hero)

- Hover: `transform: scale(1.02); box-shadow: 0 10px 40px rgba(30, 77, 107, 0.1)`
- Transition: `transform 0.5s ease, box-shadow 0.5s ease`

## 5. Layout Principles

### Spacing System

Base unit: 4px

| Token | Value  | Usage                        |
|-------|--------|------------------------------|
| xs    | 4px    | Tight gaps, inline spacing   |
| sm    | 12px   | Tag padding, small gaps      |
| md    | 24px   | Section internal spacing     |
| lg    | 48px   | Section gaps, label margins  |
| xl    | 80px   | Section top padding          |
| 2xl   | 120px  | Hero bottom padding          |

### Container

```
max-width: 860px
padding: 0 40px (desktop) / 0 24px (mobile)
margin: 0 auto
```

Wide enough for meta-column grids, narrow enough to stay focused.

### Grid Patterns

**Work Grid** — for project/talk items with metadata sidebar:
```
grid-template-columns: 140px 1fr
```
Collapses to single column on mobile (≤700px).

**Signal Grid** — for timeline/currently entries:
```
grid-template-columns: 100px 1fr
gap: 0 24px
```
Collapses to single column on mobile (≤700px).

### Scroll Reveal

```css
.reveal { opacity: 0; transform: translateY(20px); transition: 0.5s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```
Triggered once via IntersectionObserver at threshold 0.1.

### Section Structure

- Navigation: 48px padding
- Hero: 80px top, 100px bottom
- Content sections: 100px vertical padding
- Signal section: 100px vertical padding, white background
- Invitation/CTA: 120px vertical padding
- Page headers: 64px top, 48px bottom
- Footer: 48px padding, border-top

Every section separated by a `1px solid #EAEAEA` line.

### Border Radius

No rounded corners anywhere. Sharp edges only. `border-radius: 0`.

## 6. Depth & Elevation

This design intentionally avoids elevation. Depth is communicated through spacing and 1px borders, not shadows.

| Level    | Shadow                                    | Use Case                     |
|----------|-------------------------------------------|------------------------------|
| Flat     | none                                      | All default elements         |
| Hover    | `0 10px 40px rgba(30, 77, 107, 0.1)`     | Photo frame hover only       |
| Backdrop | `backdrop-filter: blur(8px)`              | Sticky header                |

No other shadows. No gradients. Hierarchy comes from typography and whitespace.

## 7. Do's and Don'ts

### Do

- Use generous whitespace — let content breathe
- Apply letter-spacing to all uppercase text
- Keep 1px borders between sections
- Use oil blue (`#1E4D6B`) only for accents and interactive states
- Maintain max-width 680px container
- Use `transform` and `opacity` for hover feedback
- Transition all interactive state changes at 0.3s ease

### Don't

- Use box shadows (except the single photo hover effect)
- Use gradients
- Use rounded corners
- Add decorative elements without purpose
- Use pure black (`#000`)
- Use font weight above 500
- Use filled/solid buttons

## 8. Responsive Behavior

### Breakpoints

| Name   | Width        | Notes                       |
|--------|--------------|-----------------------------|
| Mobile | `max-width: 700px` | Single breakpoint, mobile-first adjustments |

### Changes at Mobile Breakpoint

| Property               | Desktop      | Mobile           |
|------------------------|--------------|------------------|
| Base font size         | 18px         | 16px             |
| Hero H1                | 2.75rem      | 2rem             |
| Section H2             | 1.75rem      | 1.5rem           |
| Container padding      | 0 32px       | 0 24px           |
| Stats grid             | 4 columns    | 2 columns        |
| Expertise grid         | 2 columns    | 1 column         |
| Help grid              | 2 columns    | 1 column         |
| Hero layout            | side-by-side | column-reverse (photo on top) |
| Timeline meta column   | 100px        | 80px             |

### Touch Targets

All interactive elements (links, buttons, social icons) have minimum 44px touch target via padding. Navigation items have 32px+ gap for comfortable tapping.

### Image Behavior

Photo frame scales down within its container. No fixed image widths — all images are fluid with `max-width: 100%`.

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #FAFAFA
Surface:     #FFFFFF
Text:        #1A1A1A
Secondary:   #6B6B6B
Muted:       #999999
Accent:      #1E4D6B
Border:      #EAEAEA
```

### Example Prompts

**New section:**

> "Add a new content section with an 11px uppercase label (0.2em tracking, #999999), a 1.75rem heading (weight 300), body text at 1rem (weight 300, line-height 1.8), and a 1px #EAEAEA border-top. Use 80px vertical padding."

**New link/button:**

> "Add a 12px uppercase link (weight 500, 0.15em tracking) with a 1px bottom border. On hover, change color and border to #1E4D6B with 0.3s ease transition."

**New tag list:**

> "Add a horizontal flex list of tags using 12px text (weight 300, #6B6B6B), 1px solid #EAEAEA border, 6px 12px padding, 0.03em letter-spacing. Gap 8px."

### Iteration Rules

1. Never introduce shadows, gradients, or rounded corners.
2. When adding interactive elements, always include a `0.3s ease` transition.
3. Accent color `#1E4D6B` is reserved for hover states, active states, and links — do not use it for backgrounds or large fills.
4. All uppercase text must have letter-spacing >= 0.1em.
5. Maintain the 680px max-width container — do not widen.
6. New sections must be separated by `1px solid #EAEAEA`.
7. Test at 700px breakpoint — ensure single-column fallback.
