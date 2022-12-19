/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

思路：由于栈是后进先出，所以先依次进入栈1，再从栈1依次弹出到栈2，这样栈1和栈2元素的顺序就正好相反了，然后弹出栈2顶部的元素，就完成了一个先进先出的过程。

维护两个栈 stack1 和 stack2，其中 stack1 用于存储元素，stack2 用于辅助操作。当栈2不为空时，在栈2顶部的元素是最先进入队列的元素，可以弹出，当栈2为空时把栈1中的元素逐个压入栈2中。
 */

// var Stack1 = []
// var Stack2 = []
// function push(node)
// {
//     // write code here
//     Stack1.push(node)
// }
// function pop()
// {
//     // write code here
//     //判断为空的情况
//     if (Stack1.length ==0 && Stack2.length == 0) {
//         return false
//     }
//     if (Stack2.length == 0) {
//         while(Stack1.length !==0) {
//             Stack2.push(Stack1.pop())
//         }
//     }
//     return Stack2.pop()
// }

setTimeout(function timeout () {
    console.log('timeout');
  },0);
  setImmediate(function immediate () {
    console.log('immediate');
  });