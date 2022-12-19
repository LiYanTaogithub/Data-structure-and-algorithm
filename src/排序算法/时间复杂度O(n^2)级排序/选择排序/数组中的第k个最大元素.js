// 选择 k 次数组中的最大元素，将其交换到数组前面，然后返回数组的第 k 个元素即可。

function findKthLargest(nums, k){
    let maxIndex;
    for(let i = 0; i < k; i++){
        maxIndex = i
        for(let j = i+1; j < nums.length; j++){
            if(nums[maxIndex] < nums[j]){
                maxIndex = j
            }
        }
        swap(nums, i, maxIndex)
    }
    return nums[k - 1]
}
function swap(nums, i, j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}