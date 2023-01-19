
# TypeScript

## 为什么要使用 TS

- 规范代码
- 代码编译阶段就能及时发现错误
- 在原生js的基础上加上了一层类型定义
- 类型检查，在书写代码的时候就提示部分低级错误
- 帮助写出更高级更稳定的代码
- 支持JS的最新特性

## TS基础数据类型

- **布尔**
- **数字**
- **字符串**
- **null**
- **undefined**
- **Object**
- **数组**
- **元组 Tuple**： 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 `let x: [string, number]`
  - CSV 数据结构使用元组比较合适
- **枚举**
- **any**
- **unknown** ：类似 any，但是比any更安全，如果不进行类型判断，执行相关操作编译器就会报错，而any在编译时并不会报错
- **void**： 当一个函数没有返回值时，你通常会见到其返回值类型是 void
- **never**：never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；

---

- **联合**：`let res: number|string|boolean`


类型断言：

```typescript
let strLength: number = (<string>someValue).length;
```

```typescript
let strLength: number = (someValue as string).length;
```


联合类型：

```typescript
let s: string | number | number[]
```

字面量类型：
```typescript
let s: 0 | 1 | 2

s = 2 // 不报错
s = 3 // 报错
```
```typescript
let s: 0 | '1' | true | [1, 2, 3, 4]
```

## typescript 相较于 javascript 的优缺点

优点：
- 类型检查：编译时会进行严格的静态类型检查
- 新ES语法：支持最新的 ECMAScript 语法，优先体验最新的语法
- TS 写的组件具备自带类型提示，方便多方使用
- 类型推断：强大的类型推断
  - 编写代码的时候能够自动获得变量类型
  - 更早发现错误，减少找bug、改bug的时间，提升开发效率
  - 类型提醒提升了代码的可维护性，使得代码重构更加容易
  - TS 中的类型推断机制，不需要在代码中每个地方都显示标注类型，减少繁琐的类型声明

缺点：

- 新手前期学习成本比较大，需要理解接口、泛型、类、枚举类型
- 短期开发成本增加，增加类型定义
- ts集成到构建流程需要一定的工作量
- 和一些库结合不是很完美（没有提供TS definition）

## cosnt 和 readonly 的区别

- `const` 用于变量，`readonly` 用于属性
  - `const a = 100;` `{readonly name: string}`
- `const` 在运行时检查，`readonly` 在编译时检查
- `const` 保证的不是变量的值不得改动，而是变量指向的那个内存地址不得改动（例如数组、对象），但是如果使用`ReadonlyArray<number>` 声明的数组不能使用 `push`、`pop` 等方法。

## type 和 interface 的相同和不同

不同：

- `type` 可以声明基本类型、联合类型、元组
- `type` 可以使用 `typeof` 获取实例的类型进行赋值
- `type` 可以用 `in` 关键字，`interface` 不行
- 默认导出时不同：`interface` 支持生命时默认导出，`type` 要先声明后默认导出
- 多个相同的 `interface` 声明会自动合并
- 扩展方式不同
  - `interface` 使用 `extends`
  - `type` 使用 `&`

```typescript
type Method = 'GET' | 'POST'
// 正常
type Inter =  {
  [key in Method]: number
}
// 报错
interface Inter2  {
  [key in Method]: number
}
```

相同：

- 都可以描述**对象**或者**函数**

--- 

`type` 和 `interface` 间的继承

```typescript
type A = {
  name: string
  sayHello(age: number): string
}
interface AA extends A {
  age: number
}
// --------------------------
interface BB {
  age: number
}
type B = {
  name: string
  sayHello(age: number): string
} & BB
```

## `&` 和 `|` 区别

- `A & B` 表示 A 和 B 中的条件全部都要满足
- `A | B` 表示 A 或者 B 中的条件满足其一即可，也可以两个都满足

```typescript
type Person = {
  name: string
  age: number
}

type Animal = {
  sex: string
}

type User1 = Person & Animal
type User2 = Person | Animal

// 报错
const ming: User1 = {
  name: 'Mong',
  age: 100,
}
// 正常
const wang: User2 = {
  name: 'Mong',
  age: 100,
}
```

## 接口

### 接口可以描述哪些类型

- 函数
- 可索引类型：对象
- 类

