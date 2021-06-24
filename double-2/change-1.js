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