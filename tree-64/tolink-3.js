// 114. 二叉树展开为链表
// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
var flatten = function(root) {
    function solve(root, last)    {
        if(!root) return last;
        root.right = solve(root.left, solve(root.right, last));
        root.left = null;
        return root;
    }
    solve(root, null);
}

var flatten = function(root) {
    if(root == null) return;
    while(root != null){
        if(root.left == null){
            root = root.right;
            continue;
        }
        let predecessor = root.left;
        while(predecessor != null) {
            if(predecessor.right == null) break;
            predecessor = predecessor.right;
        }
        predecessor.right = root.right;
        root.right = root.left;
        root.left = null;
    }
}
// 897. 递增顺序搜索树
// https://leetcode-cn.com/problems/increasing-order-search-tree/
var increasingBST = function(root) {
    let ans = new TreeNode(0);
    let cur = ans;
    inorder(root);
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        node.left = null;
        cur.right = node;
        cur = node;
        inorder(node.right);
    }
    return ans.right;
};
// 426. 将二叉搜索树转化为排序的双向链表
// https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
var treeToDoublyList = function(root) {
    if (!root) return null;
    let head, tail;
    function helper(root) {
        if (!root) return root;
        helper(root.left);
        if (tail) {
          tail.right = root;
          root.left = tail;
        } else {
          head = root;
        }
        tail = root;
        helper(root.right);
    }
    helper(root);
    tail.right = head;
    head.left = tail;
    return head;
}