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
var isSameTree = function(p, q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    let stack_p = [p];       
    let stack_q = [q];
    while (stack_p.length && stack_q.length) {
        let pn = stack_p.pop() ;
        let qn = stack_q.pop() ;	    	
        if (pn.val != qn.val) return false ;
        if (pn.right != null) stack_p.push(pn.right) ;
        if (qn.right != null) stack_q.push(qn.right) ;
        if (stack_p.length != stack_q.length) return false ;
        if (pn.left != null) stack_p.push(pn.left) ;	    	 	    	 
        if (qn.left != null) stack_q.push(qn.left) ;
        if (stack_p.length != stack_q.length) return false ;
    }		     
    return stack_p.length == stack_q.length;
}
// 572. 另一个树的子树
// https://leetcode-cn.com/problems/subtree-of-another-tree/
// 剑指 Offer 26. 树的子结构
// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
var isSubtree = function(s, t) {
    if (s == null) return false;
    if (isSameTree(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
}
// 993. 二叉树的堂兄弟节点
// https://leetcode-cn.com/problems/cousins-in-binary-tree/
var isCousins = function(root, x, y) {
    let depth = new Map();
    let parent = new Map();
    function dfs(root, par) {
        if (!root) return;
        depth.set(root.val, par != null ? 1 + depth.get(par.val) : 0);
        parent.set(root.val, par);
        dfs(root.left, root);
        dfs(root.right, root);
    }
    dfs(root, null);
    return (depth.get(x) == depth.get(y) && parent.get(x) != parent.get(y));
};
// 1315. 祖父节点值为偶数的节点和
// https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent/
var sumEvenGrandparent = function(root) {
    if (!root) return 0;
    let ans = 0;
    function dfs(grandparent, parent, node) {
        if(!node) return;
        if(grandparent && (grandparent.val % 2) == 0) {
            ans += node.val;
        }
        dfs(parent, node, node.left);
        dfs(parent, node, node.right);
    }
    dfs(null, null, root);
    return ans;
};