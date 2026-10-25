# New Custom Test

A production-ready React web application scaffold.

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | React | 19.3.1 |
| Language | TypeScript | 7.0.2 |
| Build tool | Vite | 8.3.5 |
| Styling | Tailwind CSS | 4.3.3 |
| State management | Redux Toolkit | 2.13.0 |
| Package manager | npm | — |

## Getting Started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check then bundle for production |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Run ESLint (flat config, TypeScript-aware) |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```
src/
├── app/
│   ├── hooks.ts          # Typed useAppDispatch / useAppSelector
│   └── store.ts          # Redux store + RootState / AppDispatch types
├── features/
│   └── counter/          # Example slice — delete and replace with real features
│       ├── Counter.tsx
│       └── counterSlice.ts
├── App.tsx
├── index.css             # Tailwind v4 entry (@import "tailwindcss")
├── main.tsx              # React root + Redux Provider
└── vite-env.d.ts
```

## Adding a Feature

1. Create `src/features/<name>/<name>Slice.ts` — define state, reducers, selectors.
2. Register the reducer in `src/app/store.ts`.
3. Build components in `src/features/<name>/` using `useAppSelector` / `useAppDispatch`.

## Tooling Notes

- **ESLint** uses the v10 flat-config format (`eslint.config.js`). TypeScript rules via `typescript-eslint`, React rules via `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.
- **Prettier** config is in `.prettierrc` (no semicolons, single quotes, 100-char print width).
- **Tailwind CSS v4** is configured CSS-first — `src/index.css` imports Tailwind via `@import "tailwindcss"`. No `tailwind.config.*` file needed for basic use; extend via `@theme` blocks in CSS.
- **Redux Toolkit** typed hooks (`useAppDispatch`, `useAppSelector`) are in `src/app/hooks.ts` — import from there, not from `react-redux` directly.

## Security Audit

Run `npm audit` to check for known vulnerabilities.

**Last audit (2026-10-25):** `found 0 vulnerabilities` across 183 packages.
