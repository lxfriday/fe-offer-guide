# 前端面试日志

## 20230119

- react18 新特性 [ref](https://www.infoq.cn/article/pi8g04Fpma4KmMD9hDwp)
- 强化：输入 url 到页面显示出来的
- eggjs 温习
- koajs、expressjs、原生 node js 如何起一个服务器
- 内存泄漏的排查手段
  - performance
  - memory
  - [ref](https://juejin.cn/post/6844904165672484871#heading-16)
- bigint 计算
- soucemap
- 项目巩固
- createPortal
- 简历 star 法则
- hooks 实现原理
- useImperativehandle
- **源码分析：redux、axios**
- 树的非递归先序遍历
- **行内元素、块级元素有哪些**
- webpack treeshaking
- 写个 css，当文本没有超过容器宽度时居中显示，超过宽度则换行，并左对齐（display:tabel-cell 或者 width:fit-content，但是忘了）
- jsbridge 原理
- audio、video 标签使用
- [!] proxy 的使用
- [x] symbol
- [?] http123 http https
- [x] ssr、csr 的区别
- [x] 闭包函数中打印值（函数的变量查找方式 => 定义时就确定，不是执行的时候）
- [x] setTimeout 的第三个参数
- [x] JS 判断数组
- [x] promise、asyncawait、generator 的区别
  - 实现一个 generator 自动执行器
- [x] 函数柯里化
  - [x] 手写实现 reduce 函数
- 洋葱模型
- [x] compose 函数怎么实现 `const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)))`
- [x] 手写并发函数

## 20230111

- 面经
  - [华为前端社招面经（已拿 offer）](https://www.nowcoder.com/discuss/367702?type=2)

## 20230115

## 20230106

webpack(2 16:00 -> 18:00)、算法(1 15:00->16:00)、JS 基础、网络协议、框架

- ES6 新增的语法特性
- 简历、个人
  - 简历项目简介，重难点，如何解决
  - 你的职业规划是怎样的
  - 你怎么认识初级工程师和高级工程师的，他们有什么区别，高级工程师应该具备什么特点
- [x] ts 常见面试题
- webpack：[「吐血整理」再来一打 Webpack 面试题](https://juejin.cn/post/6844904094281236487?share_token=13f3e675-e941-488b-97ad-e4f88f9e693e)
  - 常用 Loader：babel-loader、css-loader、file-loader、url-loader、postcss-loader、raw-loader、json-loder、source-map-loader、less-loader、eslint-loader
  - 常用 plugins：definePlugin、ignorePlugin、htmlWebpackPlugin、terser-webpack-plugin、mini-css-extract-plugin、clean-webpack-plugin、webpack-bundle-analyzer、speed-measure-webpack-plugin
- [x] 前端安全相关的
  - csrf 跨站请求伪造：[【基本功】 前端安全系列之二：如何防止 CSRF 攻击？](https://zhuanlan.zhihu.com/p/46592479)
  - xss 跨站脚本攻击：使用 csp 限制 [浅谈 XSS 攻击的那些事（附常用绕过姿势）](https://zhuanlan.zhihu.com/p/26177815)
    - XSS 是将一段恶意脚本添加到网页上，通过浏览器加载而执行从而达到攻击并获得隐私信息的目的。
- [x] 浮点数运算不准确问题
- [x] 前端性能优化
  - 缓存、cdn、dns 预热、预加载、减少回流重绘、debounce、memo、usecallback、usememo、purecomponent、shouldcomponentupdate
  - 图片懒加载、h2、图片压缩、文件差分、suspense 异步加载
- [x] 网络协议
  - 三次握手、四次挥手、https 建立连接
  - 为什么三次握手：防止客户端发送出去的 SYN 过了很久又被服务端接收到了
- [x] HTTP 协议版本变迁： [HTTP1.0， HTTP1.1，HTTP2.0 区别及如何升级](https://blog.csdn.net/tdcqfyl/article/details/122923972)
  - http 1.0 无状态、短连接
  - http 1.1 长链接、缓存、Host、range 断点传输
  - http 2 二进制传输、数据帧、头部压缩、多路复用、服务端推送

---

- [x] localstorage 区分协议、域名、端口
- 正则表达式
- redux 大概的原理
  - redux 常见面试题
- [x] 从输入 url 到页面显示出来会发生什么事情
  - CSS 会不会阻塞 DOM 解析、会不会阻塞渲染？
  - [html 页面渲染过程](https://www.lmlphp.com/user/58696/article/item/2610120/)
- [x] commonjs 和 esm 的区别，umd 是什么
- 常见的打包工具：parcel、rollup、webpack，vite
  - 各有什么特点
  - 优缺点
- [x] 接口和抽象类的区别
- DOM 操作
- [x] box-sizing 默认是 border-box
- [x] 瀑布流
- [x] react 中怎么做性能优化
- [x] react18 中为什么用 createRoot 替代 render，有什么优点
- [x] JS 中有哪些继承，相比之下的优缺点是什么
- [x] Suspense
- [x] 说一说合成事件
- [x] 说一说 React Fiber
- [x] 说一说 React Diff：Tree Diff、Component Diff、Element Diff
- [x] 什么是虚拟 DOM
- [x] React 这类框架出现的原因，MVVM 出现的背景
- [x] React 和 Vue 的异同
- [x] 什么是 MVVM，React 是不是 MVVM 框架
- [x] 用 CSS 写一个两栏式布局, 左边固定，右边随窗口变化
- [x] 媒体查询：从小到大写
- [x] 基本 TS 面试题
  - type、interface 的区别
  - 泛型
  - 抽象函数
- [x] css background 属性
- [x] reducer 函数是纯函数
- [x] h5 新增的标签、api
- [x] antd `:where`，`:where()` `:is()` 有什么用，区别是什么
- [x] useImperativeHandle、forwardRef 的作用
- [x] input type 有哪些类型
- [x] BFC
- [x] HOOKS 相比 component 组件有什么优缺点，什么时候使用 HOOKS 什么时候使用 component
- [x] 什么是 PureComponent、和 Component 有什么区别
- [x] react 中 element 和 component 的区别，分别是做什么的
- [x] let 和 var 的区别
- [x] 说说 CSS 三大特性：层叠、继承、优先级
- [x] react 虚拟 DOM、fiber
- 用过哪些 UI 库，前端框架相比没有框架有了什么改进的地方

- [x] 双指针和滑动窗口的区别

## 20230103-20230104

- JS 闭包、内存泄漏
- use strict
- 寄生组合继承
- JS GC
- 进程、线程
- react 有哪些 HOOK 其作用分别是干什么的
- forwardRef、useRef
- react 生命周期函数
- 服务端渲染和客户端渲染的差别 优缺点 怎么选择这两者

## 20230102

- cookie
- HTTPS 握手
- 区间问题、上下车问题、LRU
- 设计模式
- 正则表达式

## 20230101

- [前端性能优化技巧](http://localhost:3388/#/?id=%e5%89%8d%e7%ab%af%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e6%8a%80%e5%b7%a7)
- [XSS、CSRF](http://localhost:3388/#/?id=%e2%9c%94-xss)
  - XSS 有哪些类型、CSRF 防御措施有哪些
- 跨域：jsonp、CORS
- 封装 HOOKS
- 三次握手、四次挥手

## 20220927

- [JS 基本数据类型](https://feoffer.lxfriday.xyz/#/?id=%e2%9c%94-%e5%9f%ba%e6%9c%ac%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b)

## 20220926

- [手撕 instanceOf](https://github.com/lxfriday/fe-offer-guide/blob/master/code/diary/20220926/instanceof.js)
- [手撕 call](https://github.com/lxfriday/fe-offer-guide/blob/master/code/diary/20220926/call.js)
- [手撕 apply](https://github.com/lxfriday/fe-offer-guide/blob/master/code/diary/20220926/apply.js)
- [手撕 bind](https://github.com/lxfriday/fe-offer-guide/blob/master/code/diary/20220926/bind.js)
