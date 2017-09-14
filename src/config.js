export const path_prefix =
  process.env.NODE_ENV === "development" ? "" : "/personal-site";

export const show_wip =
  window.location.search.indexOf("show_wip") !== -1 ||
  process.env.NODE_ENV === "development";
