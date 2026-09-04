/** The site's origin is not here: absolute URLs come from `site` + `base` in
 *  astro.config.mjs, read as `Astro.site` and `withBase()`. */
export const site = {
  name: 'Future Dialog',
  organization: 'Future Dialog OÜ',
  /** Root-relative; made absolute for structured data at render time. */
  logo: '/images/logo.jpg',
};

export const contact = {
  email: 'hello@futuredialog.eu',
  phone: '+37255983604',
  phoneHref: 'tel:37255983604',
  address: 'Kaasiku tn 6, Tallinn',
  addressHref: '',
  /** Root-relative, localized at render time. */
  demoPath: '/contacts/',
};

export const social = [
  { icon: 'social-in', href: 'https://www.linkedin.com/company/futuredialog/' },
  { icon: 'social-fb', href: 'https://www.facebook.com/futuredialog/' },
  { icon: 'social-tw', href: 'https://twitter.com/FutureDialog' },
];

export const footer = {
  easHref: 'https://futuredialog.co/future-dialog-arendusosak-2014-2020-4-04-22-2301/',
  easImage: '/images/EAS.png',
};
