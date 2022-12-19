function quickSort(arr){
    sort(arr, 0, arr.length -1)
}
function sort(arr, start, end){
    // 如果少于两个，退出
    if(start >= end) return;
    let middle = partition(arr, start, end)
    sort(arr, start, middle -1)
    sort(arr, middle + 1, end)
}
function partition(arr, start, end){
    let piovt = arr[start]
    let left = start + 1;
    let right = end;
    while(left < right){
        while(left < right && arr[left] <= piovt) left ++
        while(left < right && arr[rigth] >= piovt) right--
        if(left < right){
            swap(arr, left, right)
            left ++;
            right --;
        }
    }
    if(left === right && arr[right] > piovt) right--
    swap(arr, start, right)
    return right;
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 递归解法
