/**
 * Turns ```mermaid code fences into the markup that the client-side renderer
 * (src/components/common/MermaidRenderer.astro) looks for:
 *
 *   <div class="mermaid-wrapper">
 *     <pre class="mermaid" data-chart="<source>"><source></pre>
 *   </div>
 *
 * Why a plugin instead of a <Mermaid chart={...}> component import:
 *   - a fence is authored the same way as the $$ math blocks already in use
 *   - it keeps the raw source in the HTML, so <noscript>/failed renders degrade
 *     to readable text and `view-source` stays inspectable
 *   - it survives a later switch to a build-time renderer without any content
 *     churn, because build-time tools read the very same fences
 *
 * `markdown.syntaxHighlight.excludeLangs` in astro.config.mjs keeps shiki away
 * from `mermaid` fences, so they arrive here as <pre><code class="language-…">.
 * The language check also understands shiki's output (data-language attribute)
 * so the plugin keeps working if that exclusion is ever removed.
 *
 * Zero dependencies on purpose: this runs on every MDX file in the project.
 */

const MERMAID_LANGUAGES = new Set(['mermaid', 'mmd']);
const LANGUAGE_CLASS = /language-([\w-]+)/;

/** Concatenate the text of a hast subtree (shiki wraps code in per-token spans). */
function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (!Array.isArray(node.children)) return '';
  let text = '';
  for (const child of node.children) text += textOf(child);
  return text;
}

function readAttribute(properties, name) {
  if (!properties) return undefined;
  // rehype/remark-rehype store `data-language` as `dataLanguage`
  const camel = name.replace(/-(.)/g, (_, char) => char.toUpperCase());
  const value = properties[name] ?? properties[camel];
  return typeof value === 'string' ? value : undefined;
}

function languageOf(node) {
  const { properties } = node;
  const attribute = readAttribute(properties, 'data-language');
  if (attribute && MERMAID_LANGUAGES.has(attribute)) return attribute;

  const className = properties?.className ?? properties?.class;
  const classes = Array.isArray(className)
    ? className
    : typeof className === 'string'
      ? className.split(/\s+/)
      : [];
  for (const cls of classes) {
    const match = LANGUAGE_CLASS.exec(cls);
    if (match && MERMAID_LANGUAGES.has(match[1])) return match[1];
  }
  return null;
}

function element(tagName, properties, children = []) {
  return { type: 'element', tagName, properties, children };
}

/** <pre><code class="language-mermaid"> → <div class="mermaid-wrapper">… */
function toWrapper(pre) {
  const code = (pre.children ?? []).find(
    (child) => child.type === 'element' && child.tagName === 'code',
  );
  if (!code) return null;
  if (!languageOf(code) && !languageOf(pre)) return null;

  const source = textOf(code).replace(/\r\n?/g, '\n').replace(/\s+$/, '');
  if (!source.trim()) return null;

  return element('div', { className: ['mermaid-wrapper'] }, [
    element('pre', { className: ['mermaid'], 'data-chart': source }, [
      { type: 'text', value: source },
    ]),
  ]);
}

function transform(node) {
  if (!Array.isArray(node.children)) return;
  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    if (child.type === 'element' && child.tagName === 'pre') {
      const wrapper = toWrapper(child);
      if (wrapper) {
        node.children[index] = wrapper;
        continue;
      }
    }
    transform(child);
  }
}

export default function rehypeMermaid() {
  return (tree) => {
    transform(tree);
  };
}
