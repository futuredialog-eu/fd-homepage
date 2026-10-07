// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { blogLinks } from './src/utils/blog-links.mjs';

// Every absolute URL on the site derives from this pair, so they are the only
// two values to change when the deployment target moves. Currently a GitHub
// Pages project site: https://futuredialog-eu.github.io/fd-homepage/
// To serve from a domain root instead, set `site` to that domain and `base` to '/'.
const site = 'https://www.futuredialog.eu';
const base = '/';

/** `base` without a trailing slash, and empty when serving from the root. */
const basePrefix = base === '/' ? '' : base.replace(/\/$/, '');

const locales = ['en', 'et', 'fi', 'de'];
const defaultLocale = 'en';

// https://astro.build/config
export default defineConfig({
  site,
  base,

  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },

  markdown: {
    processor: satteri({
      hastPlugins: [blogLinks({ base: basePrefix, locales, defaultLocale })],
    }),
  },

  integrations: [sitemap()],
});
