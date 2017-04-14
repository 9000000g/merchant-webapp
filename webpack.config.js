var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: pkg.name+'.js',
    library: pkg.name,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?importLoaders=1&minimize=1')
      },
      {
        test: /\.pug$/,
        loader: 'raw-loader!pug-html-loader'
      },
      {
        test: /\.(html|png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: pkg.name+'.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: false
    }),
    new webpack.BannerPlugin(
      pkg.name + ' ' + pkg.version + "\n"+
      pkg.description + "\n" +
      'Author: ' + pkg.author + "\n" +
      'Homepage: ' + pkg.homepage
    )
  ]
}
