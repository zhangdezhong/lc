// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/
// 暴力
var twoSum = function(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; ++i) {
      for (let j = i + 1; j < n; ++j) {
          if (nums[i] + nums[j] == target) {
              return [i, j];
          }
      }
  }
  return [0];
}
// hashmap
var twoSum = function(nums, target) {
  let mp = new Map();
  for(let i = 0; i < nums.length; i++) {
      let rest = target - nums[i];
      if(mp.has(rest)) {
          return [mp.get(rest), i]
      }
      mp.set(nums[i], i);
  }
};