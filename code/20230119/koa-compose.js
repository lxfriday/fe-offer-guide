function koaCompose(...asyncFuncs) {
  return function (context, next) {
    return dispatch(0)
    function dispatch(idx) {
      let fn
      if (idx < asyncFuncs.length) {
        fn = asyncFuncs[idx]
      } else if (idx === asyncFuncs.length && typeof next === 'function') {
        fn = next
      } else {
        return Promise.resolve()
      }
      return Promise.resolve(fn(context, dispatch.bind(null, idx + 1)))
    }
  }
}

let middlewares = []
// logger
middlewares.push(async (ctx, next) => {
  console.log('a before')
  await next()
  console.log('a after')
})

// x-response-time
middlewares.push(async (ctx, next) => {
  console.log('b before')
  await next()
  console.log('b after')
})
middlewares.push(async (ctx, next) => {
  console.log('c before')
  await next()
  console.log('c after')
})

;(async () => {
  const ret = await koaCompose(...middlewares)({ name: 'lxfriday' })
})()
