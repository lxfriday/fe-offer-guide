function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

function heapSort(arr) {
  buildMaxHeap(arr)
  const len = arr.length
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapifyMax(arr, 0, i)
  }
  return arr
}

function buildMaxHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMax(arr, i, len)
  }
}

function heapifyMax(arr, i, len) {
  const leftIndex = 2 * i + 1
  const rightIndex = 2 * i + 2
  let max = i
  if (leftIndex < len && arr[leftIndex] > arr[max]) {
    max = leftIndex
  }
  if (rightIndex < len && arr[rightIndex] > arr[max]) {
    max = rightIndex
  }
  if (max !== i) {
    swap(arr, max, i)
    heapifyMax(arr, max, len)
  }
}

function getData() {
  return new Array(100 + Math.floor(Math.random() * 100))
    .fill(1)
    .map(_ => Math.floor(Math.random() * 100))
}

function start() {
  const data = getData()
  const res1 = heapSort([...data])
  console.log(res1)
}

start()
