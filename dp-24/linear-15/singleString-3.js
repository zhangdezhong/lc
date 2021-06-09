// 300. 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/
var lengthOfLIS = function(nums) { //O(n^2) O(n)
  let dp = new Array(nums.length).fill(1);
  let maxAns = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
};
// 673. 最长递增子序列的个数
// https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
var findNumberOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;
  let lengths = new Array(nums.length).fill(0);
  let counts = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (lengths[i] <= lengths[j]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[j] + 1 == lengths[i]) {
          counts[i] += counts[j];
        }
      }
    }
  }
  let longest = 0, ans = 0;
  for (let length of lengths) {
    longest = Math.max(longest, length);
  }
  for (let i = 0; i < nums.length; ++i) {
    if (lengths[i] == longest) {
      ans += counts[i];
    }
  }
  return ans;
};
// 354. 俄罗斯套娃信封问题
// https://leetcode-cn.com/problems/russian-doll-envelopes/
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) return 0;
  envelopes.sort((e1, e2) => {
    if (e1[0] !== e2[0]) {
      return e1[0] - e2[0];
    }
    return e2[1] - e1[1];
  });
  const dp = new Array(envelopes.length).fill(1);
  let maxAns = 1;
  for (let i = 1; i < envelopes.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxAns = Math.max(maxAns, dp[i]);
  }
  return maxAns;
};