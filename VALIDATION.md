# Validation · November 10, 2026

These are checked replacement files. The live GitHub Pages website has not been deployed from this package.

## Image repair

The live page returned successfully, but the four newly added image paths returned HTTP 404. The live shared CSS and JavaScript were also older than the files in the previous package.

The updated `index.html`, `cibo-vita.html`, and `robo-lab.html` now embed their images, styling, and JavaScript directly. The sampler page also embeds its short local video and poster. The original asset files remain in the complete package for the other pages and future editing.

## Passed checks

- The local reference check covered 20 HTML files and 244 file or section references, with no errors.
- The three replacement pages contain 15 image elements plus one video poster. Embedded image bytes decode and match their corresponding source files.
- All four previously missing images match the original supplied image bytes exactly.
- The three replacement pages have no external image, stylesheet, or JavaScript file dependencies. External links, linked reports, other pages, and YouTube remain separate resources.
- The embedded sampler MP4 matches the original 2,382,429-byte video.
- Browser review used copies extracted from the ZIP into a separate folder containing only the three HTML files, with no assets folder. All 15 image elements loaded successfully. The video reached ready state 4 and reported a duration of approximately 26.77 seconds.
- Desktop visual review covered the homepage, cart feature, both project introductions, and both holder-testing photographs.
- Responsive review used 390 px frames. Cibo Vita and RoboLab both had 375 px content widths after scrollbar space, with no horizontal overflow. The testing photographs loaded and stacked into one column.
- Cibo Vita and RoboLab use a single reading column with plain headings and paragraphs. Their previous sidebars and decision panels are absent.
- An independent package review confirmed that the three ZIP entries match the extracted HTML files byte-for-byte.
- The final ZIP integrity check passed, with `index.html` at the archive root. Preview-only pages and private working material are excluded.

## Content retained

The latest sampler CAD leads the project. Older prototypes and their measurements remain labeled as earlier stages. The mechanism description distinguishes the rotating nut from the fixed lead screw and preserves the limitations observed in soil testing.

The cart page distinguishes completed CAD and holder prototypes from the manufacturing handoff. The selected photographs show component and holder fit checks. The scraper work is described separately, and its result is presented as an installed test outcome.

## Limits

- Responsive checks used a desktop browser, not a physical phone or a complete browser matrix.
- External YouTube playback and Google Drive sharing were not newly verified.
- Current numerical gear ratios, final sampler mass, and achieved soil depth remain unconfirmed. See `REVIEW-BEFORE-PUBLISH.txt`.
- Existing resumes and older reports are retained and may describe a different prototype stage.
