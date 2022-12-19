// https://www.cnblogs.com/lyt0207/p/12354696.html
var deleteDuplicates = function (head){
    var current = head
    while(head && head.next){
        while(head.next && head.val === head.next.val){
            head.next = head.next.next
        }
        head = head.next
    }
    return current
}

var deleteDuplicates = function(head) {
    var cur = head
    while(head && head.next) {
        while(head.next && head.val === head.next.val) {
            head.next = head.next.next
        }
        head = head.next
    }
    return cur
}