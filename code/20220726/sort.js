function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function partition(arr, l, r) {
  const target = arr[l]
  let j = l + 1
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < target) {
      swap(arr, j, i)
      j++
    }
  }
  swap(arr, l, j - 1)
  return j - 1
}
function quickSort(arr, l, r) {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l <= r) {
    const pi = partition(arr, l, r)
    quickSort(arr, l, pi - 1)
    quickSort(arr, pi + 1, r)
  }
  return arr
}

function merge(arr1, arr2) {
  const res = []
  let l1 = 0
  let l2 = 0
  while (l1 < arr1.length && l2 < arr2.length) {
    if (arr1[l1] < arr2[l2]) {
      res.push(arr1[l1++])
    } else {
      res.push(arr2[l2++])
    }
  }
  while (l1 < arr1.length) {
    res.push(arr1[l1++])
  }
  while (l2 < arr2.length) {
    res.push(arr2[l2++])
  }
  return res
}

function mergeSort(arr, l, r) {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l === r) return [arr[l]]
  const mid = Math.floor((l + r) / 2)
  return merge(mergeSort(arr, l, mid), mergeSort(arr, mid + 1, r))
}

function shiftDown(arr, i, len) {
  const lIndex = 2 * i + 1
  const rIndex = 2 * i + 2
  if (lIndex < len && arr[i] < arr[lIndex]) {
    swap(arr, i, lIndex)
    shiftDown(arr, lIndex, len)
  }
  if (rIndex < len && arr[i] < arr[rIndex]) {
    swap(arr, i, rIndex)
    shiftDown(arr, rIndex, len)
  }
}

function buildMaxHeap(arr) {
  const len = arr.length
  for (let i = len / 2; i >= 0; i--) {
    shiftDown(arr, i, len)
  }
}

function heapSort(arr) {
  const len = arr.length
  buildMaxHeap(arr)
  for (let i = 0; i < len; i++) {
    swap(arr, 0, len - i - 1)
    shiftDown(arr, 0, len - i - 1)
  }
  return arr
}

const data = new Array(50).fill(0).map(_ => Math.floor(Math.random() * 10000))
const quickSortRes = JSON.stringify(quickSort([...data]))
const mergeSortRes = JSON.stringify(mergeSort([...data]))
const heapSortRes = JSON.stringify(heapSort([...data]))
const standardSortRes = JSON.stringify([...data].sort((a, b) => a - b))
// console.log(r1, r2, r1 === r2)
console.log(data)
console.log('quickSortRes', quickSortRes)
console.log('mergeSortRes', mergeSortRes)
console.log('heapSortRes', heapSortRes)
console.log('heapSortRes === standardSortRes', heapSortRes === standardSortRes)
