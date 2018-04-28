import mdPosts from 'val-loader!../data/md_posts.js'; //eslint-disable-line
import PageNotFound from '../pages/404';

export default async function markdownLoader(page, type) {
  if (mdPosts[page] && mdPosts[page].type === type) {
    const { path } = mdPosts[page];

    const md = {
      ...mdPosts[page],
      body: (await import(/* webpackChunkName: 'page' */ `../data/md/${path}`)).default,
    };
    delete md.path;

    const {
      default: MarkdownPage,
    } = await import(/* webpackChunkName: 'markdown_page' */ '../components/MarkdownPage');
    return { default: MarkdownPage(md) };
  }
  return { default: PageNotFound };
}
