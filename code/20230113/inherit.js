
function Parent(name) {
  this.name = name
  this.toys = ['a', 'b', 'c']
}
Parent.prototype.sayName = function () {
  console.log('sayName', this.name)
}
function Child(name) {
  Parent.call(this, name)
}

function inherit(sub, cls) {
  const proto = Object.create(cls.prototype, {
    constructor: {
      writable: true,
      configurable: true,
      value: sub
    }
  })
  sub.prototype = proto
}
inherit(Child, Parent)
const child = new Child('lxfriday')

child.sayName()