class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(num) {
    this.heap.push(num)
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    this.swap(0, this.heap.length - 1)
    this.heap.pop()
    this.shiftDown(0)
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  shiftDown(i) {
    const left = this.getLeftIndex(i)
    const right = this.getRightIndex(i)
    if (left < this.heap.length && this.heap[i] > this.heap[left]) {
      this.swap(i, left)
      this.shiftDown(left)
    }
    if (right < this.heap.length && this.heap[i] > this.heap[right]) {
      this.swap(i, right)
      this.shiftDown(right)
    }
  }

  shiftUp(i) {
    if (i === 0) return
    const parentIndex = this.getParentIndex(i)
    if (this.heap[parentIndex] > this.heap[i]) {
      this.swap(parentIndex, i)
      this.shiftUp(parentIndex)
    }
  }

  swap(i, j) {
    const t = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = t
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }
  getLeftIndex(i) {
    return 2 * i + 1
  }
  getRightIndex(i) {
    return 2 * i + 2
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(0)
console.log(h.heap)
h.pop()
console.log(h.heap)
h.pop()
console.log(h.heap)
