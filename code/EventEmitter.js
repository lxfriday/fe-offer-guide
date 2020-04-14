class EventEmitter {
  constructor() {
    // 用于存放事件监听器函数
    this.listeners = {}
    // 设置的某个事件能够添加的监听器的最大数量
    this.maxListener = 10
  }

  on(event, cb) {
    const listeners = this.listeners
    // 超过最大数量时抛出异常
    if (listeners[event] && listeners[event].length >= this.maxListener) {
      throw new Error('监听器的最大数量是%d,您已超出限制', this.maxListener)
    }
    if (listeners[event] instanceof Array) {
      // 不添加重复的监听函数
      if (listeners[event].indexOf(cb) === -1) {
        listeners[event].push(cb)
      }
    } else {
      // 没有对某个事件的监听数组时
      listeners[event] = [].concat(cb)
    }
  }

  emit(event, ...args) {
    this.listeners[event].forEach(cb => {
      cb(...args)
    })
  }

  removeListener(event, listener) {
    const listeners = this.listeners
    const arr = listeners[event] || []
    const i = arr.indexOf(listener)
    if (i >= 0) {
      listeners[event].splice(i, 1)
    }
  }

  once(event, listener) {
    const that = this

    function fn(...args) {
      listener(...args)
      that.removeListener(event, fn)
    }

    this.on(event, fn)
  }

  removeAllListeners(event) {
    this.listeners[event] = []
  }

  setMaxListeners(max) {
    this.maxListener = max
  }

  listeners(event) {
    return this.listeners[event]
  }
}

const emitter = new EventEmitter()
emitter.on('message', function (name, age) {
  console.log('name', name)
  console.log('age', age)
})
emitter.emit('message', 'lxfriday', 100)
emitter.emit('message', 'lxfriday', 100)
