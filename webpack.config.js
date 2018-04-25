const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        use: './loaders/jsonc'
      },
      {
        type: 'javascript/auto',
        test: /\.json.gz$/,
        use: ['./loaders/jsonc', 'gzip-loader']
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
    new HtmlWebpackPlugin({title: 'Zach Sim'}),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
