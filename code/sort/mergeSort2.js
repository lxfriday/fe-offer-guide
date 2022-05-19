let count = 0
function mergeSort1(arr, l, r) {
  console.log('拆分次数', ++count)
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (r === l) return [arr[l]]
  const mid = Math.floor((l + r) / 2)
  return merge1(mergeSort1(arr, l, mid), mergeSort1(arr, mid + 1, r))
}
function merge1(arr1, arr2) {
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length
  let l1 = 0
  let l2 = 0
  while (l1 < len1 && l2 < len2) {
    if (arr1[l1] <= arr2[l2]) {
      res.push(arr1[l1++])
    } else {
      res.push(arr2[l2++])
    }
  }
  while (l1 < len1) {
    res.push(arr1[l1++])
  }
  while (l2 < len2) {
    res.push(arr2[l2++])
  }
  return res
}

function merge2(arr1, arr2) {
  const res = []
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }
  while (arr1.length) {
    res.push(arr1.shift())
  }
  while (arr2.length) {
    res.push(arr2.shift())
  }

  return res
}

function mergeSort2(arr) {
  console.log('拆分次数', ++count)
  const len = arr.length
  if (len <= 1) return arr
  const m = Math.floor(len / 2)
  const arr1 = arr.slice(0, m)
  const arr2 = arr.slice(m)
  return merge2(mergeSort2(arr1), mergeSort2(arr2))
}
const data = new Array(4).fill(Math.random() * 1000000)
const data1 = data.slice(0)
// console.time('mergeSort1')
// mergeSort1(data)
// console.timeLog('mergeSort1')
console.time('mergeSort2')
mergeSort2(data1)
console.timeLog('mergeSort2')
