// function mergeSort(items) {
//   if (items.length == 1) {
//       return items;
//   }
//   //将数组对半平分为左右两个数组
//   var middle = Math.floor(items.length / 2),
//       left = items.slice(0, middle),
//       right = items.slice(middle);
//   // 合并    
//   function merge(left, right) {
//       var result = [];
//       // 通过这个循环来排序
//       while (left.length > 0 && right.length > 0) {
//           if (left[0] < right[0]) {
//               /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
//               result.push(left.shift());
//           } else {
//               result.push(right.shift());
//           }
//       }
//       //合并两个数组
//       return result.concat(left).concat(right);
//   }

// // 递归调用
// return merge(mergeSort(left), mergeSort(right));
// }


function myMergeSort(arr){
  console.log(arr)
  if(arr.length <= 1) return arr
  //将数组对半平分为左右两个数组
  let middleIndex = Math.floor(arr.length /2)
  let left = arr.slice(0, middleIndex)  // slice 分割，splice添加或者删除
  let right = arr.slice(middleIndex)

  function merge(left, right) {
    console.log(left)
    console.log(right)
    let result = []
    while(left.length > 0 && right.length > 0) {  // 通过shift删除，然后一直循环判断第一个元素的值
      if(left[0] < right[0]) {
        /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
        result.push(left.shift())
      }else {
        result.push(right.shift())
      }
    }
    // 合并
    return result.concat(left).concat(right);
  }
  return merge(myMergeSort(left), myMergeSort(right))
}


let arr = [3, 44, 38, 5, 47, 15];
console.log('arr :', myMergeSort(arr));