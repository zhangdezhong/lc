// 26. 删除排序数组中的重复项
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function(nums) {
    const len = nums.length
    let i = 0, j = 1
    while (i < len && j < len) {
        if (nums[i] === nums[j]) {
            j++
        } else {
            if (i + 1 < len) {
                nums[i + 1] = nums[j]
            }
            i++
        }
    } 
    return i+1
};
