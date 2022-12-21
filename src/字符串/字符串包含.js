/**
 * 给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？

    为了简单起见，我们规定输入的字符串只包含大写英文字母，请实现函数bool StringContains(string &A, string &B)

    比如，如果是下面两个字符串：

    String 1：ABCD

    String 2：BAD

    答案是true，即String2里的字母在String1里也都有，或者说String2是String1的真子集。

    如果是下面两个字符串：

    String 1：ABCD

    String 2：BCE

    答案是false，因为字符串String2里的E字母不在字符串String1里。

    同时，如果string1：ABCD，string 2：AA，同样返回true。
 */

// 解法一：判断string2中的字符是否在string1中?最直观也是最简单的思路是，针对string2中每一个字符，逐个与string1中每个字符比较，看它是否在String1中。时间复杂度为 O(m*n)

function StringContain(stra, strb){
    for(let i = 0; i < strb.length; i++){
        for(let j =0; (j < stra.length) && stra[j] !== strb[i]; j++){
            if(j >= a.length) return false
        }
    }
    return true
}

// 解法二：先对这两个字符串的字母进行排序，然后再同时对两个字串依次轮询。两个字串的排序需要(常规情况)O(m log m) + O(n log n)次操作，之后的线性扫描需要O(m+n)次操作。

// 解法三：把长字符串a中的所有字符都放入一个hash map里，然后轮询短字符串b，看短字符串b的每个字符是否都在hash map里，如果都存在，说明长字符串a包含短字符串b，否则，说明不包含。空间复杂度为O(1)，时间复杂度还是O(n + m)。

function stringContain(a, b){
    let hash = {};
    for(let i = 0; i < a.length; i++){
        hash[a[i]] = 1
    }
    for(let i = 0; i < b.length; i++){
        if(!hash[b[i]]) return false
    }
    return true
}
console.log(stringContain('ABCDE', 'BCD'))
console.log(stringContain('ABCDE', 'BCF'))



