/**
 * 给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，
 * 如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，
 * 使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，
 * 要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */

// 解法一 ： 暴力解法
// 把需要移动的字符一个个移动到字符串的尾部，时间复杂度 O(mn)

/**
 * 
 * @param {*} str 
 * @param {*} m 需要移动几个
 */
function leftRotateString(str, m){
    const length = str.length;
    while(m--){
        LeftShiftOne(str, length)
    }
}

function LeftShiftOne(s, length){ // abcdef 2
    const t = s[0];
    for(let i = 1; i < length; i++){
        s[i-1] = s[i];  // 1.bcdefa   2.cdefad
    }
    s[length - 1] = t;
}

// 解法二：三步反转法
// 例如，字符串 abcdef ，若要让def翻转到abc的前头，只要按照下述3个步骤操作即可：

// 首先将原字符串分为两个部分，即X:abc，Y:def；
// 将X反转，即得：abc->cba；将Y反转，即得：def->fed。
// 反转上述步骤得到的结果字符串，即反转字符串cbafed的两部分（cba和fed）给予反转，cbafed得到defabc，这就实现了整个反转。

function rotateString(s, m){
    const length = s.length;
    // reverseString(s, 0, m - 1);
    // reverseString(s, m, length - 1);
    reverseString(s, 0, length- 1);
}

function reverseString(s, from, to){
    let res = '';
    let start = from;
    for(let p = start; p < to; p++){
        res += s.charAt(start + to -1 - p);
    }
    console.log('res',res);
    return res;
}
rotateString('abcdefg', 4);