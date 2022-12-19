/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.

快慢指针法，快指针先走k步，然后快慢一起走，直到快指针走到最后，要注意的是可能是要删除第一个节点，这个时候可以直接返回head.next
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if(!head || k<1){
        return head;
    }
    let p1 =head
    let p2 = head
    while(k > 0) { // 先让p2走k步
        p2 = p2.next
        k--
    }
    while(p2 && p1){
        p1 = p1.next
        p2 = p2.next
    }
     //通过改变指针指向删除节点
    return p1
};