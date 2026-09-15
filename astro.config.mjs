import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from './src/plugins/rehype-mermaid.mjs';

export default defineConfig({
  site: 'https://varungupta.dev',
  integrations: [
    // remark-math parses $inline$ and $$display$$ LaTeX before MDX hands the
    // content to acorn, so braces inside math are no longer read as JSX
    // expressions. rehype-katex renders it to static HTML + CSS at build time.
    // rehype-mermaid rewrites ```mermaid fences into the markup rendered by
    // src/components/common/MermaidRenderer.astro (mounted in BaseLayout).
    // These plugins are passed to MDX explicitly; because all content is .mdx,
    // nothing needs duplicating into `markdown.rehypePlugins`.
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeMermaid],
    }),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    // Keep shiki away from ```mermaid fences — they are diagram source, not
    // code to tokenize. Inherited by the MDX integration above.
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) {
              return 'three';
            }
          },
        },
      },
    },
  },
});
