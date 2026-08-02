/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        base: '2.0rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-text-secondary)',
            '--tw-prose-headings': 'var(--color-text-primary)',
            '--tw-prose-lead': 'var(--color-text-secondary)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-text-primary)',
            '--tw-prose-counters': 'var(--color-text-tertiary)',
            '--tw-prose-bullets': 'var(--color-text-tertiary)',
            '--tw-prose-hr': 'var(--color-border)',
            '--tw-prose-quotes': 'var(--color-text-secondary)',
            '--tw-prose-quote-borders': 'var(--color-accent)',
            '--tw-prose-captions': 'var(--color-text-tertiary)',
            '--tw-prose-code': 'var(--color-text-primary)',
            '--tw-prose-pre-code': 'var(--color-text-primary)',
            '--tw-prose-pre-bg': 'var(--color-bg-tertiary)',
            '--tw-prose-th-borders': 'var(--color-border)',
            '--tw-prose-td-borders': 'var(--color-border)',
            color: 'var(--color-text-secondary)',
            maxWidth: 'none',
            a: {
              color: 'var(--color-accent)',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.2s ease',
              '&:hover': {
                borderBottomColor: 'var(--color-accent)',
              },
            },
            strong: {
              color: 'var(--color-text-primary)',
            },
            h1: { color: 'var(--color-text-primary)' },
            h2: { color: 'var(--color-text-primary)' },
            h3: { color: 'var(--color-text-primary)' },
            h4: { color: 'var(--color-text-primary)' },
            p: { color: 'var(--color-text-secondary)' },
            li: { color: 'var(--color-text-secondary)' },
            code: {
              color: 'var(--color-text-primary)',
              backgroundColor: 'var(--color-bg-tertiary)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
            },
            blockquote: {
              color: 'var(--color-text-secondary)',
              borderLeftColor: 'var(--color-accent)',
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};