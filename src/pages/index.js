import React from "react";
import { asyncComponent, markdownLoader, visualisationLoader } from "../utils";
import PageNotFound from "./404";

export const Projects = asyncComponent(() =>
  import(/* webpackChunkName: 'projects' */ "./Projects")
);
export const HCIM = asyncComponent(() =>
  visualisationLoader(
    () => import(/* webpackChunkName: 'rs_hcim_data' */ "../data/rs_hcim.json"),
    () => import(/* webpackChunkName: 'rs_hcim_vis' */ "./vis/HCIM")
  )
);
export const MarkdownPage = type => props => {
  const Page = asyncComponent(() =>
    markdownLoader(props.match.params.name, type)
  );
  return <Page />;
};
export { PageNotFound };
