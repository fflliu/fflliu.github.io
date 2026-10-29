# Fan Liu — Academic Homepage

Prepared for repository `fflliu/fflliu.github.io` and site URL `https://fflliu.github.io/`.

Static personal website for GitHub Pages. The published files are at the repository root.

## Content

- `index.html`: layout, English content, and page metadata.
- `app.js`: interactions and English/Chinese translations.
- `profile.js`: contact links, publications, and optional profile photo.
- `styles.css`: responsive styling.

After changing JavaScript or CSS, update the matching `?v=` content hash in `index.html` so browsers load the latest version. Keep both languages in sync and update the footer’s last-updated date when editing content.

## Preview

Run a static HTTP server from this directory, for example `python3 -m http.server 4173`, and open its local URL.

## Hosting

Use GitHub Pages with the `main` branch and `/ (root)` folder. `.nojekyll` keeps the site as plain static files.

See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Visitor counter

The footer shows shared homepage page views using [CountAPI](https://countapi.mileshilliard.com/), with key `fflliu-github-io-homepage-views`. The public homepage increments once per page load; anchor navigation does not increment again. Local previews only read the total and show zero before the first published visit. The counter starts when enabled and does not recover earlier traffic.

## Visitor map

The Views link opens `visitors.html` on this website in a new tab. That page displays only the world map, without the provider's dashboard or navigation. Its public widget URL and tracking image are configured in `profile.js`. Tracking runs only on the published HTTPS homepage at `fflliu.github.io`; local previews do not load the tracking image. Locations are approximate IP-based estimates, and VPN traffic can show the exit server's location. The numeric Views counter and geographic map use separate providers and can apply different counting rules.

The map page uses public-domain [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/) outlines for an empty local preview and loads the live visitor image only on the published host. Its `profile.js?v=` hash must also be updated if the profile configuration changes.
