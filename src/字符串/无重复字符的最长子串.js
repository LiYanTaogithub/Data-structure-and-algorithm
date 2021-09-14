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
                console.log('删除前的hashMap', hashMap)
                // 不断缩小窗口左边
                delete hashMap[s[left]]
                console.log('删除后的hashMap', hashMap)
                // 先删除后比较
                // console.log('hashMap[s[left++]] !== hashMap[s[right]]', hashMap[s[left++]], hashMap[s[right]])
                if (hashMap[s[left++]] !== hashMap[s[right]]) { // 不相等了就退出 while
                    // console.log('hashMap[s[left++]]，hashMap[s[right]], break', hashMap[s[left++]], hashMap[s[right]]);
                    console.log('break') // TODO: 不明白这个 break 是干啥的
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
// lengthOfLongestSubstring("abcddbcbb");

// 方法二：map映射出现的位置

function lengthOfLongestSubstring2(s){
    let map = new Map();
    let curIndex = 0; // 从哪个小标开始计数无重复的长度
    let maxLen = 0;
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i])){
            curIndex = map.get(s[i]) + 1;
        }
        maxLen = Math.max(maxLen, i - curIndex + 1);
        map.set(s[i], i)
    }
    console.log(maxLen);
    return maxLen;
}
lengthOfLongestSubstring2("abcdefdbcbb");