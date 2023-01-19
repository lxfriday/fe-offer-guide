/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length
  const n = heights[0].length
  const leftTopFlow = new Array(m).fill(1).map(() => new Array(n).fill(false))
  const rightBottomFlow = new Array(m)
    .fill(1)
    .map(() => new Array(n).fill(false))
  const res = []

  function dfs(i, j, flow) {
    flow[i][j] = true
    ;[([i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1])].forEach(([ni, nj]) => {
      if (
        ni >= 0 &&
        ni < m &&
        nj >= 0 &&
        nj < n &&
        !flow[ni][nj] &&
        heights[ni][nj] >= heights[i][j]
      ) {
        dfs(ni, nj, flow)
      }
    })
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, leftTopFlow)
    dfs(i, n - 1, rightBottomFlow)
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, leftTopFlow)
    dfs(m - 1, j, rightBottomFlow)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (leftTopFlow[i][j] && rightBottomFlow[i][j]) res.push([i, j])
    }
  }

  return res
}
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
)
