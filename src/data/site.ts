/** The site's origin is not here: absolute URLs come from `site` + `base` in
 *  astro.config.mjs, read as `Astro.site` and `withBase()`. */
export const site = {
  name: 'Future Dialog',
  organization: 'Future Dialog OÜ',
  /** Root-relative; made absolute for structured data at render time. */
  logo: '/images/logo.jpg',
  /** Root-relative, 1200×630; the social preview for pages without their own image. */
  ogImage: '/images/og-default.jpg',
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
  { icon: 'social-in', label: 'LinkedIn', href: 'https://www.linkedin.com/company/futuredialog/' },
  { icon: 'social-fb', label: 'Facebook', href: 'https://www.facebook.com/futuredialog/' },
  { icon: 'social-tw', label: 'X', href: 'https://x.com/FutureDialog' },
];

export const footer = {
  easHref: 'https://futuredialog.co/future-dialog-arendusosak-2014-2020-4-04-22-2301/',
  easImage: '/images/EAS.png',
};
