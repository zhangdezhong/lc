// 179. 最大数
// https://leetcode-cn.com/problems/largest-number/
var largestNumber = function(nums) {
  nums.sort(function(a, b) {
      return  `${b}${a}` - `${a}${b}`;
  });
  return nums[0] ? nums.join('')  :  '0';
};
// 剑指 Offer 45. 把数组排成最小的数
// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
var minNumber = function(nums) {
  nums.sort(function(a, b) {
    return `${a}${b}` - `${b}${a}`;
  });
  return nums.join('')
}
var minNumber = function(nums) {
  if (nums.length < 2) return nums.join('');
  return quickSort(nums, 0, nums.length - 1).join('');
};
function quickSort(nums, start, end) {
  const index = partition(nums, start, end);
  if (start < index - 1) quickSort(nums, start, index - 1);
  if (index < end) quickSort(nums, index, end);
  return nums;
}
function partition(nums, l, r) {
  const p = nums[l + r >> 1];
  while (l <= r) {
    while ('' + nums[l] + p < '' + p + nums[l]) l++;
    while ('' + nums[r] + p > '' + p + nums[r]) r--;
    if (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  return l;
}