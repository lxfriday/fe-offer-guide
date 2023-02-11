export default function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j + 1 < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

function swap(arr: number[], i: number, j: number) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
