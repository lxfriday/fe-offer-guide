function clone(target, map) {
  if (map.has(target)) return map.get(target)
  let ret

  if (isObjectType(target)) {
    if (isNoCopy(target)) {
      ret = new target.constructor(target)
    }
    if (isRegExp(target)) {
      ret = new target.constructor(target.source, target.flags)
    } else if (isArray(target)) {
      ret = []
      map.set(target, ret)
      for (let i = 0; i < target.length; i++) {
        ret.push(clone(target[i], map))
      }
    } else if (isObject(target)) {
      ret = {}
      map.set(target, ret)
      for (let key in target) {
        ret[key] = clone(target[key], map)
      }
    } else if (isSet(target)) {
      ret = new Set()
      map.set(target, ret)
      for (let val of target) {
        ret.add(clone(val, map))
      }
    } else if (isMap(target)) {
      ret = new Map()
      map.set(target, ret)
      for (let [key, val] of target.entries()) {
        ret.set(clone(key, map), clone(val, map))
      }
    }
  } else {
    return target
  }

  return ret
}

let noCopyFlags = [
  '[object Number]',
  '[object String]',
  '[object Boolean]',
  '[object Date]',
]

function isNoCopy(target) {
  return noCopyFlags.includes(Object.prototype.toString.call(target))
}
function isRegExp(target) {
  return target instanceof RegExp
}
function isSet(target) {
  return Object.prototype.toString.call(target) === '[object Set]'
}
function isMap(target) {
  return Object.prototype.toString.call(target) === '[object Map]'
}
function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]'
}
function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]'
}
function isObjectType(target) {
  const type = typeof target
  return target !== null && type === 'object'
}

const target = [
  1,
  { a: 1, b: 2 },
  [2],
  new Map([['a', 1]]),
  new Set([1, 2, 3, 4]),
  new Number(2),
  new Date(),
  /.js$/i
]
target[1].c = target

const obj = { c: 3, d: 4 }

target[3].set(obj, target)
target[4].add(obj)

const cloneTarget = clone(target, new Map())
console.log('target', target)
console.log('cloneTarget', cloneTarget)

target[3].set({ ...obj, g: 555 }, target)
target[5].hello = 111

console.log('-------')

console.log('target', target)
console.log('cloneTarget', cloneTarget)
