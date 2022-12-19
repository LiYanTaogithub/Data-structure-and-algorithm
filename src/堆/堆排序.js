function findKthLargest(nums, k) {
  let heapSize = nums.length
  buildMaxHeap(nums, heapSize) // 构建大顶堆
  // 进行下沉 大顶堆是最大元素下沉到末尾
  for(let i = nums.length - 1; i > nums.length -k+1; i--){
    swap(nums, 0, i)
    // 下沉后的元素不参与到大顶堆的调整
    --heapSize
    // 重新调整大顶堆
    maxHeapify(nums, 0, heapSize)
  }
}
// 自下而上构建一颗大顶堆
function buildMaxHeap(nums, heapSize) {
  for(let i = Math.floor(heapSize / 2) - 1; i >=0; i--) {
    maxHeapify(a, i, heapSize)
  }
  
}
// 从左向右，自上而下的调整节点
function maxHeapify(nums, i, heapSize) {
  let left = i*2+1
  let right = i*2+2
  let largest = i
  if(left < heapSize && nums[left] > nums[largest]) {
    largest = left
  }
  if(right < heapSize && nums[right] > nums[largest]) {
    largest = right
  }
  if(largest != i) {
    swap(nums, i, largest)
    maxHeapify(nums, largest, heapSize)
  }
}

function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
