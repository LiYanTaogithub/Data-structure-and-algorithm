/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * 区分语法
模板 #1 用于查找可以通过访问数组中的单个索引来确定的元素或条件。
初始条件：left = 0, right = length-1
终止：left > right
向左查找：right = mid-1
向右查找：left = mid+1

mid的每次判断都可以确定mid是否为我们想要的值
 */

function binarySearch(nums, target) {
  if(nums.length === 0) return -1
  let left = 0; right = nums.length - 1
  while(left <= right) {
    // 防止溢出 等同于(left + right)/2
    let mid = left + (right - left) / 2
    if(nums[mid] === target) {
      return mid
    }else if(nums[mid] < target) { // target 在右区间，所以[middle + 1, right]
      left = mid + 1
    }else { // target 在左区间，所以[left, middle - 1]
      right = mid - 1
    }
  }
  return -1
}

