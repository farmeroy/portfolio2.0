import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { about, 'case-studies': caseStudies };
