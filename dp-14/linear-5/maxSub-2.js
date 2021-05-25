// 53. 最大子序和
// https://leetcode-cn.com/problems/maximum-subarray/
var maxSubArray = function(nums) { // O(n) O(n)
  let dp = [...nums];
  let maxAns = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 1], 0);
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
};
var maxSubArray = function(nums) { // O(n) O(1)
  let dp = 0;
  let maxAns = nums[0];
  for (let i = 0; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    maxAns = Math.max(maxAns, dp);
  }
  return maxAns;
};
// 152. 乘积最大子数组
// https://leetcode-cn.com/problems/maximum-product-subarray/
var maxProduct = function(nums) {
  let maxF = [...nums];
  let minF = [...nums];
  let ans = maxF[0];
  for (let i = 1; i < nums.length; ++i) {
    maxF[i] = Math.max(maxF[i - 1] * nums[i], Math.max(nums[i], minF[i - 1] * nums[i]));
    minF[i] = Math.min(minF[i - 1] * nums[i], Math.min(nums[i], maxF[i - 1] * nums[i]));
    ans = Math.max(ans, maxF[i]);
  }
  return ans;
};
var maxProduct = function(nums) {
  let maxF = nums[0], minF = nums[0], ans = nums[0];
  let length = nums.length;
  for (let i = 1; i < length; ++i) {
    let mx = maxF, mn = minF;
    maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(maxF, ans);
  }
  return ans;
};