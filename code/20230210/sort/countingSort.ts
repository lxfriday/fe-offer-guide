export default function countingSort(arr: number[]): number[] {
  const countArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = (countArr[arr[i]] || 0) + 1
  }
  const ret: number[] = []
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      ret.push(i)
      countArr[i]--
    }
  }
  return ret
}
