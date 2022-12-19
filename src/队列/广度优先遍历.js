function BFC(root, target){
    let queue = []  // 核心数据结构
    let used = new Set() // 存放所有访问过的节点
    queue.push(root)
    used.add(root)
    let step = 0 // 记录遍历的层次
    // 当这一层的节点列表不为空，就要一直遍历
    while(!queue.length){
        let size = queue.length
              /* 遍历这一层的节点 */
        for(let i =0; i < size; i++){
            let cur = queue.shift()
            /* 划重点：这里判断是否到达终点 */
            if(cur === target) return step
            // 把每个节点的下一层节点加入到列表
            for(Node next : the neighbors of cur){
                if(next is not in used){
                    queue.push(next)
                    used.add(next)
                }
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}