var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length,
    n = nums2.length,
    total = m + n
  if (total % 2 === 1) {
    return getTarget(Math.floor((total + 1) / 2), nums1, nums2)
  } else {
    const a = getTarget(total / 2, nums1, nums2)
    const b = getTarget(total / 2 + 1, nums1, nums2)
    return (a + b) / 2
  }
}

// 第多少个数字
function getTarget(cnt, nums1, nums2) {
  const m = nums1.length,
    n = nums2.length
  let i1 = 0,
    i2 = 0
    console.log('start')
  while (true) {
    let k = Math.floor(cnt / 2)
    let num1,
      num2,
      shouldDropCnt = k
    if (i1 >= nums1.length) return nums2[i2 + cnt - 1]
    if (i2 >= nums2.length) return nums1[i1 + cnt - 1]
    if (cnt === 1) return Math.min(nums1[i1], nums2[i2])
    if (k + i1 - 1 >= nums1.length) {
      num1 = nums1[m - 1]
      shouldDropCnt = nums1.length - i1
    } else {
      num1 = nums1[i1 + k - 1]
    }
    if (k + i2 - 1 >= nums2.length) {
      num2 = nums2[n - 1]
      shouldDropCnt = nums2.length - i2
    } else {
      num2 = nums2[i2 + k - 1]
    }
    cnt -= shouldDropCnt
    if (num1 > num2) {
      i2 += shouldDropCnt
    } else {
      i1 += shouldDropCnt
    }
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))
