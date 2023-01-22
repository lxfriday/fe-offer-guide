function extracter(func) {
  const funcString = func.toString()
  if (isArrowFunc(func)) {
    const regexp = /\(?(.*)\)? ?=> ?{(.*)}/s
    const mat = regexp.exec(funcString)
    return new Function(mat[1], mat[2])
  } else {
    const regexp = /function \w+ ?\((.*)\) *{(.*)}/s
    const mat = regexp.exec(funcString)
    return new Function(mat[1], mat[2])
  }
}

function calcPhone(num) {
  return 10000 + num + 1000
}
const arrowFunc = (num) => {
  return 100 * num
}

function isArrowFunc(func) {
  return !func.prototype
}

console.log(extracter(calcPhone)(1))
console.log(extracter(arrowFunc)(10))

// 'function calcPhone(num) {\n  return 10000 + num + 1000\n}'
// '(name) => {\n    console.log(name)\n}'
