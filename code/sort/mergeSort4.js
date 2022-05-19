// 迭代法实现归并排序
// 对 [i, j] 范围内的数字进行排序
// [i, j] 范围内的数字分为两半之后，两个部分都是已经排好序数组
function sort(arr, i, j) {
  const len = arr.length
  let firstL = i
  const firstR = Math.floor((i + j) / 2) // midIndex
  let secondL = firstR + 1
  const secondR = j
  // 需要一个数字暂存排序结果
  const tmp = []
  while (firstL <= firstR && secondL <= secondR && secondL < len) {
    if (arr[firstL] < arr[secondL]) {
      tmp.push(arr[firstL++])
    } else {
      tmp.push(arr[secondL++])
    }
  }
  while (firstL <= firstR) {
    tmp.push(arr[firstL++])
  }
  while (secondL <= secondR && secondL < len) {
    tmp.push(arr[secondL++])
  }
  let k = i
  while (k <= j && k < len) {
    arr[k] = tmp[k - i]
    k++
  }
}

function mergeSort(arr) {
  const len = arr.length
  // 拆分 logn 次
  // 每次拆分之后，总和来看进行的是对 n 个数字排序，空间复杂度是 O(n)，所有的数子都会被放到 tmp 数组中一次
  for (let i = 2; i < 2 * len; i *= 2) {
    // 对拆分的所有子序列进行排序，复杂度是 n
    for (let j = 0; i * j < len; j++) {
      const startIndex = i * j
      const endIndex = startIndex + i - 1
      const midIndex = Math.floor((startIndex + endIndex) / 2)
      // 结尾可能存在小于i个数的情况，这时候要判断要不要排序
      // 如果结尾有k个数，且 k > i / 2，则是需要排序的
      if (midIndex < len - 1) {
        sort(arr, startIndex, endIndex)
      }
    }
  }
  return arr
}

function getData() {
  return new Array(100 + Math.floor(Math.random() * 100))
    .fill(1)
    .map(_ => Math.floor(Math.random() * 100))
}

function start() {
  const data = getData()
  console.log(data)
  const res1 = mergeSort([...data])
  const res2 = [...data].sort((a, b) => a - b)
  return res1.join(' ') === res2.join(' ')
}
