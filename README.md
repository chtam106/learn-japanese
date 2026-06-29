# Nihongoes

A free Japanese alphabet learning app.

Bilingual content (English and Vietnamese), interactive exercises, native audio via the Web Speech API, and course-driven routing.

## Learning Tracks

- **Alphabet** - learn and memorize hiragana and katakana with full charts, native audio, and exercises
- **JLPT** - structured courses from N5 to N1
- **Frontend** - practical Japanese for software teams (BRSE vocabulary, bug reports, specs, meetings, risk/escalation, handover)

## Alphabet Exercises

| Exercise               | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| Romaji quiz            | See a kana character, choose the correct romaji                             |
| Character quiz         | See romaji, pick the matching hiragana/katakana                             |
| Listening quiz         | Hear native audio, pick the correct character                               |
| Script-pair quiz       | Match hiragana and katakana equivalents                                     |
| Writing practice       | Trace kana by row or write from a romaji prompt, with animated stroke-order |
| Sentence transcription | Read a kana sentence, type its romaji                                       |

## Course Features (JLPT + Frontend)

- Vocabulary with kanji, kana, romaji, and meaning
- Grammar points with pattern chips and speakable examples
- Pronunciation via Web Speech API (configurable voice and speed)
- Exercise, listening, and reading quizzes per lesson
- Show/hide translation and phonetics toggles on example sentences

## Tech Stack

- React 19, TypeScript, Vite
- MUI (Material UI)
- React Router
- Vitest + Testing Library (unit), Playwright (e2e)

## Requirements

- Node.js 24 (`.nvmrc` pinned)
- `pnpm` (see `packageManager` in `package.json`)

```bash
nvm use 24
```

## Local Setup

```bash
pnpm install
pnpm dev
```

Open at `http://localhost:5173`.

## Available Scripts

| Script                | Description                                 |
| --------------------- | ------------------------------------------- |
| `pnpm dev`            | Dev server                                  |
| `pnpm build`          | Typecheck + build + generate sitemap        |
| `pnpm preview`        | Preview production build                    |
| `pnpm check`          | Typecheck + lint + stylelint + format check |
| `pnpm typecheck`      | TypeScript build check                      |
| `pnpm lint`           | ESLint                                      |
| `pnpm lint:fix`       | ESLint with auto-fix                        |
| `pnpm lint:style`     | Stylelint for CSS                           |
| `pnpm format`         | Prettier write                              |
| `pnpm format:check`   | Verify formatting                           |
| `pnpm test`           | Vitest unit tests                           |
| `pnpm test:e2e`       | Playwright e2e tests                        |
| `pnpm storybook`      | Storybook dev server                        |
| `pnpm download:audio` | Download kana audio assets                  |

## Project Structure

```
src/
  constants/courses/   course and lesson content (n5-n1, frontend)
  pages/               route pages
  components/          shared UI components
  i18n/                translations and locale routing (en default, vi under /vi)
  utils/speech.ts      Japanese Web Speech API helpers
  theme/               MUI theme and surface helpers
scripts/
  generate-sitemap.ts  sitemap generation
```

## Routing

- Default locale (English) at root: `/`, `/alphabet`, `/n5`, ...
- Vietnamese locale: `/vi/`, `/vi/alphabet`, `/vi/n5`, ...
- Course indexes: `/<level>` (e.g. `/n3`, `/frontend`)
- Lesson route: `/<level>/lesson/<lesson-id>`
- Exercise/listening/reading: derived from the lesson route

## Further Docs

- Performance auditing: `LIGHTHOUSE.md`
- Testing guide: `docs/TESTING.md`
