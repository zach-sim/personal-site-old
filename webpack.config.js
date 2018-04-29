const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
  return ({
    entry: './src/index.js',
    output: {
      path: __dirname + '/build',
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.'
      }
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          type: 'javascript/auto',
          test: /\.json.gz$/,
          use: ['./loaders/json', 'gzip-loader']
        },
        {
          test: /\.md$/,
          use: './loaders/markdown'
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        PATH_PREFIX: JSON.stringify(''),
        DEVELOPMENT: JSON.stringify(argv.mode === 'development')
      }),
      new HtmlWebpackPlugin({ title: 'Zach Sim' }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: `../report-${argv.mode}.html`,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  })
};
