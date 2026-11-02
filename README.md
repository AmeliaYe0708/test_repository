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

## Adding files (PDFs, PowerPoints, pictures)

1. Put the file in `public/files/`, e.g. `public/files/my-paper.pdf`.
   Use lowercase names without spaces.
2. In `src/content.js`, add it to that entry's `files` list:
   ```js
   files: [
     { label: 'Paper (PDF)', file: 'files/my-paper.pdf' },
   ],
   ```
3. Clicking the entry's card opens its page, which shows a preview frame per file
   (PDF → first page, picture → the part that fits, PowerPoint → Microsoft's slide viewer on the live site)
   with Open and Download buttons.

The `public/files/example-*` files are placeholders; delete them once you've added your own
(and remove them from `files` lists in `src/content.js`).

To add a link (arXiv, OpenReview, code, slides, video), fill in the entry's `links` in `src/content.js`.
Empty links are hidden.

**Uploading on github.com:** open the repo, switch to your branch, go into `public/files`,
then **Add file → Upload files**. GitHub's web upload accepts files up to 25 MB each.

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
