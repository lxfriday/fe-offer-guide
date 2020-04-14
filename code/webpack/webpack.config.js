const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getPath = name => path.join(__dirname, name)

module.exports = function () {
  return {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: getPath('src/index.js'),
    output: {
      publicPath: getPath('build'),
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: 'static/imgs/[name].[ext]',
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
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    resolveLoader: {
      modules: ['node_modules', './loader'],
    },
  }
}
