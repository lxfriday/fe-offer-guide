export default function mergeSort(
  arr: number[],
  l?: number,
  r?: number,
): number[] {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l >= r) return [arr[l]]
  const mid = Math.floor((l + r) / 2)
  return merge(mergeSort(arr, l, mid), mergeSort(arr, mid + 1, r))
}

function merge(arr1: number[], arr2: number[]): number[] {
  const ret: number[] = []
  let i1 = 0,
    i2 = 0
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      ret.push(arr1[i1++])
    } else {
      ret.push(arr2[i2++])
    }
  }
  while (i1 < arr1.length) {
    ret.push(arr1[i1++])
  }
  while (i2 < arr2.length) {
    ret.push(arr2[i2++])
  }
  return ret
}
