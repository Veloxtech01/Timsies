# Frontend scaffold — design

**Date:** 2026-08-04
**Status:** approved

## Goal

Stand up the Timsies Entirety frontend skeleton: install the intended tool
stack from CLAUDE.md and create three placeholder pieces — an empty Header
(label only), an empty Footer (label only), and a Homepage containing only an
`<h1>`. No styling/design pass, no backend, no auth.

## Scope decisions

- **Folder:** scaffold into the existing `frontend/` (lowercase) folder as-is.
  CLAUDE.md's `/FRONTEND` casing will be corrected to match in a follow-up
  edit.
- **Dependencies:** install the full CLAUDE.md frontend stack **except
  `recharts`** (no charts needed for a marketing site). Packages are
  installed but not wired up — no `axiosApi.js`, no `<Toaster />` /
  `<Tooltip />` mount, no sample form — since nothing today needs them yet.
- **Design pass:** skipped. `ui-ux-pro-max` will be invoked later when real
  homepage content/styling work begins, not for these placeholders.
- **Git:** initialize a git repo now as part of this setup and commit the
  scaffold.

## What gets built

- `npm create vite@latest` (react template) scaffolded into `frontend/`
  (Vite 7 + React 19).
- Tailwind v4 wired via `@tailwindcss/vite` in `vite.config.js` (no
  `tailwind.config.js`).
- Dependencies installed: `react-router-dom`, `axios`, `react-hook-form`,
  `react-icons`, `react-tooltip`, `react-hot-toast`, `motion`. Dev deps:
  `vitest`, Testing Library, `jsdom` (test config in `vite.config.js` per
  CLAUDE.md).
- `src/App.jsx` — `createBrowserRouter` with a single `/` route (leaves room
  for future routes without restructuring).
- `src/components/Header.jsx` — empty header, label text only.
- `src/components/Footer.jsx` — empty footer, label text only.
- `src/pages/Home.jsx` — `<h1>` only, no other content.
- A thin layout wrapper renders Header + `<Outlet />` + Footer.

## Out of scope

- Backend of any kind.
- Real visual design/styling pass (colors, fonts, layout polish).
- Any data fetching, forms, tooltips, or toasts (packages installed, not used).
- Auth, admin panel.

## Testing

Vitest + Testing Library config wired per CLAUDE.md conventions; no test
files written yet since there's no behavior to test.
