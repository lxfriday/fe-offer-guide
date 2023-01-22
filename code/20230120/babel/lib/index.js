function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg)
    var value = info.value
  } catch (error) {
    reject(error)
    return
  }
  if (info.done) {
    resolve(value)
  } else {
    Promise.resolve(value).then(_next, _throw)
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args)
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
      }
      _next(undefined)
    })
  }
}
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2000)
  }, 2000)
})
function add() {
  return _add.apply(this, arguments)
}
function _add() {
  _add = _asyncToGenerator(function* () {
    const d = yield p
    console.log('d', d)
  })
  return _add.apply(this, arguments)
}
_asyncToGenerator(function* () {
  yield add()
})()
