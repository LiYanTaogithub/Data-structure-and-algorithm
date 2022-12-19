/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if(pHead == null){
        return null
    }
    //1、复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
    let current = pHead
    while(current !==null) {
        //复制
        let clone = new RandomListNode(0)
        clone.label = current.label
        clone.next = current.next
        //插入
        current.next = clone
        current = clone.next
    }

    //2.循环遍历处理任意指向
    current = pHead
    while(current !==null ){
        if(current.random !== null){
            //复制每个新节点的任意指向
            // clone.random = current.random.next 等价于下面写法
            clone.random = current.random.next
        }else{
            current.next.random = null
        }
        current = current.next.next
    }
    //3.拆分链表，将原链表拆分成原始链表和复制后的复杂链表，并返回复制后的head
    current = pHead
    let cloneHead = current.next
    while(current !== null){
        let cloneNode = current.next
        current.next = cloneNode.next
        cloneNode.next = cloneNode.next ==null ? null : cloneNode.next.next
        current = current.next
    }
    return cloneHead
}