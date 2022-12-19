/**
 * 你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */

// https://www.cnblogs.com/lyt0207/p/12364016.html
var getIntersectionNode = function(headA, headB){
    if(!head || !headB){
        return null
    }
    let a = headA, b = headB
    while(a !== b){
        a = a ? a.next : headB
        b = b ? b.next : headA
    }
    return a
}