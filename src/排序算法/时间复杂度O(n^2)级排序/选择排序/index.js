// 选择排序的思想是：双重循环遍历数组，每经过一轮比较，找到最小元素的下标，将其交换至首位。

function selectSort(arr){
    let minIndex;
    for(let i = 0; i < arr.length; i++){
        minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 使用二元选择排序，每轮选择时记录最小值和最大值，可以把数组需要遍历的范围缩小一倍。

function selectSort2(arr){
    let minIndex, maxIndex;
    // i 只需要遍历一半
    for(let i = 0; i < arr.length / 2; i++){
        minIndex = i;
        maxIndex = i;
        for(let j = i+ 1; j < arr.length - i; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
            if(arr[maxIndex] < arr[j]){
                maxIndex = j;
            }
        }
        // 如果 minIndex 和 maxIndex 都相等，那么他们必定都等于 i，且后面的所有数字都与 arr[i] 相等，此时已经排序完成
        if(minIndex === maxIndex) break
        // 将最小元素交换至首位
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        // 如果最大值的下标刚好是 i，由于 arr[i] 和 arr[minIndex] 已经交换了，所以这里要更新 maxIndex 的值
        if(maxIndex === i) maxIndex = minIndex
        // 将最大元素交换至末尾
        let lastIndex = arr.length - 1 - i
        temp = arr[lastIndex]
        arr[lastIndex] = arr[maxIndex]
        arr[maxIndex] = temp
    }
}