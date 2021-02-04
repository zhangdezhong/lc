// 617. 合并二叉树
// https://leetcode-cn.com/problems/merge-two-binary-trees/
var mergeTrees = function(t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;
    let result = new TreeNode(t1.val + t2.val);
    result.left = mergeTrees(t1.left, t2.left);
    result.right = mergeTrees(t1.right, t2.right);
    return result;
};

var mergeTrees = function(t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;
    t1.val += t2.val;
    var stack = [[t1, t2]];
    while (stack.length) {
        const [p, q] = stack.shift();
        if (p.left && q.left) {
            p.left.val += q.left.val
            stack.push([p.left, q.left]);
        } else if (!p.left) {
          p.left = q.left;
        } else if (!q.left) {
          q.left = p.left;
        }
        if (p.right && q.right) {
            p.right.val += q.right.val;
            stack.push([p.right, q.right]);
        } else if (!p.right) {
          p.right = q.right;
        } else if (!q.right) {
          q.right = p.right;
        }
    }
    return t1;
}