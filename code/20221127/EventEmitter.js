class EventEmitter {
  constructor(capacity) {
    this.capacity = capacity
    this.listeners = {}
  }
  /**
   * @event {string}
   * @listener {Function}
   */
  on(event, listener) {
    const listeners = this.listeners[event]
    if (listeners) {
      if (listeners.indexOf(listener) === -1) {
        this.listeners[event].push(listener)
      }
    } else {
      this.listeners[event] = []
      this.listeners[event].push(listener)
    }
  }
  /**
   * @event {string}
   * @listener {Function}
   */
  once(event, listener) {
    const that = this
    function myListener(...args) {
      listener(...args)
      that.removeListener(event, myListener)
    }
    this.on(event, myListener)
  }
  /**
   * @event {string}
   * @args {array}
   */
  emit(event, ...args) {
    const listeners = this.listeners[event]
    if (listeners) {
      for (const listener of listeners) {
        listener(...args)
      }
    }
  }
  /**
   * @event {string}
   * @listener {Function}
   */
  removeListener(event, listener) {
    const listeners = this.listeners[event]
    const ind = listeners.indexOf(listener)
    if (ind !== -1) {
      listeners.splice(ind, 1)
    }
  }
}

const ee = new EventEmitter()

function logOn(name, age) {
  console.log('logOn', name, age)
}

function logOnce(num) {
  console.log('logOnce', num)
}

function two(...args) {
  console.log('two', args)
}

ee.on('logOn', logOn)
ee.once('logOnce', logOnce)
ee.on('two', two)

console.log(ee.listeners)

ee.emit('logOn', 'lxfriday', 12)
ee.emit('logOnce', 1000)
ee.emit('logOnce', 1000)
ee.emit('two', 1000, 2000)
ee.emit('two', 1000, 2000)
