/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
要求时间复杂度为O(n)。

示例1:
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
/**
 * 动态规划转移方程：dp[i] = Math.max(nums[i], nums[i]+dp[i-1])
 * 不能直接返回dp[nums.length-1] 因为我们定义dp[i]是nums[i] 为结尾的「最大子数组和」
 */
const maxSubArray = function(nums) {
  let dp = new Array(), max = nums[0]
  dp[0] = nums[0]
  for(let i = 1; i < nums.length; i++) {
    // dp[i] = Math.max(dp[i - 1], nums[i]+dp[i-1])
    dp[i] = Math.max(nums[i], nums[i]+dp[i-1])
    max = Math.max(max, dp[i])
  }
  console.log('dp', dp, 'max', max)
  return max
}
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
/**
 * dp [
    -2, 1, -2, 4, 3,
    5, 6,  1, 5
  ]
 */