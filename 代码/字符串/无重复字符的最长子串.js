/**
 * 思路：使用 hashmap保存当前字符，然后双重遍历扫描字符，
 * 如果当前字符已经在 hashmap中存在，那就是重复了，需要重新计算当前 length，
 * 用 maxLength 和当前 length比较，永远取最大值
 *
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return s.length
    }
    if(!s) return 0;

    let hashMap = {};
    let maxLength = 0;
    let curLength = 0;
    const arrStr = s.split("") // 转换成数组
    for(let i = 0; i < arrStr.length; i++) {
        for(let j = i; j < arrStr.length-1; j++) {
            if(hashMap[arrstr[j]]) {
                // 重置之前 永远记录最长的length
                if(maxLength < curLength) {
                    maxLength = curLength
                }
                // 重置
                curLength = 0,
                hashMap = {};

            }else {
                curLength ++ 
                hashMap[arrstr[j]] = 1
                if(j === arrStr.length - i - 1 && curLength > maxLength) {
                    maxLength = curLength;
                    hashMap = {};
                    curLength = 0
                }
            }
        }
    }
    return length 
};

