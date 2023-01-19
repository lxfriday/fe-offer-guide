// num 的子节点数
function getCount(num, n) {
  let count = 0
  let minSub = num * 10
  let maxSub = num * 10 + 9
  while (true) {
    if (n > maxSub) {
      count += maxSub - minSub + 1
      minSub *= 10
      maxSub = maxSub * 10 + 9
    } else {
      if (n >= minSub) {
        count += n - minSub + 1
      }
      return count
    }
  }
}

const findKthNumber = function (n, k) {
  let num = 1
  k--
  while (true) {
    if (k === 0) return num
    const subCount = getCount(num, n)
    if (subCount < k) {
      k -= subCount
      num++
      k--
    } else {
      num *= 10
      k--
    }
  }
}

console.log(findKthNumber(10 ** 9, 10 ** 9))
// console.log(getCount(9, 10 ** 9))
