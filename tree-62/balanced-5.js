// 110. 平衡二叉树
// https://leetcode-cn.com/problems/balanced-binary-tree/
// 面试题 04.04. 检查平衡性
// https://leetcode-cn.com/problems/check-balance-lcci/
var isBalanced = function(root) {
    function depth (root) {
        if (!root) return 0;
        return Math.max (depth(root.left), depth (root.right)) + 1;
    }
    if (!root) return true;
    
    let left=depth(root.left);
    let right=depth(root.right);
    
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
var isBalanced = function(root) {
    function dfsHeight (root) {
        if (root == null) return 0;
        let leftHeight = dfsHeight(root.left);
        if (leftHeight == -1) return -1;
        let rightHeight = dfsHeight (root.right);
        if (rightHeight == -1) return -1;
        if (Math.abs(leftHeight - rightHeight) > 1)  return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return dfsHeight (root) != -1;
}
// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/
// 剑指 Offer 28. 对称的二叉树
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
var isSymmetric = function(root) {
    function isSymmetricHelp(left, right){
        if(left == null || right == null) {
            return left==right;
        }
        if(left.val != right.val) {
            return false;
        }
        return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);
    }
    return root==null || isSymmetricHelp(root.left, root.right);
};
function isSymmetric(root) {
    if (root == null) return true;
    let stack = [root.left, root.right];
    while (stack.length) {
        let right = stack.pop();
        let left = stack.pop();
        if (right == null && left == null) continue;
        if (right == null || left == null || right.val != left.val) return false;
        stack.push(right.left);
        stack.push(left.right);
        stack.push(right.right);
        stack.push(left.left);
    }
    return true;
}
// 剑指 Offer 27. 二叉树的镜像
// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
var mirrorTree = function(root) {
    if(!root || root.length ==  0) return root;
    [root.left, root.right] = [root.right, root.left]
    // const leftCopy = root.left;
    // root.left = root.right;
    // root.right = leftCopy;
    
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};