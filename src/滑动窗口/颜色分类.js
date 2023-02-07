/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

  此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

  示例 1：


  输入：nums = [2,0,2,1,1,0]
  输出：[0,0,1,1,2,2]
  示例 2：


  输入：nums = [2,0,1]
  输出：[0,1,2]
  示例 3：


  输入：nums = [0]
  输出：[0]
 */
/**
 *  定义双指针，左指针左边元素都是0，右指针右边元素都是2，遍历原始数组；
    如果是0则跟左指针交换，左指针右移；
    如果是2则跟右指针交换，右指针左移；
    左指针从原始数组左边开始，右指针从原始数组右边开始；
    元素为2时，与右指针交换元素，原右指针指向的元素尚未遍历，此时i不能动；
 */

var sortColors = function(nums) {
  let left = 0, right = nums.length - 1, i = 0;
  while(i <= right) {
    if(nums[i] === 0) {
      let temp = nums[i]
      nums[i] = nums[left]
      nums[left] = temp
      left++
      i++
    }else if(nums[i] === 2) {
      let temp = nums[i]
      nums[i] = nums[right]
      nums[right] = temp
      right--
    }else {
      i++
    }
  }
  console.log('nums', nums)
  return nums
}
let nums = [2,0,2,1,1,0]
let nums2 = [2,0,1]
sortColors(nums2)
