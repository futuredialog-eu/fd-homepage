import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogCategories } from './data/blog';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** Groups the locale variants of one post; never appears in a URL. */
      translationKey: z.string(),
      pubDate: z.coerce.date(),
      readingMinutes: z.number().int().positive(),
      categories: z.array(z.enum(blogCategories)).nonempty(),
      /** Full-width hero image, relative to the Markdown file. */
      image: image(),
      /** Listing thumbnail, relative to the Markdown file. */
      thumbnail: image(),
      imageCredit: z.string().optional(),
    }),
});

export const collections = { blog };
