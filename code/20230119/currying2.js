function curry1(func) {
  const len = func.length

  return function innerFunc(...args) {
    if (args.length >= len) {
      return func.call(this, ...args)
    }
    return innerFunc.bind(this, ...args)
  }
}
function myAdd(a, b, c, d, e) {
  return a + b + c + d + e
}
const add = curry1(myAdd)

console.log(add(1)(2)(3)(4)(5))
console.log(add(1, 2)(3)(4)(5))
console.log(add(1, 2, 3)(4, 5))
console.log(add(1, 2, 3, 4)(5))
console.log(add(1, 2, 3, 4, 5))
