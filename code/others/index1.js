console.log('1')
function debounce(func, wait) {
  let timer = null

  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
      clearTimeout(timer)
    }, wait)
  }
}