**函数类型**

```typescript
interface Func {
  (name: string): string
}

const f: Func = (name: string) => {
  return name
}
```

**可索引类型**

```typescript
interface StringArr {
  [propName: number]: string
}

// 给属性设置成只读类型
interface StringArr2 {
  readonly [propName: number]: string
}

const arr: StringArr = ['Jhon', 'Jack']
arr[0]
arr[1]
```

**类类型**

```typescript
interface People {
  name: string
  age: number
  sayName(school: string): string
}

class Ming implements People {
  constructor(public name: string, public age: number) {}
  sayName(school: string): string {
    return this.name + ' ' + this.age
  }
}

const ming: People = {
  name: '',
  age: 0,
  sayName() {
    return (this as People).name
  },
}
```

**混合类型**

```typescript
interface Counter {
  (init: number): void
  interval: number
  reset(): void
}

let counter = <Counter>function (init: number) {}
counter.interval = 100
counter.reset = function () {}

// 下面的写法是错误的，会报缺少 interval、reset 属性
let counter: Counter = function (init: number) {}
counter.interval = 100
counter.reset = function () {}
```

### 接口继承

```typescript
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

// 这里用到了泛型
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 接口和类能不能相互继承，有什么区别

正常情况下是类继承接口，如果接口继承类，则它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。

```typescript
class ClassParent {
  private name: string
}

interface InterfaceParent extends ClassParent {
  select(): void
}
// 报错
class Child1 implements InterfaceParent {
  private name: string = 'yunyuv'
  select() {}
}
// 正常
class Child2 extends ClassParent implements InterfaceParent {
  select() {}
}
```

## 类

### 构造函数简易写法

```typescript
class Parent {
  constructor(public name: string, protected age: number, private sex: string) {}
}
```

### super 的作用

- super 用来调用父类的方法
- 执行父类的构造函数

### 类中的修饰符

- public 内外部都可以访问
- private 禁止外部访问，只能在类内部访问
- protected 禁止外部访问，可以内部访问也可以在继承的子类中访问
- static 静态属性，可以用 `Class.xx` 的形式访问

### Getter 和 Setter

```typescript
class Parent {
  constructor(private _name: string){}
  get name(){
    console.log('getter')
    return this._name
  }
  set name(name: string){
    console.log('setter')
    this._name = name
  }
}
const p = new Parent('lxfriday')
console.log(p.name)
p.name = 'lxfridayyyy'
console.log(p.name)
```

### 类中 static 修饰符声明的函数this指向哪里

this 指向类，因为这个函数是使用 `Parent.func` 形式调用的，作为对象属性的方式调用，this 指向这个对象，即 this 指向类

```typescript
class Parent {
  private static ins: Parent
  static getInstance() {
    console.log('this', this)
    if(!this.ins) {
      this.ins = new Parent()
    }
    return this.ins
  }
}
Parent.getInstance()
```

编译后

```js
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.getInstance = function () {
        console.log('this', this);
        if (!this.ins) {
            this.ins = new Parent();
        }
        return this.ins;
    };
    return Parent;
}());
Parent.getInstance();
```

### 抽象类

以 abstract 开头的类是抽象类，和其他类的差别在于抽象类不能直接实例化，需要被继承。

```typescript
abstract class People {
  constructor(public name: string, public age: number) {}
  abstract sayName(): string
}
class Xiaoming extends People {
  sayName(): string {
    return this.name
  }
}abstract class People {
  constructor(public name: string, public age: number) {}
  abstract sayName(): string
}

class Xiaoming extends People {
  sayName(): string {
    return this.name
  }
}
```

### 接口和抽象类的区别

- 两者都不能被实例化
- interface 的所有方法默认都是 `public abstract`，而抽象类可以指定修饰符
- 抽象类中可以有具体的实现，接口不能有
- 抽象类是单继承，一个类只能使用一次继承关系，接口是多继承多实现

## 泛型

- 泛型约束


在泛型约束中使用类型参数

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const o = { a: 1, b: 2 }

getValue(o, 'a') // 正常
getValue(o, 'c') // 报错
```

在泛型里使用类类型

```typescript
function create<T>(c: {new(): T; }): T {
    return new c();
}
```

```typescript
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
```