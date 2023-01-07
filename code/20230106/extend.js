function Parent(name) {
  this.name = name
}

Parent.staticPropsName = 'police'

Parent.prototype.sayHello = function () {
  console.log('hello ' + this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.__proto__ = Parent

function myextend(Parent, Child) {
  const proto = Object.create(Parent.prototype)
  Child.prototype = proto
  proto.constructor = Child
}

myextend(Parent, Child)

const child = new Child('lxfriday', '100')
child.sayHello()
console.log(Child.staticPropsName)