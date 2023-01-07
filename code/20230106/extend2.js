function Parent(name) {
  this.name = name
}

Parent.prototype.sayHello = function () {
  console.log('hello ' + this.name)
}

function Child(name, age) {
}

Child.prototype.sayHello = new Parent()

const child = new Child('name', 10086)
