import React from "react";
import { asyncComponent, markdownLoader, visualisationLoader } from "../utils";
import PageNotFound from "./404";

export const HCIM = asyncComponent(() =>
  visualisationLoader(
    () => import("../data/rs_hcim.json"),
    () => import("./vis/HCIM")
  )
);
export const MarkdownPage = type => props => {
  const Page = asyncComponent(() =>
    markdownLoader(props.match.params.name, type)
  );
  return <Page />;
};
export { PageNotFound };
