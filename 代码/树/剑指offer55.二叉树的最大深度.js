
var maxDepth = function(root) {
    // 递归终止的条件
    if(root == null) return 0
    
    let leftDep = maxDepth(root.left)
    let rightDep = maxDepth(root.right)
    
    return Math.max(leftDep, rightDep)+1
};