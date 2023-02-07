var minWindow = function(s, t) {
    let left = 0, right = 0, len = s.length, distance = 0, match = 0
    // distance T中不同字母个数
    while(right < len) {
      // 移动right，每移动一下把对应字符放入到窗口里，直到窗口里的值包含了t所有字符 即：distanc == match
      if(s[right] === 't中有') {
        match++
      }
      right++
      // 当right移动到包含t所有字符后，开始移动left，直到移除某个字符，使得窗口里不能包含t的所有字符
      while(match === distance) {
        left++
      }
    }
};