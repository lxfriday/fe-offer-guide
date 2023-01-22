// 创建一个全局 Symbol
var globalSym = Symbol.for("foo");
console.log(Symbol.keyFor(globalSym))  // "foo"

var localSym = Symbol();
console.log(Symbol.keyFor(localSym)); // undefined，

// 以下 Symbol 不是保存在全局 Symbol 注册表中
console.log(Symbol.keyFor(Symbol.iterator)) // undefined
