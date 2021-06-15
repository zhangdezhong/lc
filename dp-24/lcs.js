// 1143. 最长公共子序列
// https://leetcode-cn.com/problems/longest-common-subsequence/
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length + 1;
  let n = text2.length + 1;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
  }
  return dp[m - 1][n - 1];
};

