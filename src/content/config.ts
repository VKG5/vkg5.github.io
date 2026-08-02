import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      'procedural-generation',
      'technical-art',
      'tool-development',
      'unreal-engine',
      'shaders',
      'pipelines',
      'houdini',
      'blender',
      'research',
    ]),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

// Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    status: z.enum(['completed', 'in-progress', 'archived']),
    category: z.enum(['tool', 'research', 'experiment', 'client']),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        download: z.string().url().optional(),
      })
      .optional(),
    cover: z.string(),
  }),
});

export const collections = { blog, projects };
