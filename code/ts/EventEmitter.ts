interface NormalFun {
  (...args: any[]): void
}

class EventEmitter {
  arr: { [propName: string]: Array<NormalFun> } = {}
  constructor(private _max: number) {}
  on(event: string, func: NormalFun) {
    if (!this.arr[event]) this.arr[event] = []
    this.arr[event].push(func)
  }
  once(event: string, func: NormalFun) {
    const that = this
    function listener(...args: any[]) {
      func(...args)
      that.off(event, listener)
    }
    this.on(event, listener)
  }
  emit(event: string, ...args: any[]) {
    if (this.arr[event]) {
      for (let i = 0; i < this.arr[event].length; i++) {
        this.arr[event][i](...args)
      }
    }
  }
  off(event: string, func: NormalFun) {
    if (this.arr[event]) {
      const idx = this.arr[event].indexOf(func)
      if (idx > -1) {
        this.arr[event].splice(idx, 1)
      }
    }
  }
}

const ee = new EventEmitter(100)

ee.once('morning', function (a: number, b: number, c: string) {
  console.log('morning ', { a, b, c })
})
ee.once('afternoon', function (name: string) {
  console.log('afternoon ', name)
})

function night(time: string) {
  console.log('night ', time)
}

ee.on('night', night)

ee.emit('morning', 1, 2, 3, 'lxfriday')
ee.emit('morning', 1, 2, 3)
ee.emit('afternoon', 'lx')
ee.emit('afternoon', 'lx')
ee.emit('night', '20:31')
ee.emit('night', '20:32')
ee.off('night', night)
ee.emit('night', '20:33')

