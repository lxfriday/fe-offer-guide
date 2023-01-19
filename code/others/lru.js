// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity
//     this.cache = new Map()
//   }
//   put(k, v) {
//     if (this.cache.has(k)) this.cache.delete(k)
//     else if (this.cache.size >= this.capacity) this.cache.delete(this.cache.keys().next().value)
//     this.cache.set(k, v)
//   }
//   get(k) {
//     const v = this.cache.get(k)
//     if (v === undefined) return -1
//     else this.moveToEnd(k, v)
//     return v
//   }
//   moveToEnd(k, v) {
//     this.cache.delete(k)
//     this.cache.set(k, v)
//   }
// }.

class LinkedListNode {
  constructor(k, v, prev, next) {
    this.key = k
    this.value = v
    this.prev = prev
    this.next = next
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = {}
    this.size = 0
    this.head = new LinkedListNode()
    this.tail = new LinkedListNode()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  removeNode(node) {
    const prev = node.prev
    const next = node.next

    prev.next = next
    next.prev = prev
  }

  addNode(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

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

const lru = new LRUCache(5)

function getKV(lru) {
  let l = lru.head.next
  const res = []
  while (l.value) {
    res.push([l.key, l.value])
    l = l.next
  }
  return res
}

lru.put('a', 1)
lru.put('b', 2)
lru.put('c', 3)
lru.put('d', 4)
lru.put('e', 5)
console.log(getKV(lru))
lru.get('c')
console.log(getKV(lru))
lru.put('g', 10)
console.log(getKV(lru))
