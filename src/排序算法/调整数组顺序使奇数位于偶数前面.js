/**
 * 题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
思路：
从题目得出的信息：
相对位置不变--->保持稳定性；奇数位于前面，偶数位于后面 --->需要判断，移动元素位置；
这些都和排序算法相似，而且具有稳定性的排序算法不多，例如插入排序，归并排序、冒泡排序等；这里采用插入排序和冒泡排序的思想实现。
插入排序还是比较好的，毕竟不用借助其他的数据结构，
所以空间复杂度为O（1），时间复杂度为O（N^2）
 */

//  插入排序
function reOrderArray(array) {
    let len =  array.length
    if(len<=0){
        return
    }
    for (let i = 0; i < len; i++){
        if(array[i] % 2 ==1){ //奇数
            let temp = array[i] 
            let j = i -1
            while(j >= 0 && array[j] % 2 == 0) { //找偶数
                array[j+1] = array[j] //移动元素
                j--
            }
            array[j+1] = temp //插入
        }
    }
    return array
}
// 第二种解法：冒泡排序 遇到奇数位置不变，遇到偶数向后移动 时间复杂度O(n^2)

function reOrderArray(array) {
    let len =  array.length
    if(len<=0){
        return
    }
    
    for(let i = 0; i< len; i++){
        for(let j = 0; j <len-1; j++){
            if(array[j]%2 == 0 && array[j+1]%2 ==1){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
let arr = [1,2,3,4,5]
console.log(reOrderArray(arr))
let test = [2,78,33,35,37,46]
console.log(reOrderArray(test))