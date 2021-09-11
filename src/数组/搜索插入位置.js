/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
 * @param {*} nums 
 * @param {*} target 
 * @returns 
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