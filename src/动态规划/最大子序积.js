/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

子数组 是数组的连续子序列。

示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
 */
/**
 * 遍历数组时计算当前最大值，不断更新
    令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
    由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
    当负数出现时则imax与imin进行交换再进行下一步计算
    时间复杂度：O(n)
 */
var maxProduct = function(nums) {
  let min = nums[0], max = nums[0], res = nums[0]
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < 0) {
      let temp = min
      min = max
      max = temp
    }
    max = Math.max(nums[i], nums[i]*max)
    min = Math.min(nums[i], nums[i]*min)
    res = Math.max(res, max)
  }
  console.log('res', res)
  return res
};
let nums = [2,3,-2,4]
maxProduct(nums)