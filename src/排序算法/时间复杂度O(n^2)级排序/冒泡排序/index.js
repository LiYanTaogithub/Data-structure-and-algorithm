
//写法一： 一边比较一边向后两两交换，将最大值 / 最小值冒泡到最后一位；

function bubbleSort1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 优化写法：使用一个变量记录当前轮次的比较是否发生过交换，如果没有发生交换表示已经有序，不再继续排序；

function bubbleSort2(arr){
    let swapped = true
    for(let i = 0; i < arr.length; i++){
        if(!swapped) break
        swapped = false
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                swapped = true
            }
        }
    }
}

// 优化写法三：除了使用变量记录当前轮次是否发生交换外，再使用一个变量记录上次发生交换的位置，下一轮排序时到达上次交换的位置就停止比较。
function bubbleSort3(arr){
    let swapped = true
    let indexOfLastUnsortedElement = arr.length - 1;
    let swappedIndex = -1;
    while(swapped){
        swapped = false
        for(let i = 0; i < indexOfLastUnsortedElement; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i + 1)
                swapped = true
                swappedIndex = i
            }
        }
        indexOfLastUnsortedElement = swappedIndex;
    }
}

// 在大厂面试中，有一道非常经典的数字交换题目：如何在不引入第三个中间变量的情况下，完成两个数字的交换。 arr[j] > arr[j+1]

arr[j+1] = arr[j+1] + arr[j]
arr[j] = arr[j+1] - arr[j]  // arr[j+1] + arr[j] - arr[j]
arr[j+1] = arr[j+1] - arr[j] // arr[j+1] + arr[j] - arr[j+1]