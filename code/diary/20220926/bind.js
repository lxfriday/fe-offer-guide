Function.prototype.bind = function (ctx, ...args) {
  if (typeof ctx === 'number' || typeof ctx === 'string') ctx = new ctx.__proto__.constructor(ctx)
  ctx = ctx || global
  const that = this
  const funcName = Symbol('func')
  ctx[funcName] = that
  return function (...args1) {
    return ctx[funcName](...args, ...args1)
  }
}

function sayInfo(name, age, school) {
  console.log(name, age, school, this)
}

const info = 0

const func = sayInfo.bind(info, 'lxfriday', 10088)

func('HZAU')
func('HUST')