function selectSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    const value = arr[i]
    for (; j >= 0; j--) {
      if (value < arr[j]) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }
  return arr
}

console.log(selectSort([2, 1, 5, 4, 8, 7, 5, 0]))
