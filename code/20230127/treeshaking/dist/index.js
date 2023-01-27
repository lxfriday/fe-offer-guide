/*! For license information please see index.js.LICENSE.txt */
;(() => {
  'use strict'
  var r = {
      './src/a.js': (r, e, o) => {
        function t(r) {
          console.log('sayName', r)
        }
        o.d(e, { sayName: () => t })
      },
    },
    e = {}
  function o(t) {
    var a = e[t]
    if (void 0 !== a) return a.exports
    var s = (e[t] = { exports: {} })
    return r[t](s, s.exports, o), s.exports
  }
  ;(o.d = (r, e) => {
    for (var t in e)
      o.o(e, t) &&
        !o.o(r, t) &&
        Object.defineProperty(r, t, { enumerable: !0, get: e[t] })
  }),
    (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (0, o('./src/a.js').sayName)('lxfriday')
})()
