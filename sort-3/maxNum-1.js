// 179. 最大数
// https://leetcode-cn.com/problems/largest-number/
var largestNumber = function(nums) {
  nums.sort(function(a, b) {
      return  `${b}${a}` - `${a}${b}`;
  });
  return nums[0] ? nums.join('')  :  '0';
};

