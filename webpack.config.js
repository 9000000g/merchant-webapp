var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');

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
        loader: 'style-loader!css-loader'
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
  }
}
