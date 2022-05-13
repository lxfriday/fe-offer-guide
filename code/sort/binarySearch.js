function binarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    const med = Math.floor((l + r) / 2)
    if (target < arr[med]) {
      r = med - 1
    } else if (target > arr[med]) {
      l = med + 1
    } else {
      return med
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 5], 2))
