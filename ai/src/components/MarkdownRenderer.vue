<template>
    <div class="markdown-content" :class="{ 'dark-mode': isDarkMode }">
      <!-- Rendered markdown content -->
      <div v-html="renderedContent" ref="contentRef"></div>
      
      <!-- Code copy functionality overlay -->
      <div v-if="showCopySuccess" class="copy-success-toast">
        <span class="copy-icon">✓</span> Copied to clipboard!
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch, nextTick } from 'vue';
  import { marked } from 'marked';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/atom-one-dark.css';
  import { useThemeStore } from '@/store/theme';
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    },
    enableMath: {
      type: Boolean,
      default: false
    }
  });
  
  const contentRef = ref(null);
  const showCopySuccess = ref(false);
  const themeStore = useThemeStore();
  const isDarkMode = computed(() => themeStore.currentTheme === 'dark' || themeStore.currentTheme === 'cosmic');
  
  // Configure marked renderer with code highlighting
  const markedRenderer = new marked.Renderer();
  
  // Custom heading renderer with anchor links
  markedRenderer.heading = (text, level) => {
    const slug = text.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `
      <h${level} id="${slug}" class="markdown-heading">
        <a href="#${slug}" class="heading-anchor">
          <span class="heading-text">${text}</span>
          <span class="anchor-link">🔗</span>
        </a>
      </h${level}>
    `;
  };
  
  // Enhanced code block renderer with copy button
  markedRenderer.code = (code, language) => {
    const lang = (language && hljs.getLanguage(language)) ? language : 'plaintext';
    const highlightedCode = hljs.highlight(code, { language: lang }).value;
    return `
      <div class="code-block-wrapper">
        <div class="code-header">
          <span class="code-language">${lang}</span>
          <button class="copy-code-btn" data-code="${encodeURIComponent(code)}">
            <span class="copy-icon">📋</span>
          </button>
        </div>
        <pre class="hljs"><code class="language-${lang}">${highlightedCode}</code></pre>
      </div>
    `;
  };
  
  // Enhanced link renderer with external detection
  markedRenderer.link = (href, title, text) => {
    const isExternal = /^https?:\/\//.test(href);
    const titleAttr = title ? ` title="${title}"` : '';
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${titleAttr}${targetAttr} class="markdown-link ${isExternal ? 'external-link' : ''}">${text}</a>`;
  };
  
  // Enhanced image renderer
  markedRenderer.image = (href, title, text) => {
    const titleAttr = title ? ` title="${title}"` : '';
    const altAttr = text ? ` alt="${text}"` : '';
    return `
      <div class="image-container">
        <img src="${href}"${altAttr}${titleAttr} class="markdown-image" loading="lazy" />
        ${title ? `<span class="image-caption">${title}</span>` : ''}
      </div>
    `;
  };
  
  marked.setOptions({
    renderer: markedRenderer,
    headerIds: true,
    gfm: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    smartypants: true,
    xhtml: false
  });
  
  // Compute rendered content with math support if enabled
  const renderedContent = computed(() => {
    let processedContent = props.content;
    const keywords = [
      'Time Smith',
      'The Rift',
      'Ursa Minor',
      'Yaee',
      'Dawntasy',
      "Time's True Name",
      'Bear Village',
      'Plain and Pale Clock',
      'Circular Dawn'
    ];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b(?!(\\w|[^<>]*>))`, 'g');
      processedContent = processedContent.replace(regex, `<span class="cosmic-keyword">${keyword}</span>`);
    });
    let html = marked(processedContent);
    if (props.enableMath) {
      // Inline math: $...$
      html = html.replace(/\$([^$\n]+?)\$/g, '<span class="math-inline">$1</span>');
      // Display math: $$...$$
      html = html.replace(/\$\$([^$]+?)\$\$/g, '<div class="math-display">$1</div>');
    }
    return html;
  });
  
  // Dynamic KaTeX initialization for math rendering
  const initMathRendering = async () => {
    if (props.enableMath && contentRef.value) {
      try {
        const katex = await import('katex');
        await import('katex/dist/katex.min.css');
        const renderMathInElement = (await import('katex/contrib/auto-render')).default;
        renderMathInElement(contentRef.value, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.error('KaTeX rendering error:', err);
      }
    }
  };
  
  const setupCodeCopy = () => {
    if (!contentRef.value) return;
    const copyButtons = contentRef.value.querySelectorAll('.copy-code-btn');
    copyButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const code = decodeURIComponent(button.getAttribute('data-code'));
        try {
          await navigator.clipboard.writeText(code);
          showCopySuccess.value = true;
          setTimeout(() => {
            showCopySuccess.value = false;
          }, 2000);
          button.classList.add('copied');
          setTimeout(() => {
            button.classList.remove('copied');
          }, 1000);
        } catch (e) {
          console.error('Failed to copy code:', e);
        }
      });
    });
  };
  
  const setupMediaElements = () => {
    if (!contentRef.value) return;
    const images = contentRef.value.querySelectorAll('.markdown-image');
    images.forEach(image => {
      image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
      });
    });
  };
  
  watch(() => props.content, async () => {
    await nextTick();
    setupCodeCopy();
    if (props.enableMath) {
      initMathRendering();
    }
    setupMediaElements();
  });
  
  onMounted(async () => {
    await nextTick();
    setupCodeCopy();
    if (props.enableMath) {
      initMathRendering();
    }
    setupMediaElements();
  });
  </script>
  
  <style>
  .markdown-content {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
    word-wrap: break-word;
    overflow-wrap: break-word;
    transition: all 0.3s ease;
    padding: 1rem;
  }
  .markdown-content.dark-mode {
    color: #e0e0e0;
  }
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3,
  .markdown-content h4,
  .markdown-content h5,
  .markdown-content h6 {
    margin-top: 1.5em;
    margin-bottom: 0.75em;
    font-weight: 600;
    line-height: 1.25;
  }
  .markdown-content h1 {
    font-size: 2em;
    border-bottom: 1px solid rgba(139,92,246,0.2);
    padding-bottom: 0.3em;
  }
  .markdown-content h2 {
    font-size: 1.5em;
    border-bottom: 1px solid rgba(139,92,246,0.1);
    padding-bottom: 0.2em;
  }
  .markdown-content h3 { font-size: 1.25em; }
  .markdown-content h4 { font-size: 1em; }
  .markdown-content h5 { font-size: 0.875em; }
  .markdown-content h6 { font-size: 0.85em; color: #777; }
  .markdown-content.dark-mode h6 { color: #aaa; }
  .heading-anchor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .anchor-link {
    opacity: 0;
    margin-left: 0.5em;
    font-size: 0.8em;
    color: #8b5cf6;
    transition: opacity 0.2s ease;
  }
  .heading-anchor:hover .anchor-link {
    opacity: 1;
  }
  .markdown-content p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  .markdown-content strong { font-weight: 600; }
  .markdown-content em { font-style: italic; }
  .markdown-content del { text-decoration: line-through; }
  .markdown-content blockquote {
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 4px solid #8b5cf6;
    background-color: rgba(139,92,246,0.05);
    color: #666;
  }
  .markdown-content.dark-mode blockquote {
    background-color: rgba(139,92,246,0.1);
    color: #bbb;
  }
  .markdown-content ul,
  .markdown-content ol {
    margin-top: 0;
    margin-bottom: 1em;
    padding-left: 2em;
  }
  .markdown-content li { margin-bottom: 0.25em; }
  .markdown-content li > p { margin-top: 1em; }
  .code-block-wrapper {
    position: relative;
    margin: 1.5em 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  .markdown-content.dark-mode .code-block-wrapper {
    box-shadow: 0 2px 15px rgba(0,0,0,0.3);
  }
  .code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    background: #2d333b;
    color: #e6edf3;
    font-size: 0.85em;
  }
  .code-language {
    font-family: 'Roboto Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.8em;
  }
  .copy-code-btn {
    background: transparent;
    border: none;
    color: #e6edf3;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  .copy-code-btn:hover {
    background: rgba(255,255,255,0.1);
  }
  .copy-code-btn.copied {
    background: rgba(139,92,246,0.3);
  }
  .markdown-content pre {
    margin: 0;
    padding: 1em;
    overflow-x: auto;
    font-family: 'Roboto Mono', 'Consolas', monospace;
    font-size: 0.9em;
    line-height: 1.5;
    background-color: #282c34;
    tab-size: 2;
  }
  .markdown-content code {
    font-family: 'Roboto Mono', 'Consolas', monospace;
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    background-color: rgba(139,92,246,0.1);
    color: #8b5cf6;
  }
  .markdown-content pre code {
    padding: 0;
    background-color: transparent;
    color: inherit;
    white-space: pre;
  }
  .markdown-link {
    color: #8b5cf6;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .markdown-link:hover {
    text-decoration: underline;
    color: #6d4aaa;
  }
  .external-link::after {
    content: '↗';
    margin-left: 3px;
    font-size: 0.8em;
    display: inline-block;
  }
  .markdown-content table {
    width: 100%;
    margin: 1em 0;
    border-collapse: collapse;
    border-spacing: 0;
    overflow-x: auto;
    display: block;
  }
  .markdown-content th {
    background-color: rgba(139,92,246,0.1);
    font-weight: 600;
  }
  .markdown-content th,
  .markdown-content td {
    padding: 0.5em 1em;
    border: 1px solid #e0e0e0;
    text-align: left;
  }
  .markdown-content.dark-mode th,
  .markdown-content.dark-mode td {
    border-color: #333;
  }
  .markdown-content.dark-mode th {
    background-color: rgba(139,92,246,0.2);
  }
  .markdown-content tr:nth-child(even) {
    background-color: rgba(0,0,0,0.025);
  }
  .markdown-content.dark-mode tr:nth-child(even) {
    background-color: rgba(255,255,255,0.025);
  }
  .image-container {
    margin: 1.5em 0;
    text-align: center;
  }
  .markdown-image {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .markdown-content.dark-mode .markdown-image {
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    opacity: 0.9;
  }
  .markdown-image:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 20px rgba(139,92,246,0.3);
  }
  .markdown-image.zoomed {
    transform: scale(1.5);
    box-shadow: 0 12px 30px rgba(139,92,246,0.4);
    z-index: 10;
    position: relative;
  }
  .image-caption {
    display: block;
    margin-top: 0.5em;
    font-size: 0.9em;
    color: #666;
    font-style: italic;
  }
  .markdown-content hr {
    height: 1px;
    background-color: rgba(139,92,246,0.2);
    border: none;
    margin: 2em 0;
  }
  .math-inline {
    font-family: 'KaTeX_Main', serif;
    padding: 0 0.2em;
  }
  .math-display {
    margin: 1em 0;
    padding: 1em;
    overflow-x: auto;
    background-color: rgba(139,92,246,0.05);
    border-left: 3px solid #8b5cf6;
  }
  .markdown-content.dark-mode .math-display {
    background-color: rgba(139,92,246,0.1);
  }
  .copy-success-toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #10B981;
    color: white;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 0.9em;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    animation: fadeInOut 2s ease forwards;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    15% { opacity: 1; transform: translateY(0); }
    85% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
  }
  .cosmic-keyword {
    color: #8b5cf6;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(139,92,246,0.3);
    transition: all 0.3s ease;
  }
  .cosmic-keyword:hover {
    text-shadow: 0 0 8px rgba(139,92,246,0.5);
  }
  </style>
  