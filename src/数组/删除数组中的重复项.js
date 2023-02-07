// https://leetcode-cn.com/leetbook/read/sliding-window-and-two-pointers/owkrrm/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 有序 三个
// 快慢指针吧
// var removeDuplicates = function(nums) {
//   let slow=0
//   let fast = 2
//   while(fast<nums.length){
//     if(nums[slow]===nums[fast]){
//       // 找到相等的 移动数组
//       let n=fast
//       while(n<nums.length){
//         // 往前移动一步
//         nums[n]=nums[n+1]
//         n++
//       }
//     }
//     slow=fast
//     fast+=2
//   }
//   return slow+1
// };


// 换个思路想
// 重复元素最多只占2个 我们后面只管覆盖就行
// 我们只要计算出已经占了<=2 后面尽管覆盖就行
var removeDuplicates = function(nums) {
    let slow=2
    let fast=2
    let len =nums.length
    if (n <= 2) {
      return n;
    }
    // 双指针框架
    while(fast<len){
        if(nums[slow-2]!==nums[fast]){
           nums[slow]==nums[fast] // 只管替换
          slow++
        }
        // 相等了
        fast++
    }
    return slow
  }
  
  
  // 快慢指针应该观察慢指针
  // 0 0 0 0 1 1 2 2 可以根据这种情况思考
  // 数组我们以2个2个作为分割点 维护住他们就行
  // ! 反正以两个元素作为分割点比较好判断
  var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    // 其中慢指针表示处理出的数组的长度
    // 快指针表示已经检查过的数组的长度
    let slow = 2, fast = 2;
    while (fast < n) {
        // 我们观察slow间隔两个
        // 只要slow所走的两个元素不等于fast就成立
        // 因为题目要求最多两个数相同，所以这么判断
        // ! 如果nums[slow - 2] == nums[fast]，代表已经有两个数相等，此时nums[fast],对应的数值不能放进结果之中。反之，如果nums[slow - 2] != nums[fast]，
        // 那么nums[fast]可以放进nums[slow]中，并且slow++，记录结果的长度。
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
  };

  /**
 * @param {number[]} nums
 * @return {number} // 返回的是长度
 */
// 审题：注意是已经排序的数组
// 快慢指针法
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// 返回移除后数组的新长度。
var removeDuplicates = function (nums) {
  let i = 0 // i是慢指针，指向要赋值元素的下标
  for (let j = 1; j < nums.length; j++) {
      // j是快指针
      if (nums[i] !== nums[j]) {
          i++ // 这使用了i +1后的i了
          nums[i] = nums[j] // 向前赋值的方式删除重复元素
      }
  }
  // 返回的是长度
  return i + 1
};