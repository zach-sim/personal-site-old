import React from 'react';
import PropTypes from 'prop-types';
import { asyncComponent, markdownLoader, visualisationLoader } from '../utils';
import PageNotFound from './404';

export const Projects = asyncComponent(() =>
  import(/* webpackChunkName: 'projects' */ './Projects'),
);

export const HCIM = asyncComponent(() =>
  visualisationLoader(
    () => import(/* webpackChunkName: 'rs_hcim_data' */ '../data/rs_hcim.json'),
    () => import(/* webpackChunkName: 'rs_hcim_vis' */ './vis/HCIM'),
  ),
);

export const MarkdownPage = (type) => {
  const component = (props) => {
    const Page = asyncComponent(() => markdownLoader(props.match.params.name, type));
    return <Page />;
  };
  component.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
  };
  return component;
};

export { PageNotFound };
