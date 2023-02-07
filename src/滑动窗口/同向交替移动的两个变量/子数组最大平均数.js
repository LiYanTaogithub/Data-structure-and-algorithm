/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

示例：


输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 */

//和长度为k的窗口求和一样 反正窗口长度不变 考虑窗口内总和就行 双指针一次扫码即可，
// 由于窗口的长度固定，我们可以计算出所有的长度固定的连续子数组的和，在这些和中求出最大值，除以 kk，就是题目要求的最大平均值
const findMaxAverage = function(nums, k) {
  let length = nums.length, windowSum = 0
  // 第 1 步：先求出第 1 个窗口的和
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]
  }
  let res = windowSum
  // 循环不变量定义：[left..right) 是长度为 k 的窗口
  for(let right = k; right < length; right++) {
    // 滑动窗口，加上一个数再减去一个数就是指定长度的窗口
    windowSum = windowSum + nums[right] - windowSum[right - k]
    res = Math.max(res, windowSum)
  }
  return res / k
}