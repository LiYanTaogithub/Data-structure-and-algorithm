// 迭代解法
var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    // 移动哨兵
    let temp = new ListNode(-1)
    temp.next = head
    let pre = temp
    let cur = head
    while(cur != null && cur.next != null) {
        let first = cur
        let second = cur.next
        let third = cur.next.next
        pre.next = second
        second.next = first
        first.next = third
        pre = first
        cur = third
    }
    return temp.next
};
// 递归解法
var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    let next = head.next
    head.next = swapPairs(next.next)
    head = next
    return head
}