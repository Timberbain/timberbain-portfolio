# Design System

Solarpunk + retro gaming aesthetic. Think forest-dwelling pixel art rendered on a CRT monitor in a greenhouse.

## Color Palette

### Forest (Primary)

| Token              | Hex       | Usage                                             |
| ------------------ | --------- | ------------------------------------------------- |
| `--forest-deep`    | `#1a4d2e` | Darkest green. Borders, button drop-shadows, deep backgrounds |
| `--forest-canopy`  | `#2d6a4f` | Mid green. Scrollbar thumb, card borders, nav active states |
| `--leaf-fresh`     | `#52b788` | Primary action color. Buttons, links, hover states, section labels |
| `--leaf-bright`    | `#95d5b2` | Light green. Tech tags, secondary labels, class badges |

### Accent

| Token          | Hex       | Usage                                          |
| -------------- | --------- | ---------------------------------------------- |
| `--sunlight`   | `#f9c74f` | Gold. Section headings, stat numbers, emphasis  |
| `--sunbeam`    | `#f4a261` | Warm orange. Skill bar accent, sparingly used   |
| `--sky-clear`  | `#90e0ef` | Cyan. Skill bar accent, cool contrast           |
| `--sky-dawn`   | `#caf0f8` | Pale blue. Reserved for subtle cool highlights  |

### Base

| Token           | Hex       | Usage                                              |
| --------------- | --------- | -------------------------------------------------- |
| `--pixel-dark`  | `#0d1b0e` | Near-black green. Page background, body bg          |
| `--pixel-white` | `#f0f7f0` | Off-white with green tint. Primary text color       |
| `--pixel-glow`  | `#b5e48c` | Lime green. Glow effects, skill bar accent, button hover |

### Usage Guidelines

- **Never use pure `#000` or `#fff`** — always use `--pixel-dark` and `--pixel-white`
- Backgrounds layer dark with opacity: `bg-pixel-dark/60`, `bg-pixel-dark/80`, `bg-pixel-dark/90`
- `--leaf-fresh` is the primary interactive color (links, buttons, hover indicators)
- `--sunlight` is reserved for headings and emphasis only, not interactive elements
- Selection highlight: `--leaf-fresh` bg with `--pixel-dark` text

## Typography

### Font Families

| Variable       | Font            | Usage                                         |
| -------------- | --------------- | --------------------------------------------- |
| `--font-pixel` | Press Start 2P  | Headings, labels, navigation, buttons, stats  |
| `--font-body`  | Outfit          | Body text, paragraphs, descriptions           |
| `--font-mono`  | JetBrains Mono  | Tech tags, code references, inventory items   |

### Tailwind Classes

- `font-pixel` — All uppercase text, always paired with `tracking-wider` or `tracking-widest`
- `font-body` — Default body font, natural casing
- `font-mono` — Technical labels and tags

### Type Scale

Pixel font (headings):
- Hero title: `text-2xl sm:text-4xl md:text-5xl`
- Section headers: `text-lg sm:text-2xl`
- Page titles: `text-xl sm:text-3xl`
- Subsection headers: `text-xs` (with `uppercase tracking-widest`)
- Micro labels: `text-[10px]`, `text-[8px]`

Body font (content):
- Hero subtitle: `text-lg sm:text-xl md:text-2xl`
- Paragraphs: `text-base sm:text-lg` or `text-lg sm:text-xl`
- Descriptions: `text-sm sm:text-base`
- Small text: `text-xs`

Mono font (tags):
- Tech tags: `text-[10px]` (in cards), `text-xs` (in detail pages)

### Text Color Opacity Scale

Applied to `text-pixel-white` with Tailwind opacity modifier:

| Opacity | Usage                                       |
| ------- | ------------------------------------------- |
| `/90`   | Primary body text                           |
| `/80`   | Secondary body text, stat labels            |
| `/70`   | Card descriptions, feature list items       |
| `/60`   | Taglines, subdued stat labels               |
| `/50`   | Back links, navigation labels, subtle hints |
| `/40`   | Overflow counts ("+3"), footer labels        |
| `/30`   | Prev/next quest micro labels                |
| `/20`   | Copyright text, minimal visibility          |

