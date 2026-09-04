export const blogCategories = ['news', 'engagement', 'municipality'] as const;

export type BlogCategory = (typeof blogCategories)[number];
