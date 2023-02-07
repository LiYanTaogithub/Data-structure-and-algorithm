/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
 */
/**
 * 动态规划：二维空间，分别将text1和text2 排列在二维数组的行和列，从最后一个字符开始比对，dp[i][j] = text1[length - 1]与text2比对，或者text2[length - 1] 与text1最长子序列 比对，如果相等就+1
 */
const longestCommonSubsequence = function(text1, text2) {
  const m = text1.length, n = text2.length
  const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 要么第一个字符减去一个要么第二个字符减去一个，比较最大值
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }

  console.log('dp', dp)
  return dp[m][n]
}
text1 = "abcde", text2 = "ace"
longestCommonSubsequence(text1, text2)