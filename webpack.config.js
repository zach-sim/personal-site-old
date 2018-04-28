const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const dev = process.env.NODE_ENV === 'development' || process.env.WEBPACK_SERVE !== undefined;

module.exports = {
  mode: dev ? 'development' : 'production',
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
        test: /\.json$/,
        use: './loaders/json'
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
      DEVELOPMENT: JSON.stringify(dev)
    }),
    new HtmlWebpackPlugin({ title: 'Zach Sim' }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false,
    //   generateStatsFile: true,
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
