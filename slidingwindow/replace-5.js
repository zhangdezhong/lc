// 424. 替换后的最长重复字符
// https://leetcode-cn.com/problems/longest-repeating-character-replacement/
var characterReplacement = function(s, k) {
  let res = 0, maxf = 0;
  let count = new Map();
  for (let i = 0; i < s.length; i++) {
      count.set(s[i], (count.get(s[i]) || 0) + 1);
      maxf = Math.max(maxf, count.get(s[i]));
      if (res - maxf < k) {
          res++;
      } else {
          count.set(s[i - res], count.get(s[i - res]) - 1);
      }
  }
  return res;
};
// 1052. 爱生气的书店老板
// https://leetcode-cn.com/problems/grumpy-bookstore-owner/
var maxSatisfied = function(customers, grumpy, X) {
  let satisfied = 0, maxMakeSatisfied = 0;
  let winOfMakeSatisfied = 0;
  for (let i = 0; i < grumpy.length; ++i) {
      if (grumpy[i] == 0) { 
          satisfied += customers[i];
      } else { 
          winOfMakeSatisfied += customers[i];
      }
      if (i >= X) {
          winOfMakeSatisfied -= grumpy[i - X] * customers[i - X];
      }
      maxMakeSatisfied = Math.max(winOfMakeSatisfied, maxMakeSatisfied);
  }
  return satisfied + maxMakeSatisfied;
};
// 1004. 最大连续1的个数 III
// https://leetcode-cn.com/problems/max-consecutive-ones-iii/
var longestOnes = function(nums, k) {
  let max = 0;
  let start = 0, end = 0, counter = k;
  while (end < nums.length) {
      if(nums[end] == 0) {
          counter--;
      }
      end++;
      while(counter < 0) {  
          if(nums[start] == 0) {
              counter++;
          }
          start++;
      }
      max = Math.max(max, end - start);
  }
  return max;
};
// 1208. 尽可能使字符串相等
// https://leetcode-cn.com/problems/get-equal-substrings-within-budget/
var equalSubstring = function(s, t, maxCost) {
  let start = 0, end = 0, counter = maxCost;
  let maxLen = 0;
  while(end < s.length)  {
    counter -= Math.abs(s.charCodeAt(end) - t.charCodeAt(end));
    end++;
    while (counter < 0) {
      counter += Math.abs(s.charCodeAt(start) - t.charCodeAt(start));
      start++;
    }
    maxLen = Math.max(maxLen, end - start);
  }
  return maxLen;
};
// 1423. 可获得的最大点数
// https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/
var maxScore = function(cardPoints, k) {
  const windowSize = cardPoints.length - k;
  let sum = 0;
  let total = 0;
  for (let i = 0; i < cardPoints.length; i++) {
    total += cardPoints[i];
    if (i < windowSize) {
      sum += cardPoints[i];
    }
  }
  let minSum = sum;
  for (let i = windowSize; i < cardPoints.length; i++) {
      sum += cardPoints[i] - cardPoints[i - windowSize];
      minSum = Math.min(minSum, sum);
  }
  return total - minSum;
};