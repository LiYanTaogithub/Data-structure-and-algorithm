/**
 * 
 * 如果要排序数组中下标从 p 到 r 之间的一组数据，
 * 我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。
 * 我们遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，
 * 将 pivot 放到中间。
 * 经过这一步骤之后，数组 p 到 r 之间的数据就被分成了三个部分，
 * 前面 p 到 q-1 之间都是小于 pivot 的，
 * 中间是 pivot，
 * 后面的 q+1 到 r 之间是大于 pivot 的。
 */
function myQuicksort(arr){
  let length = arr.length
  function sort(arr, start, end) {
    console.log(start,end)
    if(end <= start) return
    let key = arr[start]   // 分区点
    let i = start  // 保存start变量 每次操作 i+1，不要改变start
    let j = end  
    while(true) {
      // 从左向右寻找比key大的
      while(arr[++i] < key) {
        if(i === end) break
      }
      // 从右向左寻找比key小的
      while(arr[--j] > key) {
        if(j === start) break
      }
      if(i >= j) break
      // 交换
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      console.log('内层：',arr)
    }
    let temp = arr[start]
    arr[start] = arr[j]
    arr[j] = temp
    console.log('外层:',arr)
    sort(arr, start, j)
    sort(arr, j+1, end)
  }
  sort(arr,0, length)
  return arr
}
let arr1 = [3, 44, 2, 38, 5, 47, 15, 4, 6];
console.log('arr :', myQuicksort(arr1));
// 快速排序
// const pubQuickSort = (arr) => {
//   var result = quickSort(arr,0,arr.length-1)
//   return result
// }

const quickSort = (arr,left,right) => {
  if(left < right){
    var pos = right //基准点取末尾
    var middleIdx = partion(arr,pos,left,right)

    var rightM = middleIdx -1 < left ? left: middleIdx-1
    quickSort(arr,left,rightM)

    var leftM = middleIdx + 1 > right ? right : middleIdx +1
    quickSort(arr,leftM,right)
    return arr
  }
}

const partion = (arr,pos,left,right) => {
  var posVal = arr[pos]
  var startIdx = left

  for(var i = left;i<right;i++){ //插入排序用的while,快速排序用的for?
    if(arr[i] < posVal){
      swap(arr,i,startIdx) //把所有小的元素移动到左边
      startIdx++
    }
  }
  swap(arr,startIdx,pos)
  return startIdx
}

const swap = (arr,i,j) => {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quicksort(arr, n) {
  if(arr.length < 2) return arr
  let temp = arr[0]
  let left = 0
  let right = n -1
  let moving = 2  
  while(left < right) {
    if(moving === 2) {
      if(arr[right] >= temp) right --
      arr[left] = arr[right]
      left++
      moving = 1
    }
    if(moving === 1) {
      if(arr[left] <= temp) left++
      arr[right] = arr[left]
      right--
      moving = 2
    }
  }
  arr[left] = temp
  quicksort(arr, left)
  quicksort(arr+left+1, n-left-1)
}
// 
let arr = [3, 44, 38, 5, 47, 15];
console.log('arr :', quicksort(arr, 6));










function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }       
  }
  swap(arr, pivot, index - 1);
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}