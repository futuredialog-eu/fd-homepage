import { getCollection, type CollectionEntry } from 'astro:content';
import { blogCategories, type BlogCategory } from '../data/blog';
import { defaultLocale, isLocale, locales, type Locale } from '../i18n';

export type BlogEntry = CollectionEntry<'blog'>;

const intlLocales: Record<Locale, string> = {
  en: 'en-US',
  et: 'et-EE',
  fi: 'fi-FI',
};

/** Content ids look like `et/3-reasons-to-use-a-community-engagement-app`. */
export function entryLocale(entry: BlogEntry): Locale {
  const segment = entry.id.split('/')[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function entrySlug(entry: BlogEntry): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Root-relative path without the locale prefix. */
export function postPath(entry: BlogEntry): string {
  return `/blog/${entrySlug(entry)}/`;
}

/** Root-relative path without the locale prefix. */
export function categoryPath(category: BlogCategory): string {
  return `/blog/category/${category}/`;
}

export async function getPosts(locale: Locale, category?: BlogCategory): Promise<BlogEntry[]> {
  const posts = await getCollection(
    'blog',
    (entry: BlogEntry) =>
      entryLocale(entry) === locale && (!category || entry.data.categories.includes(category)),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Categories that have at least one post in the given locale. */
export async function getUsedCategories(locale: Locale): Promise<BlogCategory[]> {
  const posts = await getPosts(locale);
  const used = new Set(posts.flatMap((post) => post.data.categories));
  return blogCategories.filter((category) => used.has(category));
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocales[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

function pathsByLocale(resolve: (locale: Locale) => string | undefined): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, resolve(locale) ?? '/blog/']),
  ) as Record<Locale, string>;
}

/**
 * Path to use per locale for the language switcher and the `hreflang`
 * alternates. Post slugs are localized, so the variants are matched on
 * `translationKey`; a locale without a translation falls back to its blog index.
 */
export async function postLocalePaths(entry: BlogEntry): Promise<Record<Locale, string>> {
  const translations = await getCollection(
    'blog',
    (candidate: BlogEntry) => candidate.data.translationKey === entry.data.translationKey,
  );
  const paths = new Map(translations.map((post) => [entryLocale(post), postPath(post)]));
  return pathsByLocale((locale) => paths.get(locale));
}

/** As `postLocalePaths`, for a category that may be empty in some locales. */
export async function categoryLocalePaths(
  category: BlogCategory,
): Promise<Record<Locale, string>> {
  const used = await Promise.all(
    locales.map(async (locale) => [locale, await getUsedCategories(locale)] as const),
  );
  const available = new Map(used);
  return pathsByLocale((locale) =>
    available.get(locale)?.includes(category) ? categoryPath(category) : undefined,
  );
}
