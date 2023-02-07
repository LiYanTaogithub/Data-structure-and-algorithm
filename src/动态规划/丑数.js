/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
// 动态规划解法
function GetUglyNumber_Solution(index){
  if(index < 7) return index;
  let p2 = 0, p3 = 0, p5 = 0
  let dp = [];
  dp[0] = 1;
  for(let i = 1; i < index; i++) {
      const num2 = dp[p2]*2
      const num3 = dp[p3]*3
      const num5 = dp[p5]*5
      dp[i] = Math.min(num2, num3, num5)
      if(dp[i] === num2) p2++;
      if(dp[i] === num3) p3++;
      if(dp[i] === num5) p5++;
  }
  return dp[index - 1];
}