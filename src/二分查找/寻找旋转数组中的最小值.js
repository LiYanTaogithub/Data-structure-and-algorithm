function solution(nums) {
  let left = 0; right = nums.length - 1
  while(left < right) {
    let mid = left + (right - left) / 2
    // 如果 中间值大于右邻居, 说明mid落在了左边排序区域，但是最小值应该在右边区域，所以移动做左指标
    if(nums[mid] > nums[right]) {
      left = mid + 1
    }else {
      right = mid
    }
  }
  console.log(nums[left])
  return nums[left]
}

solution([4,5,6,7,0,1,2])