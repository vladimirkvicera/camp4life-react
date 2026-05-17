# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:5173)
npm run build     # production build → dist/
npm run lint      # ESLint
npm run deploy    # build + publish to GitHub Pages (gh-pages -d dist)
```

No test suite exists in this project.

## Architecture

React + Vite SPA deployed to GitHub Pages at `vladimirkvicera.github.io/camp4life-react`. Routing via react-router-dom v7; all routes share a single `Layout` shell.

**Adding a new roadtrip year** requires changes in three places:
1. `src/App.jsx` — add `import` and a `<Route>` entry
2. `src/components/Layout.jsx` — add a `<Link>` in the "Naše cesty" dropdown
3. `src/pages/Home.jsx` — add an object to the `trips` array (controls the homepage tile)

**Homepage tiles** (`src/pages/Home.jsx`): each trip object has `published` (shows tile as a link vs. greyed-out) and `comingSoon` (adds the "Připravujeme" CSS overlay while keeping `published: true` so the link is active).

**Roadtrip pages** (`src/pages/RoadtripYYYY.jsx`): composed from three reusable components:
- `MapMenu` — route map image + in-page anchor nav; takes `mapImage` (filename in `/images/`), `mapAlt`, and `stops` array of `{ id, label }`
- `TripStop` — section wrapper; `id` matches a `stops` entry, `color={true}` adds alternating cream background
- `CopyCoords` — inline GPS coordinates with a copy-to-clipboard button; format `"48.5744N, 7.7181E"`

**Images**: all static assets live in `public/images/`. Reference them in JSX via `` `${import.meta.env.BASE_URL}images/filename.jpeg` `` (required for correct GitHub Pages base URL). The `TripCard` and `MapMenu` components already do this internally — just pass the bare filename.
