var frontMatter = require("front-matter");
var markdownIt = require("markdown-it");
var hljs = require("highlight.js");
var path = require("path");

var highlight = function(str, lang) {
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
  return "";
};

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
})
  .use(require("markdown-it-sub"))
  .use(require("markdown-it-footnote"))
  .use(require("markdown-it-deflist"))
  .use(require("markdown-it-abbr"))
  .use(require("markdown-it-attrs"));

module.exports = function(content) {
  this.cacheable();
  const meta = frontMatter(content);
  meta.body = md.render(meta.body);
  meta.content = content;
  delete meta.frontMatter;
  return `module.exports = ${JSON.stringify(meta)}`;
};