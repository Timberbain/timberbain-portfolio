# CLAUDE.md

See @DESIGN_SYSTEM.md for the design system reference (colors, typography, spacing, component patterns).

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint (v9 flat config with Next.js rules)
npm start        # Serve production build
```

No test framework is configured.

## Architecture

Next.js 16 portfolio site (App Router) with React 19, TypeScript 5, and Tailwind CSS 4.
Design aesthetic: solarpunk + retro gaming. All visual decisions should reinforce this theme.

`@/*` maps to the project root (configured in `tsconfig.json`).

All content lives in `lib/projects.ts` as a typed array (no CMS or database).

## Gotchas

- ReactBits components (`components/reactbits/`) are managed by jsrepo (`jsrepo.config.mts`). Don't manually create files there — use `npx jsrepo` to add/update.
- ReactBits and canvas/animation components MUST use `dynamic(() => import(...), { ssr: false })` to avoid SSR hydration errors.
- All animations must respect `prefers-reduced-motion`.
- The homepage (`app/page.tsx`) is a client component. Project detail pages are server components with client sub-components.

## Front-End Verification

A PostToolUse hook automatically reminds you to verify after front-end edits. When triggered:
1. Navigate to affected pages via Playwright
2. Verify against `DESIGN_SYSTEM.md`
3. Validate the change fulfills the request
4. Capture full-page screenshot at 1440px desktop viewport
5. Check browser console for errors

## Workflow

- **Proactive Learning** — When discovering codebase gotchas, non-obvious patterns, or tooling quirks, immediately document them in `docs/claude-learnings.md`.
- **Improvement Tracking** — When spotting technical debt, refactoring opportunities, or feature ideas, highlight to the user and ask whether to document in `docs/improvements.md`.

## Compaction

When compacting, always preserve: modified file paths, the current task goal, and any verification results.
