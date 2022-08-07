var dicesProbability = function (n) {
  const min = n
  const max = 6 * n
  const dp = new Array(n + 1).fill(0).map(_ => new Array(n).fill(max + 1))
  dp[1][1] = 1 / 6
  dp[1][2] = 1 / 6
  dp[1][3] = 1 / 6
  dp[1][4] = 1 / 6
  dp[1][5] = 1 / 6
  dp[1][6] = 1 / 6

  for (let i = 2; i <= n; i++) {
    const iMin = i
    const iMax = i * 6
    for (let j = iMin; j <= iMax; j++) {
      dp[i][j] =
        (j - 1 >= i - 1 && j - 1 <= 6 * (i - 1) ? dp[i - 1][j - 1] : 0) +
        (j - 2 >= i - 1 && j - 2 <= 6 * (i - 1) ? dp[i - 1][j - 2] : 0) +
        (j - 3 >= i - 1 && j - 3 <= 6 * (i - 1) ? dp[i - 1][j - 3] : 0) +
        (j - 4 >= i - 1 && j - 4 <= 6 * (i - 1) ? dp[i - 1][j - 4] : 0) +
        (j - 5 >= i - 1 && j - 5 <= 6 * (i - 1) ? dp[i - 1][j - 5] : 0) +
        (j - 6 >= i - 1 && j - 6 <= 6 * (i - 1) ? dp[i - 1][j - 6] : 0)
      dp[i][j] *= 1 / 6
    }
  }

  return dp[n].slice(min, max + 1)
}
console.log(dicesProbability(2))
