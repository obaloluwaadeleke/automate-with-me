# Obaloluwa Adeleke: AI Automation Portfolio

Vite + React + Tailwind v4. A static single-page app with case-study routes at `/work/:slug`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5190
npm run build      # outputs to dist/
```

## Editing content

You shouldn't need to touch the components to update the content.

| What | Where |
|---|---|
| Name, email, links, stats, services, process, toolkit | `src/data/site.js` |
| Projects and case studies | `src/data/projects.js` |
| Images | `public/images/` |
| Share preview image | `public/og-image.jpg` (1200×630) |

### Adding a project

Add an object to the `projects` array in `src/data/projects.js`, copying an existing entry's shape. The home page card,
the case-study page and the workflow diagram are all generated from it.
`flow` node kinds are `trigger`, `ai`, `logic`, `data` and `action`. Add `branches: [...]` to a node to show it as a decision.

## Deploy to Vercel

**Option A: GitHub (recommended, redeploys on every push)**
1. Push this folder to a new GitHub repo.
2. In vercel.com, go to Add New → Project, import the repo, and keep the defaults (Vite preset, `npm run build`, output `dist`).

**Option B: CLI**
```bash
npx vercel        # first run asks you to log in and link the project
npx vercel --prod
```

`vercel.json` rewrites every route to `index.html`, so `/work/...` URLs keep working on refresh.

### After the first deploy
Replace the relative `og:image` / `twitter:image` values in `index.html` with the full URL
(for example `https://your-project.vercel.app/og-image.jpg`). LinkedIn, X and WhatsApp previews need an absolute URL.
