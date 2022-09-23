function debounce(func, timeWait) {
  let timer = null
  return function (...args) {
    const ctx = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(ctx, args)
      timer = null
    }, timeWait)
  }
}

function doSth(a, b, c) {
  console.log('dosomething', this, { a, b, c })
}

// const debouncedSoSth = debounce(doSth, 2000)
// debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])

function debounce2(func, wait, immediate) {
  let timer = null
  return function (...args) {
    const ctx = this
    if (immediate) {
      if (timer) {
        clearTimeout(timer)
      } else {
        func.apply(ctx, args)
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(ctx, args)
        timer = null
      }, wait)
    }
  }
}

const debouncedSoSth = debounce2(doSth, 2000, true)
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])
debouncedSoSth.apply({ d: 'd' }, [1, 2, 3])

function debounce3(func, wait, immediate) {
  let timer = null
  function debounceFunc(...args) {
    const ctx = this
    if (immediate) {
      if (timer) {
        clearTimeout(timer)
      } else {
        func.apply(ctx, args)
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(ctx, args)
        timer = null
      }, wait)
    }
  }

  debounceFunc.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return debounceFunc
}
