function coutingSort(nums) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) {
      arr[nums[i]]++
    } else {
      arr[nums[i]] = 1
    }
  }
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      for (let j = 0; j < arr[i]; j++) {
        nums[k++] = i
      }
    }
  }
  return nums
}

const data = new Array(50).fill(0).map(_ => Math.floor(Math.random() * 10000))
const coutingSortRes = JSON.stringify(coutingSort([...data]))
const standardSortRes = JSON.stringify([...data].sort((a, b) => a - b))
// console.log(r1, r2, r1 === r2)
console.log(data)
console.log('coutingSort', coutingSortRes)
console.log(
  'coutingSort === standardSortRes',
  coutingSortRes === standardSortRes,
)
