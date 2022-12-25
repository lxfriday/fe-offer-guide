
function throttle(func, wait, endExec) {
  let timer
  return function (...args) {
    if(timer) clearTimeout(timer)
    else func.apply(this, args)
    timer = setTimeout(() => {
      timer = null
      if(endExec) func.apply(this, args)
    }, wait);
  }
}

function log(num) {
  console.log(num)
}

const throttleLog = throttle(log, 500, true)
// setTimeout(() => {
//   throttleLog(2000)
// }, 2000);

throttleLog(1)
throttleLog(2)
throttleLog(3)
throttleLog(4)
throttleLog(5)
throttleLog(6)