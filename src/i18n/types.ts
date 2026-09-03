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
  image: string;
  categories: NavItem[];
  readingTime: string;
  date: string;
  dateTime: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
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
    subscribeTitle: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    copyright: string;
  };
  navigation: NavItem[];
  policyLinks: (NavItem & { modal?: string; target?: string })[];
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
    description: string;
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
