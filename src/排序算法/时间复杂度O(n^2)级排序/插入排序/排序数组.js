// 给你一个整数数组 nums，请你将该数组升序排列。
/**
 * @param {*} nums 
 *  示例 1：
    输入：nums = [5,2,3,1]
    输出：[1,2,3,5]
    示例 2：
    输入：nums = [5,1,1,2,0,0]
    输出：[0,0,1,1,2,5]
 */

var sortArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        let currentNum = nums[i]
        let j = i -1
        while(j >=0 && currentNum < nums[j]){
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = currentNum
    }
    return nums
};