function quickSort(arr, l, r) {
  l = typeof l === 'number' ? l : 0
  r = typeof r === 'number' ? r : arr.length - 1
  if (l < r) {
    const targetIndex = partition(arr, l, r)
    quickSort(arr, l, targetIndex - 1)
    quickSort(arr, targetIndex + 1, r)
  }
  return arr
}

function partition(arr, l, r) {
  const left = []
  const right = []
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  swap(arr, l, left.length + l)
  return left.length + l
}

function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

function getData() {
  return new Array(100 + Math.floor(Math.random() * 100))
    .fill(1)
    .map(_ => Math.floor(Math.random() * 100))
}

function start() {
  const data = getData()
  const res1 = quickSort([...data])
  console.log(res1)
}

start()
