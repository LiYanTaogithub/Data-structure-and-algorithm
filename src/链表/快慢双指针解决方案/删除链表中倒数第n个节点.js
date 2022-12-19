/**
 * 题目描述：

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
思路：
快慢指针，快指针先走n步，然后快慢一起走，直到快指针走到最后，要注意的是可能是要删除第一个节点，这个时候可以直接返回head.next


 */

var removeNthFromEnd = function(head, n) {
    if(!head || n<1){
        return head;
    }
    let slow =head
    let fast = head
    while(n--) { // 先让fast走n步 快指针向前移动n位，慢指针在表头不动
        if(fast.next !== null){
            fast = fast.next
        }else{ //表示删除的是第一个节点return head.next
        }
    }
    while(fast && fast.next){ //当快指针到达表尾时，慢指针正好到达倒数第n位
        slow = slow.next
        fast = fast.next
    }
    slow.next = fast.next.next
    return slow
};