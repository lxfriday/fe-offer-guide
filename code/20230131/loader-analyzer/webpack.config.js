const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = function () {
  return {
    mode: 'development',
    devtool: false,
    entry: {
      index: path.join(srcPath, 'index.js'),
    },
    output: {
      path: distPath,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: require.resolve('./css-loader/dist/index.js'),
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.xs$/,
          use: [
            {
              loader: require.resolve('./loader/loaderA.js'),
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  }
}

console.log('loader path ', require.resolve('./css-loader/dist/index.js'))
