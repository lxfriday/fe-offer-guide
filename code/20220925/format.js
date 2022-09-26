var findMaximumXOR = function (nums) {
  const root = []
  let max = Number.MIN_SAFE_INTEGER
  for (let num of nums) {
    add(root, num)
    max = Math.max(max, num ^ getVal(root, num))
  }
  return max
}

function getVal(node, num) {
  let ret = 0
  for (let i = 30; i >= 0; i--) {
    const j = (num >> i) & 1
    const target = 1 - j
    if (node[target]) {
      node = node[target]
      ret |= target << i
    } else {
      ret |= j << i
      node = node[j]
    }
  }
  return ret
}

function add(node, num) {
  for (let i = 30; i >= 0; i--) {
    const n = (num >> i) & 1
    if (!node[n]) node[n] = []
    node = node[n]
  }
}
