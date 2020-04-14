# from - 其他

## ✔ 从数组中找出和为某个值的两数下标

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 示例: 给定 nums = [2, 7, 11, 15], target = 9 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]。

初始代码：

```javascript
const twoSum = (nums, target) => {}
```

---

解法 1 - `Map`：

```javascript
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.get(nums[i])) {
      return [map.get(nums[i]), i]
    }
    map.set(target - nums[i], i)
  }
}
```

解法 2 - 两次循环：

```javascript
const twoSum = (nums, target) => {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
```

# from - leetcode
