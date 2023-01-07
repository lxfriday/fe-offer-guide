function Parent(name) {
  this.name = name
}

Parent.staticPropsName = 'police'

Parent.prototype.sayHello = function () {
  console.log('hello ' + this.name)
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayName() {
    console.log(this.name)
  }
}
