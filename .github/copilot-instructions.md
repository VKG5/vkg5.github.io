# Copilot Instructions for Varun Kumar Gupta's Personal Website

## Project Overview
Modern blog-forward portfolio for a Technical Artist & Game Developer. Built with **Astro 4.x**, **Tailwind CSS**, and **MDX** for content. Focuses on procedural generation, technical art, tool development, and game-dev topics.

## Architecture

### Tech Stack
- **Framework**: Astro 4.x (static site generation)
- **Styling**: Tailwind CSS + custom design tokens
- **Content**: MDX (Markdown + JSX components)
- **Deployment**: Vercel or Cloudflare Pages

### File Structure
```
src/
├── components/           # Reusable Astro components
│   ├── common/          # Button, Card, Tag
│   ├── layout/          # Header, Footer
│   ├── blog/            # PostCard, TableOfContents
│   └── projects/        # ProjectCard
├── content/             # MDX content (blog posts, projects)
│   ├── blog/            # Blog posts with frontmatter
│   ├── projects/        # Project case studies
│   └── config.ts        # Content collection schemas
├── layouts/             # Page layouts (BaseLayout, BlogPost, ProjectPage)
├── pages/               # Route pages
├── styles/              # global.css with Tailwind
└── lib/                 # Utilities and constants
```

## Content System

### Blog Posts (`src/content/blog/`)
Frontmatter schema:
```yaml
title: string (required)
description: string (max 160 chars, for SEO)
publishedAt: date
category: procedural-generation | technical-art | tool-development | unreal-engine | shaders | pipelines | houdini | blender | research
tags: string[]
series: string (optional, e.g., "pcg-notes")
seriesOrder: number
featured: boolean
draft: boolean
cover: string (optional image path)
```

### Projects (`src/content/projects/`)
```yaml
title: string
description: string
publishedAt: date
status: completed | in-progress | archived
category: tool | research | experiment | client
technologies: string[]
featured: boolean
cover: string (required)
links:
  github: url
  demo: url
  download: url
```

## Design System

### Colors (defined in `tailwind.config.mjs`)
```
Background: #0D0D0F (bg-primary), #141417 (bg-secondary), #1A1A1F (bg-tertiary)
Text: #FAFAFA (primary), #A1A1AA (secondary), #71717A (tertiary)
Accent: #3B82F6 (blue), #60A5FA (hover)
Border: #27272A (default), #3F3F46 (hover)
```

### Typography
- Sans: Inter (body text)
- Mono: JetBrains Mono (code)
- Headings: Bold, tight tracking

### Spacing
8px base grid. Use Tailwind spacing utilities (`space-2` = 8px, `space-4` = 16px, etc.)

## Common Patterns

### Components
- `Button`: Primary (blue), secondary (ghost), ghost variants
- `Card`: Hover state lifts card with shadow
- `Tag`: Small pill for categories/technologies
- `PostCard` / `ProjectCard`: Standard content cards

### CSS Classes (in `global.css`)
- `.container` / `.container-narrow` / `.container-wide`: Content width
- `.section` / `.section-sm`: Vertical padding
- `.heading-1` through `.heading-4`: Typography
- `.prose-custom`: Blog content styling
- `.card` / `.card-hover`: Card styles
- `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-ghost`: Buttons

### Animations
- Scroll reveal: Elements with `data-animate` attribute fade up on scroll
- Hover: Cards lift 2px, buttons lift 1px
- Transitions: 200ms ease for most interactions

## Development Workflow

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
```

### Adding Content
1. **Blog post**: Create `.mdx` file in `src/content/blog/` with frontmatter
2. **Project**: Create `.mdx` file in `src/content/projects/` with frontmatter
3. Images go in `public/images/blog/` or `public/images/projects/`

### Creating New Pages
1. Add `.astro` file in `src/pages/`
2. Import `BaseLayout` and wrap content
3. Update `NAV_LINKS` in `src/lib/constants.ts` if adding to nav

## Key Files
- `src/lib/constants.ts`: Site metadata, nav links, categories
- `src/lib/utils.ts`: Date formatting, reading time, slug utilities
- `src/content/config.ts`: Content collection schemas (Zod validation)
- `tailwind.config.mjs`: Design tokens, custom colors, typography

## Writing Style
- Tone: Precise, calm, technical but accessible
- Voice: First person, confident, explains the "why"
- Structure: Hook → Context → Implementation → Results → Takeaways

## SEO Checklist
- Every page has unique `title` and `description`
- Images have descriptive alt text
- Use semantic HTML (`article`, `section`, `header`)
- Blog posts have Open Graph images (`cover` in frontmatter)
