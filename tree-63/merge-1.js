// 617. 合并二叉树
// https://leetcode-cn.com/problems/merge-two-binary-trees/
var mergeTrees = function(t1, t2) {
  if ( t1 && t2 ) {
    let root = new TreeNode(t1.val + t2.val);
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
  } else {
    return t1 ? t1 : t2;
  }
};