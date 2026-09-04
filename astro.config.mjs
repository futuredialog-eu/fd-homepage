// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { blogLinks } from './src/utils/blog-links.mjs';

// Every absolute URL on the site derives from this pair, so they are the only
// two values to change when the deployment target moves. Currently a GitHub
// Pages project site: https://futuredialog-eu.github.io/fd-homepage/
// To serve from a domain root instead, set `site` to that domain and `base` to '/'.
const site = 'https://futuredialog-eu.github.io';
const base = '/fd-homepage';

/** `base` without a trailing slash, and empty when serving from the root. */
const basePrefix = base === '/' ? '' : base.replace(/\/$/, '');

const locales = ['en', 'et', 'fi'];
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
  // Legacy WordPress URLs. Static builds emit a meta-refresh stub per entry
  // (GitHub Pages cannot serve a 301), and `base` is NOT applied to the
  // destination, so each one spells it out.
  redirects: {
    '/category/news/': `${basePrefix}/blog/`,
    '/et/category/uudised/': `${basePrefix}/et/blog/`,
    '/fi/category/uutiset/': `${basePrefix}/fi/blog/`,
    '/category/engagement/': `${basePrefix}/blog/category/engagement/`,
    '/category/municipality/': `${basePrefix}/blog/category/municipality/`,
    '/et/category/kaasamine/': `${basePrefix}/et/blog/category/engagement/`,
    '/et/category/omavalitsused/': `${basePrefix}/et/blog/category/municipality/`,
    '/fi/category/osallistaminen/': `${basePrefix}/fi/blog/category/engagement/`,
    '/fi/category/kunnat/': `${basePrefix}/fi/blog/category/municipality/`,
    '/municipality/10-benefits-of-using-community-apps-for-municipalities-and-communities/':
      `${basePrefix}/blog/10-benefits-of-using-community-apps-for-municipalities-and-communities/`,
    '/et/uudised/10-eelist-kogukonnaapi-kasutamiseks-omavalitsustele-ja-kogukondadele/':
      `${basePrefix}/et/blog/10-eelist-kogukonnaapi-kasutamiseks-omavalitsustele-ja-kogukondadele/`,
    '/news/3-reasons-to-use-a-community-engagement-app/':
      `${basePrefix}/blog/3-reasons-to-use-a-community-engagement-app/`,
    '/et/uudised/3-pohjust-miks-votta-kasutusele-kogukonnaapp/':
      `${basePrefix}/et/blog/3-pohjust-miks-votta-kasutusele-kogukonnaapp/`,
    '/fi/uutiset/3-syyta-kayttaa-yhteisosovellusta/':
      `${basePrefix}/fi/blog/3-syyta-kayttaa-yhteisosovellusta/`,
    '/news/from-ideation-to-creation-how-the-ambition-to-participate-in-decision-making-led-to-the-birth-of-a-community-app/':
      `${basePrefix}/blog/from-ideation-to-creation-how-the-ambition-to-participate-in-decision-making-led-to-the-birth-of-a-community-app/`,
    '/et/uudised/ideest-teostuseni-tahe-olla-kuulda-voetud-ja-osaleda-otsuste-tegemisel-viis-kogukonnaapini/':
      `${basePrefix}/et/blog/ideest-teostuseni-tahe-olla-kuulda-voetud-ja-osaleda-otsuste-tegemisel-viis-kogukonnaapini/`,
    '/fi/uutiset/ideasta-toteutukseen-halu-tulla-kuulluksi-ja-osallistua-paatoksentekoon-johti-yhteisosovellukseen/':
      `${basePrefix}/fi/blog/ideasta-toteutukseen-halu-tulla-kuulluksi-ja-osallistua-paatoksentekoon-johti-yhteisosovellukseen/`,
    '/news/fast-crisis-information-for-the-community-a-case-study-from-elva-municipality/':
      `${basePrefix}/blog/fast-crisis-information-for-the-community-a-case-study-from-elva-municipality/`,
    // The Estonian original sat under the /omavalitsused/ prefix, not /uudised/.
    '/et/omavalitsused/kriisiinfo-kiirelt-kogukonnani-api-abiga-kogemuslugu-elva-vallalt/':
      `${basePrefix}/et/blog/kriisiinfo-kiirelt-kogukonnani-api-abiga-kogemuslugu-elva-vallalt/`,
    '/fi/uutiset/kriisitiedot-nopeasti-yhteison-tietoon-sovelluksen-avulla-kokemustarina-elvan-kunnalta/':
      `${basePrefix}/fi/blog/kriisitiedot-nopeasti-yhteison-tietoon-sovelluksen-avulla-kokemustarina-elvan-kunnalta/`,
  },
  markdown: {
    processor: satteri({
      hastPlugins: [blogLinks({ base: basePrefix, locales, defaultLocale })],
    }),
  },
});
