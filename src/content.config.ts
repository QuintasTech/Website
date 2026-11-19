import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const capabilities = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/capabilities' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    eyebrow: z.string(),
    headline: z.string(),
    summary: z.string(),
    problems: z.array(z.object({ title: z.string(), text: z.string() })),
    deliver: z.array(z.object({ title: z.string(), text: z.string() })),
    platforms: z.array(z.string()),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    headline: z.string(),
    summary: z.string(),
    challenges: z.array(z.object({ title: z.string(), text: z.string() })),
    capabilities: z.array(z.string()),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    readTime: z.string(),
    capability: z.string(),
    industry: z.string().optional(),
  }),
});

export const collections = { capabilities, industries, insights };
