var canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => a - b)
  let sum = 0
  let max = nums[0]
  const len = nums.length
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    max = Math.max(max, nums[i])
  }
  const target = sum / k
  if (Math.floor(target) !== target || max > target) return false
  const used = new Array(len).fill(false)

  function dfs(n, s) {
    if (s === target) {
      s = 0
      n--
    }
    if (n === 0) {
      return true
    }
    for (let i = 0; i < nums.length; i++) {
      if (s + nums[i] > target) break
      if (!used[i]) {
        used[i] = true
        const r = dfs(n, s + nums[i])
        used[i] = false
        if (r) {
          return true
        }
      }
    }
    return false
  }
  return dfs(k, 0)
}

console.time('time use')
console.log(
  canPartitionKSubsets([10, 10, 7, 8, 10, 4, 9, 7, 9, 10, 4, 6, 7, 1, 8, 5], 5),
)
console.timeEnd('time use')
