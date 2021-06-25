// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
var exchange = function(nums = []) {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    while (start < end && nums[start] != 0) {
      start++;
    }
    while (start < end && nums[end] == 0) {
      end++;
    }
    [nums[start], nums[end]] = [nums[end], nums[start]];
  }
  return nums;
};
// 剑指 Offer 58 - I. 翻转单词顺序
// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
var reverseWords = function(s) {
  if (!s) return '';
  let temp = s.trim();
  let start = temp.length - 1;
  let end = temp.length - 1;
  let ans = '';
  while (start >= 0) {
    while (start >= 0 && temp[start] != ' ') {
      start--;
    }
    ans += temp.slice(start + 1, end + 1) + ' ';
    while (start >= 0 && temp[start] == ' ') {
      start--;
    }
    end = start;
  }
  return ans.trim();
};