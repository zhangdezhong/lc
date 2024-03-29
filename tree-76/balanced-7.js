// 110. 平衡二叉树
// https://leetcode-cn.com/problems/balanced-binary-tree/
// 面试题 04.04. 检查平衡性
// https://leetcode-cn.com/problems/check-balance-lcci/
// 剑指 Offer 55 - II. 平衡二叉树
// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
var isBalanced = function(root) {
    function depth (root) {
        if (!root) return 0;
        return Math.max (depth(root.left), depth (root.right)) + 1;
    }
    if (!root) return true;
    
    let leftHeight = depth(root.left);
    let rightHeight = depth(root.right);
    
    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
var isBalanced = function(root) {
    function getDepth (root) {
        if(root == null) return 0;
        let left = getDepth(root.left);
        if(left != -1){
            let right = getDepth(root.right);
            if(right != -1){
                return Math.abs(left - right) <= 1 ? 1 + Math.max(left, right) : -1;
            }
        }
        return -1;
    }
    return getDepth (root) != -1;
}
// 101. 对称二叉树
// https://leetcode-cn.com/problems/symmetric-tree/
// 剑指 Offer 28. 对称的二叉树
// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
var isSymmetric = function(root) {
    if (!root) return true;
    function helper(left, right){
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val == right.val) {
            return helper(left.left, right.right) && helper(left.right, right.left);;
        }
        return false;
    }
    return helper(root.left, root.right);
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
// 226. 翻转二叉树
// https://leetcode-cn.com/problems/invert-binary-tree/
var mirrorTree = function(root) {
    if (!root) return null;
    let res = new TreeNode(root.val);
    res.left = mirrorTree(root.right);
    res.right = mirrorTree(root.left);
    return res;
};