import type { ImageMetadata } from 'astro';
import type { BlogCategory } from '../data/blog';

export interface NavItem {
  label: string;
  /** Root-relative path without the locale prefix, or an absolute URL. */
  href: string;
  external?: boolean;
}

export interface HowItem {
  icon: string;
  title: string;
  subTitle: string;
  list: string[];
}

export interface Counter {
  count: string;
  description: string;
}

export interface Review {
  review: string;
  author: string;
  position: string;
}

export interface BlogPost {
  title: string;
  href: string;
  image: ImageMetadata;
  categories: NavItem[];
  readingTime: string;
  date: string;
  dateTime: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface CaseItem {
  icon: string;
  title: string;
  href: string;
}

export interface CustomerItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ContactPerson {
  name: string;
  position: string;
  phone: string;
  phoneHref: string;
  email: string;
  image: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    bookDemo: string;
    readMore: string;
    copyright: string;
    /** Accessible names for the icon-only header menu controls. */
    openMenu: string;
    closeMenu: string;
  };
  /** Cookie-consent bar. Only rendered when analytics is configured. */
  consent: {
    message: string;
    /** Link text for the privacy policy, shown inside the message. */
    learnMore: string;
    accept: string;
    decline: string;
    /** Footer control that reopens the bar. */
    settings: string;
  };
  navigation: NavItem[];
  policyLinks: (NavItem & { target?: string })[];
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  howSection: {
    title: string;
    description: string;
    items: HowItem[];
  };
  counters: Counter[];
  reviews: Review[];
  blogSection: {
    title: string;
    readMoreHref: string;
    posts: BlogPost[];
  };
  contactSection: {
    title: string;
    quote: string;
    people: ContactPerson[];
  };
  featuresPage: {
    meta: {
      title: string;
      description: string;
    };
    intro: string;
    items: FeatureItem[];
    caseSection: {
      title: string;
      description: string;
      items: CaseItem[];
    };
    quote: string;
  };
  blogPage: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    description: string;
    categoryLabels: Record<BlogCategory, string>;
    /** Contains a `{minutes}` placeholder. */
    readingTime: string;
    photoCredit: string;
    shareTitle: string;
  };
  contactsPage: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  customersPage: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    items: CustomerItem[];
    partners: {
      offerTitle: string;
      offerDescription: string;
      benefitsTitle: string;
      benefits: string[];
      workTitle: string;
      workDescription: string;
    };
    quote: string;
  };
}
