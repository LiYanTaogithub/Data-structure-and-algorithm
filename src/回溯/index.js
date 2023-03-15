/**
 * 回溯就是递归的一种
 * 本质就是找重复性：最近重复性和最优重复性，最优重复性就是动态规划，最近重复性就是分治、回溯或者其他方法
 * 
 * 
 * 回溯法解决的问题都可以抽象为树形结构，是的，我指的是所有回溯法的问题都可以抽象为树形结构！
 * 因为回溯法解决的都是在集合中递归查找子集，集合的大小就构成了树的宽度，递归的深度，都构成的树的深度。
 * 递归就要有终止条件，所以必然是一棵高度有限的树（N叉树）。
 * for循环就是遍历集合区间，可以理解一个节点有多少个孩子，这个for循环就执行多少次。
 * backtracking这里自己调用自己，实现递归。
 * 用path数组记录路径上的字母，它的长度等于参数的长度
 * 
 * 写递归代码的时候千万不要想怎么递的怎么归的，只要想清楚边界条件其他的交给数学归纳法
 * 
 * 回溯三问：
 * 每一步的操作是什么？枚举得到第i个字母，并记录在操作路径path[i]里
 * 子问题：构造字符串大于等于i的部分（当前构造的是第i个，剩下的就是大于等于i的部分）
 * 下一个子问题：构造大于等于i+1的部分
 */
function backtracking(参数) {
   if (终止条件) {
       存放结果;
       return;
   }

   for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
       处理节点;
       backtracking(路径，选择列表); // 递归
       回溯，撤销处理结果
   }
}

/**
 *
 * 子集型回溯：
 * 站在输入的角度：每个元素都可以选或者不选
 * 回溯三问：
 * 每一步的操作是什么？枚举第i个数选/不选
 * 子问题：从下标大于等于i的数字中构造子集
 * 下一个子问题：从下标大于等于i+1的数字中构造子集
 * 时间复杂度n*2^n, 空间复杂度O(n)
 */
var subsets = function(nums) {
   let n = nums.length
   let res = []
   let path = []

   function dfs(i) {
      if(i=== n) {
         // 把递归答案放进res中
         res.push(path.join(','))
         return
      }
      // 1.不选直接递归下一个
      dfs(i+1)

      // 2.选，加入路径中
      path.push(nums[i])
      // 处理下一个
      dfs(i+1)
      // 恢复到递归之前
      path.pop()
   }
   dfs(0)
   return res
};
/**
 * 站在答案的角度：每个节点都是答案
 * 
 */
var subsets = function(nums) {
   let n = nums.length
   let res = []
   let path = []

   function dfs(i) {
      // 每个节点都是答案
      res.push(path.join(','))

      if(i === n) {
         return
      }
      for j in range(i, n) {
         path.push(nums[j])
         dfs(j+1)
         path.pop()
      }
   }
   dfs(0)
   return res
};