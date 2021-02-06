// 98. 验证二叉搜索树
// https://leetcode-cn.com/problems/validate-binary-search-tree/
var isValidBST = function(root) {
    function checkBST(root, min, max) {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;
        let left = checkBST(root.left, min, root.val);
        let right = checkBST(root.right, root.val, max);
        return  left && right;
    }
    return checkBST(root, -Infinity, Infinity);
};
// 700. 二叉搜索树中的搜索
// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
var searchBST = function(root, val) {
    if(!root) return root;
    if(root.val == val){
        return root;
    } else  {
        return val < root.val  ? searchBST(root.left, val):searchBST(root.right, val);
    }
};
var searchBST = function(root, val) {
    while(root && root.val != val){
        root = val  < root.val ? root.left : root.right;
    }
    return root;
}
// 230. 二叉搜索树中第K小的元素
// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
// 剑指 Offer 54. 二叉搜索树的第k大节点
// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
// 小 先遍历左->右
// da 先遍历右->左
var kthSmallest = function(root, k) {
    let number = 0;
    let count = k;
    function dfs(root) {
        if (root.left != null) dfs(root.left);
        count--;
        if (count == 0) {
            number = root.val;
            return;
        }
        if (root.right != null) dfs(root.right);
    }

    dfs(root);
    return number;
};
// 270. 最接近的二叉搜索树值
// https://leetcode-cn.com/problems/closest-binary-search-tree-value/
var closestValue = function(root, target) {
    let val;
    let closestValue = root.val;
    while(root != null) {
        val = root.val;
        closestValue = Math.abs(val - target) < Math.abs(closestValue - target) ? val : closestValue;
        root = target < root.val ? root.left : root.right;
    }
    return closestValue;
};