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
// 剑指 Offer 57. 和为s的两个数字
// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
// 一个递增排序的数组
var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let sum = nums[start] + nums[end];
        if (sum == target) return [nums[start], nums[end]];
        if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
};
// 剑指 Offer 57 - II. 和为s的连续正数序列
// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/
var findContinuousSequence = function(target) {
    let left = 1;
    let right = 2;
    let res = [];
    while (left < right) {
        let sum = (left + right) * (right - left + 1) / 2;
        if (sum == target){
            let arr = [];
            for (let k = left; k <= right; k++) {
                arr.push(k);
            }
            res.push(arr);
            left++;
        } else if (sum < target) {
            right++;
        } else {
            left++;
        }
    }
    return res;
};
