function merge(arr, temp, left, middle, right) {
  // 获得左边数组的结束位置(通过右边数的起始位置获得左边数的结束位置)
  const leftEnd = middle - 1
  while (left <= leftEnd && middle <= right) {
    // 判断指针是否越界
    if (arr[left] <= arr[middle]) {
      // 如果左边数组的最左边小于等于右边数组的最左边
      // 将右边数组最小的存放temp数组中（temp的初始值为null）
      temp[left + middle - leftEnd - 1] = arr[middle++]
    } else {
      // 将左边数组最小的存放在temp数组中（temp的初始值为null）
      temp[left + middle - leftEnd - 1] = arr[left++]
    }
  }
  while (left > leftEnd && middle < right) {
    // 如果左边数组放完了，右边数组还有元素。
    temp[left + middle - leftEnd - 1] = arr[middle++] // 那么依次将右边数组剩余的元素放入 temp 。
  }
  while (left <= leftEnd && middle >= right) {
    // 如果右边数组放完了，左边数组还有元素
    temp[left + middle - leftEnd - 1] = arr[left++] // 那么依次将左边数组剩余的元素放入 temp 。
  }
}
// 深度
function mergeSort(
  arr = [],
  temp = new Array(arr.length),
  N = arr.length,
  length = 1,
) {
  // 将每个元素看成是数组长度为一
  let t // 迭代的深度
  for (t = 0; 2 ** t < N; t++, length *= 2) {
    // 每次跳过的长度翻倍
    const even = t % 2 === 0 // 复用 arr 和 temp 来回赋值。
    for (let left = 0; left < N; left += 2 * length) {
      // 左边数组起始位置 left 从0开始。
      // 右边数组起始位置 middle 就是left + 一个数组长度length 但是不要超过 N 。
      const middle = left + length < N ? left + length : left
      const right = left + 2 * length < N ? left + 2 * length : N // 右边界 right 就是 left + 两个数组长度。
      merge(even ? arr : temp, even ? temp : arr, left, middle, right) // 合并每两个相邻的数组。
    }
  }
  merge(arr, temp, 0, 2 ** (t - 1), N) // 上面的迭代深度始终少一次在这里补足。
  arr = temp // 将稳定的数组赋值给 arr 释放掉 temp 。
  return arr // 返回 arr 。
}
const arr = [8, 7, 6, 5, 4, 3, 2, 1, 10, 9]
console.log(mergeSort(arr))
