<div class="finished-info-wrapper">
  完成度 <span class="finished-info">500 / 500 -> 100%<span>
</div>

# 数据结构

ref

- [目录参考 数据结构与算法](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/6545582?fr=aladdin)

## 算法效率

算法效率用时间复杂度和空间复杂度来评估。其作用：时间复杂度是指执行算法所需要的计算工作量；而空间复杂度是指执行这个算法所需要的内存空间。（算法的复杂性体现在运行该算法时的计算机所需资源的多少上，计算机资源最重要的是时间和空间（即寄存器）资源，因此复杂度分为时间和空间复杂度。）

### 时间复杂度

ref

- [算法的时间复杂度和空间复杂度](https://zhuanlan.zhihu.com/p/32135157)

**时间频度**

因为一个算法执行所消耗的时间理论上是不能算出来的，没错正是理论上，我们任然可以在程序中测试获得。但是我们不可能又没必要对每个算法进行测试，只需要知道大概的哪个算法执行所花费的时间多，哪个花费的时间少就行了。如果一个算法所花费的时间与算法中代码语句执行次数成正比，那么那个算法执行语句越多，它的花费时间也就越多。我们把**一个算法中的语句执行次数称为时间频度**。通常用 `T(n)` 表示。

在时间频度 `T(n)` 中，`n` 又代表着问题的规模，当 `n` 不断变化时，`T(n)` 也会不断地随之变化。一般情况下算法重复执行次数为问题规模 `n` 的某个函数，用也就是时间频度 `T(n)`。如果有某个辅助函数 `f(n)`，当趋于无穷大的时候，`T(n)/f(n)` 的极限值是不为零的某个常数，那么 `f(n)` 是 `T(n)` 的同数量级函数，记作 `T(n)=O(f(n))`，被称为算法的渐进时间复杂度，又简称为时间复杂度。

**大 O 表示法**

用 `O(n)` 来体现算法时间复杂度的记法被称作大 O 表示法。

---

大 `O` 表示法 `O(f(n))` 中的 `f(n)` 的值可以为 `1`、`n`、`logn`、`n^2` 等，所以我们将 `O(1)`、`O(n)`、`O(logn)`、`O(n^2)` 分别称为常数阶、线性阶、对数阶和平方阶。

简单点讲时间复杂度和代码运行时的循环次数有关。

**常数阶**

```javascript
const a = 1
const b = 2
console.log(a + b)
```

**线性阶**

```javascript
let i = 0
while (i < n) {
  console.log(i)
  i++
}
```

**对数阶**

```javascript
let i = 0
while (i < n) {
  console.log(i)
  i *= 2
}
```

**平方阶**

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log('i and j')
  }
}
```

---

**常见时间复杂度的比较**

```
O(1)<O(logn)<O(n)<O(nlogn)<O(n²)<O(n³)<O(2ⁿ)<O(n!)
```

### 空间复杂度

空间复杂度是对一个算法在运行过程中临时占用存储空间大小的量度，记做 S(n)=O(f(n))。

## 线性表

一个线性表是 n 个具有相同特性的数据元素的有限序列。线性表中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的（注意，这句话只适用大部分线性表，而不是全部。比如，循环链表逻辑层次上也是一种线性表，存储层次上属于链式存储，但是把最后一个数据元素的尾指针指向了首位结点）。

在数据结构逻辑层次上细分，线性表可分为**一般线性表**和**受限线性表**。一般线性表也就是我们通常所说的“线性表”，可以自由的删除或添加结点。**受限线性表主要包括栈和队列，受限表示对结点的操作受限制**。

### 双向链表

![](https://qiniu1.lxfriday.xyz/feoffer/54523668-d75a-c258-cbc1-ce41f9a689da.png)

双向链表也叫双链表，是链表的一种，它的每个数据结点中都有两个指针，分别指向**直接后继**和**直接前驱**。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。

### 循环链表

## 栈、队列

### 栈的基本操作

### 循环队列

### 优先队列

## 树和二叉树

## 图

## 查找表

# 基础算法

## ✔ 排序算法

ref

- [丰富图例讲解十大经典排序算法](https://juejin.im/post/5d9033fa5188257f6f1ba46b)
- [排序算法](https://github.com/lxfriday/give-me-job/tree/7c193c8279/algorithm/%E6%8E%92%E5%BA%8F)

![排序算法一览](https://qiniu1.lxfriday.xyz/feoffer/sort.png)

### ✔ 冒泡排序

![](https://qiniu1.lxfriday.xyz/feoffer/bubbleSort.png)

```javascript
const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
function bubbleSort(arr) {
  const length = arr.length
  if (length <= 1) return arr
  for (let i = 0; i < length; i++) {
    let changed = false // 没有数据交换则表示已经有序了
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        changed = true
      }
    }
    if (!changed) break
  }
  return arr
}
```

### ✔ 选择排序

![](https://qiniu1.lxfriday.xyz/feoffer/ec43f415-5224-bd9b-ad33-0ee480cd19e7.png)

![](https://qiniu1.lxfriday.xyz/feoffer/selectionSort.gif)

核心思想：进行 n 轮，每轮找出最小的放在这一轮的初始位置

```javascript
const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
function selectionSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  for (let i = 0; i < len; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j
    }
    swap(arr, i, min)
  }

  return arr
}
```

### ✔ 插入排序

![](https://qiniu1.lxfriday.xyz/feoffer/6e79c1d5-2896-68bc-ebc0-280ee2881035.png)

![](https://qiniu1.lxfriday.xyz/feoffer/insertionSort.gif)

```javascript
function insertionSort(arr) {
  const len = arr.length
  if (len <= 1) return arr

  for (let i = 1; i < len; i++) {
    const cur = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > cur) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = cur
  }

  return arr
}
```

### ✔ 快速排序

![](https://qiniu1.lxfriday.xyz/feoffer/008ba6a2-d847-8894-a3b4-70b09a1b44b8.png)

![](https://qiniu1.lxfriday.xyz/feoffer/quicksort.gif)

单路快排

```javascript
const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
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
```

### ✔ 归并排序

![](https://qiniu1.lxfriday.xyz/feoffer/3ccf988e-b992-84f0-a622-dd03c51123c9.png)

![](https://qiniu1.lxfriday.xyz/feoffer/d3de0b1f-7827-e3b9-eeb7-1993e03e0372.png)

![](https://qiniu1.lxfriday.xyz/feoffer/16d7b507ece11c9d.gif)

归并排序（英语：Merge sort，或 mergesort），是创建在归并操作上的一种有效的排序算法，效率为 O(nlogn)。1945 年由约翰·冯·诺伊曼首次提出。该算法是采用 分治法（Divide and Conquer） 的一个非常典型的应用，且各层分治递归可以同时进行。

采用分治法:

1. 分割：递归地把当前序列平均分割成两半。
1. 集成：在保持元素顺序的同时将上一步得到的子序列集成到一起（归并）。

```javascript
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
  const len = arr.length
  if (len <= 1) return arr
  const m = Math.floor(len / 2)
  const arr1 = arr.slice(0, m)
  const arr2 = arr.slice(m)
  return merge(mergeSort(arr1), mergeSort(arr2))
}
```

### ✔ 希尔排序

![](https://qiniu1.lxfriday.xyz/feoffer/907976b2-e3b0-91fc-0b6d-3ead3ee08c1c.png)

![](https://qiniu1.lxfriday.xyz/feoffer/16d7b4ce200763d6.gif)

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

- 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率
- 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位

希尔排序通过将比较的全部元素分为几个区域来提升插入排序的性能。这样可以让一个元素可以一次性地朝最终位置前进一大步。然后算法再取越来越小的步长进行排序，算法的最后一步就是普通的插入排序，但是到了这步，需排序的数据几乎是已排好的了（此时插入排序较快）。

```javascript
function shellSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  // gap 不断缩小，最后变成 1
  for (let gap = len >> 1; gap > 0; gap >>= 1) {
    // gap 确定之后，从 gap 位置开始向后循环
    for (let i = gap; i < len; i++) {
      const temp = arr[i]
      let j = i - gap
      // i 每轮循环中需要从左往右做插排
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }

  return arr
}
```

### ✔ 堆排序(heap-sort)

![堆排序](https://qiniu1.lxfriday.xyz/feoffer/heapSort2.png)
![堆排序](https://qiniu1.lxfriday.xyz/feoffer/heapSort.gif)

堆(Heap)是计算机科学中一类特殊的数据结构的统称。堆通常是一个可以被看做一棵完全二叉树的数组对象。其中每个节点最多存在两个子节点，对以 0 开始的堆数组，有如下规则：

1. 父节点 `i` 的**左**子节点在位置 `2 * i + 1`
1. 父节点 `i` 的**右**子节点在位置 `2 * i + 2`
1. 子节点 `i` 的父节点在位置 `Math.floor((i - 1) / 2)`

大顶堆：所有节点 `i` 的值比其左右子节点都大的堆

小顶堆：所有节点 `i` 的值比其左右子节点都小的堆

堆排序的重要过程（以大顶堆实现从小到大为例）：

1. 构建大顶堆
1. 把 0 和最后一位交换（无序数组的最后一位）
1. 从 0 位重新构建大顶堆
1. 重复步骤 2、3

```javascript
const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])
// 构建大顶堆的核心递归算法
function heapifyMax(arr, i, len) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i
  if (left < len && arr[left] > arr[max]) {
    max = left
  }
  if (right < len && arr[right] > arr[max]) {
    max = right
  }
  if (i != max) {
    swap(arr, max, i)
    heapifyMax(arr, max, len)
  }
}
// 构建小顶堆的核心递归算法
function heapifyMin(arr, i, len) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let min = i
  if (left < len && arr[left] < arr[min]) {
    min = left
  }
  if (right < len && arr[right] < arr[min]) {
    min = right
  }
  if (i != min) {
    swap(arr, min, i)
    heapifyMin(arr, min, len)
  }
}

function buildMaxHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMax(arr, i, len)
  }
}

function buildMinHeap(arr) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMin(arr, i, len)
  }
}

// asc 为 true 表示从小到大，false 为从大到小
function heapSort(arr, asc = false) {
  if (asc) {
    // 使用大顶堆实现从小到大排序
    buildMaxHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMax(arr, 0, i)
    }
  } else {
    // 使用小顶堆实现从大到小排序
    buildMinHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMin(arr, 0, i)
    }
  }
  return arr
}
```

### ✔ 计数排序(counting-sort)

![计数排序](https://qiniu1.lxfriday.xyz/feoffer/countingSort.png)

**限定为非负数**

计数排序是一种稳定的线性时间排序算法。计数排序使用一个额外的数组 `C` ，其中第 `i` 个元素是待排序数组 `A` 中值等于 `i` 的元素的个数。然后根据数组 `C` 来将 `A` 中的元素排到正确的位置。

当输入的元素是 `n` 个 `0` 到 `k` 之间的整数时，它的运行时间是 `t(n+k)`。**计数排序不是比较排序，排序的速度快于任何比较排序算法。**

由于用来计数的数组 `C` 的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上 1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。

```javascript
function countingSort(arr) {
  const len = arr.length
  if (len < 2) return arr
  const bucket = []
  let sortIndex = 0

  for (let i = 0; i < len; i++) {
    if (bucket[arr[i]]) {
      bucket[arr[i]] += 1
    } else {
      bucket[arr[i]] = 1
    }
  }

  for (let i = 0; i < bucket.length; i++) {
    for (let j = bucket[i]; j > 0; j--) {
      arr[sortIndex++] = i
    }
  }
  return arr
}
```

### ✔ 基数排序(radix-sort)

![基数排序](https://qiniu1.lxfriday.xyz/feoffer/radixSort.png)

**限定为非负数**

基数排序原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。

它是这样实现的：将所有待比较数值（正整数）统一为同样的数字长度，数字较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。

基数排序的方式可以采用 **LSD（Least significant digital）** 或 **MSD（Most significant digital）**，LSD 的排序方式由键值的最右边开始，而 MSD 则相反，由键值的最左边开始。

基数排序的时间复杂度是 `O(k*n)`，其中 `n` 是排序元素个数，`k` 是数字位数。这不是说这个时间复杂度一定优于 `O(nlogn)`，`k` 的大小取决于数字位的选择（比如比特位数），和待排序数据所属数据类型的全集的大小；`k` 决定了进行多少轮处理，而 `n` 是每轮处理的操作数目。

LSD 实现

```javascript
function radixSort(arr) {
  const len = arr.length
  // 得到最大值
  const max = Math.max(...arr)
  let bucket = []
  // 获取最大值的位数
  let digit = `${max}`.length
  let start = 1
  // 待操作的新数组
  let res = arr.slice()

  while (digit > 0) {
    // 每轮向左移动一位
    start *= 10
    for (let i = 0; i < len; i++) {
      const j = res[i] % start
      // 和计数排序类似
      if (!bucket[j]) {
        bucket[j] = []
      }
      // bucket 是一个二维数组
      bucket[j].push(res[i])
    }

    // 拼接前 res 设为空数组
    res = []
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        // res 拼接 bucket[i] 数组
        res = res.concat(bucket[i])
      }
    }
    // 结束之后 bucket 重置
    bucket = []
    digit--
  }

  return res
}
```

### ✔ 桶排序、箱排序(bucket-sort)

![桶排序](https://qiniu1.lxfriday.xyz/feoffer/bucketSort.png)

桶排序工作原理是将数组分到有限数量的桶里，每个桶再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。

桶排序以下列步骤进行：

1. 设置桶个数 `size`，计算每个桶的存储范围；
1. 遍历数组，把数字放到对应的桶中；
1. 对步骤 2 放新数字的桶数组排序；
1. 数组遍历完之后，把桶中的数字依次取出放到最终的数组中；

```javascript
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * @param {array} arr 待排序的数组
 * @param {number} size 桶的个数
 */
