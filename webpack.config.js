const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/index.js',
  output: {
    path: path.join(__dirname, 'public/js/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
    ]
  }
};
