import md_posts from "../data/md_posts";
import PageNotFound from "../pages/404";

export default async function markdownLoader(page, type) {
  if (md_posts[page] && md_posts[page].type === type) {
    const path = md_posts[page].path;

    const md = await import(`!!../loaders/markdown!../data/md/${path}`);
    const {
      default: MarkdownPage
    } = await import("../components/MarkdownPage");
    return { default: MarkdownPage(md) };
  } else {
    return { default: PageNotFound };
  }
}
