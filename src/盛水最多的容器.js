// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

/**
 * 双指针：左右两个指针
 * 区域受限于较短边，每次移动较短边的指针，判断面积是否有可能增大
 * X轴越大越好，y轴短板效应
 * 右边比左边长，就固定右边，移动左边，反之移动右边
 */
function maxArea(arr){
    let l = 0, r = arr.length - 1; maxarea = 0
    while(l < r){
        maxarea = Math.max(maxarea, Math.min(arr[l], arr[r]) * (r -l))
        if(arr[r] > arr[l]) l++
        else r--
    }
    return maxarea
}