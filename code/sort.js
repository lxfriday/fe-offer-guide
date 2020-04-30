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

const ar = [2, 6, 8, 4, 5, 3, 2, 1]

console.log(shellSort(ar))

function shellSort(arr) {
  const len = arr.length
  if (len <= 1) return arr

  for (let gap = len >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < len; i++) {
      const tmp = arr[i]
      let j = i - gap
      for (; j >= 0 && arr[j] > tmp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = tmp
    }
  }

  return arr
}
