// 手撕instanceof
function myInstanceOf(A, B) {
  if (B === undefined || B === null) {
    throw new Error('B Error')
  }
  B = B.prototype
  do {
    A = Object.getPrototypeOf(A)
    if (A === B) return true
  } while (A !== null)
  return false
}

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const qiuqiu = new Cat('qiuqiu', 10086)

console.log('myInstanceOf', myInstanceOf(qiuqiu, Animal))
console.log('instanceOf', qiuqiu instanceof Animal)
