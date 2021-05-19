// 236. 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 剑指 Offer 68 - II. 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// 面试题 04.08 首个共同祖先 
// https://leetcode-cn.com/problems/first-common-ancestor-lcci
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left == null) return right;
    if(right == null) return left;
    return root;
};

// 235. 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
var lowestCommonAncestor = function(root, p, q) {
    if(p.val < root.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if(p.val > root.val && root.val < q.val) {
        return lowestCommonAncestor(root.right,p, q);
    }
    return root;
};