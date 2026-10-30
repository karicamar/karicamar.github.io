# Portfolio: amar karic

Static, bilingual (DE/EN) portfolio site. No framework, no build step, no cookies, no tracking, no third-party requests.

- **Language:** German browsers get German automatically, everyone else English. The toggle in the header switches, and the choice is remembered.
- **Theme:** follows the OS dark/light setting, with a toggle.
- **Privacy & security:** a strict Content-Security-Policy via `<meta>`, no external fonts (Google Fonts are a GDPR risk in Germany), and no inline scripts.
- **Accessibility:** skip link, visible focus styles, `prefers-reduced-motion` support, alt texts.

## Preview locally

Open `index.html` in a browser, or:

```bash
npx serve portfolio
```

## Deploy to GitHub Pages

1. Create a public repository named **`karicamar.github.io`**.
2. Copy the contents of this folder into it and push.
3. The site is live at `https://karicamar.github.io` within about a minute.

## Updating

Text lives directly in `index.html`. Each sentence exists twice, as `<span lang="en">` and `<span lang="de">`,
and CSS shows only the active language. Keep both in sync when you edit.
