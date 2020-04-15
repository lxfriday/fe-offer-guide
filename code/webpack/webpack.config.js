const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ConsoleLogOnBuildWebpackPlugin = require('./plugins/ConsoleLogOnBuildWebpackPlugin')
const EndNotiWebpackPlugin = require('./plugins/EndNotiWebpackPlugin')

const getPath = name => path.join(__dirname, name)

module.exports = function () {
  return {
    mode: 'development',
    bail: true,
    devtool: 'cheap-module-source-map',
    entry: getPath('src/index.js'),
    output: {
      publicPath: 'https://lxfriday.xyz/cdn/',
      filename: '[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: 'static/imgs/[name].[contenthash].[ext]',
          },
        },
        {
          test: /\.md$/i,
          use: [
            'html-loader',
            {
              loader: 'md-loader',
              options: {
                name: 'md-loader',
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ConsoleLogOnBuildWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[id].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
      new EndNotiWebpackPlugin(
        () => {
          console.log('编译成功了')
        },
        err => {
          console.log(err)
        }
      ),
    ],
    resolveLoader: {
      modules: ['node_modules', './loader'],
    },
  }
}
