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
  if (n < 2) return n;
  let fisrt = 0; //70, 剑指 Offer 10- II first = 1;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    [fisrt, second] = [second,fisrt+ second]
  }
  return second;
}


