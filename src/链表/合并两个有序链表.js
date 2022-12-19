// https://www.cnblogs.com/lyt0207/p/12353126.html
// 创建一个新的链表，然后双指针循环两个有序链表，值小的先合并，值相等都合并，然后再判断如果两个链表有没遍历完的，就直接合并到新链表，最后返回值

const { List } = require("antd")

function mergeTwoLists(l1, l2){
    var head = new ListNode( 0 )
    let current = head
    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = new ListNode(l1.val)
            current = current.next
            l1 = l1.next
        }else if(l1.val == l2.val){
            current.next = new ListNode(l1.val)
            current = current.next
            l1 = l1.next
            current.next = new ListNode(l2.val)
            current = current.next
            l2 = l2.next
        }else {
            current.next = new ListNode(l2.val)
            current = current.next
            l2 = l2.next
        }
    }
    if(l1 !== null){
        current.next = l1;
    }
    if(l2 !== null){
        current.next = l2;
    }
    return head.next;
}

function mergeTwoLists(l1, l2) {
    let head = new ListNod(0)
    let current = head
    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = new ListNod(l1.val)
            current = current.next
            l1 = l1.next
        }else if(l1.val === l2.val) {
            current.next = new ListNod(l1.val)
            current = current.next
            l1 = l1.next
            current.next = new ListNod(l2.val)
            current = current.next
            l2 = l2.next
        }else {
            current.next = new ListNod(l2.val)
            current = current.next
            l2 = l2.next
        }
    }
    if(l1 !== null) {
        current.next = l1
    }
    if(l2 !== null) {
        current.next = l2
    }
    return head.next
}