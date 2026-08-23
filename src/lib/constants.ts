// Site metadata
export const SITE = {
  name: 'Varun Kumar Gupta',
  title: 'Varun Kumar Gupta — Graphics Engineer & Unreal Engine Pipeline TD',
  description:
    'Graphics Engineer and Unreal Engine Pipeline TD at Brown Bag Films. I build graphics systems, tools, and pipelines that solve real production problems.',
  url: 'https://varungupta.dev',
  author: 'Varun Kumar Gupta',
  email: 'hello@varungupta.dev',
  locale: 'en-US',
};

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'Field Notes', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/VKG5',
  linkedin: 'https://linkedin.com/in/varunkumargupta5',
  twitter: 'https://x.com/Bawa_Gupta_',
  email: 'mailto:varunkumargupta914@gmail.com',
} as const;

// Blog categories (Field Notes taxonomy)
// Slugs are kept stable so existing posts and URLs keep working.
export const BLOG_CATEGORIES = [
  { slug: 'procedural-generation', label: 'Procedural', description: 'Rule-driven systems, algorithms, worldbuilding' },
  { slug: 'technical-art', label: 'Graphics', description: 'Rendering techniques, materials, visual systems' },
  { slug: 'tool-development', label: 'Tools', description: 'Building tools, plugins, and scripts' },
  { slug: 'unreal-engine', label: 'Unreal', description: 'UE5 content, blueprints, C++, pipeline' },
  { slug: 'shaders', label: 'Rendering', description: 'HLSL, GLSL, shader development' },
  { slug: 'pipelines', label: 'Pipelines', description: 'Workflow optimization, automation, production tech' },
  { slug: 'houdini', label: 'Houdini', description: 'Procedural workflows in Houdini' },
  { slug: 'blender', label: 'Blender', description: 'Blender tools, scripts, workflows' },
  { slug: 'research', label: 'Research', description: 'Experiments, papers, prototypes' },
] as const;

// Article series
export const ARTICLE_SERIES = [
  { slug: 'pcg-notes', label: 'PCG Notes', description: 'Technical deep-dives into procedural generation techniques' },
  { slug: 'tool-dev-diaries', label: 'Tool Dev Diaries', description: 'Development logs from active tool projects' },
  { slug: 'tech-art-breakdowns', label: 'Tech Art Breakdowns', description: 'Visual case studies and technique analysis' },
  { slug: 'pipeline-patterns', label: 'Pipeline Patterns', description: 'Production-tested workflow architectures' },
] as const;

// Project categories — multi-category filtering (a project can belong to several)
export const PROJECT_CATEGORIES = [
  { slug: 'graphics', label: 'Graphics' },
  { slug: 'systems', label: 'Systems' },
  { slug: 'procedural', label: 'Procedural' },
  { slug: 'tools', label: 'Tools' },
  { slug: 'pipelines', label: 'Pipelines' },
  { slug: 'computer-vision', label: 'Computer Vision' },
] as const;

// Career timeline — the progression story
export const CAREER_TIMELINE = [
  {
    period: '2026 — Present',
    company: 'Brown Bag Films',
    role: 'Unreal Engine Pipeline TD',
    focus: ['Film', 'Animation', 'Unreal Engine', 'Pipeline Engineering'],
    current: true,
  },
  {
    period: '2025 — 2026',
    company: 'Zitro',
    role: 'Technical Artist',
    focus: ['Engine Tools', 'Godot', 'Shaders', 'Automation'],
    current: false,
  },
  {
    period: '2022 — 2024',
    company: 'Technicolor Games',
    role: 'Technical Artist',
    focus: ['Procedural Tools', 'DCC Pipelines', 'Python', 'Houdini', 'Maya'],
    current: false,
  },
] as const;

// Skills/technologies
export const TECHNOLOGIES = [
  'C++',
  'Python',
  'OpenGL',
  'GLSL',
  'Unreal Engine',
  'Blender',
  'Houdini',
  'Godot',
  'PyQt6',
  'SQLite',
  'MediaPipe',
  'OpenCV',
  'CMake',
  'ImGui',
  'Shaders',
  'Procedural Generation',
  'Pipeline Development',
  'Computer Vision',
] as const;