const { compose: reduxCompose } = require('redux')

const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))

// compose(a, b, c, d, e)(1)
reduxCompose(a, b, c, d)('initial args')('from third ')

function a(next) {
  return (innerParams) => {
    console.log('before a')
    const res = typeof next === 'function' && next('data from a')
    console.log('after a', res, innerParams)
    return 'ret from a'
  }
}
function b(next) {
  return (innerParams) => {
    console.log('before b')
    const res = typeof next === 'function' && next('data from b')
    console.log('after b', res, innerParams)
    return 'ret from b'
  }
}
function c(next) {
  return (innerParams) => {
    console.log('before c')
    const res = typeof next === 'function' && next('data from c')
    console.log('after c', res, innerParams)
    return 'ret from c'
  }
}
function d(next) {
  return (innerParams) => {
    console.log('before d')
    const res = typeof next === 'function' && next()
    console.log('after d', next, innerParams)
    return 'ret from d'
  }
}
