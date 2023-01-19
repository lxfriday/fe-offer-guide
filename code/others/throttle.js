// 节流

function throttle(func, wait) {
  let time = 0
  return function throttled(...args) {
    const ctx = this
    const now = Date.now()
    if (now - time >= wait) {
      func.apply(ctx, args)
      time = now
    }
  }
}

function throttle2(func, wait) {
  let timeout = null
  return function throttled(...args) {
    const ctx = this
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(ctx, args)
      }, wait)
    }
  }
}
