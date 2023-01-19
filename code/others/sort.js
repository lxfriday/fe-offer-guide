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

// function partition(arr, left, right) {
//   let pivot = left
//   let index = pivot + 1
//   for (let i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, index)
//       index++
//     }
//   }
//   swap(arr, pivot, index - 1)
//   return index - 1
// }

// function quickSort(arr, l, r) {
//   const len = arr.length
//   const left = typeof l === 'number' ? l : 0
//   const right = typeof r === 'number' ? r : len - 1
//   let partitionIndex = 0
//   if (left < right) {
//     partitionIndex = partition(arr, left, right)
//     quickSort(arr, left, partitionIndex - 1)
//     quickSort(arr, partitionIndex + 1, right)
//   }
//   return arr
// }

// function merge(arr1, arr2) {
//   const res = []
//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) {
//       res.push(arr1.shift())
//     } else {
//       res.push(arr2.shift())
//     }
//   }
//   while (arr1.length) {
//     res.push(arr1.shift())
//   }
//   while (arr2.length) {
//     res.push(arr2.shift())
//   }
//   return res
// }

// function mergeSort(arr) {
//   const len = arr.length
//   if (len <= 1) return arr
//   const m = Math.floor(len / 2)
//   const arr1 = arr.slice(0, m)
//   const arr2 = arr.slice(m)
//   return merge(mergeSort(arr1), mergeSort(arr2))
// }

// function shellSort(arr) {
//   const len = arr.length
//   if (len <= 1) return arr
//   // gap 不断缩小，最后变成 1
//   for (let gap = len >> 1; gap > 0; gap >>= 1) {
//     // gap 确定之后，从 gap 位置开始向后循环
//     for (let i = gap; i < len; i++) {
//       const temp = arr[i]
//       let j = i - gap
//       // i 每轮循环中需要从左往右做插排
//       for (; j >= 0 && arr[j] > temp; j -= gap) {
//         arr[j + gap] = arr[j]
//       }
//       arr[j + gap] = temp
//     }
//   }

//   return arr
// }

// function shellSort(arr) {
//   const len = arr.length
//   if (len <= 1) return arr

//   for (let gap = len >> 1; gap > 0; gap >>= 1) {
//     for (let i = gap; i < len; i++) {
//       const tmp = arr[i]
//       let j = i - gap
//       for (; j >= 0 && arr[j] > tmp; j -= gap) {
//         arr[j + gap] = arr[j]
//       }
//       arr[j + gap] = tmp
//     }
//   }

//   return arr
// }

// 对 i 进行大顶堆化
// function heapifyMax(arr, i, len) {
//   const left = 2 * i + 1
//   const right = 2 * i + 2
//   let max = i
//   if (left < len && arr[left] > arr[max]) max = left
//   if (right < len && arr[right] > arr[max]) max = right
//   if (max !== i) {
//     swap(arr, i, max)
//     heapifyMax(arr, max, len)
//   }
// }

// function heapifyMin(arr, i, len) {
//   const left = 2 * i + 1
//   const right = 2 * i + 2
//   let min = i
//   if (left < len && arr[left] < arr[min]) min = left
//   if (right < len && arr[right] < arr[min]) min = right
//   if (min !== i) {
//     swap(arr, i, min)
//     heapifyMin(arr, min, len)
//   }
// }

// function buildMaxHeap(arr) {
//   const len = arr.length
//   for (let i = Math.floor(len / 2); i >= 0; i--) {
//     heapifyMax(arr, i, len)
//   }
// }

// function buildMinHeap(arr) {
//   const len = arr.length
//   for (let i = Math.floor(len / 2); i >= 0; i--) {
//     heapifyMin(arr, i, len)
//   }
// }

// function heapSort(arr, asc = true) {
//   const len = arr.length
//   if (len <= 1) return arr

//   if (asc) {
//     buildMaxHeap(arr)

//     for (let i = len - 1; i > 0; i--) {
//       swap(arr, 0, i)
//       heapifyMax(arr, 0, i)
//     }
//   } else {
//     buildMinHeap(arr)

//     for (let i = len - 1; i > 0; i--) {
//       swap(arr, 0, i)
//       heapifyMin(arr, 0, i)
//     }
//   }

//   return arr
// }

// function countingSort(arr) {
//   const res = []
//   const len = arr.length
//   if (len <= 1) return arr
//   const bucket = []

//   for (let i = 0; i < len; i++) {
//     if (bucket[arr[i]]) {
//       bucket[arr[i]] += 1
//     } else {
//       bucket[arr[i]] = 1
//     }
//   }

//   for (let i = 0; i < bucket.length; i++) {
//     for (let j = bucket[i]; j > 0; j--) {
//       res.push(i)
//     }
//   }

//   return res
// }

// function radixSort(arr) {
//   const len = arr.length
//   const max = Math.max(...arr)
//   let digit = `${max}`.length
//   let res = arr.slice()
//   let bucket = []
//   let start = 1
//   while (digit > 0) {
//     start *= 10
//     for (let i = 0; i < len; i++) {
//       const j = res[i] % start
//       if (!bucket[j]) {
//         bucket[j] = []
//       }
//       bucket[j].push(res[i])
//     }

//     res = []
//     for (let i = 0; i < bucket.length; i++) {
//       if (bucket[i] !== undefined) res = res.concat(bucket[i])
//     }
//     bucket = []
//     digit--
//   }

//   return res
// }

function bucketSort(arr, size = 5) {
  const len = arr.length
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  if (len <= 1) return arr
  const bucketSize = Math.floor((max - min) / size) + 1
  const bucket = []
  let res = []

  for (let i = 0; i < len; i++) {
    const j = Math.floor((arr[i] - min) / bucketSize)
    if (!bucket[j]) bucket[j] = []
    bucket[j].push(arr[i])
    let l = bucket[j].length - 1
    while (l > 0) {
      bucket[j][l] < bucket[j][l - 1] && swap(bucket[j], l, l - 1)
      l--
    }
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      res = res.concat(bucket[i])
    }
  }

  return res
}

const ar = [2, 6, 8, 4, 5, 3, 2, 1]

console.log(bucketSort(ar, false))
