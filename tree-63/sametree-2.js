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

