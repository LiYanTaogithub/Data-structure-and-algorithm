var queue1 = []
var queue2 = []
function push (node) {
    //推入的时候要判断哪个队列中有值，就推入那个队列中
    if(queue1.length !== 0) {
        queue1.push(node)
    }else {
        queue2.push(node)
    }
}
//假设栈现在有三个元素a,b,c，我们现在要删除c
function pop () {
    //弹出的时候判断哪个队列中有值，则先将该队列中的n-1个值弹出并存入另一个队列中，然后弹出最后一个值则为结果
    if(queue1.length === 0) {
        while(queue2.length !== 1) {
            queue1.push(queue2.pop()) //依次从queue2中删除元素a,b并且加入到queue1中
        }
        return queue2.pop() //最后再删除
    }else {
        while(queue1.length !== 1) {
            queue2.push(queue1.pop())
        }
        return queue1.pop()
    }
}