function bucketSort(arr, size = 5) {
  const len = arr.length
  // 取到最小值
  const min = Math.min(...arr)
  // 取得最大值
  const max = Math.max(...arr)
  // 每个桶的范围
  const bucketSize = Math.floor((max - min) / size) + 1
  const res = []
  // 总共的桶容器
  const bucket = []

  for (let i = 0; i < len; i++) {
    // arr[i] 分布在桶 j
    const j = Math.floor((arr[i] - min) / bucketSize)

    // 桶不存在则创建
    if (bucket[j] === undefined) {
      bucket[j] = []
    }
    // 将 arr[i] 推入桶中
    bucket[j].push(arr[i])
    let l = bucket[j].length - 1
    while (l > 0) {
      // 对个别桶使用冒泡
      // 若 arr[i] 在桶内不是最小，则向前移动
      bucket[j][l] < bucket[j][l - 1] && swap(bucket[j], l, l - 1)
      l--
    }
  }

  // 把 bucket 二维数组中的数据全部拿出来
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== undefined) {
      for (let j = 0; j < bucket[i].length; j++) {
        res.push(bucket[i][j])
      }
    }
  }
  return res
}
```

## ✔ LRU 缓存算法

ref

- [https://juejin.im/post/5d77b68951882520d46abd18](https://juejin.im/post/5d77b68951882520d46abd18)

> 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

缓存的大小有限，当缓存被用满时，哪些数据应该被清理出去，哪些数据应该被保留？这就需要缓存淘汰策略来决定。常见的策略有三种：**先进先出策略** FIFO（First In，First Out）、**最少使用策略** LFU（Least Frequently Used）、**最近最少使用策略** LRU（Least Recently Used）。

最近最少，越是最近使用就越是不会被清除，而最远使用的将会逐渐被推到丢弃端，如果一直不被使用，数据不断存入时将会丢弃它们。

使用 ES6 Map 实现

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }
  put(k, v) {
    if (this.cache.has(k)) this.cache.delete(k)
    else if (this.cache.size >= this.capacity)
      this.cache.delete(this.cache.keys().next().value)
    this.cache.set(k, v)
  }
  get(k) {
    const v = this.cache.get(k)
    if (v === undefined) return -1
    else this.moveToEnd(k, v)
    return v
  }
  moveToEnd(k, v) {
    this.cache.delete(k)
    this.cache.set(k, v)
  }
}
```

