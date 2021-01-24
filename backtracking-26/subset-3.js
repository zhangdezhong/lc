// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 78. 子集   https://leetcode-cn.com/problems/subsets/
// 面试题 08.04. 幂集 https://leetcode-cn.com/problems/power-set-lcci/
var subsets = function(nums) {
    let res = [];
    function dfs(start, ans) {
        res.push(ans)
        for(let i = start; i < nums.length; i++) {
            dfs(i+1, [...ans, nums[i]]);
        }
    }
    dfs(0, []);
    return res;
};
// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 90. 子集 II https://leetcode-cn.com/problems/subsets-ii/
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    function dfs(start, ans) {
        res.push(ans)
        for(let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            ans.push(nums[i]);
            dfs(i+1, [...ans]);
            ans.pop();
        }
    }
    dfs(0, []);
    return res;
};
// 1079. 活字印刷
var numTilePossibilities = function(tiles) {
    let ans = 0;
    let visit = new Array(tiles.length).fill(0);
    tiles = tiles.split('').sort().join('');
    function dfs(str, visit){
        for (let i = 0; i < tiles.length;i++){
            if ((i > 0) && (tiles[i] == tiles[i - 1] && (visit[i - 1] == 0)))
                continue;
            if(visit[i] == 1){
                continue
            }
            visit[i] = 1;
            ans++;
            dfs(str, visit);
            visit[i] = 0;
        }
    }
    dfs(tiles,visit);
    return ans;
};