/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

function searchRange(nums, target) {
  if(nums.length === 0) {
    return [-1, -1]
  }
  let res = []
  res[0] = leftSearch(nums, target)
  res[1] = rightSearch(nums, target)

  function leftSearch(nums, target) {
    let left = 0; right = nums.length - 1
    while(left < right) {
      let mid = left + (right - left) / 2
      if(nums[mid] < target) {
        left = mid + 1
      }else {
        right = mid
      }
    }
    if(nums[left] === target) return left
    if(nums[right] === target) return right
    return -1
  }
  function rightSearch(nums, target) {
    let left = 0, right = nums.length - 1
    while(left < right) {
      let mid = left + (right - left) / 2
      if(nums[mid] <= target) {
        left = mid + 1
      }else {
        right = mid
      }
    }
    if(nums[right] === target) return right
    if(nums[left] === target) return left

    return -1
  }
}