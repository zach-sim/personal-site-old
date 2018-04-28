const frontMatter = require('front-matter');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js');

const highlight = (str, lang) => {
  if (lang !== null && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (_error) {
      console.error(_error);
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (_error) {
    console.error(_error);
  }
  return '';
};

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'));

module.exports = function convertMarkdown(content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  return `module.exports = ${JSON.stringify(body)}`;
};
