function merge(arr1, arr2) {
  const res = []
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift())
    } else {
      res.push(arr2.shift())
    }
  }
  while (arr1.length) {
    res.push(arr1.shift())
  }
  while (arr2.length) {
    res.push(arr2.shift())
  }
  return res
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mediumIndex = Math.floor(arr.length / 2)
  const leftSlice = arr.slice(0, mediumIndex)
  const rightSlice = arr.slice(mediumIndex)
  return merge(mergeSort(leftSlice), mergeSort(rightSlice))
}

const data = [2, 3, 1, 0, 10, 5, 100, 10, 20, 4, 70, 5, 6, 3, 8, 4, 2, 5]
console.log('quickSort', mergeSort([...data]))
