/**
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

思路：第一个遍历的节点，最后输出，最后一个遍历的先输出，可以利用数组，每次遍历将值存入一个数组，然后反转数组，或者是用栈存入然后再输出，后进先出。
 */
// 数组实现：
var reversePrint = function(head){
    var res = []
    while(head){
        res.push(head.val)
        head = head.next
    }
    res.reverse()
    return res
}

// 栈实现
function printList(head){
    var res = []
    while(head){
        res.unshift(head.val)
        head = head.next
    }
    return res
}