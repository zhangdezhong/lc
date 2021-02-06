// 509. 斐波那契数
// https://leetcode-cn.com/problems/fibonacci-number/
// 递归
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
// 记忆递归
function fib(n) {
  function helper(n, memo) {  
    if(n == 0) return 0; // 70, 剑指 Offer 10- II 去掉这一行
    if(memo[n]) return memo[n];
    return memo[n] = helper(n-1,memo) + helper(n-2,memo);
  }
  return helper(n, [0, 1]);
}
// dp
function fib(n) {
  let dp = [0, 1]; // 70, 剑指 Offer 10- II dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// 优化空间dp
function fib() {
  let constant = 1000000007;
  if (n < 2) return n;
  let fisrt = 0; //70, 剑指 Offer 10- II first = 1;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    [fisrt, second] = [second%constant,(fisrt+ second)%constant]
  }
  return second;
}
// 746. 使用最小花费爬楼梯
// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function(cost) {
  let f1 = cost[0];
  let f2 = cost[1];
  for (let i = 2; i < cost.length; i++) {
      [f1, f2] = [f2, cost[i] + Math.min(f1, f2)];
  }
  return Math.min(f1, f2);
};


