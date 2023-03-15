/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
var minSubArrayLen = function(target, nums) {
  let start = 0, end = 0, res = Infinity
  let sum = 0, len = nums.length
  while(end < len) {
    sum += nums[end]
    // 找到了>= target的集合，不断移动左指针，直到不能再缩小为止
    while(sum >= target) {
      res = Math.min(res, end - start + 1)
      sum = sum - nums[start]
      start++
    }
    // 移动右指针
    end++
  }
  return res === Infinity ? 0 : res
};