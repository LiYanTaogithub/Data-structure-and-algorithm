/**
 * 示例 1：
  输入：strs = ["flower","flow","flight"]
  输出："fl"
  示例 2：
  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
 */
// 思路：以第一个为最长公共前缀，挨个与后面的进行比较，然后删减
function longCommonPrefix(strs) {
  let prefix = strs[0]
  console.log('prefix', prefix)
  for(let i = 1; i < strs.length; i++) {
    console.log('i', i)
    while(strs[i].indexOf(prefix) === -1) {
      prefix = prefix.substring(0, prefix.length - 1) // 不存在就删减然后再次进行比较 dog\do\d 或者 flower、flowe、flow、flo、fl
      console.log('删减后的prefix', prefix)
    }
  }
  if(!prefix) return ''
  return prefix
}
let strs = ["flower","flow","flight"]
let strs2 = ["dog","racecar","car"]
longCommonPrefix(strs)