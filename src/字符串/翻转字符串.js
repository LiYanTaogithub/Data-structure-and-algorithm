// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
// 例如输入字符串"I am a student. "，则输出"student. a am I"。

var reverseWords = function(s) {
    if(s.length < 1) return s;
    let i = s.length - 1; // 指针
    let res = '';
    while( i >= 0){
        while( i >= 0 && s[i] === ' ') i--;   // 找到了空格，说明再向前一个就是一个单词的开始
        let j = i; // 单词扫描的末尾 .   .tneduts .
        while( i >= 0 && s[i] !== ' ') i--; // 找到下一个空格，单词扫描的结束 s
        // 跳出这个while的时候就是一个单词扫描完成了 s  student. 
        if(i<j){
            res += s.substr(i+1, j-i);
            res += ' ' // 加上空格
        }
    }
    console.log('res', res);
    return res.slice(0, res.length -1)
};
reverseWords("I am a student. ");

function reverseWords(s) {
    if(s.length < 1) return s
    let i = s.length - 1; res = ''
    while(i >= 0) {
        while(i >= 0 && s[i] === ' ') i--
        let j = i
        while(i >= 0 && s[i] !== ' ') i--
        if(i < j) {
            res+= s.substr(i+1, j - 1)
            res +=' '
        }
    }
    return res
}