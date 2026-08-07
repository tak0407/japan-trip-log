# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

2026년 8월 11–15일 일본 여행(도쿄·요코스카·요코하마·사이타마·후지산) 일정/지도 모바일 PWA. UI 텍스트는 전부 한국어. React 19 + Vite 7 + Karrot SEED Design, GitHub Pages 배포.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build (also used as the check — no lint/test setup exists)
npm run preview   # serve the built dist/
```

There are no tests or linters; `npm run build` (alias `npm run check`) is the only verification step.

Google Maps needs `VITE_GOOGLE_MAPS_API_KEY` (e.g. in `.env.local`). Without it the map tab degrades but the app still runs. In CI it comes from the `GOOGLE_MAPS_API_KEY` Actions secret.

## Architecture — all React

The legacy root-level `app.js` is gone; everything is React components under `src/`.

```
src/main.jsx              # root render, window.GOOGLE_MAPS_API_KEY, styles.css import
src/App.jsx               # shell: <TripProvider> + Header, 4 panels, BottomNavigation,
                          #        OfflineBanner, UpdateNotice
src/data/trip.js          # TRIP_DAYS, PLACE_DETAILS, DEFAULT_PACKING, MAP_COORDINATES,
                          #        VIEWS, STORAGE_KEY, APP_VERSION — pure data, no DOM
src/lib/tripUtils.js      # derived-data helpers (calendar items, now-context, progress)
src/lib/googleMaps.js     # loadGoogleMaps(): injects the Maps JS script once
src/state/TripContext.jsx # TripProvider / useTrip() — the single source of truth
src/components/           # Header, NowView, ScheduleView, MapView (renders PlaceDetail),
                          #        PrepView, BottomNavigation, OfflineBanner, UpdateNotice
```

Conventions to keep:

- **One context, no prop drilling.** `useTrip()` returns `{ state, selectedNowStopId, placeDetail, ...actions }`. `state` is the persisted shape; `selectedNowStopId` and `placeDetail` are ephemeral (not persisted).
- **Panels self-hide, they never unmount.** Each of `NowView`/`ScheduleView`/`MapView`/`PrepView` renders its own `<section class="tab-panel" id="…Panel" data-view-panel="…">` and toggles `hidden`/`is-active` from `state.activeView`. `App.jsx` renders all four unconditionally. Because they stay mounted, any effect that should only run on the visible tab must gate on `state.activeView` itself (see the visibilitychange/interval effects in `NowView`).
- **DOM contract is frozen.** `styles.css` (~2,600 lines, repo root) selects on the exact ids/classes the old vanilla app produced. Don't rename ids, classes, aria attributes, or Korean strings without updating the CSS.
- **localStorage schema is unchanged**: key `japan-trip-log:v1`, written by `TripProvider` on every `state` change; `APP_VERSION` mismatch resets only `activeView`. Cross-device sharing is still manual JSON export/import (준비 tab).
- **Google Maps** loads lazily via `src/lib/googleMaps.js`, which reads `window.GOOGLE_MAPS_API_KEY` (set in `src/main.jsx` from `import.meta.env.VITE_GOOGLE_MAPS_API_KEY`). `MapView` only calls it when the map tab is active and the browser is online.
- **Service worker / offline**: `UpdateNotice` registers `./service-worker.js` (file lives in `public/`), watches `updatefound`/`statechange`, shows the `#updateToast`, posts `{ type: "SKIP_WAITING" }` to the waiting worker and reloads on `controllerchange`. `OfflineBanner` owns `#offlineBanner` (hidden when online *or* when the map tab is active); `MapView` owns its own `#mapOfflinePanel` and disables the map FABs offline.
- `vite.config.js` sets `base: "/japan-trip-log/"` (GitHub Pages subpath) — use `%BASE_URL%`/relative URLs for public assets.
- `index.html` pins SEED to light mode via `data-seed-color-mode="light-only"`.

## Deploy

Push to `main` → `.github/workflows/pages.yml` builds and deploys `dist/` to GitHub Pages. No manual step.

## Data files at repo root

`japan_trip_day*.csv`, `japan_trip_google_maps.csv`, `japan_trip_routes.kml` are source/export data for Google My Maps, not consumed by the app (the app reads `TRIP_DAYS` in `src/data/trip.js`). They are untracked and not gitignored.
