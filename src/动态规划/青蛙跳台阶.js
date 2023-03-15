/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

/**
 * 动态规划
 * 明白dp[n]=x的定义 dp[n]这个状态的定义:表示到第n个台阶有多少种爬法 
 * 1)先跳到n-1级，再跳一步
 * 2)先跳到n-2级，再跳两步
 * 如何根据dp[n-1]推导出dp[n]
 */

const numWays = function(n) {
  const dp = new Array()
  dp[0] = 0; dp[1] = 1, dp[2] = 2
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  console.log('dp', dp)
  return dp[n]
}
numWays(5)
