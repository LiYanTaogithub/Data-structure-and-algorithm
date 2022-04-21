
// if(root == null) return 0;
// //左、右子树深度
// int left = minDepth(root.left);
// int right = minDepth(root.right);
// //左(右)子树为空，深度为右(左)子树深度+当前节点深度1
// if(left == 0) return right + 1;
// if(right == 0) return left + 1;
// //左、右子树不为空，深度为左、右子树深度较小者+当前节点深度1
// return Math.min(left, right) + 1;
/**
 * 
 * 根节点的左或右子树为空的话是构不成子树的。而最小深度是要求从根节点到子树的。当左或右子树为空时，不符合要求。
 * 
 */
var minDepth = function(root) {
    if(root == null ) return 0;
    // 左右子树的高度
    let lefthight = minDepth(root.left)
    let righthight = maxDepth(root.right)
    // 左(右)子树为空时不参与比较，深度为右(左)子树深度+当前节点深度1
    if(lefthight == 0) return righthight + 1;
    if(righthight == 0) return lefthight + 1
    // 左、右子树不为空，深度为左、右子树深度较小者+当前节点深度1
    return Math.min(lefthight, righthight) + 1
};