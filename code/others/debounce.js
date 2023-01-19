// 防抖

function debounce(func, wait, immediate) {
  let timeout = null
  return function debounced(...args) {
    const ctx = this
    if (timeout) {
      clearTimeout(timeout)
    }
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
}

function debounce2(func, wait, immediate) {
  let timeout = null
  function debounced(...args) {
    const ctx = this
    if (timeout) {
      clearTimeout(timeout)
    }
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

  debounced.cancel = function cancel() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
