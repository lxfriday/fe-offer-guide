function reduce<T>(arr: Array<T>, cb: (prev: T, next: T, currentIdx: number, array: Array<T>) => T, initValue?: T) {
  let val: T,
    idx = 0
  if (initValue) {
    val = initValue
  } else {
    val = arr[idx++]
  }
  while (idx < arr.length) {
    val = cb(val, arr[idx], idx, arr)
    idx++
  }
  return val
}

const data = [1, 2, 3, 4, 5, 6]
const d = reduce(
  data,
  (prev, next) => {
    return Math.max(prev, next)
  },
)

console.log('res', d)
