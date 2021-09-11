
// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

/**
 * 首先获取字符串中的每个单词，每个单词之间是用空格分隔的，所以通过指针移动到空格就可以获取到每个单词，然后将单词反转，反转的方式是 从后往前保存字符。
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
     const length = s.length;
     let i = 0; // 指针扫描单词到空格
     let res = '';
     if(length === 0) return;
     if(length === 1) return s;
     while(i < length){
        let start = i;
        while(i < length && s.charAt(i) !== ' ') i++;
        // 此时 i 指向了空格位置
        // 反转单词
        for(let p = start; p < i; p++){
            // res.push()
            res += s.charAt(start+i-1-p)
        }
        // 处理空格
        while(i < length && s.charAt(i) === ' ') {
            res += ' ';
            i++;
        }
     }
     console.log(res);
     return res;
 }

 reverseWords("Let's take LeetCode contest");