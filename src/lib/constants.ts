// Site metadata
export const SITE = {
  name: 'Varun Kumar Gupta',
  title: 'Varun Kumar Gupta — Technical Artist & Game Developer',
  description: 'Building tools, pipelines, and procedural systems that power creative workflows. Specializing in PCG, technical art, and tool development.',
  url: 'https://varungupta.dev',
  author: 'Varun Kumar Gupta',
  email: 'hello@varungupta.dev',
  locale: 'en-US',
};

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
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

// Blog categories
export const BLOG_CATEGORIES = [
  { slug: 'procedural-generation', label: 'Procedural Generation', description: 'PCG systems, algorithms, implementations' },
  { slug: 'technical-art', label: 'Technical Art', description: 'Shaders, materials, rendering techniques' },
  { slug: 'tool-development', label: 'Tool Development', description: 'Building artist tools, plugins, scripts' },
  { slug: 'unreal-engine', label: 'Unreal Engine', description: 'UE5 specific content, blueprints, C++' },
  { slug: 'shaders', label: 'Shaders', description: 'HLSL, GLSL, shader development' },
  { slug: 'pipelines', label: 'Pipelines', description: 'Workflow optimization, automation' },
  { slug: 'houdini', label: 'Houdini', description: 'Procedural workflows in Houdini' },
  { slug: 'blender', label: 'Blender', description: 'Blender tools, scripts, workflows' },
  { slug: 'research', label: 'Research', description: 'Academic, experimental, theoretical' },
] as const;

// Article series
export const ARTICLE_SERIES = [
  { slug: 'pcg-notes', label: 'PCG Notes', description: 'Technical deep-dives into procedural generation techniques' },
  { slug: 'tool-dev-diaries', label: 'Tool Dev Diaries', description: 'Development logs from active tool projects' },
  { slug: 'tech-art-breakdowns', label: 'Tech Art Breakdowns', description: 'Visual case studies and technique analysis' },
  { slug: 'pipeline-patterns', label: 'Pipeline Patterns', description: 'Production-tested workflow architectures' },
] as const;

// Project categories
export const PROJECT_CATEGORIES = [
  { slug: 'tool', label: 'Tools' },
  { slug: 'research', label: 'Research' },
  { slug: 'experiment', label: 'Experiments' },
  { slug: 'client', label: 'Client Work' },
] as const;

// Skills/technologies
export const TECHNOLOGIES = [
  'C++',
  'Python',
  'Unreal Engine',
  'Blender',
  'Houdini',
  'OpenGL',
  'HLSL',
  'GLSL',
  'Control Rig',
  'PCG Graphs',
  'Vulknan',
  'Real-Time Rendering',
  'Shader Development',
  'Tool Development',
] as const;
