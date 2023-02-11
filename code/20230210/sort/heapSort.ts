export default function heapSort(arr: number[]): number[] {
  buildMaxHeap(arr)
  for (let i = 0; i < arr.length; i++) {
    swap(arr, 0, arr.length - 1 - i)
    heapify(arr, 0, arr.length - 2 - i)
  }
  return arr
}

function buildMaxHeap(arr: number[]) {
  for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
    heapify(arr, i, arr.length - 1)
  }
}

function heapify(arr: number[], idx: number, r: number) {
  let maxI = idx
  const leftIdx = 2 * idx + 1,
    rightIdx = 2 * idx + 2
  if (leftIdx <= r && arr[leftIdx] > arr[maxI]) {
    maxI = leftIdx
  }
  if (rightIdx <= r && arr[rightIdx] > arr[maxI]) {
    maxI = rightIdx
  }
  if (maxI !== idx) {
    swap(arr, maxI, idx)
    heapify(arr, maxI, r)
  }
}

function swap(arr: number[], i: number, j: number) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
