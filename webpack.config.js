const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/click1.js',
  // entry: './src/promise1.js',
  entry: './src/map1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  // entry: './src/click1.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
