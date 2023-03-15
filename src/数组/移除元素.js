/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。

解题思路：

首先找到这个需要删除的元素，数组找特定元素的方法有两种，第一种是for循环，第二种是indexOf，这两种方法都可以找出元素的位置，对应的也就有两种方法。
 */
// 方法一：for遍历
var removeElement = function(nums, val) {
    for (var i =0; i<nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,0)
        }
    }
    return nums
};
// 方法二：递归
var removeElement = function(nums, val) {
    if(nums.indexOf(val) != -1){
        nums.splice(nums.indexOf(val), 1)
        return removeElement(nums, val)
    }
};
/**
 * 双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

定义快慢指针

快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
慢指针：指向更新 新数组下标的位置
 */
var removeElement = function(nums, val) {
    let slowIndex = 0
    for(let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if(nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex]
        }
    }
}