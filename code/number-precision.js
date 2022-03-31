// 小数扶正
function strip(num, precision = 15) {
  // 用 15 位精度
  return parseFloat(num.toPrecision(precision))
}

// 小数点后的位数
function digitsLength(num) {
  const eSplit = num.toString().split(/[eE]/)
  const dLen = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
  return dLen > 0 ? dLen : 0
}

function checkBoundery(num) {
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    console.error('超出安全整数范围了')
  }
}

// 把 num 转换成整数
function floatToFixed(num) {
  // 不是科学计数法表示的小数
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''))
  }
  // 是科学计数法表示的小数
  const dLen = digitsLength(num)
  return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num
}

function times(num1, num2) {
  const num1Fixed = floatToFixed(num1)
  const num2Fixed = floatToFixed(num2)

  const resFixed = num1Fixed * num2Fixed
  checkBoundery(resFixed)
  return resFixed / Math.pow(10, digitsLength(num1) + digitsLength(num2))
}

function plus(num1, num2) {
  const num1Digits = digitsLength(num1)
  const num2Digits = digitsLength(num2)

  const maxDigits = Math.max(num1Digits, num2Digits)
  const baseNum = Math.pow(10, maxDigits)
  const times1 = times(num1, baseNum)
  const times2 = times(num2, baseNum)
  const times12 = times1 + times2

  return times12 / baseNum
}

function minus(num1, num2) {
  const num1Digits = digitsLength(num1)
  const num2Digits = digitsLength(num2)

  const maxDigits = Math.max(num1Digits, num2Digits)
  const baseNum = Math.pow(10, maxDigits)

  const times1 = times(num1, baseNum)
  const times2 = times(num2, baseNum)
  const times12 = times1 - times2

  return times12 / baseNum
}

function divide(num1, num2) {
  const num1Digits = digitsLength(num1)
  const num2Digits = digitsLength(num2)

  const num1Fixed = floatToFixed(num1)
  const num2Fixed = floatToFixed(num2)

  checkBoundery(num1Fixed)
  checkBoundery(num2Fixed)

  return times(num1Fixed / num2Fixed, strip(Math.pow(10, num2Digits - num1Digits)))
}

const exp = {
  plus, // +
  minus, // -
  times, // *
  divide, // /
}

console.log('---------------------')
console.log(0.1 + 0.2)
console.log(exp.plus(0.1, 0.2))
console.log('---------------------')
console.log(0.3 - 0.2)
console.log(exp.minus(0.3, 0.2))
console.log('---------------------')
console.log(0.1 * 0.2)
console.log(exp.times(0.1, 0.2))
console.log('---------------------')
console.log(0.3 / 0.2)
console.log(exp.divide(0.3, 0.2))
console.log('---------------------')
console.log(0.3333 / 0.2222)
console.log(exp.divide(0.3333, 0.2222))
console.log('---------------------')
