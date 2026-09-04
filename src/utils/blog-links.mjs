const BLOG_DIR = '/src/content/blog/';

/**
 * Sätteri hast plugin that rewrites root-relative links and images in blog
 * markdown to the deployed, locale-prefixed path. The locale is taken from the
 * content directory the file lives in.
 */
export function blogLinks({ base = '', locales = [], defaultLocale = '' } = {}) {
  return ({ fileURL }) => {
    const path = fileURL?.pathname ?? '';
    const index = path.indexOf(BLOG_DIR);
    if (index === -1) return false;

    const locale = path.slice(index + BLOG_DIR.length).split('/')[0];
    if (!locales.includes(locale)) return false;

    const prefix = locale === defaultLocale ? base : `${base}/${locale}`;

    return {
      name: 'blog-links',
      element: {
        filter: ['a', 'img'],
        visit(node, ctx) {
          const attribute = node.tagName === 'a' ? 'href' : 'src';
          const value = node.properties?.[attribute];
          if (typeof value !== 'string' || !value.startsWith('/')) return;
          ctx.setProperty(node, attribute, `${prefix}${value}`);
        },
      },
    };
  };
}
