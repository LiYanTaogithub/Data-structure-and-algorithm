/**
 * 
 * @param {*} index 
 * @returns 
 * 题目描述

把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
解题思路：
丑数一定由另一个丑数乘以2或者乘以3或者乘以5得到，那么我们从1开始乘以2,3,5，就得到2,3,5三个丑数，
从这三个丑数出发乘以2,3,5就得到4，6,10,6，9,15,10,15,25九个丑数，我们发现这种方式得到的丑数有重复的数据。
再来看题目，说从小到大的顺序输出第n个丑数，所以我们可以从每次计算后的结果里面取到最小的一个丑数，那关键是怎么每次都取到最小的一个丑数？
我们创建一个数组，用存放丑数，再创建三个指针，分别代表乘以2，乘以3，乘以5的丑数位置，然后再让这个丑数乘以2，3，5后的结果比较大小，
取最小的一个放进数组，同时移动相应的位置。
 */
function GetUglyNumber_Solution(index){
    if(index < 7) return index;
    let p2 = 0, p3 = 0, p5 = 0
    let res = [];
    res[0] = 1;
    for(let i = 1; i < index; i++) {
        res[i] = Math.min(res[p2] * 2, Math.min(res[p3] * 3, res[p5] * 5))
        if(res[i] === res[p2] * 2) p2++;
        if(res[i] === res[p3] * 2) p3++;
        if(res[i] === res[p5] * 2) p5++;
    }
    return res[index - 1];
}
