/**
 * 
 * @param {*} str 
 * @returns 
 * 题目描述
    在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）
   解题思路：
    这道题我们要统计每个字符在字符串中出现的次数，那就需要一个容器来存放每个字符的出现次数，在这个容器中可以根据字符来查找他出现的次数，也就是说这个容器的作用是把这个字符映射成一个数字，因此我们可以定义一个map对象，也叫哈希表，它的键（key）是字符，值（value）是该字符出现的次数。
    我们需要两次循环：
    第一次循环将所有字符和对应出现的次数存放在map中，时间复杂度为0(n)；
    第二次循环找到value为1的字符所在的位置，并返回。
 */
function FirstNotRepeatingChar(str){
    if(str.length === 0) return -1;
    const strMap = {};
    for(let i = 0; i < str.length; i++){
        if(strMap[str[i]]){
            strMap[str[i]] = 1;
        }else {
            strMap[str[i]] += 1;
        }
    }
    for(let i = 0; i < str.length; i++){
        if(strMap[str[i]] === 1) return str[i];
    }
}