## Spacing & Layout

### Container Widths

- `max-w-4xl` — Content sections (about, project detail)
- `max-w-5xl` — About section
- `max-w-6xl` — Project grid
- Always with `mx-auto px-4 sm:px-6`

### Section Padding

- `py-20 sm:py-32` — Standard section vertical padding
- `py-16 sm:py-24` — Tighter section (project hero)
- `pt-16 pb-32` — Page-level (extra bottom space for fixed nav)

### Component Spacing

- Card padding: `p-6 sm:p-8`
- Stack gaps: `space-y-4` (tight), `space-y-8` (loose), `space-y-12` (sections)
- Grid gaps: `gap-6 sm:gap-8` (cards), `gap-12 lg:gap-16` (two-column layouts)
- Inline gaps: `gap-2` (tech tags), `gap-3` (stat items), `gap-4` (buttons)

### Section Header Pattern

```
<h2 className="font-pixel text-lg sm:text-2xl text-center text-sunlight mb-4">
  SECTION TITLE
</h2>
<div className="w-24 h-1 bg-gradient-to-r from-transparent via-sunlight to-transparent mx-auto mb-12" />
```

## Borders & Radius

### Border Radius Scale

- `rounded` — Stat bar inner borders (subtle)
- `rounded-lg` — Cards, content panels, tech tags
- `rounded-xl` — Navigation dock items
- `rounded-2xl` — Navigation dock container

### Border Patterns

- Card borders: `border border-forest-canopy/40` or `border border-forest-canopy/50`
- Tech tags: `border border-forest-canopy/50` (card), `border border-forest-canopy/40` (detail)
- Dividers: `border-t border-forest-canopy/20` or `border-t border-forest-canopy/30`
- Gradient dividers: `h-px bg-gradient-to-r from-transparent via-forest-canopy/30 to-transparent`
- Stat bar container: `border-2 border-forest-canopy`

## Shadows & Effects

### Pixel Border (`.pixel-border`)

The signature 3D retro panel effect:

```css
box-shadow:
  inset -4px -4px 0px 0px rgba(0, 0, 0, 0.3),      /* Bottom-right inner shadow */
  inset 4px 4px 0px 0px rgba(255, 255, 255, 0.15),   /* Top-left inner highlight */
  0 0 0 4px var(--forest-deep);                        /* Outer border */
```

Used on: stat panels, tech inventory, content cards (SpotlightCard wrappers).

### 3D Button Shadows

Primary button:
```
shadow-[inset_-3px_-3px_0px_0px_rgba(0,0,0,0.25),inset_3px_3px_0px_0px_rgba(255,255,255,0.25),0_4px_0_0_var(--forest-deep)]
```

Active (pressed) state reduces bottom shadow from `4px` to `2px` and adds `translate-y-0.5`.

Hover adds a glow layer: `0_0_16px_var(--leaf-fresh)` (primary) or `0_0_12px_var(--forest-canopy)` (secondary).

### Glow Effects

- Title glow: `drop-shadow-[0_0_20px_rgba(82,183,136,0.3)]`
- Nav container: `shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_10px_rgba(82,183,136,0.1)]`
- Active nav item: `shadow-[0_0_8px_rgba(82,183,136,0.3)]`
- Footer link hover: `shadow-[0_0_12px_rgba(82,183,136,0.3)]`
- Stat bar fill: `box-shadow: 0 0 8px ${color}40` (dynamic color with 25% opacity)

### Background Opacity Layering

- Full overlay backgrounds: `opacity-20` to `opacity-40` on container div
- Card backgrounds: `bg-pixel-dark/60`, `bg-pixel-dark/80`, `bg-pixel-dark/90`
- Nav background: `bg-pixel-dark/90 backdrop-blur-md`
- Interactive backgrounds: `bg-forest-canopy/30` (default), `bg-forest-canopy/50` (active)
- Tech tag backgrounds: `bg-forest-canopy/20` to `bg-forest-canopy/30`

