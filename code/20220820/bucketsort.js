function swap(nums, i, j) {
  const t = nums[i]
  nums[i] = nums[j]
  nums[j] = t
}

function bucketSort(nums, bucketCount = 5) {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const bucketSize = Math.floor((max - min) / bucketCount) + 1
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    const j = Math.floor((nums[i] - min) / bucketSize)
    if (!arr[j]) {
      arr[j] = []
    }
    arr[j].push(nums[i])
    let k = arr[j].length - 1
    while (k > 0 && arr[j][k] < arr[j][k - 1]) {
      swap(arr[j], k, k - 1)
      k--
    }
  }
  let ind = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      for (let j = 0; j < arr[i].length; j++) {
        nums[ind++] = arr[i][j]
      }
    }
  }
  return nums
}

const data = new Array(50).fill(0).map(_ => Math.floor(Math.random() * 10000))
const bucketSortRes = JSON.stringify(bucketSort([...data]))
const standardSortRes = JSON.stringify([...data].sort((a, b) => a - b))
// console.log(r1, r2, r1 === r2)
console.log(data)
console.log('bucketSortRes', bucketSortRes)
console.log(
  'bucketSortRes === standardSortRes',
  bucketSortRes === standardSortRes,
)
