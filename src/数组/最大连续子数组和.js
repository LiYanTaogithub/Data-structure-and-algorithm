/**
 * 
 * @param {*} arr 
 * @returns 
 * 对第j+1个元素有两种选择：要么放入前面找到的子数组，要么做为新子数组的第一个元素；
如果currSum加上当前元素a[j]后不小于a[j]，则令currSum加上a[j]，否则currSum重新赋值，置为下一个元素，即currSum = a[j]。
同时，当currSum > maxSum，则更新maxSum = currSum，否则保持原值，不更新。
 */

function MaxSubArray(arr){
    let maxSum = arr[0] // maxSum为最后要返回的最大子数组的和
    let curSum = 0; // currSum为当前最大子数组的和
    for (let i = 1; i < array.length; i++) {
        curSum = curSum > maxSum + arr[i] ? arr[i] : maxSum + arr[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}
