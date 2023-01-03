const data = require('./data')
function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIdx = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[maxIdx]) maxIdx = j
    }
    swap(arr, maxIdx, arr.length - 1 - i)
  }
  return arr
}

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const target = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > target) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = target
  }
  return arr
}

function quickSort(arr, l, r) {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l >= r) return
  const idx = partition(arr, l, r)
  quickSort(arr, l, idx - 1)
  quickSort(arr, idx + 1, r)
  return arr
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

function mergeSort(arr, l, r) {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l >= r) return [arr[l]]
  const mid = Math.floor((l + r) / 2)
  return merge(mergeSort(arr, l, mid), mergeSort(arr, mid + 1, r))
}

function merge(arr1, arr2) {
  let l1 = 0,
    l2 = 0
  const ret = []
  while (l1 < arr1.length && l2 < arr2.length) {
    if (arr1[l1] < arr2[l2]) ret.push(arr1[l1++])
    else ret.push(arr2[l2++])
  }
  while (l1 < arr1.length) {
    ret.push(arr1[l1++])
  }
  while (l2 < arr2.length) {
    ret.push(arr2[l2++])
  }
  return ret
}

function heapSort(arr) {
  buildMaxHeap(arr)
  for (let i = 0; i < arr.length; i++) {
    swap(arr, 0, arr.length - i - 1)
    shiftDown(arr, 0, arr.length - i - 2)
  }
  return arr
}

function buildMaxHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    shiftDown(arr, i, arr.length - 1)
  }
}

function shiftDown(arr, i, r) {
  let leftIdx = 2 * i + 1,
    rightIdx = 2 * i + 2
  let maxIdx = i
  if (leftIdx <= r && arr[leftIdx] > arr[maxIdx]) {
    maxIdx = leftIdx
  }
  if (rightIdx <= r && arr[rightIdx] > arr[maxIdx]) {
    maxIdx = rightIdx
  }
  if (maxIdx !== i) {
    swap(arr, maxIdx, i)
    shiftDown(arr, maxIdx, r)
  }
}

function countingSort(arr) {
  const countArr = []
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = (countArr[arr[i]] || 0) + 1
  }
  const ret = []
  for (let i = 0; i < countArr.length; i++) {
    for (let j = 0; j < countArr[i] || 0; j++) {
      ret.push(i)
    }
  }
  return ret
}

function radixSort(arr) {
  const maxLen = `${Math.max(...arr)}`.length
  let base = 1,
    bucket = [],
    ret = arr.slice()

  while (base < 10 ** maxLen) {
    base *= 10
    for (let i = 0; i < ret.length; i++) {
      const j = ret[i] % base
      if (!bucket[j]) bucket[j] = []
      bucket[j].push(ret[i])
    }
    let newRet = []
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i]) {
        for (let j = 0; j < bucket[i].length; j++) {
          newRet.push(bucket[i][j])
        }
      }
    }
    ret = newRet
    bucket = []
  }

  return ret
}

function bucketSort(arr, bucketCnt = 5) {
  const max = Math.max(...arr),
    min = Math.min(...arr)
  const bucketSize = Math.floor((max - min) / bucketCnt) + 1
  const bucket = []
  for (let i = 0; i < arr.length; i++) {
    const idx = Math.floor((arr[i] - min) / bucketSize)
    if (!bucket[idx]) bucket[idx] = []
    let j = bucket[idx].length - 1
    while (j >= 0 && bucket[idx][j] > arr[i]) {
      bucket[idx][j + 1] = bucket[idx][j]
      j--
    }
    bucket[idx][j + 1] = arr[i]
  }
  const ret = []
  for (let i = 0; i < bucketCnt; i++) {
    for (let j = 0; j < bucket[i].length; j++) {
      ret.push(bucket[i][j])
    }
  }
  return ret
}

function heapSort2(arr) {
  buildMaxHeap2(arr)
  for (let i = 0; i < arr.length; i++) {
    swap(arr, 0, arr.length - 1 - i)
    heapify2(arr, 0, arr.length - 1 - i)
  }
  return arr
}

function buildMaxHeap2(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify2(arr, i, arr.length)
  }
}

function heapify2(arr, i, len) {
  let leftIdx = 2 * i + 1,
    rightIdx = 2 * i + 2,
    maxIdx = i
  if (leftIdx < len && arr[leftIdx] > arr[maxIdx]) {
    maxIdx = leftIdx
  }
  if (rightIdx < len && arr[rightIdx] > arr[maxIdx]) {
    maxIdx = rightIdx
  }
  if (maxIdx !== i) {
    swap(arr, maxIdx, i)
    heapify2(arr, maxIdx, len)
  }
}

console.time('bubbleSort')
const bubbleSortRes = bubbleSort([...data])
console.timeEnd('bubbleSort')
console.time('selectionSort')
const selectionSortRes = selectionSort([...data])
console.timeEnd('selectionSort')
console.time('insertSort')
const insertSortRes = insertSort([...data])
console.timeEnd('insertSort')
console.time('quickSort')
const quickSortRes = quickSort([...data])
console.timeEnd('quickSort')
console.time('mergeSort')
const mergeSortRes = mergeSort([...data])
console.timeEnd('mergeSort')
console.time('heapSort')
const heapSortRes = heapSort([...data])
console.timeEnd('heapSort')
console.time('heapSort2')
const heapSort2Res = heapSort2([...data])
console.timeEnd('heapSort2')
console.time('countingSort')
const countingSortRes = countingSort([...data])
console.timeEnd('countingSort')
console.time('radixSort')
const radixSortRes = radixSort([...data])
console.timeEnd('radixSort')
console.time('bucketSort')
const bucketSortRes = bucketSort([...data])
console.timeEnd('bucketSort')
// console.log('original data', data)
const originalSort = [...data].sort((a, b) => a - b)
// console.log('originalSort', originalSort)
console.log(
  'bubbleSortRes',
  bubbleSortRes.toString() === originalSort.toString(),
)
console.log(
  'selectionSortRes',
  selectionSortRes.toString() === originalSort.toString(),
)
console.log(
  'insertSortRes',
  insertSortRes.toString() === originalSort.toString(),
)
console.log('quickSortRes', quickSortRes.toString() === originalSort.toString())
console.log('mergeSortRes', mergeSortRes.toString() === originalSort.toString())
console.log('heapSortRes', heapSortRes.toString() === originalSort.toString())
console.log('heapSort2Res', heapSort2Res.toString() === originalSort.toString())
console.log(
  'countingSortRes',
  countingSortRes.toString() === originalSort.toString(),
)
console.log('radixSortRes', radixSortRes.toString() === originalSort.toString())
console.log(
  'bucketSortRes',
  bucketSortRes.toString() === originalSort.toString(),
)
