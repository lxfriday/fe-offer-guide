function deepClone(target, wm = new WeakMap()) {
  if (target === null) return null
  if (typeof target === 'object') {
    let lsArr = Array.isArray(target)
    let cloneTarget = lsArr ? [] : {}
    if (wm.get(target)) return wm.get(target)
    wm.set(target, cloneTarget)
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key], wm)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

function forEach(arr, iteratee) {
  let index = -1
  const len = arr.length
  while (++index < len) {
    iteratee(arr[index], index)
  }
  return arr
}

function deepCloneWithWhile(target, wm = new WeakMap()) {
  if (target === null) return null
  if (typeof target === 'object') {
    let lsArr = Array.isArray(target)
    let cloneTarget = lsArr ? [] : {}
    if (wm.get(target)) return wm.get(target)
    wm.set(target, cloneTarget)

    forEach(lsArr ? target : Object.keys(target), function (value, index) {
      if (lsArr) {
        cloneTarget[index] = deepCloneWithWhile(value, wm)
      } else {
        cloneTarget[value] = deepCloneWithWhile(target[value], wm)
      }
    })
    return cloneTarget
  } else {
    return target
  }
}

function forEach(arr, iteratee) {
  let index = -1
  const len = arr.length
  while (++index < len) {
    iteratee(arr[index], index)
  }
  return arr
}

const target = {
  a: 1,
  b: '2',
  c: undefined,
  d: null,
  e: {
    e1: 1,
    e2: 'e1',
  },
  f: [1, 2, 3],
  g: {
    g: {
      g: {
        g: {
          g: {
            g: {
              g: {
                g: {
                  g: {
                    g: {},
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

target.h = target

console.time('deepClone')
console.log(deepClone(target))
console.timeEnd('deepClone')
console.time('deepCloneWithWhile')
console.log(deepCloneWithWhile(target))
console.timeEnd('deepCloneWithWhile')
