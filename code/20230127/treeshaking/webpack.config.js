const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = () => {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: path.join(srcPath, 'index.js'),
    },
    output: {
      path: distPath,
    },
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [new TerserWebpackPlugin()],
    },
    plugins: [new CleanWebpackPlugin()],
  }
}
