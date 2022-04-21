
var invertTree = function(root) {
    // 终止条件
    if(root == null ) return root
    // 保存右节点，并交换左右节点 --------》 本次递归要做什么
    let right = root.right
    root.right = root.left
    root.left = right
    // 递归
    invertTree(root.left)
    invertTree(root.right)
    // --------> 返回值
    return root
};