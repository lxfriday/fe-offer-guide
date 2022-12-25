
function debounce(func, wait, immediate) {
  let timer
  return function (...args) {
    if(immediate) {
      if(!timer) func.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, wait);
    } else {
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, wait);
    }
  }
}

function log(num) {
  console.log(num)
}

const debouncedFunc = debounce(log, 500, true)

debouncedFunc(1)
debouncedFunc(2)
debouncedFunc(3)
debouncedFunc(4)
debouncedFunc(5)
debouncedFunc(6)
debouncedFunc(7)
