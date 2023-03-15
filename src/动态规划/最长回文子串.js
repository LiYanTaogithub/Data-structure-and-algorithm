/**
 * 我们用 P(i,j) 表示字符串 s 的第 i 到 j 个字母组成的串是否为回文串：
 * 如果是p[i][j]=true，否则p[i][j]=false。 将问题拆分成子问题，则p[i][j]=p[i+1][j-1] && s[i]==s[j]，也就是说只有p[i+1][j-1]是回文串且s[i]==s[j]，那么p[i][j]才是回文串
 * 我们还需要考虑动态规划中的边界条件，即子串的长度为 1 或 2。对于长度为 1 的子串，它显然是个回文串；对于长度为 2 的子串，只要它的两个字母相同，它就是一个回文串。也就是p[i][i] = true, p[i][i+1] = s[i] === s[i+1]
​
 */
let s = 'ababaa'
var longestPalindrome = function (s) {
  let n = s.length
  let str = ''
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  // 倒着写是因为dp[i+1][j-1] 子问题
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
          /**
           * 子问题的拆解
           * 除了dp[i+1][j-1]是回文字符串外
           * 还有一种可能就是长度为0或者1的回文字符串
           * (j-i<2||dp[i+1][j-1]) 注意写法顺序
           * dp[5][5]   dp[6][4]是dp[5][5]的子问题 此时是溢出的条件 dp[5][5]是单个字符串
           * 也可以当做回文的 正常一点的场景是 dp[2][4]是dp[1][5]的子问题
           * 因为我们要求最值 所以从子问题分析入手
           */
          dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
          console.log([i, j], dp[i][j])
          if (dp[i][j] && j - i + 1 > str.length) { // j - i + 1 > str.length 和当前的回文串比较哪个最长，取最长的
              str = s.substring(i, j + 1)
              console.log('str', str)
          }
      }
  }
  console.log(str)
  return str
};
longestPalindrome(s)

// 另一种解法
var longestPalindrome = function(s) {
  if(s.length < 2) return s;
  let len = s.length
  let maxLen = 1
  let res = s.substring(0, 1)

  for(let i = 0; i < len;i++) {
      for(let j = i+1; j < len;j++) {
          if(j-i+1 > maxLen && valid(s, i, j)) {
              maxLen = j-i+1
              res = s.substring(i, j+1)
          }
      }
      return res
  }

  function valid(s, left, right) {
      while(left < right) {
          if(s[left] != s[right]){
              return false
          }
          left ++
          right --
      }
      return true
  }
};