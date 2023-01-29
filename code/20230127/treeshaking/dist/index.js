/*! For license information please see index.js.LICENSE.txt */
;(() => {
  'use strict'
  var e,
    r,
    o = {
      './src/a.js': (e, r, o) => {
        function s(e) {
          console.log('sayName', e)
        }
        o.d(r, { sayName: () => s })
      },
      './src/b.js': (e, r, o) => {
        o.d(r, { default: () => s })
        const s = { b1: 'b1', b2: 'b2' }
      },
    },
    s = {}
  function t(e) {
    var r = s[e]
    if (void 0 !== r) return r.exports
    var a = (s[e] = { exports: {} })
    return o[e](a, a.exports, t), a.exports
  }
  ;(t.d = (e, r) => {
    for (var o in r)
      t.o(r, o) &&
        !t.o(e, o) &&
        Object.defineProperty(e, o, { enumerable: !0, get: r[o] })
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = t('./src/a.js')),
    (r = t('./src/b.js')),
    (0, e.sayName)('lxfriday'),
    console.log(r.default.b1)
})()
