function numToString(intValue) {
  // write code here
  let ret = ''
  while (intValue >= 36) {
    ret = numToString(intValue % 36) + ret
    intValue = Math.floor(intValue / 36)
  }
  if (intValue >= 10) {
    ret = String.fromCharCode(intValue - 10 + 'A'.charCodeAt(0)) + ret
  } else {
    ret = intValue + ret
  }
  return ret
}
module.exports = {
  numToString: numToString,
}


console.log(numToString(10000))