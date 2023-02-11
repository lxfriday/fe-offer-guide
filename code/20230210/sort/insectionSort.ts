export default function insectionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > target) arr[j + 1] = arr[j]
      else break
    }
    arr[j + 1] = target
  }
  return arr
}