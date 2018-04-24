/* global PATH_PREFIX:false, DEVELOPMENT:false */

export const pathPrefix = PATH_PREFIX;

export const showWip =
  window.location.search.indexOf('show_wip') !== -1 || DEVELOPMENT;
