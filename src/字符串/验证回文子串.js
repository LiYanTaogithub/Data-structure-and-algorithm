// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 左右如果相等那就继续比较，当左右不相等的时候，要么删除左边的一个再进行比较，要么删除右边的一个接着进行比较，例子："abccbma",当比较到b和m的时候不相等了，这个时候要么删除b进行比较，要么删除m再进行比较。
// 左右双指针扫描
var validPalindrome = function (s) {
    let left = 0;
    let right = s.length -1;
    if(s.length === 0) return false;
    while(left < right){
        if(s[left] !== s[right]){
            return check(left + 1, right) || check(left, right -1)
        }
        left++;
        right--;
    }

    function check(left, right){
        while(left < right){
            if(s[left] !== s[rigth]){
                return false
            }
            left++;
            right--;
        }
    }
}

function validPalindrome(s) {
    let left = 0; right = s.length - 1
    if(s.length === 0) return false
    while(left < right) {
        if(s[left] !== s[right]) {
            return check(left +1, right) || check(left, right - 1)
        }
        left ++
        right--
    }
    function check(left, right) {
        while(left < right) {
            if(s[left] !== s[right]) {
                return false
            }
            left++ 
            right--
        }
    }
}