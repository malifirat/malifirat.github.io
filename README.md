# Mehmet Firat · Portfolio

A static, GitHub Pages-ready portfolio. Open `index.html` to preview it. No installation, build step, framework, or API key is needed.

## Put it on GitHub

1. Unzip this download. Upload **the contents**, not the ZIP or an extra enclosing folder.
2. Open your `malifirat/malifirat.github.io` repository (or create it if needed). Back up any old site files you want to keep.
3. Choose **Add file → Upload files**. Drag in the HTML files, the `assets` folder, and the other root files. `index.html` must be at the repository root. Include `.nojekyll` if your file manager shows hidden files; the site also works without it.
4. Commit the upload to `main`. If GitHub requires a new branch, open and merge its pull request when you are ready to publish.
5. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
6. Once GitHub finishes publishing, visit **https://malifirat.github.io/**. Changes can take up to 10 minutes to appear.

Uploading to a public repository and enabling Pages makes the site and its included reports public. Nothing has been published for you.

Official guidance: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) · [Uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## What is included

- `index.html`: introduction, six selected projects, about, and contact
- `masterpiece.html`: self-playing chessboard, contribution details, photos, and demo
- `robo-lab.html`: soil sampler, prototype iterations, photos, and videos
- `rocky.html`: balancing-robot controls, extracted figures, demo, and full report
- `reentry.html`: simplified re-entry heating/ablation model, figures, and full report
- `formula.html`: dashboard and electronics enclosure
- `line-following-robot.html`: sensing, control, calibration, and robot demo
- `coursework.html`: all 12 smaller projects from the old coursework page
- `assets/images/`: local project photography, CAD images, report figures, and portrait
- `assets/reports/`: the two new reports, kept unchanged
- `assets/videos/`: the original 27-second Robo Lab test, copied locally
- `assets/style.css` and `assets/site.js`: presentation and click-to-play video behavior
- `SOURCES.md`: source records, team attribution, and external dependencies

## What still uses the internet

All photographs, figures, the portrait, the two new PDFs, and the original Adobe-hosted test clip are bundled. The site does not need Adobe Portfolio for these files.

Nine existing YouTube videos remain embedded rather than being copied. They load only after Play is clicked, and each has a direct YouTube link if embedding is unavailable. Playback depends on YouTube and the uploader's settings. The preview image on each video is a related project image, not necessarily a frame from that video. No external video loads automatically.

The old coursework reports and two design-review slide decks retain their original Google Drive links. They are labeled as external links; verify their sharing settings before public launch. The Masterpiece team site, Hangman project site, GitHub, and LinkedIn also remain external.

## Easy edits

Open the relevant `.html` file in any text editor to change its wording or links. Search for `mfirat@olin.edu` to change the email. Styling is in `assets/style.css`; video behavior is in `assets/site.js`. There is no generated build output to maintain.

To add a project, duplicate a case-study HTML page and add its card in `index.html`. Keep paths relative (for example, `assets/images/photo.jpg`) so they also work if the site is put inside a project repository.

To add a resume, place a public-safe PDF in `assets/reports/` and add a link in the header or About section. A resume was not copied automatically, avoiding publication of an unreviewed address or other private details.

## Optional local server

Double-clicking `index.html` previews the site and local photos. YouTube may restrict embeds on `file://` pages; direct video links still work. If Python is installed, run `python3 -m http.server 8000` from this folder and open `http://localhost:8000` for an HTTP preview. GitHub Pages uses HTTPS when published.

## Content notes

The chessboard's demonstrated result is computer-vs-computer play; human-move sensing is identified as an unfinished stretch goal. Robo Lab performance values are design targets. Rocky plots are identified as simulations. The re-entry result of roughly 0.7 kg of ablation is explicitly a prediction from a simplified, unvalidated educational model. Team contributions are distinguished from individual ones.
