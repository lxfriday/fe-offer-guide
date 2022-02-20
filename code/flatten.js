// 简单版
// _.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
function flatten(arr) {
  // 错误传入 或者 空数组
  // if(!arr || (arr && !arr.length)) return arr
  let ret = []
  arr.forEach(el => {
    if (!Array.isArray(el)) ret.push(el)
    else {
      ret = [...ret, ...el]
    }
  })
  return ret
}

// console.log(flatten([1, [2, [3, [4]], 5]]));
// console.log(flatten(null));

// 进阶版，无穷深度 flatten

// _.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

function flattenDeep(arr) {
  // 错误传入 或者 空数组
  if (!arr || (arr && !arr.length)) return arr
  return flattenDeepRecu(arr)
}

function flattenDeepRecu(arr) {
  let ret = []
  arr.forEach(el => {
    if (!Array.isArray(el)) ret.push(el)
    else {
      ret = [...ret, ...flattenDeepRecu(el)]
    }
  })
  return ret
}

// console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// console.log(flattenDeep(null))
// console.log(flattenDeep(1))

// 高级版，指定深度 flatten
// var array = [1, [2, [3, [4]], 5]];
// _.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
// _.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
function flattenDepth(arr, depth = 1) {
  // 错误传入 或者 空数组
  if (!arr || (arr && !arr.length)) return arr
  return flattenDepthRecu(arr, depth)
}

function flattenDepthRecu(arr, depth) {
  // dep 可能小于、等于、大于数组实际深度
  if(depth === 0) return arr
  let ret = []
  arr.forEach(el => {
    if (!Array.isArray(el)) ret.push(el)
    else {
      ret = [...ret, ...flattenDepthRecu(el, depth - 1)]
    }
  })
  return ret
}

// console.log(flattenDepth([1, [2, [3, [4]], 5]], 1));
// console.log(flattenDepth([1, [2, [3, [4]], 5]], 2));