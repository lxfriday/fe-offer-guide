const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])

// function selectionSort(arr) {
//   const len = arr.length
//   if (len <= 1) return arr
//   for (let i = 0; i < len; i++) {
//     let min = i
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[min]) min = j
//     }
//     swap(arr, i, min)
//   }

//   return arr
// }

// function insertionSort(arr) {
//   const len = arr.length
//   if (len <= 1) return arr

//   for (let i = 1; i < len; i++) {
//     const cur = arr[i]
//     let j = i - 1
//     for (; j >= 0; j--) {
//       if (arr[j] > cur) {
//         arr[j + 1] = arr[j]
//       } else {
//         break
//       }
//     }
//     arr[j + 1] = cur
//   }

//   return arr
// }

function partition(arr, left, right) {
  let pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function quickSort(arr, l, r) {
  const len = arr.length
  const left = typeof l === 'number' ? l : 0
  const right = typeof r === 'number' ? r : len - 1
  let partitionIndex = 0
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}

const ar = [2, 6, 8, 4, 5, 3, 2, 1]

console.log(quickSort(ar))
