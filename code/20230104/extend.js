function Parent(name) {
  this.name = name
  this.colors = ['red', 'black', 'green']
}

Parent.prototype.sayName = function () {
  console.log('name', this.name)
}

// function proto(prototype) {
//   function F() {}
//   F.prototype = prototype
//   const obj = new F()
//   return obj
// }

function Child(name) {
  Parent.call(this, name)
  this.age = 100
}

function myextend(Parent, Child) {
  const proto = Object.create(Parent.prototype)
  proto.constructor = Child
  Child.prototype = proto
}

myextend(Parent, Child)
const child = new Child('lxfriday')
console.log(child)