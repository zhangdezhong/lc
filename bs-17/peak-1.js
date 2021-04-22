// 162. 寻找峰值
// https://leetcode-cn.com/problems/find-peak-element/
var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + (r - l >> 1);
        if (nums[mid] > nums[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}
var findPeakElement = function(nums) {
    function helper(low, high) {
        if(low == high)  return low;
        let mid = low + (high - low >> 1);
        if(nums[mid] > nums[mid+ 1]) {
            return helper(low, mid);
        } else {
            return helper(mid + 1, high);
        }
    }
    return helper(0, nums.length - 1);
}
