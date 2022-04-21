
// var isBalanced = function(root) {
    
//     if(root === null ) return false;
//     let balancedHeight = maxDepth(root)
    
//     if(Math.abs(balancedHeight) > 1) return false
//     return true
// };
// function maxDepth(root) {
//     return root == null ? 0 : Math.max(maxDepth(root.left) - maxDepth(root.right))
// }
var isBalanced = function(root) {
    if(root == null ) return true;
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};
function maxDepth(root) {
    return root == null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right)) +1
}