function swap(i, j, arr) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        swap(i, j, arr)
      } else {
        break
      }
    }
  }
  return arr
}

function insertSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > target) {
        arr[j + 1] = arr[j]
      } else {
        arr[j + 1] = target
        break
      }
    }
  }
  return arr
}

const data = [2, 3, 1, 0, 10, 5, 100, 10, 20, 4, 70, 5, 6, 3, 8, 4, 2, 5]
console.log('quickSort', insertSort([...data]))
