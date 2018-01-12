const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  if (env === 'production') {
    delete config.devtool;
  }

  config.plugins = (config.plugins || []).concat([
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      reportFilename: '../report.html',
      statsFilename: '../stats.json',
    }),
  ]);

  // do stuff with the webpack config...
  return config;
};
