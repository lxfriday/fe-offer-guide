// 手撕 call
Function.prototype.call = function (ctx, ...args) {
  ctx = ctx || window
  const that = this
  if (typeof ctx === 'number' || typeof ctx === 'string') ctx = new ctx.__proto__.constructor(ctx)
  const funcName = Symbol('func')
  ctx[funcName] = that
  const ret = ctx[funcName](...args)
  delete ctx[funcName]
  return ret
}

function sayName(age, school) {
  // lxfriday 10086 HZAU
  console.log(this, age, school)
}
const info = 1

sayName.call(info, 10086, 'HZAU')
