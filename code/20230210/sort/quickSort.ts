export default function quickSort(
  arr: number[],
  l?: number,
  r?: number,
): number[] {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l < r) {
    const idx = partition(arr, l, r)
    quickSort(arr, l, idx - 1)
    quickSort(arr, idx + 1, r)
  }
  return arr
}

function partition(arr: number[], l: number, r: number) {
  let target = arr[l]
  let idx = l + 1
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < target) {
      swap(arr, idx++, i)
    }
  }
  swap(arr, idx - 1, l)
  return idx - 1
}

function swap(arr: number[], i: number, j: number) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
