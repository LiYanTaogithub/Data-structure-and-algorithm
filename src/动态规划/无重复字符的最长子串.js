/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

// 动态规划 TODO:感觉这题不适合用动态规划解
// 输入: "abcabcbb" 输出: 3 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
// dp[i]表示以下标为i的字符结尾不包含重复字符的最长子字符串长度
// 状态转移方程 dp[n]=math.Max(dp[n-1],)
const lengthOfLongestSubstring = (s) => {
    const dp = new Array()
    const hashMap = {}
    dp[0] = 1 // base case
    let res = 0
    for (let i = 1; i < s.length; i++) {
        if (!hashMap[s[i]]) {
            dp[i] = dp[i - 1] + i
        } else {
            // 遇到重复的情况
            let distance = i - hashMap[s[i]]
            // 说明重复的元素不影响当前不含重复字符的最大子串长度
            if (distance > dp[i - 1]) {
                dp[i] = dp[i - 1] + i
            } else {
                dp[i] = distance
            }
        }
        hashMap[s[i]] = i // 更新第i个元素最后出现的位置
    }
    res = max(res, dp[i])
}