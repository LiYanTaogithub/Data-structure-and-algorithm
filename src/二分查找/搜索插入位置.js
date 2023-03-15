/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
 */

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length-1
  while(left <= right){
      let mildle = Math.round( (left + right)/2)
  if(nums[mildle] == target) {
      return mildle
  }else if(target > nums[mildle]) {
      left = mildle+1
  }else if (target < nums[mildle]){
      right = mildle-1
  }
}
return left 
};