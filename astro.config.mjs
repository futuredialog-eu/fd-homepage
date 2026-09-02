// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // site: 'https://www.futuredialog.eu',
  site: 'https://futuredialog-eu.github.io',
  base: '/fd-homepage',
  i18n: {
    locales: ['en', 'et', 'fi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
