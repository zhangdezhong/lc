// 31. 下一个排列
// https://leetcode-cn.com/problems/next-permutation/
var nextPermutation = function(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    function reverse(start) {
        let left = start, right = nums.length - 1;
        while (left < right) {
            swap(left, right);
            left++;
            right--;
        }
    }

    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--;
        }
        swap(i, j);
    }
    reverse(i + 1);
};
