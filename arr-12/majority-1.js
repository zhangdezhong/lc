// 169. 多数元素
// https://leetcode-cn.com/problems/majority-element/
// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
// hash
var majorityElement = function(nums) {
  let counts = new Map();
  let majority = 0, cnt = 0;
  for (let num of nums) {
      counts.set(num, (counts.get(num) || 0) + 1);
      if (counts.get(num) > cnt) {
          majority = num;
          cnt = counts.get(num);
      }
  }
  return majority;
}
// sort
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[nums.length >> 1];
}
// f分治
var majorityElement = function(inums) {
  return majorityElementRec(nums, 0, nums.length - 1);
}
function majorityElementRec(nums, lo, hi) {
  if (lo == hi) return nums[lo];
  let mid = lo + (hi - lo >> 1);
  let left = majorityElementRec(nums, lo, mid);
  let right = majorityElementRec(nums, mid + 1, hi);
  if (left == right) return left;
  let leftCount = countInRange(nums, left, lo, hi);
  let rightCount = countInRange(nums, right, lo, hi);
  return leftCount > rightCount ? left : right;
}

function countInRange(nums, num, lo, hi) {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] == num) {
      count++;
    }
  }
  return count;
}
// Boyer-Moore 投票算法
var majorityElement = function(nums) {
  let count = 0;
  let candidate;
  for (let num of nums) {
      if (count == 0) {
          candidate = num;
      }
      count += (num == candidate) ? 1 : -1;
  }
  return candidate;
};