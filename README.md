# Quintas Technology Partners website

Astro static site for quintastechnology.com.

- `npm install`, then `npm run dev` for local development, `npm run build` to produce `dist/`.
- Content lives in Markdown under `src/content/`: `capabilities/`, `industries/`, `insights/` (blog). Add a file to add a page.
- Contact details, address and form endpoint are in `src/site.ts` (items marked TODO need confirming).

## Hosting

Deployed on Vercel. Import the repo at vercel.com/new; settings come from `vercel.json` (build `npm run build`, output `dist`). Every pull request gets its own preview URL, and merges to `main` deploy to production.
