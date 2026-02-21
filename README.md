# Timberbain Portfolio

A developer portfolio website for showcasing personal applications and projects. Built with a solarpunk + retro gaming design aesthetic featuring pixel art typography, CRT scanline effects, and RPG-inspired UI patterns.

## Tech Stack

- **Next.js 16** (App Router) with static generation
- **React 19** and **TypeScript 5**
- **Tailwind CSS 4** for styling
- **React Bits** for interactive UI components (managed via jsrepo)

## Features

- RPG-themed interface — projects presented as "quests" with skill stat bars, inventory-style tech tags, and pixel art headings
- Animated particle effects and pixel grid backgrounds
- CRT scanline overlay and pixel cursor for retro immersion
- Responsive design across all breakpoints
- `prefers-reduced-motion` support for all animations
- Statically generated project detail pages

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:3000
```

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run lint`  | Run ESLint               |
| `npm start`     | Serve production build   |

## Project Structure

```
app/              # Next.js App Router pages and layouts
  projects/       # Project detail pages ([slug])
components/       # UI components (Hero, Navigation, ProjectCard, etc.)
  reactbits/      # Third-party components managed by jsrepo — do not edit manually
lib/              # Data and utilities
  projects.ts     # All project content (typed array)
  fonts.ts        # Font configuration (Press Start 2P, Outfit, JetBrains Mono)
```

## Adding Projects

All project content lives in `lib/projects.ts` as a typed array. There is no CMS or database — add a new entry to the array and the corresponding detail page is generated at build time.

## Design System

The site follows a documented design system covering colors, typography, spacing, component patterns, and animation conventions. See `DESIGN_SYSTEM.md` for full details.