## Custom Effects

### Scanline Overlay

Full-screen CRT scanline effect. Fixed position, `z-50`, `pointer-events: none`. 2px transparent + 2px `rgba(0,0,0,0.03)` repeating horizontal lines.

### Pixel Cursor

Custom SVG cursor applied globally via `*` selector. Green pixel arrow using `--leaf-fresh` and `--forest-deep`.

### Themed Scrollbar

- Track: `--pixel-dark`
- Thumb: `--forest-canopy`, hover `--leaf-fresh`
- Width: `8px`, thumb has `2px` border matching track

### Selection

Background: `--leaf-fresh`, text: `--pixel-dark`.

## Animation Patterns

### Four Strategies

1. **Canvas** — PixelCard pixel grids, Particles fireflies. Use `ResizeObserver` for responsive sizing. Always `{ ssr: false }` via `dynamic()`.
2. **Intersection Observer** — ScrollReveal for viewport-triggered transitions. Threshold `0.3` for stat bars, default for ScrollReveal.
3. **requestAnimationFrame** — Particles, PixelTrail. Smooth 60fps continuous animations.
4. **CSS Keyframes** — `animate-blink` (1s step-end infinite), `animate-fill-bar` (1.5s ease-out forwards).

### Timing Conventions

- Stagger delays: `i * 100ms` (cards), `i * 150ms` (stat bars)
- Transition duration: `duration-150` (buttons), `duration-1000` (stat bar fill)
- `transition-all` for multi-property transitions
- `transition-colors` for color-only changes
- `transition-transform` for movement-only changes

### Reduced Motion

All animations must respect `prefers-reduced-motion`. ReactBits components handle this internally. For custom animations, wrap in `@media (prefers-reduced-motion: no-preference)`.

## Component Patterns

### Cards

```
pixel-border bg-pixel-dark/80 p-6 sm:p-8 rounded-lg
```

For SpotlightCard wrappers:
```
pixel-border bg-pixel-dark/60 p-6 sm:p-8 rounded-lg
```

### Buttons (RetroButton)

- **Primary**: `bg-leaf-fresh text-pixel-dark` with 3D shadow, hover glow, active press
- **Secondary**: `bg-forest-canopy text-pixel-white border-2 border-leaf-fresh/30` with 3D shadow
- Both: `font-pixel text-xs px-6 py-3 uppercase tracking-wider`

### Tech Tags

In cards:
```
font-mono text-[10px] px-2 py-1 bg-forest-canopy/30 text-leaf-bright rounded border border-forest-canopy/50
```

In detail pages:
```
font-mono text-xs px-3 py-1.5 bg-forest-canopy/20 text-leaf-bright rounded border border-forest-canopy/40
```

### Section Headers

Always centered, `font-pixel`, `text-sunlight`, with gradient underline bar (`w-24 h-1`) and `mb-12` gap before content.

### Subsection Headers

Inside cards: `font-pixel text-xs text-leaf-fresh uppercase tracking-widest mb-6`.

Content sections: `font-pixel text-xs text-sunlight uppercase tracking-widest mb-4`.

### Navigation Links

Back links and prev/next:
```
font-pixel text-[10px] text-pixel-white/50 hover:text-leaf-fresh transition-colors
```

### Footer Social Links

Icon container: `w-12 h-12 font-pixel text-xs bg-forest-canopy/30 border border-forest-canopy/50 rounded-lg`
Hover: `border-leaf-fresh text-leaf-fresh shadow-[0_0_12px_rgba(82,183,136,0.3)]`
Label: `font-body text-xs text-pixel-white/40` hover `text-pixel-white/70`

### Stat Bars

Container: `h-5 border-2 border-forest-canopy bg-pixel-dark/60`
Fill: Dynamic color with `box-shadow: 0 0 8px ${color}40`
Label: `font-pixel text-[10px] text-pixel-white/80 uppercase tracking-wider`
Value: `font-pixel text-[8px] text-pixel-white mix-blend-difference`
