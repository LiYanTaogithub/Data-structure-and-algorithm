/**
 * 
 * @param {*} str 回文，指一个顺着读和反过来读都一样的字符串，比如madam、我爱我，
 * 双指针，从头尾向中间扫描，如果所有字符都相等就是回文，否则有一个不相等就不是回文。
 * 这是一个直白且效率不错的实现，时间复杂度：O(n)，空间复杂度：O(1)。
 */
function IsPalindrome(str){
    if(str.length === 0) return false;
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
// 0 1 2 3 4 5 
// 解法二： 从中间向两边扫描
// function IsPalindrome(str){
//     if(str.length === 0) return false;
//     let left = 0;
//     let right = str.length;
//     let middle = left + right / 2;
// }