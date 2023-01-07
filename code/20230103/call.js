Function.prototype.call = function (ctx, ...args) {
  if (typeof ctx === 'number' || typeof ctx === 'string')
    ctx = ctx.__proto__.constructor(ctx)
  ctx = ctx || global
  const func = Symbol('func')
  ctx[func] = this
  const ret = ctx[func](...args)
  delete ctx[func]
  return ret
}

function testFunc(a, b, c) {
  console.log({ a, b, c, d: this.d })
}

testFunc.call(0, 1, 2, 3)
