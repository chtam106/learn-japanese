# Langwish

Langwish is a Japanese learning app focused on both JLPT progression and real-world communication for software teams.

The app ships bilingual content (English and Vietnamese), interactive practice, and course-driven routing.

## Main Learning Tracks

- JLPT tracks: `N5`, `N4`, `N3`, `N2`, `N1`
- Frontend track: `/frontend`
  - Covers practical frontend communication
  - Includes HTML/CSS/JavaScript bug-report vocabulary
  - Includes BRSE-focused modules (requirements, specs, meetings, risk/escalation, handover)

## Core Features

- Bilingual lesson content (`en` / `vi`)
- Lesson practice surfaces:
  - lesson page
  - exercise
  - listening
  - reading (when available)
- Japanese pronunciation support via Web Speech API
- Alphabet learning pages (Hiragana, Katakana, exercise modes)

## Tech Stack

- React 19
- TypeScript
- Vite
- MUI
- React Router

## Requirements

- Node.js 24 (required by this repo)
- `pnpm` (see `packageManager` in `package.json`)

If you use `nvm`:

```bash
nvm use 24
```

## Local Setup

```bash
pnpm install
pnpm dev
```

Open the app at `http://localhost:5173`.

## Available Scripts

- `pnpm dev` - run dev server
- `pnpm build` - typecheck + build + generate sitemap
- `pnpm preview` - preview production build
- `pnpm typecheck` - run TypeScript build checks
- `pnpm lint` - run ESLint
- `pnpm lint:style` - run Stylelint for CSS
- `pnpm format` - run Prettier write
- `pnpm format:check` - verify formatting
- `pnpm check` - run typecheck + lint + stylelint + format check
- `pnpm download:audio` - download kana audio assets
- `pnpm download:audio:force` - force refresh kana audio assets

## Performance Audits

- Lighthouse auditing workflow (mobile/desktop commands, reporting, before/after notes):
  - `LIGHTHOUSE.md`

## Project Structure (high level)

- `src/constants/courses/` - course and lesson content
- `src/pages/` - route pages
- `src/i18n/` - translation and locale context
- `src/utils/speech.ts` - Japanese speech utilities
- `scripts/generate-sitemap.ts` - sitemap generation

## Routing Notes

- Course indexes: `/<level>` (for example: `/n3`, `/frontend`)
- Lesson route pattern: `/<level>/lesson/<lesson-id>`
- Exercise/listening/reading routes are derived from the lesson route.
