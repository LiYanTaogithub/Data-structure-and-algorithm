/**
 * 快排
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  if(k >= arr.length) return arr
  let low = 0
  let heigh = arr.length - 1
  while(low < heigh) {
      let pos = partiotion(arr, low, heigh)
      console.log(pos)
      if(pos === k - 1) {
          break
      }else if(pos < k-1) {
          low = pos + 1
      }else {
          heigh = pos - 1
      }
  }
  return arr.splice(0, k)
};

function partiotion (arr, low, heigh) {
    let pivot = arr[low]
    while(low < heigh) {
        while(low < heigh && arr[heigh] >= pivot) heigh --
        arr[low] = arr[heigh]
        while(low < heigh && arr[low] <= pivot) low ++
        arr[heigh] = arr[low]
    }
    arr[low] = pivot
    return low
}

// 冒泡排序
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    const res = []
    if (input.length === 0) return res
    if (k > input.length) return res
    let temp
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < input.length-i-1; j++) {
            if (input[j] < input[j+1]) {
                temp = input[j+1]
                input[j+1] = input[j]
                input[j] = temp
            }
        }
        res.push(input[input.length-1-i])
    }
    return res
}