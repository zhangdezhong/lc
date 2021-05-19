// 111. 二叉树的最小深度
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
var minDepth = function(root) {
    if(root == null) return 0;
    let min = Infinity;
    function dfs(node, level) {
        if(!node.left && !node.right) {
            min = Math.min(min, level);
        }
        node.left && dfs(node.left, level + 1);
        node.right && dfs(node.right, level + 1);
    }
    dfs(root, 1);
    return min;
};

// 104. 二叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 剑指 Offer 55 - I. 二叉树的深度
// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 559. N叉树的最大深度
// https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
var maxDepth = function(root) {
    let max = 0
    let node = root
    if(!node){
        return 0
    }
    for(let i =0;i<node.children.length;i++){
       max = Math.max(max,maxDepth(node.children[i]))
    }
    return max + 1
};

// 543. 二叉树的直径
// https://leetcode-cn.com/problems/diameter-of-binary-tree/
var diameterOfBinaryTree = function(root) {
    if (root == null) {
        return 0;
    }
    let max = 0;
    function dfs(root) {
        if (!root) {
            return 0
        }
        let leftSize = dfs(root.left);
        let rightSize = dfs(root.right);
        max = Math.max(max, leftSize + rightSize);
        return Math.max(leftSize, rightSize) + 1;
    }
    dfs(root);
    return max;
};