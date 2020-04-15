class EndNotiWebpackPlugin {
  constructor(doneCb, failCb) {
    this.doneCb = doneCb
    this.failCb = failCb
  }

  apply(compiler) {
    // compiler.hooks.done.tap('EndNotiWebpackPlugin', compilation => {
    //   this.doneCb && this.doneCb()
    // })
    // compiler.hooks.failed.tap('EndNotiWebpackPlugin', err => {
    //   this.failCb && this.failCb(err)
    // })

    compiler.hooks.assetEmitted.tap('assetEmitted', (file, d) => {
      // entry C:\Users\xxx\webpack\src\index.js 入口文件的绝对路径
      console.log('file', file)
      console.log('d', d)
    })
  }
}

module.exports = EndNotiWebpackPlugin
