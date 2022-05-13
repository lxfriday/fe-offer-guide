function swap(i, j, arr) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxInd = 0
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[maxInd]) {
        maxInd = j
      }
    }
    swap(maxInd, arr, arr.length - i - 1)
  }
  return arr
}
