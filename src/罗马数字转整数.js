/**
 *  I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 */
/**
 * 首先建立一个HashMap来映射符号和值，然后对字符串从左到右来，如果当前字符代表的值不小于其右边，就加上该值；否则就减去该值。
 */
let s = 'MMDCCCXXXIII'
var romanToInt = function(s) {
  const hashMap = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  let sArr = s.split('')
  let res = 0
  for(let i = 0; i < sArr.length; i++) {
    if(hashMap[sArr[i]] < hashMap[sArr[i+1]]) {
      res -= hashMap[sArr[i]]
    }else {
      res += hashMap[sArr[i]]
    }
    console.log('res', res)
  }
  console.log('res', res)
  return res
};
romanToInt('IX')