function  findKThlargest(nums, k){
    let heapSize = nums.length;
    // 构建堆
    buildMaxheap(nums, heapSize)
    // 下沉 让尾部元素与堆顶元素交换，最大值被放在数组末尾，并且缩小数组的length，不参与后面大顶堆的调整
    for(let i = nums.length -1; i >=nums.length-k + 1; i--){
        swap(nums, 0, i) // 尾部元素与堆顶元素交换
        heapSize -- // 下沉后的元素不参与到大顶堆的调整
        maxHeapify(nums, i, heapSize) // 重新调整大顶堆
    }
    return nums[0]

    // 从最后一个非叶子节点开始构建大堆顶
    function buildMaxheap(nums, heapSize){
        for(let i = Math.floor(heapSize/2) - 1; i >=0; i--){
            maxHeapify(nums, i, heapSize)
        }
    }
    // 比较第i个元素和他的左右子节点的大小，互换位置
    function maxHeapify(nums, i, heapSize){
        let l = 2*i+1
        let r = 2*i+2
        let largest = i
        if(l < heapSize && nums[l] > largest){
            larget = l
        }
        if(r < heapSize && nums[r] > largest){
            largest = r
        }
        if(largest !== i){
            swap(nums, i, largest)
            // 调整他下面的子节点
            maxHeapify(nums, largest, heapSize)
        }
        function swap(nums, i, j){
            let temp = nums[i]
            nums[i] = nums[j]
            num[j] = temp
        }
    }
}