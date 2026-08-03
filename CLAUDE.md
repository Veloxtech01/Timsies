# CLAUDE.md

Project-specific instructions for Claude Code. Read this before making changes.

---

## Project overview

**Timsies Entirety** — a marketing website for a residential and commercial
cleaning services company. Timsies Entirety provides routine maintenance,
deep cleaning, and specialized cleaning services using eco-friendly products
and advanced techniques, for homes and businesses.

Intended long-term shape is the same MERN stack as our other projects
(**MongoDB + Express + React + Node**), structured as a two-package repo with
a React/Vite client and an Express/Node API server — carried over so tooling
and conventions stay consistent across projects.

```
/FRONTEND   React 19 + Vite 7 client
/BACKEND    Express 5 + Node API, Mongoose models (not being built yet)
```

> **Status: frontend-only, greenfield.** We are currently building **only the
> `/FRONTEND`** — a marketing site with no admin panel and no authentication.
> There is no backend yet and no live API calls; content is static/local for
> now. `/BACKEND` and its stack below are the _intended future_ target,
> carried over from a sibling project — do not scaffold or build it until
> asked. The frontend stack/conventions are not yet verified against a real
> `package.json`. When scaffolding, follow them; if you deviate, update this
> file in the same change.

---

## Tech stack (frontend — intended)

| Concern   | Library                               | Notes that matter                                          |
| --------- | ------------------------------------- | ---------------------------------------------------------- |
| Build/dev | `vite` 7                              | ESM-only, fast HMR                                         |
| UI        | `react` / `react-dom` 19              | New JSX transform — no `import React` needed for JSX       |
| Styling   | `tailwindcss` 4 + `@tailwindcss/vite` | **v4 — CSS-first config, NOT v3** (see below)              |
| Routing   | `react-router-dom` 7                  | Data Router APIs available                                 |
| HTTP      | `axios` 1                             | Use one shared instance (see below)                        |
| Forms     | `react-hook-form` 7                   | Uncontrolled-first; prefer over manual `useState` forms    |
| Icons     | `react-icons` 5                       | Import per-icon from the specific set                      |
| Tooltips  | `react-tooltip` 5                     |                                                            |
| Toasts    | `react-hot-toast` (preferred)         | Use `react-hot-toast` for toasts; `react-toastify` removed |
| Animation | `motion` (Framer Motion)              | **Default animation library** — use for all animations     |
| Charts    | `recharts` 3                          | Default chart library                                      |
| Tests     | `vitest` 4 + Testing Library + jsdom  | Config lives in `vite.config.js`                           |

## Tech stack (backend — intended, not being built yet)

> **Not in scope right now.** No backend work should happen until asked —
> this is documented so the stack is settled whenever that phase starts.

Express 5, Mongoose 9, `jsonwebtoken` + `bcrypt` (cookie auth), `multer` +
`cloudinary` (image uploads), `resend` (email), `winston` (logging),
`express-rate-limit`, `cors`, `cookie-parser`, `dotenv`. ESM (`"type": "module"`)
— use `import`, not `require`. Tests: `vitest` + `supertest` +
`mongodb-memory-server`, config in `BACKEND/vitest.config.js`.

---

## Commands

```bash
# Frontend (run inside /FRONTEND)
npm run dev        # Vite dev server
npm run build      # production build
npm run preview    # preview the build
npm run lint       # eslint
npm test           # vitest run

# Backend (future — /BACKEND does not exist yet, not runnable today)
npm run dev        # nodemon index.js
npm start          # node index.js
npm run lint       # eslint
npm test           # vitest run
```

When unsure which package a command belongs to, check the `scripts` block of
the relevant `package.json` rather than guessing. Do not assume a root-level
script exists unless you've seen it.

---

## Frontend conventions

### Tailwind CSS v4 — read this carefully

This project uses **Tailwind v4**, which is configured very differently from v3.
Do **not** apply v3 patterns.

- The Vite plugin (`@tailwindcss/vite`) handles everything. It's registered in
  `FRONTEND/vite.config.js`:

  ```js
  import tailwindcss from "@tailwindcss/vite";
  export default defineConfig({ plugins: [tailwindcss(), react()] });
  ```

- There is no `tailwind.config.js`. Theme customization goes in CSS via
  `@theme` in `FRONTEND/src/index.css`.

### React 19

- New JSX transform: don't add `import React from 'react'` just to use JSX.
  Import hooks directly: `import { useState, useEffect } from 'react'`.
- `ref` is a regular prop on function components — **don't reach for
  `forwardRef`** unless interacting with older code that needs it.
- Prefer modern primitives where they fit: `use()`, `useActionState`,
  `useOptimistic`, form actions. Don't force them where a plain handler is clearer.

### Routing (React Router v7)

- Routes are centralized in `createBrowserRouter` in `FRONTEND/src/App.jsx`.
  Add new routes there; don't introduce a second `<Routes>` tree.
- Use `<Link>` / `<NavLink>` for navigation and `useNavigate` for imperative
  navigation. Never use raw `<a href>` for internal routes.
- The router does **not** use loaders/actions — data is fetched in components.
  Don't introduce loaders.

### Data fetching (Axios)

> **Not needed yet.** There's no backend/API right now, so don't wire up
> real requests — this pattern is for when `/BACKEND` exists.

