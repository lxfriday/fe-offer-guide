const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath = path.join(__dirname, './src')
const distPath = path.join(__dirname, './dist')

module.exports = (...args) => {
  console.log('env', process.env.NODE_ENV)
  const isProd = process.env.NODE_ENV === 'production'

  const mapTypes = [
    'source-map',
    'inline-source-map',
    'hidden-source-map',
    'eval-source-map',
    'nosources-source-map',
    'cheap-source-map',
    'cheap-module-source-map',
  ]

  return mapTypes.map((type, idx) => ({
    mode: isProd ? 'production' : 'development',
    entry: {
      [type]: path.join(srcPath, 'index.js'),
    },
    devtool: type,
    output: {
      path: path.join(distPath, type),
    },
    optimization: {
      minimize: isProd,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                sourceMaps: true,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      modules: false,
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  }))
}
