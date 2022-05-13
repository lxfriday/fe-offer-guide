function swap(i, j, arr) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}
function quickSort(arr) {
  if (arr.length <= 1) return arr
  partition(arr, 0, arr.length - 1)
  return arr
}

function partition(arr, leftIndex, rightIndex) {
  let pivot = leftIndex
  for (let i = leftIndex + 1; i <= rightIndex; i++) {
    if (arr[i] < arr[pivot]) {
      swap(i, pivot, arr)
      pivot = i
    }
  }
}

const data = [2, 3, 1, 0, 10, 5, 100, 10, 20, 4, 70, 5, 6, 3, 8, 4, 2, 5]
console.log('bubbleSort', bubbleSort(data))
console.log('selectSort', selectSort(data))
console.log('insertSort', insertSort(data))
console.log('insertSort2', insertSort2(data))
console.log('mergeSort', mergeSort(data))
console.log('quickSort', quickSort(data))
