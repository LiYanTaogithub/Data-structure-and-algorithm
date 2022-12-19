/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
 */
const moveZero = function(nums){
    let zeroCount = 0; // 记录末尾 0 的数量以缩小遍历范围
    for(let i = 0; i < arr.length; i++){
        if(nums[i] === 0){
            for(let j = i; j < arr.length - zeroCount - 1; j++){
                swap(nums, j, j+1)
            }
            zeroCount ++
            // 下一轮遍历时 i 会增加 1，但此时 nums[i] 已经和 nums[i+1] 交换了，nums[i+1] 还没有判断是否为 0，所以这里先减 1，以使下一轮继续判断 i 位置。
            i--
        }
    }
}
function swap(nums, i, j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}