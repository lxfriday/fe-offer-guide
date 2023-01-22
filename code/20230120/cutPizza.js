function ways(m, n, k) {
  const dp = new Array(m)
    .fill(0)
    .map(_ => new Array(n).fill(0).map(__ => new Array(k).fill(0)))

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 不切的时候，只需要看 apples[i][j] 这块区域内有没有苹果，有苹果就是1
      dp[i][j][0] = 1
      // 切1次~k-1次的情况
      for (let w = 1; w < k; w++) {
        for (let r = i + 1; r < m; r++) {
          dp[i][j][w] = dp[i][j][w] + dp[r][j][w - 1]
        }
        for (let c = j + 1; c < n; c++) {
          dp[i][j][w] = dp[i][j][w] + dp[i][c][w - 1]
        }
      }
    }
  }
  return dp[0][0][k - 1]
}

console.log(ways(10, 10, 15))
