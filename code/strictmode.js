;(function () {
  'use strict'
  var o = {}
  Object.defineProperty(o, 'v', { value: 1, writable: false })
  o.v = 2 // 报错
})()
