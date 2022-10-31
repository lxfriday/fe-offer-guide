Function.prototype.apply = function (ctx, args) {
  ctx = ctx || window
  const that = this
  if(typeof ctx === 'number' || typeof ctx === 'string') ctx = new Object.getPrototypeOf(ctx).contructor(ctx)
  const funcName = Symbol('func')
  ctx[funcName] = that
  const ret = ctx[funcName](...args)
  delete ctx[funcName]
  return ret
}

function sayInfo(age, school) {
  console.log(this.name, age, school)
}

const info = { name: 'lxfriday' }

sayInfo.apply(info, [10087, 'HZAU'])
