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
// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
var search = function(nums, target) {
    function helper(nums, target) {
        let i = 0, j = nums.length - 1;
        while(i <= j) {
            let m = i +  (j - i >> 1);
            if(nums[m] <= target) {
                i = m + 1;
            } else {
                j = m - 1;
            }
        }
        return i;
    }
    return helper(nums, target) - helper(nums, target - 1);
}
// 34. 在排序数组中查找元素的第一个和最后一个位置
// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
    function search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            let mid = left + (right-left >> 1);
            if(nums[mid] == target) {
                return mid;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    let left = right = search(nums, target);
    if(left != -1) {
        while(nums[left] == target) {
            left--;
        }
        while(nums[right] == target) {
            right++;
        }
        return [left+1, right-1]
    }
    return [left, right]
};