function longestPalindrome(str) {
  for(let i = 0; i < str.length; i++) {
    let left = i, right = str.length - 1;
    while(left < right) {
      if(str[left] !== str[right]) {
        right--
      }
    }
  }
}
let str1 = 'babad'
longestPalindrome()