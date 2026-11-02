# Personal Academic Website

React + Tailwind CSS site, deployed to GitHub Pages.

## Editing content

**Almost everything lives in [`src/content.js`](src/content.js).** Replace every `[placeholder]` there.

| What | Where |
|---|---|
| Name, bio, research interests, email, links | `profile` in `src/content.js` |
| Projects page | `projects` in `src/content.js` |
| Publications page (papers, posters, talks) | `publications` and `presentations` in `src/content.js` |
| CV | Replace `public/cv.pdf` (keep the filename) |
| Headshot | Add `public/headshot.jpg`, then set `headshot: 'headshot.jpg'` in `src/content.js` |

## Running locally

```bash
npm install
npm run dev
```

## Deploying

Every push to `main` builds and deploys the site through `.github/workflows/deploy.yml`.
One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
The repo must be public on a free GitHub plan.

The build uses relative paths (`base: './'`) and hash routes (`#/projects`), so it works unchanged at
`username.github.io/repo-name/` or at `username.github.io/` (repo named `username.github.io`).
