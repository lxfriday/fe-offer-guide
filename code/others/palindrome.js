var longestPalindrome = function (s) {
  s = [...s]
  let res = []
  for (let i = 0; i < s.length; i++) {
    let l
    let r
    let end = findDulplicated(s, i)
    if (end == i + 1) {
      //无连续重复，单字母扩展
      l = i - 1
      r = i + 1
    } else {
      //有连续重复，从重复区间向外扩展
      l = i - 1
      r = end
      i = end - 1
    }
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--
      r++
    }
    if (r - l - 1 > res.length) {
      res = s.slice(l + 1, r)
      // console.log(res)
    }
  }
  return res.join('')
}

var findDulplicated = function (s, i) {
  let r = i
  while (r < s.length) {
    if (s[r] == s[i]) {
      r++
    } else {
      break
    }
  }
  return r
}
