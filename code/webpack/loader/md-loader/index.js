const loaderUitls = require('loader-utils')
const marked = require('marked')

module.exports = function (source) {
  const options = loaderUitls.getOptions(this)
  marked.setOptions(options)

  console.log('------------------')
  console.log('options')
  console.log(options)
  console.log('source')
  console.log(source)
  console.log('marked(source)')
  console.log(marked(source))
  console.log('------------------')
  this.callback(null, marked(source))
  return 1
}
