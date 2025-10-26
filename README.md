# Team Dirt — Static Site (GitHub Pages)

This is a no-build static site using Tailwind CDN for fast deployment on GitHub Pages.

## Quick Start
1. Create a new repo on GitHub (e.g., `teamdirt.ph`).
2. Upload these files to the repository root.
3. In **Settings → Pages**, set the branch to `main` and folder to `/root` (or `/docs` if you move files).
4. (Custom domain) Add a `CNAME` file with `teamdirt.ph` and set DNS:
   - `A` @ → 185.199.108.153
   - `A` @ → 185.199.109.153
   - `A` @ → 185.199.110.153
   - `A` @ → 185.199.111.153
   - (Optional) `AAAA` @ → 2606:50c0:8000::153, ::109, ::110, ::111
5. Back in Pages settings, enable **Enforce HTTPS**.
6. Replace placeholder logos in `/assets/img/` and texts in `index.html`.

## Sections to customize
- Hero copy & photos
- Upcoming races (cards)
- Sponsors logos in `/assets/img/`
- Formspree endpoint in the contact form

## Notes
- The Tailwind Play CDN is suitable for simple/static pages. For larger sites, migrate to Astro/Eleventy with a build step via GitHub Actions.
