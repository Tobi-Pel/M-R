const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules:[
      {
        test: /\.js$/ ,
        exclude: /node_modules/ ,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 8080 ,
    static: path.resolve(__dirname , 'dist')
  }
};