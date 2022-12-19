/**
 * 整体上分为这么几步：找到链表的中间节点、将链表断开、
 * 将右半部分链表反转、将这两部分链表合并；
 */
var reorderList = function(head) {
    if(!head) return
    
    // 找到中间节点
    let middle = findMiddle(head)

    // 将链表分成两个部分
    let head1 = head
    let head2 = middle.next
    middle.next = null

    // 反转后半部分
    head2 = reverse(head2)

    // 合并
    merge(head1, head2)
};

let findMiddle = function(head) {
  if(!head) return null
  let fast = head
  let slow = head
  while(fast.next && fast.next.next) {
    fast = fast.next.next //找中间节点，让快指针走两步
    slow = slow.next
    // if(fast === null) return slow
  }
  return slow
}

let reverse = function(head) {
  if(!head) return null
  let cur = head
  let pre = null
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

let merge = function(head1, head2) {
  let t1 = null
  let t2 = null
  while(head1 && head2) {
    t1 = head1.next
    t2 = head2.next

    head1.next = head2
    head2.next = t1

    head1 = t1
    head2 = t2
  }
}