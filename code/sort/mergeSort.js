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
