# Validation

Completed before packaging:

- All 9 HTML pages have a title, one primary heading, and an English language declaration
- All relative file links and section anchors resolve within the upload folder
- All 47 referenced local image files decode successfully; project imagery and selected PDF figures were visually inspected
- All three supplied PDF reports and the supplied résumé match their original bytes
- All 9 YouTube video IDs returned metadata and an embed URL from YouTube
- The local MP4 was checked with ffprobe: H.264 video, AAC audio, 360 × 640, 26.77 seconds
- JavaScript syntax passes; click-to-play URL creation, accessible title, focus, and repeated-click behavior pass an isolated DOM test
- The ZIP has `index.html` directly at its root and contains no build dependencies, credentials, or temporary research files

Not verified:

- Desktop/mobile visual rendering and real-browser interaction tests could not run in the available preview environment. Responsive layouts are implemented at 1000, 700, and 390 px, but are not claimed as browser-tested
- YouTube playback was not tested end to end; metadata availability does not guarantee playback for every visitor
- Google Drive links are preserved from the old site; the Rainbow Road report was inspected for this revision, while the other linked reports/slides were not independently audited
- GitHub Pages deployment was not run; this package is ready for you to upload, not already published

Before publishing, open `index.html` on your computer, check a narrow/mobile window, and try the videos and external report links. Review the full reports, since publishing this folder makes them public too.
