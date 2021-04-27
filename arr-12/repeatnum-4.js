// 剑指 Offer 03. 数组中重复的数字
// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
var findRepeatNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i) {
      if (nums[i] == nums[nums[i]]) {
        return nums[i];
      }
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
  }
  return -1;
};
// 268. 丢失的数字
// https://leetcode-cn.com/problems/missing-number/
var missingNumber = function(nums) {
  nums.push(-1);
  for (let i = 0; i < nums.length; i++) {
    while(nums[i] != -1 && i != nums[i]) {
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] != i) {
      return i;
    }
  }
  return -1;
};
// 442. 数组中重复的数据
// https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
var findDuplicates = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] != nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      res.push(nums[i]);
    }
  }
  return res;
};
// 41. 缺失的第一个正数
// https://leetcode-cn.com/problems/first-missing-positive/
var firstMissingPositive = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= len &&
      nums[i] != i + 1 &&
      nums[i] != nums[nums[i] - 1]
    ) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return len + 1;
}
// 448. 找到所有数组中消失的数字
// https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for (const num of nums) {
      const x = (num - 1) % n;
      nums[x] += n;
  }
  const ret = [];
  for (const [i, num] of nums.entries()) {
      if (num <= n) {
          ret.push(i + 1);
      }
  }
  return ret;
};