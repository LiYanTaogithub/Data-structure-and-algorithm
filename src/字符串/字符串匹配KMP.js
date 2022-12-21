/**
 * 给定两个串S=“s1s2s3 …sn”和T=“t1t2t3 …tn”，在主串S中寻找子串T的过程叫做模式匹配，T称为模式。
 * KMP算法的思路：如果P模式不匹配，记录好S中不匹配位置，同时我们下次该从p的哪里开始与S比较。next数组中存的是P中该从几号开始

"A"的前缀和后缀都为空集，共有元素的长度为0；

－　"AB"的前缀为[A]，后缀为[B]，共有元素的长度为0；

－　"ABC"的前缀为[A, AB]，后缀为[BC, C]，共有元素的长度0；

－　"ABCD"的前缀为[A, AB, ABC]，后缀为[BCD, CD, D]，共有元素的长度为0；

－　"ABCDA"的前缀为[A, AB, ABC, ABCD]，后缀为[BCDA, CDA, DA, A]，共有元素为"A"，长度为1；

－　"ABCDAB"的前缀为[A, AB, ABC, ABCD, ABCDA]，后缀为[BCDAB, CDAB, DAB, AB, B]，共有元素为"AB"，长度为2；

－　"ABCDABD"的前缀为[A, AB, ABC, ABCD, ABCDA, ABCDAB]，后缀为[BCDABD, CDABD, DABD, ABD, BD, D]，共有元素的长度为0。

作者：新即次哇一次墨hi都次
链接：https://leetcode.cn/leetbook/read/array-and-string/cpoo6/?discussion=432lx1
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://blog.csdn.net/yyzsir/article/details/89462339
 */

function kmpSearch (P, S) {
  let next = buildNext(P)
  let m = S.length, n = p.length, i = 0, j = 0;
  while(j < n && i < m) {
    if(j < 0 || S[i] == P[j]) {
      i++;
      j++
    }else {
      j = next[j]
    }
  }
  return i - j
}
function buildNext(P) {
  let m = P.length, j = 0;
  let next = [], t = next[0] = -1;
  while(j < m - 1) {
    if(t < 0 || P[j]===P[t]) {
      j++;
      t++
      next[j] = t
    }else {
      t = next[t]
    }
  }
  return next
}