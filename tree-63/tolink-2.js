// 114. 二叉树展开为链表
// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
var flatten = function(root) {
    function solve(root, last)    {
        if(root == null) return last;
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
// 426. 将二叉搜索树转化为排序的双向链表
// https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
var treeToDoublyList = function(root) {
    if (!root) return null;
    let first, last;
    function helper(node) {
        if (node == null) return;
        helper(node.left);
        if (last) {
            last.right = node;
            node.left = last;
        } else {
            first = node;
        }
        last = node;
        helper(node.right);
    }
    helper(root);
    last.right = first;
    first.left = last;
    return first;
}