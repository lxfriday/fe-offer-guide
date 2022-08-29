const findDuplicates = function (nums, k = 3) {
  const n = nums.length
  let l = 0
  const res = []
  const n1 = n + 1
  while (l < nums.length) {
    if (nums[l] < n + 1) {
      while (nums[l] < n + 1) {
        const nextIndex = nums[l] - 1
        if (nums[nextIndex] < n + 1) {
          nums[l] = nums[nextIndex]
          nums[nextIndex] = n1 + 1
        } else {
          nums[l] = n1
          nums[nextIndex]++
        }
      }
    }
    l++
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - n1 === k) {
      res.push(i + 1)
    }
  }
  return res
}

console.log(findDuplicates([1, 2, 1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6]))
