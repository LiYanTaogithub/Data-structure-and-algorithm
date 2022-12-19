// 从头到尾扫描，找出最小的一个元素和第一个元素交换，接着从剩下的元素中继续这种操作，直至一个有序的序列
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) { // i 控制找几趟
      minIndex = i;
      for (var j = i + 1; j < len; j++) {  // j 控制每趟挨个儿对比找到最小的那个数
          if (arr[j] < arr[minIndex]) {     // 寻找最小的数
              minIndex = j;                 // 将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      console.log(arr)
  }
  return arr;
}
let arr = [3, 44, 38, 5, 47, 15];
console.log('arr :', selectionSort(arr));