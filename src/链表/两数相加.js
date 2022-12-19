/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 */

var addTwoNumbers = function(l1, l2) {
    let c1 = l1  // l1节点
    let c2 = l2  // l2节点
    let c3       // l3节点
    let l3 // 输出的链表l3
    let carry = 0; // 进位
    // c1 c2的节点存在 （c1 c2都结束了 到终点了 但是还存在进位还是要继续进一）进位还存在的
    while (c1 || c2 || carry) {
        // 考虑到短的链表节点可能为 null，以 0 代替
        let v1 = c1 ? c1.val : 0
        let v2 = c2 ? c2.val : 0
        let sum = carry + v1 + v2
        // 取进位 0或1
        carry = Math.floor(sum/10)
        // 输出链表的节点
        if(c3) {
            // sum % 10 取个位
            c3.next = new ListNode(sum % 10)
            c3 = c3.next
        }else {
            l3 = new ListNode( sum % 10 )
            c3 = l3
        }
        // 后移
        if (c1) {
            c1 = c1.next
        }
        if (c2) {
            c2 = c2.next
        }
    }
};