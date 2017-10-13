const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  CLIENT: path.resolve(__dirname, 'src/client'),
  SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.CLIENT, 'index.jsx'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    // use html plugin
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'), // extract css to bundle file
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ],
  // Loaders configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // devServer: {
  //   contentBase: paths.SRC,
  // },
};
