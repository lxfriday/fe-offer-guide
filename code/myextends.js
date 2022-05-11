// 继承相关的

function Parent(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child() {}

// 原型链继承
// 父类实例引用类型变量会被共享
Child.prototype = new Parent()

new Child()

// 借用构造函数
// 可以继承父类自身的属性，无法获得原型链上的属性
function Child(name) {
  Parent.call(this, name)
}

// 组合式继承

// 继承父类自身的属性
// parent 会调用不止一次
function Child(name) {
  Parent.call(this, name)
}

// 继承父类原型链上的属性
Child.prototype = new Parent()

// 原型式继承
function prototype(o) {
  function F() {}
  F.prototype = o
  return new F()
}

prototype({
  name: 'lxfriday'
})

// 寄生式继承
function prototype(0) {
  const clone = Object.create(o)
  clone.sayName = function(){
    console.log(this.name);
  }
}

prototype({
  name: 'lxfriday'
})

// 寄生组合继承
function Parent(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}

Parent.age = 100

Parent.prototype.sayName = function () {
  console.log(this.name)
}
function prototype(child, parent) {
  function F() {}
  F.prototype = parent.prototype
  child.prototype =  new F()
  child.prototype.constructor = child
  Object.setPrototypeOf(child, parent)
}

function Child(name) {
  Parent.call(this, name)
}

prototype(Child, Parent)