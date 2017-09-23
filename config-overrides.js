module.exports = function override(config, env) {
  if (env === 'production') {
    delete config.devtool;
  }
  // do stuff with the webpack config...
  return config;
};
