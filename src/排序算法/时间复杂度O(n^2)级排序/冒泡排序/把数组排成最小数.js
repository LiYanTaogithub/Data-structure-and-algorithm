// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 输入: [10,2]
// 输出: "102"

function minSort(arr){
    let swapped = true
    let indexOfLastUnsortedElement = arr.length -1
    let swappedIndex = -1
    while(swapped){
        swapped = false
        for(let i = 0; i < indexOfLastUnsortedElement; i++){
            let s1 = "" + arr[i] + arr[i+1]
            let s2 = "" + arr[i+1] + arr[i]
            if(s1 > s2){
                swap(arr, i, i+ 1)
                swapped = true;
                swappedIndex = i
            }
        }
        indexOfLastUnsortedElement = swappedIndex
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}