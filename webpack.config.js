const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/click1.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
