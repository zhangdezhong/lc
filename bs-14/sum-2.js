// 167. 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// 剑指 Offer 57. 和为s的两个数字
// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        let mid = binarySearch(i+1, target - numbers[i]);
        if( mid != -1) {
            return [i+1, mid+1];
        }
    }
    function binarySearch(left, target) {
        let right = numbers.length;
        while(left <= right) {
            let mid = left + (right - left >> 1);
            if(numbers[mid] == target) {
                return mid;
            } else if(numbers[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
};
// 653. 两数之和 IV - 输入 BST
// https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
var findTarget = function(root, k) {
    let ans = [];
    function inorder(root) {
        if(!root) return;
        inorder(root.left);
        ans.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    let l = 0, r = ans.length - 1;
    while (l < r) {
        let sum = ans[l] + ans[r];
        if (sum == k) {
            return true;
        } else if (sum < k) {
            l++;
        } else {
            r--;
        }
    }
    return false;
};

var findTarget = function(root, k) {
    let set = new Set();
    function find(root, k, set) {
        if (root == null) return false;
        if (set.has(k - root.val)) return true;
        set.add(root.val);
        return find(root.left, k, set) || find(root.right, k, set);
    }
    return find(root, k, set);
}