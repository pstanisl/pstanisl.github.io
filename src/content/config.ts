import { defineCollection, z } from 'astro:content';

const speakingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['talk', 'podcast', 'workshop', 'panel']),
    venue: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    url: z.string().optional(),
    github: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    year: z.string().optional(),
  }),
});

export const collections = {
  speaking: speakingCollection,
  projects: projectsCollection,
};
