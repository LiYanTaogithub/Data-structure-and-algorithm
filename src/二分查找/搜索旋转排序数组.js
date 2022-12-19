/**
 * [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。0
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * 判断mid所在元素是左递增还是右递增。如果nums[mid]>nums[r]，说明是左递增，此时有两种情况，若target在左递增区间，则排除mid右边的所有值，若不在则排除mid左边的所有值；如果nums[mid]<nums[r]，说明是右递增，此时有两种情况，若target在右递增区间，则排除mid左边的所有值，若不在则排除mid右边的所有值。
除了上面这种方法，还可以先找到旋转点，再分情况从[l,旋转点)或[旋转点,r]进行普通二分查找。
 */
function solution (nums, target) {
  if(nums.length === 0) {
    return -1
  }
  let left = 0; right = nums.length -1
  while(left <= right) {
    let mid = left + (right - left) / 2
    if(nums[mid] === target ) {
      return mid
    }else if(nums[left] < nums[mid]) { // mid 落在了左侧排序数组中
      if(target < nums[mid] && target >= nums[left]) { // target在第一部分排序数组的nums[mid]的左边
        right = mid - 1
      }else { // target在第一部分排序数组nums[mid]右边或在第二部分排序数组中
        left = mid + 1
      }
    }else { // mid 落在了右侧排序数组中
      // target在第二部分排序数组nums[mid]右边
      if(target <= nums[right] && target > nums[mid]) {
        left = mid + 1
      }else {
        //target在第二部分排序数组nums[mid]左边或在第一部分排序数组中
        right = mid - 1
      }
    }
  }
  return - 1
}