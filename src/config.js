export const pathPrefix = process.env.NODE_ENV === 'development' ? '' : '/personal-site';

export const showWip =
  window.location.search.indexOf('show_wip') !== -1 || process.env.NODE_ENV === 'development';
