const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: path.resolve(__dirname, './public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [/src/],
        query: {
          babelrc: false,
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  }
};
