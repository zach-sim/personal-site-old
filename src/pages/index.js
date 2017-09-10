import React from "react";
import { asyncComponent, markdownLoader } from "../utils";
import PageNotFound from "./404";

export const HCIM = asyncComponent(() => import("./HCIM"));
export const MarkdownPage = props => {
  const Page = asyncComponent(() => markdownLoader(props.match.params.name));
  return <Page />;
};
export { PageNotFound };
