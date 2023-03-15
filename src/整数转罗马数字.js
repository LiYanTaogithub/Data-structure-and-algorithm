//https://leetcode.cn/problems/integer-to-roman/description/
// 我们每次尽量使用最大的数来表示。

var intToRoman = function(num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let resp = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ''
  for(let i = 0; i < 13; i++) {
    while(num >= values[i]) {
      num = num - values[i]
      res = res + resp[i]
    }
  }
  console.log('res', res)
  return res
}
intToRoman(2833)