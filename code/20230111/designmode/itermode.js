class Iter {
  constructor(ins) {
    this.list = ins.list
    this.idx = 0
  }
  hasNext() {
    if (this.idx >= this.list.length) return false
    return true
  }
  next() {
    if (this.idx < this.list.length) return this.list[this.idx++]
    return null
  }
}

class Animal {
  constructor() {
    this.list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  }
  getIterator() {
    return new Iter(this)
  }
}

const iter = new Animal().getIterator()
while(iter.hasNext()) {
  console.log(iter.next())
}
