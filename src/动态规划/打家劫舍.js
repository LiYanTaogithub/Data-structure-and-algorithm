/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */
/**
 * 解题思路：https://leetcode.cn/problems/house-robber/solutions/28242/da-jia-jie-she-dong-tai-gui-hua-jie-gou-hua-si-lu-/
 * https://leetcode.cn/problems/house-robber/solutions/138131/dong-tai-gui-hua-jie-ti-si-bu-zou-xiang-jie-cjavap/
 * 视频：https://leetcode.cn/problems/house-robber/solutions/263856/da-jia-jie-she-by-leetcode-solution/

 * DP 数组中的依赖关系都是向右指的，DP 数组的计算顺序就是从左向右
 */
//      var rob = function(nums) {
//       let db = [], max = nums[0]
//       db[0] = nums[0]
//       for (let i = 0; i < nums.length / 2; i++) {
//         db[i+1] = db[i] + nums[i + 2]
//         max = Math.max(max, db[i])
//       }
//       console.log('db', db, 'max', max)
//       return max
//     };
// let nums = [8,2,7,9,3,1]
// rob(nums)
var rob = function(nums) {
  let dp = [], length = nums.length
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])
  for(let i = 2; i < length; i++) {
    // 第 i - 1 天偷了，第i天就不能偷了，或者第i-2天偷了+第i天的值
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
  }
  console.log('db', dp)
  return dp[length - 1]
}
let nums = [8,2,7,9,3,1]
console.log('rob(nums)', rob(nums))

// 空间优化
// var rob = function(nums) {
//   let prev = 0, curr = 0
//   for(let i = 0; i < nums.length; i++) {
//     temp = Math.max(curr, prev + nums[i])
//     prev = curr
//     curr = temp
//   }
//   return curr
// }
// golang
// func rob(nums []int) int {
//   if len(nums) == 0 {
//       return 0
//   }
//   if len(nums) == 1 {
//       return nums[0]
//   }
//   dp := make([]int, len(nums))
//   dp[0] = nums[0]
//   dp[1] = max(nums[0], nums[1])
//   for i := 2; i < len(nums); i++ {
//       dp[i] = max(dp[i-2] + nums[i], dp[i-1])
//   }
//   return dp[len(nums)-1]
// }