双向链表实现

```javascript
class LinkedListNode {
  constructor(k, v, prev, next) {
    this.key = k
    this.value = v
    // 前向节点
    this.prev = prev
    // 后向节点
    this.next = next
  }
}

class LRUCache {
  constructor(capacity) {
    // 容量
    this.capacity = capacity
    this.cache = {}
    // 实际存储的容量
    this.size = 0
    // 哨兵头结点
    this.head = new LinkedListNode()
    // 哨兵尾结点
    this.tail = new LinkedListNode()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  // 删除节点
  removeNode(node) {
    const prev = node.prev
    const next = node.next

    prev.next = next
    next.prev = prev
  }

  // 新增一个节点
  addNode(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }
  // 删除尾结点
  popTail() {
    const res = this.tail.prev
    this.removeNode(res)
    return res
  }

  put(k, v) {
    const node = this.cache[k]
    if (!node) {
      const n = new LinkedListNode(k, v)
      this.cache[k] = n
      this.addNode(n)
      if (this.size >= this.capacity) {
        const deleteNode = this.popTail()
        delete this.cache[deleteNode.key]
      } else {
        this.size += 1
      }
    } else {
      this.removeNode(node)
      node.value = v
      this.addNode(node)
    }
  }

  get(k) {
    const node = this.cache[k]
    if (!node) return -1
    else {
      this.removeNode(node)
      this.addNode(node)
      return node.value
    }
  }
}
```

