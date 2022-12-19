/**
 * 对于未排序序列，在已排序序列中从后往前扫描，找到比它小的元素，然后插入到这个小元素的后面。
 */
function insertSort(arr) {
  let len = arr.length
  if(len <= 1) return 
  
  for (let i = 1; i < len; ++i) {
    let value = arr[i];  //基数
    let j = i - 1; // 从后往前找
    // 查找插入的位置
    for (; j >= 0; --j) {
      if (arr[j] > value) {  //如果当前元素大于基准数，
        arr[j+1] = arr[j];  // 数据移动
      } else {  //结束的条件是找到已排序的元素小于或者等于当前元素的位置
        break;
      }
    }
    arr[j+1] = value; // 插入数据
  }
  return arr
}
let arr = [3, 44, 38, 5, 47, 15];
console.log('arr :', insertSort(arr));

