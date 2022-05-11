function myinstanceof(left, right) {
  if (right === null || right === undefined || typeof right !== 'object') {
    throw new Error('right 不对')
  }
  let leftProtype = Object.getPrototypeOf(left)
  while (leftProtype) {
    if (leftProtype === right.prototype) return true
    leftProtype = Object.getPrototypeOf(leftProtype)
  }
  return false
}
