// 121. 买卖股票的最佳时机
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
  let minprice = Infinity;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
};
// 122. 买卖股票的最佳时机 II
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
var maxProfit = function(prices) {
  let dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(2).fill(0);
  }
  dp[0][1] = -prices[0];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0]
};
// 123. 买卖股票的最佳时机 III
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var maxProfit = function(prices) {
  let buy1 = -prices[0], buy2 = -prices[0];
  let sell1 = 0, sell2 = 0;
  for (let i = 1; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};
// 188. 买卖股票的最佳时机 IV
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
var maxProfit = function(k, prices) {
  const buy = new Array(k + 1).fill(0);
  const sell = new Array(k + 1).fill(0);
  buy[0] = -prices[0];
  for (let i = 1; i < k + 1; ++i) {
    buy[i] = sell[i] = -Number.MAX_VALUE;
  }
  for (let i = 1; i < prices.length; ++i) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    for (let j = 1; j < k + 1; ++j) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]); 
    }
  }
  return Math.max(...sell);
};
// 309. 最佳买卖股票时机含冷冻期
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
var maxProfit = function(prices) {
  let dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(3).fill(0);
  }
  dp[0][0] = -prices[0];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2]);
};
// 714. 买卖股票的最佳时机含手续费
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
var maxProfit = function(prices, fee) {
  let dp = new Array(prices.length);
  for (let i = 0; i < prices.length; i++) {
    dp[i] = new Array(2).fill(0);
  }
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
};