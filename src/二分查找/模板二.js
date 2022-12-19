/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * 它用于查找需要访问数组中当前索引及其直接右邻居索引的元素或条件。
 * 关键属性
    一种实现二分查找的高级方法。
    查找条件需要访问元素的直接右邻居。
    使用元素的右邻居来确定是否满足条件，并决定是向左还是向右。
    保证查找空间在每一步中至少有 2 个元素。
    需要进行后处理。 当你剩下 1 个元素时，循环 / 递归结束。 需要评估剩余元素是否符合条件。
  区分语法
    初始条件：left = 0, right = length
    终止：left == right
    向左查找：right = mid
    向右查找：left = mid+1


    应该是为了应对需要通过 mid 和mid+1 两个位置来判断是否满足target 的场景，每次循环判断时需要用到 mid元素右侧的元素，因此需要将判断的区间由模版一的左闭右闭改为左闭右开区间，每次更改区间范围时，不能把区间右边界排除掉

 */

function binarySearch(nums, target) {
  if(nums.length === 0) {
    return -1
  }
  // 定义target在左闭右开的区间里，即：[left, right)
  let left = 0, right = nums.length
  // 因为left == right的时候，在[left, right)是无效的空间，所以使用 <
  while(left < right) {
    let mid = left + (right - left) / 2
    if(nums[mid] === target) {
      return min
    }else if(nums[mid] < target) { // target 在右区间，在[middle + 1, right)中
      left = mid + 1
    }else { // target 在左区间，在[left, middle)中
      right = mid
    }
  }
  if(left !== nums.length && nums[left] === target) {
    return left
  }
  return -1
}