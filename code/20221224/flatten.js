function flatten(arr, depth) {
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      ret = ret.concat(flatten(arr[i], depth - 1))
    } else {
      ret.push(arr[i])
    }
  }
  return ret
}

console.log(flatten([1, [2, [3], [4, [5, 6, 7, 8, [9, [10, 11, 12, 13, [14, [15]]]]]]]], 100))
