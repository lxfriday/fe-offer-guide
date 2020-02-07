# JavaScript

## 作用域和作用域链

## JS 执行上下文

## 原型链

## 变量查找原理

## 作用域提升

## this 原理

## 闭包原理及其危害

## 多种继承及其优缺点

## `valueOf` 和 `toString`

## async、await 及 generator、promise 的关系

## JS 协程及 async、await

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

## 节流防抖

ref

- [https://juejin.im/post/5d88d68ae51d4561c541a796](https://juejin.im/post/5d88d68ae51d4561c541a796)

## 正则表达式（regexp.exec）

## flatten 递归把数组扁平化

## reduce((prev, curr) => xx)

## 箭头函数和普通函数的区别

## 作用域和作用域链

## JS 执行上下文

ref

- [https://segmentfault.com/a/1190000005654451](https://segmentfault.com/a/1190000005654451)

## JS 动画

### requestAnimationFrame

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

# BOM

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
xhr.onprogress = function() {
  console.log('onprogress', codeMap[xhr.readyState])
  // console.log('responseText', xhr.responseText) // 已经有部分 response
}
xhr.onload = function() {
  console.log('onload', codeMap[xhr.readyState])
}
xhr.onreadystatechange = function() {
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
|                  |                        |                                                                 |

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

# DOM

## 事件冒泡、捕捉、代理

## `document.querySelectorXX` 和 `document.getElementByXX` 的区别

# V8 专区

## JS 内存泄露

## JS 编译器及解释器

# NodeJS

## commonJS 和 ESM 差异

## EventEmmiter 实现

# CSS

## CSS 盒模型

## 基本布局

## reflow、repaint

## 外边距折叠（BFC）

## 清除浮动

## CSS 选择器优先级

## flex: flex-grow flex-shrink flex-basis

ref

- [https://juejin.im/post/589965c9128fe1006569cc9d#heading-3](https://juejin.im/post/589965c9128fe1006569cc9d#heading-3)

## keyframes

# React

## React Fiber

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

# Webpack

## Loader 编写

## Plugin 编写

# 【HTML】

## `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />`

IE8/9 及以后的版本都会以最高版本 IE 来渲染页面，用来指定 IE 浏览器去模拟某个特定版本的 IE 浏览器的渲染方式(如 IE6)，以此来解决部分兼容问题，如果存在 GCF(Google Chrome Frame)则使用 GCF 渲染，否则使用最高版本的 IE 内核进行渲染。

# 协议（HTTP+TCP）

## TCP

### 三次握手、四次挥手

ref

- [三次握手、四次挥手](https://mp.weixin.qq.com/s?__biz=MzI5MzYzMDAwNw==&mid=2247486033&idx=1&sn=679e99b0ca60ad9eb81456bba8ffbdec&chksm=ec6e7309db19fa1f74da440a9980ec08a1458598bb3e57a9110b6ceee83d52dbf8cf27d982c5&mpshare=1&scene=1&srcid=0201hefKnCRp0hm9SW35tKNb&sharer_sharetime=1580534579241&sharer_shareid=bf267d5902053ba7332cb6bb736b86b3&key=732653fb0fa49e86b2cb705aaaaf51f9f8a46f0369ca0a885b4b4916bc819da38977e0551641a69f6dfa36e1074df74cccb282239774e685deec1821000aacb4deaaadac4c325535942de78f26806e40&ascene=1&uin=MjQyMzQ2MTgzMw%3D%3D&devicetype=Windows+10&version=6208006f&lang=zh_CN&exportkey=A1nRWsKlQIXAWHd8C0NMQYo%3D&pass_ticket=xlc2xiojgyuqCT6cyqwQWdbOwUCf%2BOt%2BC4jow75C87vgCsxU%2FXCzkna537BHolOS)

### TCP 为什么是三次握手（为什么不是两次）、四次挥手（为什么不是三次）

### TIME_WAIT 为什么是 2 个 MSL

### SYN 洪水

### TCP 保活机制（客户端故障之后什么时候断开连接）

### TCP 滑动窗口、拥塞控制

### TCP 标志位及其作用

## HTTP

### HTTP 协议格式

### HTTP 缓存

ref

- [https://juejin.im/post/5da7286de51d4524a21c45d1](https://juejin.im/post/5da7286de51d4524a21c45d1)

- [etag 如何生成](https://juejin.im/post/5df027036fb9a0164143ef25)

### HTTP 长连接

### keep-alive

### http 状态码

#### 100 Continue

#### 101 Switching Protocols

#### 200 OK

#### 201 Created

#### 202 Accepted

#### 204 No Content

#### 206 Partial Content

#### 301 Moved Permanently

#### 302 Move Temporarily(Found)

#### 303 See Other

#### 304 Not Modified

#### 307 Temporary Redirect

#### 400 Bad Request

#### 401 Unauthorized

#### 403 Forbidden

#### 405 Method Not Allowed

#### 500 Internal Server Error

#### 502 Bad Gateway

#### 503 Service Unavailable

#### 504 Gateway Timeout

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

![OPTIONS 请求过程](/static/imgs/options.png)

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

【GET 请求】
![http-get](static/imgs/http-get.png)
【POST 请求(multipart/form-data)】
![http-post](static/imgs/http-post.png)
【POST 请求(application/json)】
![http-post](static/imgs/http-post2.png)
【POST 请求(application/x-www-form-urlencoded)】
![http-post](static/imgs/http-post3.png)

## HTTPS

### HTTPS 原理

## DNS

### DNS 查询过程

# 性能优化

## 打开一个 URL 到页面显示发生哪些事情

ref

- [https://zhuanlan.zhihu.com/p/34453198](https://zhuanlan.zhihu.com/p/34453198)

## 前端性能优化最佳实践

ref

- [https://csspod.com/frontend-performance-best-practices/](https://csspod.com/frontend-performance-best-practices/)

# 浏览器及安全

## XSS

## CSRF

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

# 手撕代码

## call

## apply

## bind

## new

## Object.create

## Promise

ref

- [https://juejin.im/post/5b2f02cd5188252b937548ab](https://juejin.im/post/5b2f02cd5188252b937548ab)

## JSON.stringify

## 深拷贝

# 设计模式

# 数据结构

## 堆

## 栈

## 队列

### 优先队列

## 二叉树

# 算法

## 排序算法

![排序算法一览](./static/imgs/sort.png)

### 冒泡排序

![](./static/imgs/bubbleSort.png)

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

![堆排序](/static/imgs/heapSort2.png)
![堆排序](/static/imgs/heapSort.gif)

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

![计数排序](/static/imgs/countingSort.png)

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

![基数排序](/static/imgs/radixSort.png)

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

![桶排序](/static/imgs/bucketSort.png)

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
