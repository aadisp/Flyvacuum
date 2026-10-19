# Flyvacuum Technologies website

Built with [Astro](https://astro.build). Static output, no database.

## Run it

```
npm install
npm run dev       # http://localhost:4321
npm run build     # production files in dist/
```

Needs Node 22.22 or newer.

## Where things live

| To change | Edit |
|---|---|
| Phone, email, address, form endpoint | `src/data/site.ts` |
| Product text, specs, size tables | `src/data/products.ts` |
| Datasheet list | `src/data/components.ts` (PDFs go in `public/datasheets/`) |
| Product photos | `src/assets/products/` (see below) |
| Colours and fonts | `src/styles/global.css` |
| Live web address, old-link redirects | `astro.config.mjs` |

## Product photos

Drop a photo into `src/assets/products/` and it appears on its page automatically.

- Main photo: name it after the page, for example `hot-zones.jpg`, or `gas-cooling-horizontal.jpg` for a model page.
- Extra photos: add a number, for example `hot-zones-2.jpg`, `hot-zones-3.jpg`.
- Page names: `gas-cooling`, `oil-quenching`, `pumping-system`, `hot-zones`, `vacuum-oven`, `induction-melting`,
  `thermal-vacuum-chambers`, `glove-box`, and the models `gas-cooling-horizontal`, `gas-cooling-vertical`,
  `oil-quenching-dual-chamber`.

The home page photos are `src/assets/hero.jpg`, `welcome.jpg`, `products.jpg` and `consumables.jpg`.

## Contact form

Paste a form service URL (for example a Formspree endpoint) into `formEndpoint` in `src/data/site.ts`.
Until then the form opens the visitor's email app.
