const pacificAtlantic = function (heights) {
  const m = heights.length,
    n = heights[0].length
  const atlanticArr = new Array(m).fill(0).map(_ => new Array(n).fill(false))
  const pacificArr = new Array(m).fill(0).map(_ => new Array(n).fill(false))
  let atlanticUsed = new Array(m).fill(0).map(_ => new Array(n).fill(false))
  let pacificUsed = new Array(m).fill(0).map(_ => new Array(n).fill(false))
  function walk(i, j, isAtlantic) {
    if (isAtlantic) {
      if (atlanticUsed[i][j]) return
      atlanticUsed[i][j] = true
      atlanticArr[i][j] = true
    } else {
      if (pacificUsed[i][j]) return
      pacificUsed[i][j] = true
      pacificArr[i][j] = true
    }
    i - 1 >= 0 &&
      heights[i - 1][j] >= heights[i][j] &&
      walk(i - 1, j)(i + 1 < m && heights[i + 1][j] >= heights[i][j]) &&
      walk(i + 1, j)(j - 1 >= 0 && heights[i][j - 1] >= heights[i][j]) &&
      walk(i, j - 1)(j + 1 < n && heights[i][j + 1] >= heights[i][j]) &&
      walk(i, j + 1)
  }
  for (let i = 0; i < m; i++) {
    walk(i, n - 1, true)
    walk(i, 0, false)
  }
  for (let j = 0; j < n; j++) {
    walk(m - 1, j, true)
    walk(0, j, false)
  }
  const res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (atlanticArr[i][j] && pacificArr[i][j]) {
        res.push([i, j])
      }
    }
  }
  return res
}
