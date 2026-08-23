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
    // Short recruiter-view one-liner (falls back to description)
    shortDescription: z.string().optional(),
    publishedAt: z.coerce.date(),
    status: z.enum(['completed', 'in-progress', 'archived']),
    // Multi-category support: graphics / systems / procedural / tools / pipelines / computer-vision
    categories: z
      .array(z.enum(['graphics', 'systems', 'procedural', 'tools', 'pipelines', 'computer-vision']))
      .default([]),
    // Display hierarchy: 1 = Graphics Engineering, 2 = Algorithms & Systems, 3 = Applied Technology
    tier: z.number().min(1).max(3).optional(),
    // Display order on the homepage / work index
    order: z.number().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        download: z.string().url().optional(),
      })
      .optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog, projects };