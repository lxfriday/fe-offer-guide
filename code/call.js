// Function.prototype.mcall = function (ctx, ...args) {
//   if (ctx === undefined || ctx === null) return window
//   if (typeof ctx === 'number' || typeof ctx === 'string') ctx = new ctx.__proto__.constructor(ctx)

//   const fName = Symbol('call')
//   ctx[fName] = this
//   const res = ctx[fName](...args)
//   delete ctx[fName]
//   return res
// }

// Function.prototype.call = function (ctx, ...args) {
//   ctx = ctx || window
//   if (typeof ctx === 'number' || typeof ctx === 'string') ctx = new ctx.__proto__.constructor(ctx)
//   const that = this
//   const funcName = Symbol('func')
//   ctx[funcName] = that
//   const res = ctx[funcName](...args)
//   delete ctx[funcName]
//   return res
// }

function test() {
  return this
}

console.log(test.bind(1)())
