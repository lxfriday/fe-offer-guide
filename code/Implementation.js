// function instanceof1(left, right) {
//   let lP = Object.getPrototypeOf(left)
//   const rP = right.prototype

//   while (lP !== null) {
//     if (lP === rP) return true
//     lP = Object.getPrototypeOf(lP)
//   }
//   return false
// }

// Function.prototype.call = function(ctx, ...args) {
//   ctx = ctx || window
//   const that = this
//   const funcName = Symbol('func')
//   ctx[funcName] = that
//   const res = ctx[funcName](...args)
//   delete ctx[funcName]
//   return res
// }

// Function.prototype.apply = function(ctx, args) {
//   ctx = ctx || window
//   const that = this
//   const funcName = Symbol('func')
//   ctx[funcName] = that
//   const res = ctx[funcName](...args)
//   delete ctx[funcName]
//   return res
// }

// Function.prototype.bind = function(ctx, ...args) {
//   ctx = ctx || window
//   const that = this
//   const funcName = Symbol('func')
//   ctx[funcName] = that
//   return function(...args1) {
//     return ctx[funcName](...args, ...args1)
//   }
// }

// const obj = { a: 1 }

// function log(...args) {
//   console.log('this', this)
//   console.log('args', ...args)
// }

// const nLog = log.apply(obj, ['???', 'what'])
// console.log(nLog)

// function myNew(Constructor, ...args) {
//   if (!Constructor.prototype) {
//     throw new TypeError('Constructor 不是一个构造函数')
//   }
//   const newObj = {}
//   Object.setPrototypeOf(newObj, Constructor.prototype)
//   const res = Constructor.apply(newObj, args)
//   if (typeof res === 'object' && res !== null) return res
//   else return newObj
// }

// function A(name) {
//   this.name = name
//   return {
//     age: 12,
//   }
// }
// A.prototype.sayName = function() {
//   console.log(this.name)
// }

// A.prototype = null
// console.log(myNew(A, 'lxfriday'))

// function ObjectCreate(proto, propertiesObject) {
//   const o = {}
//   // proto 只能为 null 或者 type 为 object 的数据类型
//   if (!(proto === null || typeof proto === 'object')) {
//     throw new TypeError('Object prototype may only be an Object or null')
//   }

//   Object.setPrototypeOf(o, proto)

//   if (propertiesObject === null) {
//     throw new TypeError('Cannot convert undefined or null to object')
//   }
//   if (propertiesObject) Object.defineProperties(o, propertiesObject)
//   return o
// }

// console.log(
//   ObjectCreate(
//     { a: 1 },
//     {
//       age: {
//         value: 1,
//         enumerable: true,
//         writeable: true,
//         editable: true,
//       },
//     }
//   )
// )

function ObjectAssign(target, ...args) {
  if (target === null || target === undefined) {
    throw new Error('target 不能为 null 或者 undefined')
  }

  for (let index = 0; index < args.length; index++) {
    const source = args[index]

    if ((typeof source === 'object' || typeof source === 'string') && source !== null) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key]
        }
      }
    }
  }

  return target
}

console.log(ObjectAssign({}, { a: 1 }, { b: 2 }, { a: 3 }))
