/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例：
给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
[-1, 0, 1],
[-1, -1, 2]
]
//! 解题思路：排序 + 双指针, 本题的难点在于如何去除重复解。

三个数之和，要么是依次遍历数组三个数相加看是否等于0，但是这种方法算法复杂度等于O(n^3)，有点复杂。
还有一种思路是先对数组进行一次排序，然后找一个固定值，nums[i]，然后设置两个指针，left=i+1，right = nums.length -1,
两个指针一起循环，如果三个数的和等于0那就存放，如果大于0，就让尾指针 right 向前走，如果小于0，就让头指针 left 向前走。（这块建议自己在纸上画一画，先对数组排序，然后固定一个值，从设置头尾指针进行遍历）


*/
nums =
[-2,0,1,1,2]
var threeSum = function(nums) {
    //设置变量
    let result = []
    let left //头指针
    let right //尾指针
    let fixedValue //固定值
    //排序
    nums.sort( (a,b) => {
        return a-b
    })
    //判断数组内的元素是否都大于0，或者都小于0，就直接返回，如果第一个大于0或者最后一个小于0就不可能出现三数之和是0的情况
    if(nums[0] > 0 || nums[nums.length-1]<0) return result
    //开始遍历
    for (let i = 0; i < nums.length; i++) {
        fixedValue = nums[i]
        if(fixedValue == nums[i-1]) continue
        left = i+1
        right = nums.length - 1
        while (left < right) {
            //1.等于0的情况
            if(fixedValue + nums[left] + nums[right] == 0){
                let answer = []
                answer.push(fixedValue)
                answer.push(nums[left])
                answer.push(nums[right])
                result.push(answer)
                //1.1 如果前后值相等，跳出本次循环，像[0,0,0,0]
                if(fixedValue === nums[i-1]) continue
                //指针向前移动
                left ++
                right --
                //!去重 1.2移动后的指针和移动前的指针元素相等，再往前移动
                while(left < right && nums[left] === nums[left - 1]){
                    left += 1;
                }
                //!去重 1.3移动后的指针和移动前的指针元素相等，再往后移动
                while(left < right && nums[right] === nums[right + 1]){
                    right -= 1;
                }
            }
            //2.小于0的情况
            else if(fixedValue + nums[left] + nums[right] < 0){
                left ++
            }
            //大于0的情况
            else{
                right --
            }
        }
    }
    return result
}
