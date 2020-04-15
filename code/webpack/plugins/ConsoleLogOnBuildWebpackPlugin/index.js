const MiniCssExtractPlugin = require('mini-css-extract-plugin')

class SearchOneWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('SearchOne', compilation => {})
    // compiler.hooks.shouldEmit.tap('MyPlugin', compilation => {
    //   // return true to emit the output, otherwise false
    //   console.log('----> shouldEmit')
    //   return true
    // })
  }
}

module.exports = SearchOneWebpackPlugin
