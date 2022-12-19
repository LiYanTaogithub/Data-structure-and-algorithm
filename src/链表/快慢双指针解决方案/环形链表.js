// https://www.cnblogs.com/lyt0207/p/12359354.html
/**
 * 给定一个链表，判断链表中是否有环。（不使用额外空间）
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

示例：a-b-c-b

思路：

1.快慢指针方法
设置两个指针，快指针每次走两步，慢指针每次走一步，如果是环形的话快指针一定会追上慢指针，等到快指针和慢指针相等的时候，就返回true。否则就返回false
 */
hasCycle = function(head){
    if(head == null || head.next == null) return false
    let fast = head.next
    let slow = head
    while(fast && fast.next){
        if(fast == slow) return true
        fast = fast.next.next
        slow = slow.next
    }
    return false
}

function hasCycle(head) {
    if(head == null || head.next == null) return false
    let fast = head.next; slow = head
    while(fast && fast.next) {
        if(fast === slow) return true
        solw = slow.next
        fast = fast.next.next
    }
    return false
}