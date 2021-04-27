// 124. 二叉树中的最大路径和
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
var maxPathSum = function( root) {
    let maxValue = -Infinity;
    function maxPathDown(root) {
        if (!root) {
            return 0;
        }
        let left = Math.max(0, maxPathDown(root.left));
        let right = Math.max(0, maxPathDown(root.right));
        maxValue = Math.max(maxValue, left + right + node.val);
        return Math.max(left, right) + node.val;
    }
    maxPathDown(root);
    return maxValue;
}
// 112. 路径总和 根节点到叶子节点的路径
// https://leetcode-cn.com/problems/path-sum/
var hasPathSum = function(root, sum) {
    let res = false;
    function dfs(root, ans) {
        if(!root) return;
        ans += root.val
        if(!root.left && !root.right) {
            if(sum == ans) res =  true;
            return;
        }
        dfs(root.left, ans);
        dfs(root.right, ans);
    }
    dfs(root, 0);
    return res;
};
// 113. 路径总和 II 根节点到叶子节点的路径
// https://leetcode-cn.com/problems/path-sum/
// 剑指 Offer 34. 二叉树中和为某一值的路径
// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
var pathSum = function(root, sum) {
    let res = [];
    function dfs(root, ans, path) {
        if(!root) return;
        ans += root.val
        path.push(root.val);
        if(!root.left && !root.right) {
            if(sum == ans) {
                res.push(path);
            }
            return;
        }
        dfs(root.left, ans, [...path]);
        dfs(root.right, ans, [...path]);
    }
    dfs(root, 0, []);
    return res;
};
// 437. 路径总和 III 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的
// https://leetcode-cn.com/problems/path-sum-iii/
// 面试题 04.12. 求和路径
// https://leetcode-cn.com/problems/paths-with-sum-lcci/
var pathSum = function(root, sum) {
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);
    function dfs(node,  currSum) {
        if (!node) return 0;
        // 2.本层要做的事情
        let res = 0;
        // 当前路径上的和
        currSum += node.val;

        res += prefixSumCount.get(currSum - sum) || 0;
        prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1);

        res += dfs(node.left,  currSum);
        res += dfs(node.right, currSum);

        prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1);
        return res;
    }
    return dfs(root, 0);
}
// 1367. 二叉树中的列表
// https://leetcode-cn.com/problems/linked-list-in-binary-tree/
var isSubPath = function(head, root) {
    function equal(root, head) {
        if(head === null) return true;
        if(root === null || root.val !== head.val) {
            return false;
        }
        return equal(root.left, head.next) || equal(root.right, head.next);
    }
    if(root === null) return false;
    if(head.val === root.val && equal(root, head)) {
        return true;
    }
    return isSubPath(head, root.left) || isSubPath(head, root.right)
};

// 666. 路径和 IV
// https://leetcode-cn.com/problems/path-sum-iv/
var pathSum = function(nums) {
    let ans = 0;
    let values = new Map();
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        values.set(Math.floor(num / 10), num % 10);
    }

    function dfs(node, sum) {
        if (!values.has(node)) return;
        sum += values.get(node);

        let depth = Math.floor(node / 10), pos = node % 10;
        let left = (depth + 1) * 10 + 2 * pos - 1;
        let right = left + 1;

        if (!values.has(left) && !values.has(right)) {
            ans += sum;
        } else {
            dfs(left, sum);
            dfs(right, sum);
        }
    }

    dfs(Math.floor(nums[0] / 10), 0);
    return ans;
};
// 1022. 从根到叶的二进制数之和
// https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
var sumRootToLeaf = function(root) {
    let ans = 0;
    function dfs(root, s) {
        if(!root) return;
        s = s * 2 + root.val
        if (!root.left && !root.right) {
            ans += s
        }
        dfs(root.left, s)
        dfs(root.right, s)
    }
    dfs(root, 0);
    return ans
};

// 404. 左叶子之和
// https://leetcode-cn.com/problems/sum-of-left-leaves/
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    function dfs(root, isleft) {
        if(!root) return;
        if(!root.left && !root.right && isleft) {
            sum += root.val;
        }
        dfs(root.left, true);
        dfs(root.right, false);
    }
    dfs(root, false);
    return sum;
};
// 129. 求根到叶子节点数字之和
// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
var sumNumbers = function(root) {
    if(!root) return 0;
    let pathArr = []
    function dps(root, path) {
        if(!root) return;
        path += root.val;
        if(!root.left && !root.right) {
            pathArr.push(path*1);
        }
        dps(root.left, path);
        dps(root.right, path);
    }
    dps(root, '');
    return pathArr.reduce((a, b) =>  a + b);
};
// 637. 二叉树的层平均值
// https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
var averageOfLevels = function(root) {
    if(!root) return [];
    function dfs(root, level, ans) {
        if(!root) return ans;
        if(!ans[level]) ans[level] = [];
        ans[level].push(root.val);
        dfs(root.left, level + 1, ans);
        dfs(root.right, level + 1, ans);
        return ans;
    }
    return dfs(root, 0, []).map(arr => {
        let sum = arr.reduce((a, b) => a + b);
        return sum/arr.length
    });
};
// 257. 二叉树的所有路径
// https://leetcode-cn.com/problems/binary-tree-paths/
var binaryTreePaths = function(root) {
    if(!root) return [];
    let result = [];
    function dfs(root, path) {
        if(!root) return;
        if(!root.left && !root.right) {
            path += root.val;
            result.push(path);
        }
        path += root.val + '->';
        dfs(root.left, path);
        dfs(root.right, path);
    }
    dfs(root, '');
    return result;
};