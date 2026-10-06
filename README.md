# Mehmet Firat — GitHub Pages Portfolio

This folder is a complete static portfolio site. It does not need Node, React, a database, or a build step.

## What is included

- Home page with selected work, experience, skills, resume, email, and LinkedIn
- Project pages for:
  - HydroFleet soil sampling mechanism
  - Rocky balancing robot
  - Spacecraft re-entry thermal model
  - Formula dashboard & enclosure
  - Masterpiece automated chessboard
  - Parallelometer angle instrument
- Full PDF reports for Rocky and Spacecraft Re-entry
- Current resume PDF
- Responsive mobile navigation
- Local images and CSS; no framework dependency

## Put it on GitHub Pages

### Best option: personal site

1. Sign into GitHub.
2. Create a **public** repository named exactly:
   `YOUR-GITHUB-USERNAME.github.io`
3. Upload the contents of this folder to the **root** of that repository. `index.html` should be at the top level.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. After GitHub finishes publishing, the site will be at:
   `https://YOUR-GITHUB-USERNAME.github.io/`

### Alternative: project repository

You can instead use a repository such as `portfolio`. The site will publish at:
`https://YOUR-GITHUB-USERNAME.github.io/portfolio/`

The site uses relative links, so it works in either setup.

## Things to update first

Search the files for these values when you want to change them:

- `mfirat@olin.edu` — current contact email
- `https://www.linkedin.com/in/mehmetafirat` — LinkedIn
- `Expected May 2028` / `2028` — graduation date
- `3.92` — GPA if it changes

The current resume PDF still contains the old Adobe Portfolio URL. Once your GitHub URL is final, update the resume source and replace:
`assets/docs/Mehmet_Firat_Resume.pdf`

## Editing projects later

- Home project cards: `index.html`
- Individual project pages: `projects/*.html`
- Site appearance: `assets/css/styles.css`
- Images: `assets/images/`
- Resume and reports: `assets/docs/`

You can edit HTML directly in GitHub by opening a file and clicking the pencil icon.

## Optional custom domain later

After graduation, you can point a custom domain (for example, `mehmetfirat.com`) to this same GitHub Pages repository. The portfolio files do not need to be rebuilt.
