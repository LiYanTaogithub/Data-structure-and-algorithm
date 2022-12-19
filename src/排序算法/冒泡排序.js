// 根据数值大小一点一点向着一侧移动
function bubbleSort (arr = []) {
  let len = arr.length
  for(let i = 0; i < arr.length; i++) {  // 重复n此
    for(let j = 0; j < len - i - 1; j ++) {  // 每次查找插入的位置
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46];
console.log('arr :', bubbleSort(arr));

