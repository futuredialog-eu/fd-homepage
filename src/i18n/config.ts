export const locales = ['en', 'et', 'fi'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  et: 'Eesti',
  fi: 'Suomi',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  et: 'et_EE',
  fi: 'fi_FI',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Reads the locale from a pathname such as `/et/contacts/`. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes a root-relative path with the configured `base` path. */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}

/** Prefixes a root-relative path with the locale, except for the default locale. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/')) return path;
  if (locale === defaultLocale) return withBase(path);
  return withBase(`/${locale}${path}`);
}
