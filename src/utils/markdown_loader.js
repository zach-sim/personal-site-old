/* eslint-disable import/no-webpack-loader-syntax */
import md_posts from "val-loader!../data/md_posts.js";
/* eslint-enable import/no-webpack-loader-syntax */
import PageNotFound from "../pages/404";

export default async function markdownLoader(page, type) {
  if (md_posts[page] && md_posts[page].type === type) {
    const path = md_posts[page].path;

    const md = {
      ...md_posts[page],
      body: await import(/* webpackChunkName: 'page' */ `!!../loaders/markdown!../data/md/${path}`)
    };
    delete md.path;

    const {
      default: MarkdownPage
    } = await import(/* webpackChunkName: 'markdown_page' */ "../components/MarkdownPage");
    return { default: MarkdownPage(md) };
  } else {
    return { default: PageNotFound };
  }
}
