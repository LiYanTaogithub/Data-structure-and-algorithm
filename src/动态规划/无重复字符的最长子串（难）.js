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
/**
 * 
 * @param {*} s 
 * @returns 
 * 这道题可以使用动态规划来解决。定义状态 $f(i)$ 表示以第 $i$ 个字符结尾的最长不重复子串的长度。对于第 $i$ 个字符，有两种情况：

如果第 $i$ 个字符没有出现过，则 $f(i)=f(i-1)+1$，即在第 $i-1$ 个字符结尾的最长不重复子串后面加上第 $i$ 个字符；
如果第 $i$ 个字符出现过，并且在第 $i$ 个字符上一次出现的位置与当前位置的距离小于等于 $f(i-1)$，即第 $i$ 个字符在当前最长不重复子串中出现过，则 $f(i)=i-j$，其中 $j$ 是第 $i$ 个字符上一次出现的位置。
状态转移方程为：
dp[i] = dp[i-1]+1, 第 i 个字符没有出现过
dp[i] = i - hashMap.get(s[i]), 第 i 个字符出现过，并且在当前最长不重复子串中

同时，需要用一个哈希表记录每个字符上一次出现的位置，用来计算第二种情况中的 $j$。

最终的答案为 $f(i)$ 中的最大值。
 */
const lengthOfLongestSubstring = (s) => {
    const dp = new Array()
    const hashMap = new Map()
    dp[0] = 1 // base case
    let res = 1
    hashMap.set(s[0], 0)
    for (let i = 1; i < s.length; i++) {
        const prevIndex = hashMap.get(s[i])
        if (hashMap.get(s[i]) === undefined) {
            dp[i] = dp[i - 1] + 1
        } else {
            // 遇到重复的情况
            let distance = i - hashMap.get(s[i])
            console.log('distance', distance)
            // 说明重复的元素不影响当前不含重复字符的最大子串长度
            if (distance > dp[i - 1]) {
                console.log('********')
                dp[i] = dp[i - 1] + 1
            } else {
                dp[i] = distance
            }
        }
        res = Math.max(res, dp[i])
        hashMap.set(s[i], i) // 更新第i个元素最后出现的位置
        console.log('hashMap', hashMap)
        console.log('dp====', dp)
    }
    console.log('res', res)
    return res
}
lengthOfLongestSubstring('abcabcbdab')