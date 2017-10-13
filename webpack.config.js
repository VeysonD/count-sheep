const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  CLIENT: path.resolve(__dirname, 'src/client'),
  SRC: path.resolve(__dirname, 'src')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.CLIENT, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    // use html plugin
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
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
