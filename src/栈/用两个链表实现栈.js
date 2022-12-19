/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。
思路：
使用两个栈，一个栈用作正常接收数据，另外一个栈作为辅助栈记录每次添加数据时候的最小值，

每入栈一次，就与辅助栈顶比较大小，如果小就入栈，如果大就入栈当前的辅助栈顶
当出栈时，辅助栈也要出栈
这种做法可以保证辅助栈顶一定都当前栈的最小值
可以实现从栈中以O(1)的时间复杂度得到栈中的最小值，需额外空间O(N)。
 */

let selfStack = []  //数据栈
let assertStack = [] //辅助栈
function push(node)
{
    // write code here
    selfStack.push(node);
    let min = assertStack[assertStack.length-1];
    if(assertStack.length == 0 || node < min){ //入栈时，与辅助栈顶比较大小，如果小就入栈，如果大就入栈当前的辅助栈顶
        assertStack.push(node);
    }else{
        assertStack.push(min);
    }
}
function pop() //出栈时辅助栈也要出栈，这样可以保证辅助栈栈顶永远是当前元素的最小值
{
    // write code here
    assertStack.pop();
    return selfStack.pop();
}
function top()
{
    // write code here
    return selfStack[selfStack.length-1];
}
function min()
{
    // write code here
    return assertStack[assertStack.length-1];
}


var MinStack = function() {
    this.selfStack = []  //数据栈
    this.assertStack = [] //辅助栈
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MinStack.prototype.push = function(x) {
       let min = this.assertStack[this.assertStack.length -1]
       this.selfStack.push(x)
       console.log(this.selfStack)
       if(this.assertStack.length === 0 || x < min){
           this.assertStack.push(x)
           console.log(this.assertStack)
       }else {
           this.assertStack.push(min)
       }
   };
   
   /**
    * @return {void}
    */
   MinStack.prototype.pop = function() {
        this.assertStack.pop()
        return this.selfStack.pop()
        
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.top = function() {
       return this.selfStack[this.selfStack.length -1]
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.min = function() {
       return this.assertStack[this.assertStack.length-1]
   };