- Use a **single shared Axios instance** at
  [FRONTEND/src/api/axiosApi.js](FRONTEND/src/api/axiosApi.js) — never bare
  `axios.get(...)` at call sites. Configure it with `withCredentials: true`
  (cookie auth) and a JSON `Content-Type`.
- Put auth headers, error normalization, and 401 handling in **interceptors**,
  not in every call site.
- The base URL comes from `import.meta.env.VITE_REACT_APP_BASE_URL`. Never
  hardcode `localhost:PORT`.

### Forms (react-hook-form)

- Use `react-hook-form` for any form with more than one field. Don't build
  manual `useState`-per-input forms.
- Validate via the library's `register` rules (or a resolver if one is added —
  none is installed yet, so no Zod/Yup unless added). Surface errors near fields.

### Icons & tooltips

- `react-icons`: import the specific icon from its set,
  e.g. `import { FiMenu } from 'react-icons/fi'`. Don't import the whole set.
- `react-tooltip` v5 uses the `data-tooltip-id` API plus a single `<Tooltip />`
  instance — not the legacy `data-tip` attribute.

### Toasts (react-hot-toast)

- Use `react-hot-toast` for transient notifications. `react-toastify` has been removed from the frontend dependencies.
- Create a single `<Toaster />` near your app root and call `toast()` from components or hooks.

---

## Backend conventions (Express/Node) — future phase, not built yet

> No `/BACKEND` work is in scope right now — no resources/models have been
> decided yet. This section documents *structure and style* to follow
> whenever backend work starts, not what to build.

Target layout under `/BACKEND`:

```
index.js        server entry (starts HTTP server)
app.js          createApp() — Express app, CORS, routes mounted under /api
routes/         one file per resource
controllers/    one file per resource, business logic
model/          Mongoose schemas (singular "model", not "models")
middleware/     verifyToken, authorizeRole, upload (multer), rateLimiter
utils/          emailService, logger
config/         db.js (Mongoose connection), cloudinary.js
emails/         email templates
tests/          vitest + supertest + mongodb-memory-server
```

- Keep route files thin; business logic goes in controllers, shared helpers in
  `utils/`. There is no separate `services/` layer — don't add one.
- Mongoose schemas in `BACKEND/model`, one per file, named `xModel.js`.
- All secrets and connection strings come from environment variables via
  `process.env`. **Never** commit or hardcode them, and never put them in client
  code (only `VITE_`-prefixed vars reach the browser, by design).
- Centralized error-handling middleware; controllers should `throw` or
  `next(err)` rather than sending ad-hoc error responses.
- Validate request input at the boundary before it reaches the database.
- Consistent JSON response shape across endpoints (pick one and stick to it).

---

## Environments (MongoDB) — future phase, not set up yet

There is no database, Atlas cluster, or `/BACKEND/.env` for this project yet.
The dev/prod-separate-database pattern used on sibling projects (e.g. a shared
Atlas cluster with distinct prod/dev database names) is the likely direction,
but the actual cluster and db names for Timsies Entirety are undecided —
confirm with the user before assuming any specific cluster or naming when this
phase starts.

---

## Design & UI tools — always use these for UI work

When building any page, component, or UI feature:

1. **Invoke `ui-ux-pro-max` skill first** — establishes style, palette, font pairing, layout, and component choices before writing code. Never skip this for page-level or component-level UI tasks.
2. **Use the shadcn/ui MCP server if it is connected** — query it for accurate component examples and usage patterns rather than relying on memory for shadcn APIs. It is _not_ currently in the connected server list; if it's missing, say so instead of guessing component APIs.

---

## Code style

- Match existing formatting (Prettier/ESLint config if present) — don't reformat
  unrelated lines in a diff.
- Components: PascalCase files for components, camelCase for hooks/utilities.
- Keep components focused; extract shared logic into hooks (`useX`) rather than
  duplicating.
- No new dependencies without flagging it first — call out the addition and why.

### Comments (required)

**Every piece of functional code you generate must be commented — frontend and
backend, no exceptions.**

- Each function, component, hook, controller, middleware, model, and service
  gets a short block comment above it saying what it does, what it takes, and
  what it returns.
- Inside functions, add inline comments on non-obvious logic: conditionals,
  loops, async flows, socket handlers, DB queries, error branches.
- Explain **why**, not just **what** — the code already says what it does.
- Comment JSX sections in React components (layout regions, conditional
  renders, mapped lists) and each field/index in Mongoose schemas.
- Keep comments accurate when editing existing code — update stale ones instead
  of leaving them wrong.

# Token-saving rules

- Keep responses under 100 words.
- Do not narrate actions.
- Do not explain code unless asked.
- Make changes directly.
- Summarize edits in bullet points only.
- When working, provide status updates in one sentence only.
- Highlight every line of code you edit or add (e.g. via a code-link reference or inline callout) so the user can spot exactly what changed.

---

## When unsure

- Read the relevant `package.json`, `vite.config.js`, and existing files in the
  same folder before introducing a new pattern.
- Prefer matching an established pattern in the repo over a "more correct" one
  from scratch.
- If a request conflicts with these notes, ask rather than silently choosing.

---

## Before writing code

- Read the surrounding files.
- Match existing coding style.
- Prefer existing utilities.
- Don't introduce new libraries unless requested.
- Explain major architectural decisions.
- Keep commits small.
- Avoid duplicate code.
- Ask questions if requirements are ambiguous.
- Update documentation when features change.
