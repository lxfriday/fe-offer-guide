const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

const boolTag = '[object Boolean]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'

const deepTag = [mapTag, setTag, arrayTag, objectTag]

function deepCloneWithWhile(target, wm = new WeakMap()) {
  if (!isObject(target)) return target

  const type = getType(target)
  let cloneTarget
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target)
  } else {
    // 直接使用构造函数创建实例或者正则、Symbol、Function 复制
    return cloneOtherType(target, type)
  }

  // 避免循环引用
  if (wm.get(target)) return wm.get(target)
  wm.set(target, cloneTarget)

  // 需要遍历赋值的类型：Object Array Map Set
  if (type === mapTag) {
    target.forEach((value, key) => cloneTarget.set(key, value))
    return cloneTarget
  }
  if (type === setTag) {
    target.forEach(value => cloneTarget.add(value))
    return cloneTarget
  }
  forEach(type === arrayTag ? target : Object.keys(target), function (value, index) {
    if (type === arrayTag) {
      cloneTarget[index] = deepCloneWithWhile(value, wm)
    } else {
      cloneTarget[value] = deepCloneWithWhile(target[value], wm)
    }
  })
  return cloneTarget
}

function cloneFunction(func) {
  const paramReg = /(?<=\()(.)*(?=\)\s*{)/
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const funcString = func.toString()
  if (func.prototype) {
    const params = paramReg.exec(funcString)
    const body = bodyReg.exec(funcString)

    if (body) {
      if (params) {
        const paramsArr = params[0].split(',')
        return new Function(...paramsArr, body[0])
      } else {
        return new Function(body[0])
      }
    } else {
      return null
    }
  } else {
    return eval(funcString)
  }
}

function cloneOtherType(target, type) {
  const Ctor = target.constructor
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case regexpTag:
      return cloneReg(target)
    case symbolTag:
      return cloneSymbol(target)
    case funcTag:
      return cloneFunction(target)
    default:
      return null
  }
}

function cloneReg(target) {
  const flagsReg = /\w*$/
  const flags = flagsReg.exec(target)
  const result = new target.constructor(target.source, flags && flags[0])
  result.lastIndex = target.lastIndex
  return result
}

function cloneSymbol(target) {
  return Symbol.prototype.valueOf.call(target)
}

// 使用构造函数初始化一个实例
function getInit(target) {
  return new target.constructor()
}

// 优化版循环（for in 升级版）
function forEach(arr, iteratee) {
  let index = -1
  const len = arr.length
  while (++index < len) {
    iteratee(arr[index], index)
  }
  return arr
}

// 获取 target 的类型 tag
function getType(target) {
  return Object.prototype.toString.call(target)
}

// target 是否是引用类型，不是引用类型的值可以直接返回
function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
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
  i: new Set([1, 2, 3]),
  j: new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]),
  k: function name(params) {
    console.log(params)
  },
  l: x => console.log(x),
  m: /abc/,
  n: /abc/gim,
}

// 循环引用
target.h = target

console.log(deepCloneWithWhile(target))
