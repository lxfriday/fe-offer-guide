function swap(i, j, arr) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}
// 不好理解
function partition(arr, leftIndex, rightIndex) {
  let index = leftIndex + 1
  for (let i = index; i <= rightIndex; i++) {
    if (arr[i] < arr[leftIndex]) {
      swap(index, i, arr)
      index++
    }
  }
  swap(index - 1, leftIndex, arr)
  return index - 1
}
function quickSort(arr, l, r) {
  const leftIndex = typeof l === 'number' ? l : 0
  const rightIndex = typeof r === 'number' ? r : arr.length - 1
  if (leftIndex < rightIndex) {
    const partitionIndex = partition(arr, leftIndex, rightIndex)
    quickSort(arr, l, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, r)
  }
  return arr
}

// 好理解的版本
function partition2(arr) {
  if (arr.length <= 1) return arr
  const target = arr[0]
  const leftArr = []
  const rightArr = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return [...partition2(leftArr), target, ...partition2(rightArr)]
}

function quickSort2(arr) {
  return partition2(arr)
}

const data = [2, 3, 1, 0, 10, 5, 100, 10, 20, 4, 70, 5, 6, 3, 8, 4, 2, 5]
console.log('quickSort', quickSort([...data]))
console.log('quickSort2', quickSort2([...data]))
