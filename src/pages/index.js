import { asyncComponent, markdownLoader } from "../utils";

export const HCIM = asyncComponent(() => import("./HCIM"));
export const MarkdownPage = page => asyncComponent(() => markdownLoader(page));
