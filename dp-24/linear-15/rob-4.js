// 198. 打家劫舍
// https://leetcode-cn.com/problems/house-robber/
var rob = function(nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
var rob = function(nums) {
  if (nums.length == 1) return nums[0];
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
// 740. 删除并获得点数
// https://leetcode-cn.com/problems/delete-and-earn/
var deleteAndEarn = function(nums) {
  let maxVal = Math.max.apply(Array, nums);
  let sum = new Array(maxVal + 1).fill(0);
  for(let num of nums) {
    sum[num] += num;
  }
  return rob(sum);
};
// 213. 打家劫舍 II
// https://leetcode-cn.com/problems/house-robber-ii/
var rob = function(nums) {
  let length = nums.length;
  if (length == 1) {
    return nums[0];
  } else if (length == 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
}
function robRange(nums, start, end) {
  let first = nums[start];
  let second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}
// 1388. 3n 块披萨
// https://leetcode-cn.com/problems/pizza-with-3n-slices/
var maxSizeSlices = function(slices) {
  let v1 = slices.slice(1);
  let v1 = slices.slice(0, slices.length - 1);
  return Math.max(calculate(v1), calculate(v2));
}
function calculate(slices) {
  let n = slices.length;
  let choose = Math.floor((n + 1) / 3);
  let dp = new Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(choose + 1).fill(0);
  }
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= choose; ++j) {
      dp[i][j] = Math.max(
        dp[i - 1][j], 
        (i - 2 >= 0 ? dp[i - 2][j - 1] : 0) + slices[i - 1]
      );
    }
  }
  return dp[n][choose];
}
// 337. 打家劫舍 III
// https://leetcode-cn.com/problems/house-robber-iii/
var rob = function(root) {
  const dfs = (node) => {
    if (node === null) {
        return [0, 0];
    }
    const l = dfs(node.left);
    const r = dfs(node.right);
    const selected = node.val + l[1] + r[1];
    const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return [selected, notSelected];
  }
    
  const rootStatus = dfs(root);
  return Math.max(rootStatus[0], rootStatus[1]);
};