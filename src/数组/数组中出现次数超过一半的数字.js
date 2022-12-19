/**
 * 题目描述
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
思路：

如果有符合条件的数字，则它出现的次数比其他所有数字出现的次数和还要多。
在遍历数组时保存两个值：一个是数组中的一个数字，一个是次数。遍历下一个数字时，若它与之前保存的数字相同，则次数加1，否则次数减1；若次数为0，则保存下一个数字，并将次数置为1。遍历结束后，所保存的数字即为所求。然后再判断它是否符合条件即可。
时间复杂度：O(n)
同归于尽大法，不同的元素遇到就消去。 
例如有 9个数分别为 1个a,1个b,1个 c,1个d,5个e,,最好的同归于尽情况是这样排列：a b c d e e e e e，从前往后不同元素消去之后就剩下5个e,最差情况是这样排列：e a e b e c e d e,这样不同两个元素相消之后 就剩一个e,因此这样不管怎样排列，出现次数超过一半的元素就会留下来
 */
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers == null || numbers.length == 0){
        return 0
    }
    let result = numbers[0]
    let timer = 1
    for(let i = 1; i < numbers.length; i++){
        //1.遍历之前都判断一下次数是否为0，如果为0，则保存当前值为，并将次数设置为1
        if(timer == 0){ 
            result = numbers[i] // 切换临时答案
            timer = 1
        }else { //如果当前值等于保存值则次数+1
            if(numbers[i] == result){
                timer++
            }else { //否则-1 同归于尽
                timer--
            }
        }
    }

    //2.判断result是否符合条件，即出现次数大于数组长度的一半
    let time = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == result){
            time++
        }
    }
    if(time*2 <= numbers.length){
        return 0
    }else{
        return result
    }
}

function MoreThanHalfNum_Solution(nums) {
    if(nums === null || nums.length === 0) return 0
    let result = nums[0]; timer = 1
    for(let j = 1; j < nums.length - 1; j++) {
        if(timer === 0) {
            result = nums[i]
            timer++
        }else {
            if(nums[i] === result) {
                timer++
            }else {
                timer--
            }
        }
    }
    let time = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === result){
            time++
        }
    }
    if(2 * time <= nums.length) {
        return 0
    }else {
        return result
    }
}