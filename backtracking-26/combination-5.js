// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 77. 组合
// https://leetcode-cn.com/problems/combinations/
var combine = function(n, k) {
    const ans = [];
    function dfs (cur, temp) {
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        if (temp.length == k) {
            ans.push(temp);
            return;
        }
        dfs(cur + 1, [...temp, cur]);
        dfs(cur + 1, temp);
    }
    dfs(1, []);
    return ans;
};
// 39. 组合总和
// https://leetcode-cn.com/problems/combination-sum/
var combinationSum = function(candidates, target) {
    const result = [];
    function dfs(start, arr, sum) {
        if (sum == target) {
            return result.push([...arr]);
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            dfs(i, arr, sum + candidates[i]);
            arr.pop();
        }
    };
    dfs(0, [], 0);
    return result;
};
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
// 40. 组合总和 II
// https://leetcode-cn.com/problems/combination-sum-ii/
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b ); // 升序排序
    const res = [];
    function dfs(start, temp, sum) {
        if (sum > target) {
            return;
        }
        if (sum == target) {
            res.push(temp);
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i - 1] == candidates[i] && i - 1 >= start) {
                continue;
            }
            dfs(i + 1, [...ans, candidates[i]], sum + candidates[i]);
        }
    };

    dfs(0, [], 0);
    return res;
};
// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
// 216. 组合总和 III
// https://leetcode-cn.com/problems/combination-sum-iii/
var combinationSum3 = function(k, n) {
    const res = []; 
    function dfs(start, temp, sum) {
        if (temp.length > k) {
            return;
        }
        if (temp.length == k && sum == n) {
            res.push(temp);
        }
        for (let i = start; i <= 9; i++) {
            // temp.push(i);
            // dfs(i + 1, [...temp], sum + i);
            // temp.pop();
            dfs(i + 1, [...temp, i], sum + i);
        }
    };
    dfs(1, [], 0);
    return res;
};
// 377. 组合总和 Ⅳ
// https://leetcode-cn.com/problems/combination-sum-iv/
var combinationSum4 = function(nums, target) {
    const dp = [1]
    nums.sort((a, b) => a - b)
    for (let i = 1; i <= target; i++) {
        dp[i] = 0
        for (let num of nums) {
            if (i < num) break
            dp[i] += dp[i - num]
        }
    }
    return dp[target]
};