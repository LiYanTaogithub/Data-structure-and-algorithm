/**
 * 状态有时候是二维有时候是三维空间，此问题就是二维空间
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 *
 */
/**
 * 自顶向下的递归 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
 * dp数组的初始化
如何初始化呢，首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理
 * @param {*} m 
 * @param {*} n 
 * @returns 
 */
const uniquePaths = (m, n) => {
  let dp = [[]]
  for (let i = 0; i <m.length; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n.length; j++) {
    dp[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m-1][n-1]
}
