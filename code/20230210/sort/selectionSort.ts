export default function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let maxI = 0
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[maxI]) {
        maxI = j
      }
    }
    swap(arr, arr.length - i - 1, maxI)
  }
  return arr
}

function swap(arr: number[], i: number, j: number) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
