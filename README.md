# Mehmet Firat — Simple GitHub Portfolio

This version is intentionally simple: **one editable `index.html` file** plus the images/PDFs it uses.
There is no JavaScript, no framework, and no build step.

## Put it on GitHub Pages

1. Open your `malifirat.github.io` repository on GitHub.
2. Delete the old portfolio files (or replace them with this version).
3. Upload **everything inside this folder** so `index.html` is at the top level of the repository.
4. Commit the changes.
5. Your site should update at `https://malifirat.github.io/` after GitHub Pages finishes deploying.

## Edit the website directly on GitHub

1. Open `index.html` in your GitHub repository.
2. Click the pencil icon **Edit this file**.
3. Search for the comments that start with `EDIT THIS:`.
4. Change the text you want.
5. Click **Commit changes**.

Almost all normal editing is done in `index.html`.

## Add another project

Inside `index.html`, find the Projects section. Copy one complete block that starts with:

```html
<article class="project">
```

and ends with:

```html
</article>
```

Paste it below another project and change the number, title, description, links, and image.

Put new images in `assets/images/` and PDFs in `assets/docs/`.
