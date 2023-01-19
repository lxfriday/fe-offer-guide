// class LRU {
//   constructor(capacity) {
//     this.capacity = capacity
//     this.cache = new Map()
//   }

//   put(k, v) {
//     if (this.cache.has(k)) this.cache.delete(k)
//     if (this.cache.size === this.capacity) this.cache.delete(this.cache.keys().next().value)
//     this.cache.set(k, v)
//   }

//   get(k) {
//     const v = this.cache.get(k)
//     if (v === undefined) return -1
//     else {
//       this.moveToEnd(k, v)
//     }
//     return v
//   }

//   moveToEnd(k, v) {
//     this.cache.delete(k)
//     this.cache.set(k, v)
//   }
// }

// const lru = new LRU(3)

// lru.put('a', 1)
// lru.put('b', 2)
// lru.put('c', 3)
// lru.put('d', 4)

// console.log(lru)
// console.log(lru.get('b'))
// console.log(lru)

// // has
// // set
// // get
// // size
// // delete
// // clear

// // keys
// // values
// // entries

// for(let k of lru.cache.keys()) {
//   console.log(k);
// }
// for(let v of lru.cache.values()) {
//   console.log(v);
// }
// for(let [k, v] of lru.cache.entries()) {
//   console.log(k, v);
// }

// const keys = lru.cache.keys()
// console.log(keys.next().value);
// console.log(keys.next().value);
// console.log(keys.next().value);

class LinkNode {
  constructor(key, value) {
    this.head = null
    this.tail = null
    this.key = key
    this.value = value
  }
}

class LinkListLRU {
  constructor(capacity) {
    this.capacity = capacity
    this.header = new LinkNode(null, null)
  }

  get(k) {
    let targetNode = null
    if(this.hasK(k)) {
      targetNode = this.removeK(k)
    }
    this.addToEnd(k, targetNode.value)
    return targetNode.value
  }
  put(k, v) {
    if(this.hasK(k)) this.removeK(k)
    if(this.listLength() === this.capacity) this.removeFirst()
    this.addToEnd(k, v)
  }

  entries() {
    let curr = this.header.tail
    const res = []
    while(curr) {
      res.push([curr.key, curr.value])
      curr = curr.tail
    }
    return res
  }

  addToEnd(k, v) {
    let curr = this.header
    while(curr.tail) {
      curr = curr.tail
    }
    const newNode = new LinkNode(k, v)
    curr.tail = newNode
    newNode.head = curr
  }

  hasK(k) {
    let curr = this.header.tail
    while(curr) {
      if(curr.key === k) return true
      curr = curr.tail
    }
    return false
  }
  listLength() {
    let len = 0
    let curr = this.header.tail
    while(curr) {
      len++
      curr = curr.tail
    }
    return len
  }
  removeFirst() {
    const first = this.header.tail
    this.header.tail = first.tail
    first.tail.head = this.header
  }
  removeK(k) {
    let curr = this.header.tail
    let target = null
    while(curr) {
      if(curr.key === k) {
        target = curr
        let prev = curr.head
        let next = curr.tail
        prev.tail = next
        next.head = prev
      }
      curr = curr.tail
    }
    return target
  }
}

const lru2 = new LinkListLRU(3)

lru2.put('a', 1)
console.log(lru2.entries())

lru2.put('b', 2)
console.log(lru2.entries())

lru2.put('c', 3)
console.log(lru2.entries())

lru2.put('d', 4)
console.log(lru2.entries())

console.log(lru2.get('b'))
console.log(lru2.entries())
console.log(lru2.get('c'))
console.log(lru2.entries())