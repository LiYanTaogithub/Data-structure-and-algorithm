/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 注意：你不能在买入股票前卖出股票。
 */

/**
  * 输入: [7,1,5,3,6,4]
  * 输出: 5
  * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
  * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
  * 
*/

// 第一种解法 暴力法 两个for循环声明一个值保存最大值 不过得有顺序的  注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 解法：明确「状态」 -> 定义 dp 数组/函数的含义 -> 明确「选择」-> 明确 base case。

// 怎么拆解问题 得到状态转移方程



// 状态转移方程：前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
// 前i-1天的最大收益 i:4,前三天的最大收益 [7,1,5,3] 5-1=4
// 第i天的价格-前i-1天中的最小价格: 第4天的价格-前3天中的最小价格 3-1=2



/**
 * 为啥叫「状态转移方程」？为了听起来高端。你把 f(n) 想做一个状态 n，这个状态 n 是由状态 n - 1 和状态 n - 2 相加转移而来，这就叫状态转移，仅此而已。
 * 转移就是把这个问题交给子问题 子问题是如何处理的 
 */


/**
 * 最值 肯定有最优解
 * 1.状态就是前i天的最大收益
 * 2.确定dp[n]=x的含义：表示前n天的最大收益为x  状态转移方程：前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
 * 简化一下：dp[n]=max(dp[n-1],price[n]-min)
 * 3.定义base dp[0]=0
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

//  const maxProfit = function (prices) {
//   if (prices.length <= 1) {
//       return 0
//   }
//   const dp = new Array() // 定义depTable 备忘录
//   // 定义base
//   dp[0] = 0
//   let min = prices[0]
//   for (let i = 1; i < prices.length; i++) {
//       // 状态转移方程：前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
//       // min表示前i-1天的最小价格
//       // Math.max(dp[i - 1], prices[i] - min)就是我们的状态转移方程了
//       dp[i] = Math.max(dp[i - 1], prices[i] - min)
//       //  这里写在最下面表示前i-1天中的最小价格
//       min = Math.min(min, prices[i])
//   }
//   return dp[prices.length - 1] // prices.length - 1表示前prices.length - 1天
// }

const maxProfit = function(prices) {
  if(prices.length <= 1) {
    return 0
  }
  const dp = new Array()
  dp[0] = 0
  let min = prices[0]
  for(let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min)
    min = Math.min(min, prices[i])
  }
  console.log('dp', dp)
  return dp[prices.length - 1]
}
maxProfit([7,1,5,3,6,4])