// https://leetcode-cn.com/leetbook/read/sliding-window-and-two-pointers/rl0ncs/
/**
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
示例 1：

输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。
示例 2：

输入：nums = [2,2,2,2,2]
输出：1
解释：最长连续递增序列是 [2], 长度为1。
 */
/**
 * 前i个数组的最长递增个数 = 前i-1个最长递增个数+1，因为是连续，所以就是nums[i -1] 和 nums[i] 比较大小
 * dp[i] 表示前i个数字的最长递增个数，如果nums[i] > nums[i - 1], dp[i] = dp[i -1] + 1，如果遇到不是递增的，就让它等于1，从1开始计算
 */
var findLengthOfLCIS = function(nums) {
  let len = nums.length, dp = [], max = 0
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    if(nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }else {
      dp[i] = 1
    }
    max = Math.max(max, dp[i])
  }
  console.log('dp', dp, 'max', max)
  return max
}
let nums = [1,3,5,4,7]
findLengthOfLCIS(nums)