## ✔ 斐波拉契数列

```
1 1 2 3 5 8 13 21 34 55 89
```

**尾递归**

现在浏览器和 NodeJS 已经禁用了尾递归优化，所以仅仅是尾递归，并不会起到优化的作用。

```javascript
function Fibonacci(n, prev1 = 1, prev2 = 0) {
  if (n === 1) return prev1
  return Fibonacci(n - 1, prev1 + prev2, prev1)
}
```

**迭代**

```javascript
function Fibonacci(n) {
  const init = [1, 0]
  for (let i = 1; i < n; i++) {
    ;[init[0], init[1]] = [init[0] + init[1], init[0]]
  }
  return init[0]
}
```

## ✔ 因式分解

实现一个 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。

```javascript
calc(2) // [2]
calc(8) // [2, 2, 2]
calc(24) // [2, 2, 2, 3]
calc(30) // [2, 3, 5]
```

```javascript
function calc(n) {
  const res = []
  let prev = n
  let i = 2

  while (i <= prev) {
    if (prev % i === 0) {
      res.push(i)
      prev /= i
      i = 2
    } else if (i < prev) {
      i++
    } else if (i === prev) {
      res.push(i)
    }
  }
  console.log(res)

  return res
}
```

# from - 其他

## ✔ 从数组中找出和为某个值的两数下标

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 示例: 给定 nums = [2, 7, 11, 15], target = 9 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]。

初始代码：

```javascript
const twoSum = (nums, target) => {}
```

---

解法 1 - `Map`：

```javascript
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.get(nums[i])) {
      return [map.get(nums[i]), i]
    }
    map.set(target - nums[i], i)
  }
}
```

解法 2 - 两次循环：

```javascript
const twoSum = (nums, target) => {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}
```

# from - leetcode

# leetcode 刷题记录

## ✔ 1 两数之和

Map、字典

```js
var twoSum = function (nums, target) {
  // for (var i = 0; i < nums.length; i++) {
  //   for (var j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j]
  //   }
  // }
  const m = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const other = target - num
    if (m.has(other)) {
      return [m.get(other), i]
    } else {
      m.set(num, i)
    }
  }
}
```

## ✔ 2 两数相加

链表

```js
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode()
  let curr = head
  let add = 0
  let sum = 0
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    add = Math.floor(sum / 10)
    curr.next = new ListNode(sum - 10 * add)
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    curr = curr.next
  }
  if (add > 0) {
    curr.next = new ListNode(1)
  }

  return head.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
```

## ✔ 3 无重复字符的最长子串

滑动窗口、字典

