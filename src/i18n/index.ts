import { defaultLocale, type Locale } from './config';
import { en } from './en';
import { et } from './et';
import { fi } from './fi';
import type { Content } from './types';

const content: Record<Locale, Content> = { en, et, fi };

export function getContent(locale: Locale): Content {
  return content[locale] ?? content[defaultLocale];
}

export * from './config';
export type * from './types';
