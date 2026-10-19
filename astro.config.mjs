// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to the real address once the site goes live.
const SITE = 'https://www.flyvacuum.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],

  // Addresses from the old website now lead to the new pages, so existing Google
  // results and bookmarks keep working.
  redirects: {
    '/about-us': '/about',
    '/contact-us': '/contact',
    '/vacuum-furnaces-gas-cooling': '/products/gas-cooling',
    '/vacuum-furnaces-oil-quenching': '/products/oil-quenching',
    '/vacuum-pumping-system': '/products/pumping-system',
    '/vacuum-hotzone': '/products/hot-zones',
    '/vacuum-oven': '/products/vacuum-oven',
    '/vacuum-induction-melting-furnace': '/products/induction-melting',
    '/thermal-vacuum-chambers': '/products/thermal-vacuum-chambers',
    '/vacuum-glove-box': '/products/glove-box',
    '/horizontal-vacuum-furnace-with-gas-quenching': '/products/gas-cooling/horizontal',
    '/vertical-vacuum-furnace-with-gas-quenching': '/products/gas-cooling/vertical',
    '/vacuum-furnaces-oil-quenching-inner': '/products/oil-quenching/dual-chamber',
  },
});
