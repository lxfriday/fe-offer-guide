function swap(i, j, arr) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j - 1] > arr[j]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr
}
const data = [2, 3, 1, 0, 10, 5, 100, 10, 20, 4, 70, 5, 6, 3, 8, 4, 2, 5]
console.log('quickSort', bubbleSort([...data]))
