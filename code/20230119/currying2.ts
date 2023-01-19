function curry1(func: Function) {
  const len = func.length
  
  return function innerFunc<T>(this: unknown, ...args: T[]) : Function | T[]{
    if (args.length >= len) {
      return func.call(this, ...args)
    }
    return innerFunc.bind(this, ...args)
  }
}

function myAdd(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e
}

const add = curry1(myAdd)

const a = add(1)(2)(3)
console.log(a(4)(5))
console.log(a(4)(6))
console.log(a(4)(7))
console.log(a(4)(8))
