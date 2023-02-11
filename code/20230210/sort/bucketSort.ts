export default function bucketSort(arr: number[], size: number = 5): number[] {
  const max = Math.max(...arr),
    min = Math.min(...arr)
  const step = (max - min + 1) / size
  const buckets: number[][] = new Array(size).fill(0).map(_ => [])
  for (const num of arr) {
    const targetBucketIdx = Math.floor((num - min) / step)
    let j = buckets[targetBucketIdx].length - 1
    while (j >= 0 && buckets[targetBucketIdx][j] > num) {
      buckets[targetBucketIdx][j + 1] = buckets[targetBucketIdx][j]
      j--
    }
    buckets[targetBucketIdx][j + 1] = num
  }
  const ret: number[] = []
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      ret.push(buckets[i][j])
    }
  }
  return ret
}
