# Copilot Instructions for Varun Kumar Gupta's Personal Website

## Project Overview
Modern blog-forward portfolio for a Technical Artist & Game Developer. Built with **Astro 4.x**, **Tailwind CSS**, and **MDX** for content. Focuses on procedural generation, technical art, tool development, and game-dev topics.

## Architecture

### Tech Stack
- **Framework**: Astro 4.x (static site generation)
- **Styling**: Tailwind CSS + CSS variables for theming
- **Content**: MDX (Markdown + JSX components)
- **Deployment**: GitHub Pages (vkg5.github.io)

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
│   └── config.ts        # Content collection schemas (Zod)
├── layouts/             # Page layouts (BaseLayout, BlogPost, ProjectPage)
├── pages/               # Route pages (index, blog, projects, about, contact)
├── styles/              # global.css with Tailwind + theme system
└── lib/                 # constants.ts (site config), utils.ts (helpers)
```

## Theme System (CRITICAL)

This site uses a **dual-theme system** with CSS variables, NOT Tailwind's default dark mode classes.

### Color Variables (in `src/styles/global.css`)
```css
:root:not(.dark) {  /* Light mode */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;     /* Subtle gray for section backgrounds */
  --color-bg-tertiary: #F5F5F5;
  --color-text-primary: #000000;     /* Pure black for headings/primary text */
  --color-text-secondary: #000000;   /* Pure black for body text */
  --color-text-tertiary: #000000;    /* Pure black for all text in light mode */
  --color-accent: #2B7A9E;
  --color-border: #E5E5E5;
}

:root.dark {  /* Dark mode - VS Code Dark Modern colors */
  --color-bg-primary: #1F1F1F;
  --color-bg-secondary: #2A2A2E;     /* Lighter than primary for contrast */
  --color-bg-tertiary: #333337;
  --color-text-primary: #CCCCCC;
  --color-text-secondary: #9D9D9D;
  --color-text-tertiary: #6E6E6E;
  --color-accent: #4FC3F7;
  --color-border: #3E3E42;
}
```

### Theme Implementation Rules
1. **Always use CSS variables** for colors: `background-color: var(--color-bg-primary)` NOT `bg-bg-primary` Tailwind class
2. **Light mode = ALL BLACK TEXT** - Users want maximum contrast in light mode
3. **Background sections** must use `bg-bg-secondary` for subtle contrast (strips on homepage)
4. **Never use opacity** on backgrounds (e.g., `bg-bg-secondary/50`) - causes gray issues in light mode
5. **Theme toggle** in Header uses `localStorage` and `.dark` class on `<html>` element
6. **Base font size**: 2.0rem (32px) - unusually large, user preference
7. **Container width**: `max-w-7xl` (80rem/1280px) - wider than typical for more breathing room

## Content System

### Blog Posts (`src/content/blog/`)
```yaml
title: string (required)
description: string (max 160 chars)
publishedAt: date
category: procedural-generation | technical-art | tool-development | unreal-engine | shaders | pipelines | houdini | blender | research
tags: string[]
series: string (optional, e.g., "pcg-notes")
featured: boolean
draft: boolean
cover: string (optional)
```

### Projects (`src/content/projects/`)
```yaml
title: string
description: string
publishedAt: date
status: completed | in-progress | archived
technologies: string[]
featured: boolean
cover: string (required)
links: { github?, demo?, download? }
```

## Homepage Patterns (index.astro)

### Timeline Components
Latest Articles and Featured Projects use **horizontal scrollable timelines** (NOT card grids):
```astro
<div class="overflow-x-auto pb-4 no-scrollbar">
  <div class="flex gap-8 min-w-max">
    <a href={url} class="flex-shrink-0 w-80 group">
      <div class="relative pl-8 pb-8 border-l-2 border-border group-hover:border-accent">
        <div class="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-accent border-4 border-bg-primary"></div>
        <div class="text-xs text-text-tertiary mb-2">{date}</div>
        <h3 class="text-lg font-semibold text-text-primary group-hover:text-accent">{title}</h3>
      </div>
    </a>
  </div>
</div>
```
- Show **title + date only** (no descriptions/previews)
- Timeline dots with vertical lines
- Horizontal scroll (mobile swipe, desktop mousewheel)

### Section Backgrounds
- Main sections: `bg-bg-primary` (white/dark)
- Alternating sections: `bg-bg-secondary` (light gray/lighter dark)
- Always use `border-y border-border` for subtle separation

## Common Patterns

### Component Usage
- `Button`: `variant="primary" | "secondary" | "ghost"` - uses CSS variable colors
- `Card`: `.card` + `.card-hover` classes for consistent styling
- `Tag`: Small pills for categories, uses `var(--color-accent-subtle)` background
- Layout: Always wrap pages in `<BaseLayout>` for header/footer/meta

### Typography Classes (in `global.css`)
```css
.heading-1, .heading-2, .heading-3, .heading-4  /* Use var(--color-text-primary) */
.lead                                            /* Uses var(--color-text-secondary) */
.btn, .btn-primary, .btn-secondary, .btn-ghost  /* Custom button styles with CSS vars */
.card                                            /* bg + border with CSS vars */
.prose-custom                                    /* Blog content, theme-aware */
```

### Social Sidebar (BaseLayout.astro)
Fixed left sidebar with 4 social icons (GitHub, LinkedIn, Twitter, Email):
- Size: `w-7 h-7` (28px)
- Hover: `scale-125` with 300ms ease-out
- Only visible on desktop: `hidden lg:block`
- Icons use `text-text-tertiary` color

## Development Workflow

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Dev server on localhost:4321
npm run build        # Production build (check for errors)
```

### Adding Content
1. **Blog post**: Create `.mdx` in `src/content/blog/` with frontmatter
2. **Project**: Create `.mdx` in `src/content/projects/` with frontmatter
3. **Images**: `public/images/blog/` or `public/images/projects/`
4. **New page**: Add `.astro` in `src/pages/`, wrap in `<BaseLayout>`, update `NAV_LINKS` in `constants.ts`

### Theme Toggle Implementation
Located in `src/components/layout/Header.astro`:
```javascript
themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', !isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  updateThemeIcon();
});
```
- No animations (user removed ripple effect)
- Instant toggle between dark/light
- Persists to localStorage

## Key Files
- `src/lib/constants.ts`: Site metadata, nav links, categories, social links
- `src/content/config.ts`: Zod schemas for blog/projects (strict validation)
- `src/styles/global.css`: Theme variables, component classes, utilities
- `tailwind.config.mjs`: Static dark theme colors (CSS vars override these)
- `src/layouts/BaseLayout.astro`: Base wrapper with theme script, meta tags

## Common Issues & Solutions

### Problem: Text not visible in light mode
- **Cause**: Using Tailwind classes instead of CSS variables
- **Fix**: Replace `text-text-secondary` class with inline style `color: var(--color-text-secondary)`

### Problem: Background sections look too dark/gray in light mode
- **Cause**: Using opacity (e.g., `bg-bg-secondary/50`)
- **Fix**: Remove opacity, use solid `bg-bg-secondary`

### Problem: Theme toggle causes flash
- **Cause**: Theme applied after page load
- **Fix**: `<script is:inline>` in `<head>` runs before render (already implemented in BaseLayout)

### Problem: Container feels too narrow
- **Current setting**: `max-w-7xl` (user wants wider layouts)
- **Don't change** without user request
