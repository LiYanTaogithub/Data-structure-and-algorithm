/**
 * 
 * @param {*} s  bacmdbefd bacmmdefgk
 * @returns 
 * 给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    // 窗口的长度怎么计算right-left
    let left = 0
    let right = 0
    let maxLength = 0 // 最大长度
    const hashMap = {} // key为字符串值 value 随意
    while (right < s.length) {
        if (!hashMap[s[right]]) {
            hashMap[s[right]] = 1 // 值用来比较外来的key是否已在map 存在的话可以拿到为1
            // 不断扩大右边窗口
            right++
        } else {
            // 找到重复的值，此时应该左边缩小窗口，但要缩小后的窗口里面的值不是重复的
            // 如果有，继续缩小，周而复始
            while (left < right) {
                console.log('left',left)
                console.log('right', right)
                console.log('hashMap', hashMap)
                // 不断缩小窗口左边
                delete hashMap[s[left]]
                // 先删除后比较
                // console.log('hashMap[s[left++]] !== hashMap[s[right]]', hashMap[s[left++]], hashMap[s[right]])
                if (hashMap[s[left++]] !== hashMap[s[right]]) {
                    console.log('break');
                    break;
                }
            }
        }
        // 每一轮循环过后
        // 窗口的长度怎么计算right-left
        maxLength = Math.max(maxLength, right - left)
        console.log('max length', maxLength);
    }
    return maxLength
}
lengthOfLongestSubstring("abcabcbb");