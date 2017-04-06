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
        test: /\.(p)csds$/,
        loader: ExtractTextPlugin.extract( 'css-loader?importLoaders=1!postcss-loader' ),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.pug$/,
        loader: 'raw-loader!pug-html-loader'
      },
      {
        test: /\.htmlz$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(html|png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'//?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(pkg.name+'.css')
  ]
}
