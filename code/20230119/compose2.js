function a(next) {
  return innerParams => {
    console.log('before a')
    const res = typeof next === 'function' && next('data from a')
    console.log('after a', res, innerParams)
    return 'ret from a'
  }
}
function b(next) {
  return innerParams => {
    console.log('before b')
    const res = typeof next === 'function' && next('data from b')
    console.log('after b', res, innerParams)
    return 'ret from b'
  }
}
function c(next) {
  return innerParams => {
    console.log('before c')
    const res = typeof next === 'function' && next('data from c')
    console.log('after c', res, innerParams)
    return 'ret from c'
  }
}
function d(next) {
  return innerParams => {
    console.log('before d')
    const res = typeof next === 'function' && next()
    console.log('after d', next, innerParams)
    return 'ret from d'
  }
}

function compose(...funcs) {
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
  )
}

compose(a, b, c, d)(() => {
  console.log('inner next')
})('initial data')