```js
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  let currStr = ''
  for (let i = 0; i < s.length; i++) {
    const indInCurrStr = currStr.indexOf(s[i])
    let len
    if (indInCurrStr === -1) {
      currStr += s[i]
      len = currStr.length
    } else {
      len = currStr.length
      currStr = currStr.slice(indInCurrStr + 1) + s[i]
    }
    maxLen = len > maxLen ? len : maxLen
  }
  return maxLen
}
```

or

```js
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let max = 0
  const m = new Map()
  for (let r = 0; r < s.length; r++) {
    if (m.has(s[r]) && m.get(s[r]) >= l) {
      l = m.get(s[r]) + 1
    }
    m.set(s[r], r)
    max = Math.max(max, r - l + 1)
  }
  return max
}
```

## ✔ 20 有效的括号

关键词：栈

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftValues = '({['
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (leftValues.includes(s[i])) {
      stack.push(s[i])
    } else {
      const lastValue = stack.pop()
      if (map[lastValue] !== s[i]) return false
    }
  }
  return !stack.length
}
```

## ✔ 83 删除排序链表中的重复元素

链表

```js
var deleteDuplicates = function (head) {
  let t = head
  while (t && t.next) {
    const tNext = t.next
    if (t.val !== tNext.val) {
      t = t.next
    } else {
      t.next = tNext.next
    }
  }
  return head
}
```

## ✔ 94 二叉树的中序遍历

二叉树、中序遍历、DFS、深度优先遍历

```js
var inorderTraversal = function (root) {
  const res = []
  const dfs = node => {
    if (!node) return
    dfs(node.left)
    res.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  return res
}
```

## ✔ 102 二叉树的层序遍历

二叉树、BFS、广度优先遍历、层序遍历

```js
var levelOrder = function (root) {
  if (!root) return []
  const q = [[root, 0]]
  const res = []
  while (q.length) {
    const [node, depth] = q.shift()
    res[depth] ? res[depth].push(node.val) : (res[depth] = [node.val])
    node.left && q.push([node.left, depth + 1])
    node.right && q.push([node.right, depth + 1])
  }

  return res
}
```

## ✔ 104 二叉树的最大深度

二叉树、深度优先遍历、DFS

```js
var maxDepth = function (root) {
  let maxLen = 0
  const dfs = (node, l) => {
    if (!node) return
    maxLen = Math.max(maxLen, l)
    dfs(node.left, l + 1)
    dfs(node.right, l + 1)
  }
  dfs(root, 1)
  return maxLen
}
```

## ✔ 111 二叉树的最小深度

二叉树、广度优先遍历、BFS

```js
var minDepth = function (root) {
  if (!root) return 0
  const q = [[root, 1]]
  while (q.length) {
    const [node, depth] = q.shift()
    if (!node.left && !node.right) return depth
    node.left && q.push([node.left, depth + 1])
    node.right && q.push([node.right, depth + 1])
  }
}
```

## ✔ 112 路径总和

二叉树、二叉树的路径总和、DFS、深度优先遍历

```js
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let has = false
  const dfs = (node, sum) => {
    if (!node.left && !node.right) {
      if (node.val + sum === targetSum) {
        has = true
      }
    }
    node.left && dfs(node.left, node.val + sum)
    node.right && dfs(node.right, node.val + sum)
  }

  dfs(root, 0)
  return has
}
```

## ✔ 141 环形链表

环形链表，双指针，快慢指针

```js
var hasCycle = function (head) {
  let p1 = head
  let p2 = head
  while (p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return true
  }

  return false
}
```

## ✔ 206 反转链表

链表

```js
var reverseList = function (head) {
  if (head === null) return head
  let curr = head
  let next = head.next
  curr.next = null
  while (next) {
    const n = next.next
    next.next = curr
    curr = next
    next = n
  }
  return curr
}
```

## ✔ 349 两个数组的交集

集合

```js
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter(v => nums2.includes(v)))]
}
```

## ✔ 933 最近的请求次数

这个题的描述很容易看不懂，但是实现起来非常简单

关键词：队列

```js
var RecentCounter = function () {
  this.q = []
}
/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t)
  while (t - this.q[0] > 3000) {
    this.q.shift()
  }
  return this.q.length
}
```
