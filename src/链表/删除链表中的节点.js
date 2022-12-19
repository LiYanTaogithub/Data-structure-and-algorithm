// https://www.cnblogs.com/lyt0207/p/12369228.html
var deleteNode = function (head, val) {
    if(head == null) return head
    let pre = null
    let deleteNode = head
    while(deleteNode !== val){
        pre = deleteNode // 记住前一个节点
        deleteNode = deleteNode.next
    }
    pre.next = pre.next.next //前一个节点指向要删除的节点的后一个节点
    return head
}

var deleteNode = function(head, val) {
    if(head == null) return head
    let pre = null
    let deleteNode = head
    while(deleteNode !== val) {
        pre = deleteNode
        deleteNode = deleteNode.next
    }
    pre.next = pre.next.next
    return head
}