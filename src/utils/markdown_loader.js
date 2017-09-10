import md_posts from "../data/md_posts";

export default async function markdownLoader(page) {
  const path = md_posts[page].path;

  const md = await import(`!!../loaders/markdown!../data/md/${path}`);
  const { default: MarkdownPage } = await import("../components/MarkdownPage");
  return { default: MarkdownPage(md) };
}
