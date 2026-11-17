# FedM²Rec project website

Project page for **Federated Multimodal and Multi-Objective Recommendations with Security and Privacy Guarantees**, served at **https://vinuni-fedm2rec.github.io/**.

Structure follows the VinUni Medical MT page (Academic Project Page Template, adapted from Nerfies): header + news → overview → publications → prototype → team → others → footer.

## Files

- `index.html` — all content, taken from the Google Sheet "FedM²Rec Project Website — Content Collection" (tabs Site info, Team members, Publications, News, Others). Search for `TODO (sheet:` to find rows still empty in the sheet.
- `static/css/index.css` — styles.
- `static/js/index.js` — scroll-to-top button, Abstract/BibTeX toggles, BibTeX copy.
- `static/images/` — `vinuni-logo.png` is the header logo and favicon; add `cover.jpg` (1200×630 share image), and team photos (currently loaded from the Google Drive links in the sheet).

## Preview locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Deploy to vinuni-fedm2rec.github.io

1. Create the GitHub organization `vinuni-fedm2rec` (github.com → Your organizations → New organization, Free plan).
2. Create a public repo named exactly `vinuni-fedm2rec.github.io` in that org.
3. Push this folder to the `main` branch. In repo Settings → Pages, set Source to "Deploy from a branch", `main` / root.
4. Add repo maintainers (sheet: Hosting → Repo maintainers) under the org's People / repo Collaborators.

## License

Site content: CC BY-SA 4.0.
