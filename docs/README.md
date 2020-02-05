# JavaScript

## 作用域和作用域链

## JS 执行上下文

## 原型链

## 变量查找原理

## 作用域提升

## this 原理

## 闭包原理及其危害

## 多种继承及其优缺点

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

# DOM

## 事件冒泡、捕捉、代理

## `document.querySelectorXX` 和 `document.getElementByXX` 的区别

# V8 专区

## JS 内存泄露

## JS 编译器及解释器

# NodeJS

## commonJS 和 ESM 差异

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

## setState 原理

ref

- [https://juejin.im/post/5b45c57c51882519790c7441](https://juejin.im/post/5b45c57c51882519790c7441)
- [测试 code](https://codesandbox.io/s/modest-volhard-0l3ov?fontsize=14&hidenavigation=1&theme=dark)

## HOC

## HOOKS 原理

## 虚拟 DOM

## react roouter 原理

## redux 原理

## redux-saga 原理

# webpack

## loader 编写

## plugin 编写

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

### HTTP 缓存

ref

- [https://juejin.im/post/5da7286de51d4524a21c45d1](https://juejin.im/post/5da7286de51d4524a21c45d1)

- [etag 如何生成](https://juejin.im/post/5df027036fb9a0164143ef25)

### HTTP 长连接

### keep-alive

### **http 状态码**（1-5 分类的含义和每个状态码具体的含义）

### **http 请求方法**

### [get、post 区别](https://www.cnblogs.com/logsharing/p/8448446.html)

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

## 使用 XMLHttpRequest 发送请求，并封装成 Promise

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

## 二叉树

# 算法

## 排序算法

![排序算法一览](./static/imgs/sort.png)

### 冒泡排序

![](./static/imgs/bubbleSort.png)

```typescript
function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

export function bubbleSort(arr: number[]) {
  const length = arr.length;
  if (length <= 1) return arr;
  for (let i = 0; i < length; i++) {
    let changed: boolean = false; // 没有数据交换则表示已经有序了
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        changed = true;
      }
    }
    if (!changed) break;
  }
  return arr;
}
```

### 鸡尾酒排序

### 选择排序

### 插入排序

### 归并排序

### 快速排序

### 堆排序(heap sort)

通常堆是通过一维数组来实现的。

### 计数排序

### 桶排序

### 基数排序
