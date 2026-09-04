import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogCategories } from './data/blog';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Groups the locale variants of one post; never appears in a URL. */
    translationKey: z.string(),
    pubDate: z.coerce.date(),
    readingMinutes: z.number().int().positive(),
    categories: z.array(z.enum(blogCategories)).nonempty(),
    /** Full-width hero image, root-relative. */
    image: z.string(),
    /** Listing thumbnail, root-relative. */
    thumbnail: z.string(),
    imageCredit: z.string().optional(),
  }),
});

export const collections = { blog };
