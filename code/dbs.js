function debounce(func, wait, immediate) {
  let timeout = null
  function debounced(...args) {
    const ctx = this
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(ctx, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(ctx, args)
      }, wait)
    }
  }
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

var a = { a: 1 }
var b = { b: 1 }
var c = { c: 1 }

a.next = b
b.next = c

console.log(a)
