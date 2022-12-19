// 1->2->3->4, 4->3->2->1
// 每次循环都让当前指针指向前一个节点
var reverseList = function(head) {
    //先判断为null的情况
    if (head == null || head.next == null) {
        return head;
    }

    var current  = head //当前节点
    var pre = null      //前一个节点
    while(current != null){
        var next = current.next //先保存一下当前节点的下一个节点 2
        current.next = pre //让当前节点指向它的前一个一个节点 2指向null
        pre = current  // 前一个指针后移 pre = 1
        current = next //当前指针后移 current = 2
        //current = current.next 错误的写法，因为这个时候current.next = pre,current = pre = null,跳出了循环
    }
    return pre
};