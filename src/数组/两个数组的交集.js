/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
*/
// 排序后双指针遍历一遍
function intersection(nums1, nums2) {
  sort(nums1)
  sort(nums2)

  let p1 = 0; p2 = 0; res = []
  while(p1 < nums1.length && p2 < nums2.length) {
    if(nums1[p1] < nums2[p2]){
      p1++
    }else if(nums1[p1] > nums2[p2]) {
      p2++
    }else {
      res.push(nums1[p1])
      p1++
      p2++
    }
  }
  return res
}