import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseEntity = z.object({
  id: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).default([]),
  summary: z.string().optional(),
  status: z.enum(['historical', 'fictional', 'composite', 'uncertain']).optional(),
  developmentStatus: z.enum(['current', 'working', 'early-outline', 'superseded']).optional(),
  related: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
  timeline: z.array(z.string()).default([])
});

const event = baseEntity.extend({
  date: z.string().optional(),
  dateSort: z.number().optional(),
  certainty: z.enum(['documented', 'strong-inference', 'possible', 'novel-canon', 'fiction']).optional(),
  characters: z.array(z.string()).default([]),
  places: z.array(z.string()).default([]),
  chapters: z.array(z.string()).default([])
});

const source = baseEntity.extend({
  author: z.string().optional(),
  year: z.string().optional(),
  sourceType: z.enum(['primary', 'near-primary', 'secondary', 'tertiary', 'reference']).optional(),
  citation: z.string().optional()
});

const chapter = baseEntity.extend({
  book: z.string(),
  chapterNumber: z.number(),
  draftStatus: z.enum(['outline', 'draft', 'revision', 'final']).default('draft'),
  characters: z.array(z.string()).default([]),
  places: z.array(z.string()).default([]),
  events: z.array(z.string()).default([])
});

export const collections = {
  characters: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/characters' }), schema: baseEntity }),
  places: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/places' }), schema: baseEntity }),
  events: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/events' }), schema: event }),
  sources: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/sources' }), schema: source }),
  books: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/books' }), schema: baseEntity }),
  chapters: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }), schema: chapter }),
  research: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/research' }), schema: baseEntity })
};
