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
  let dp = nums[0];
  let maxAns = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = nums[i] + Math.max(dp, 0);
    maxAns = Math.max(maxAns, dp);
  }
  return maxAns;
};
// 918. 环形子数组的最大和
// https://leetcode-cn.com/problems/maximum-sum-circular-subarray/
var maxSubarraySumCircular = function(nums) {
  let dp = [...nums];
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    dp[i] = nums[i] + Math.max(dp[i - 1], 0);
    max = Math.max(dp[i], max);
  }
  let min = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    dp[i] = nums[i] + Math.min(0, dp[i - 1]);
    min = Math.min(dp[i], min);
  }
  return Math.max(sum - min, max);
};
var maxSubarraySumCircular = function(nums) {
  let dp = nums[0];
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    dp = nums[i] + Math.max(dp, 0);
    max = Math.max(dp, max);
  }
  let min = 0;
  dp = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    dp = nums[i] + Math.min(0, dp);
    min = Math.min(dp, min);
  }
  return Math.max(sum - min, max);
};
// 面试题 17.24. 最大子矩阵
// https://leetcode-cn.com/problems/max-submatrix-lcci/
var getMaxMatrix = function(matrix) {
  let ans = [];
  let max = -Infinity;
  for(let startRow = 0; startRow < matrix.length; startRow++) {
    let partialSum = new Array(matrix[0].length).fill(0);
    for(let endRow = startRow; endRow < matrix.length; endRow++) {
      let sum = 0, startCol = 0;
      for(let endCol = 0; endCol < matrix[0].length; endCol++) {
        partialSum[endCol] += matrix[endRow][endCol];
        sum += partialSum[endCol];
        if(max < sum){
          max = sum;
          ans = [startRow, startCol, endRow, endCol];
        }
        if(sum < 0){
          sum = 0;
          startCol = endCol + 1;
        }
      }
    }
  }
  return ans;
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