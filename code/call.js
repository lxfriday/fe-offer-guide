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

// function test() {
//   return this
// }

// console.log(test.bind(1)())

// function Person(name) {
//   this.name = name
// }

// const single = {
//   ins: null,
//   get(name) {
//     if (this.ins) {
//       this.ins.name = name
//     } else {
//       this.ins = new Person(name)
//     }
//     return this.ins
//   },
// }

const multi = function (...args) {
  let i = -1
  let prev = 1
  while (++i < args.length) {
    prev *= args[i]
  }
  return prev
}

const proxyMulti = (function () {
  const cache = {}
  return function (...args) {
    const argsStr = args.join(',')
    if (cache[argsStr]) {
      console.log('here', argsStr)
      return cache[argsStr]
    }
    cache[argsStr] = multi(...args)
    return cache[argsStr]
  }
})()

console.log(proxyMulti(2, 3, 4))
console.log(proxyMulti(2, 3, 4))
console.log(proxyMulti(2, 3, 5))
