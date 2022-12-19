function heapSort(arr){
    buildMaxHeap(arr)
    for(let i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i)
        maxHeapify(arr, 0, i)
    }
}
function buildMaxHeap(arr){
    for(i = arr.length/2 -1; i>=0; i--){
        maxHeapify(arr, i, arr.length)
    }
}
function maxHeapify(arr, i, heapSize){
    let l = 2 * i + 1, r = 2 * i + 2;
    let largest = i
    while(l < heapSize && arr[l] > arr[largest]){
        largest = l
    }
    while(r < heapSize && arr[r] >arr[largest]){
        larget = r
    }
    while(largest != i){
        swap(arr, largest, heapSize)
        // 再次调整交换数字后的大顶堆
        maxHeapify(arr, largest, heapSize);
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}