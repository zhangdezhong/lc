// 704. 二分查找
// https://leetcode-cn.com/problems/binary-search/
// 35. 搜索插入位置
// https://leetcode-cn.com/problems/search-insert-position/ return left;
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};