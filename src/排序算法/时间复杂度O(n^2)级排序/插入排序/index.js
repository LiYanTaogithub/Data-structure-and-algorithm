// 交换法：在新数字插入过程中，不断与前面的数字交换，直到找到自己合适的位置。
function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i;
        // 当前数字比前一个数字小，则将当前数字与前一个数字交换
        while(j >=0 && arr[j] < arr[j - 1]){
            swap(arr, j, j - 1)
            // 更新当前数字下标
            j--
        }
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 问题：刚换到新的位置上不久，下一次比较后，如果又需要交换，它马上又会被换到前一个数字的位置。
// 优化方案：让新插入的数字先进行比较，前面比它大的数字不断向后移动，直到找到适合这个新数字的位置后，新数字只做一次插入操作即可。
function insertSort2(arr){
    // 从第二个数开始，往前插入数字
    for(let i = 1; i < arr.length; i++){
        let currentNum = arr[i] // 保存arr[i] 的值
        let j = i - 1;
        while(j >= 0 && currentNum < arr[j]){
            arr[j+1] = arr[j] // arr[j+1] 就是之前 arr[i] 的位置
            j--
        }
        // 两种情况会跳出循环：1. 遇到一个小于或等于 currentNumber 的数字，跳出循环，currentNumber 就坐到它后面。
        // 2. 已经走到数列头部，仍然没有遇到小于或等于 currentNumber 的数字，也会跳出循环，此时 j 等于 -1，currentNumber 就坐到数列头部。
        arr[j+1] = currentNum
    }
}