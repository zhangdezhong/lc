// 100. 相同的树
// https://leetcode-cn.com/problems/same-tree/
var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    if(p.val == q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
}
