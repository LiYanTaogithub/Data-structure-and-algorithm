// https://zhuanlan.zhihu.com/p/76734219
// 思路一：借助快排的分治思想，优点是期望速度最快，但是在最差情况下表现也极差。另外，也不适用于实际中数据一个一个到来的场景，或者数据量大到无法一次读入内存的场景。

// class Solution {
//     public int[] getLeastNumbers(int[] arr, int k) {
//         int left = 0, right = arr.length - 1;
//         while (left <= right) {
//             int p = partition(arr, left, right);
//             if (p < k) left = p + 1;
//             else if (p > k) right = p - 1;
//             else return Arrays.copyOf(arr, k);
//         }
//         return arr;
//     }
    
//     private int partition(int[] arr, int left, int right) {
//         int base = arr[left];
        
//         while (left < right) {
//             while (left < right && arr[right] >= base) right--;
//             if (left < right) arr[left] = arr[right];
//             while (left < right && arr[left] <= base) left++;
//             if (left < right) arr[right] = arr[left];
//         }
//         arr[left] = base;
//         return left;
//     }
// }

function getLeastNumbers(arr, k){
    if(k === 0) return []; 
    else if(k >= arr.length) return arr;
    // 不断划分数组
    partitionArray(arr, 0, arr.length -1, k);
    // 数组的前k个数就是最小的，将其存入结果
    let res = [];
    for(let i = 0; i < k; i++){
        res[i] = arr[i]
    }
    console.log(res);
    return res;
}

function partitionArray(arr, low, high, k){
    let m = partition(arr, low, high);
    console.log('m',m);
    if(k === m) return;
    else if (k < m) partitionArray(arr, 0, m-1, k);
    else partitionArray(arr, m+1, high, k)
}
function partition(arr, low, high){
    let i = low;
    let j = high+1;
    let v = arr[low]; 
    while(true){
        while(arr[++i] < v && i === high) break; // 左边比 v 小的交换
        while(arr[--j] > v && j === low) break; // 右边比 v 大的交换
        if(i > j) break;
        //右边比 v 大的交换，左边比 v 小的交换
        swap(arr, i, j)
    }
    swap(arr, low, j)
    return j;
}

function swap(arr, i, j){
    console.log('arr, i, j',arr, i, j);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

getLeastNumbers([5, 4, 3, 6, 9, 7, 2, 8], 4);
