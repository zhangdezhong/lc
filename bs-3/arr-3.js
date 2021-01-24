// 167. 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(numbers, target) {
    function binarySearch(left, target) {
        let right = numbers.length;
        while(left <= right) {
            let mid = left + (right - left >> 1);
            if(numbers[mid] == target) {
                return mid;
            } else if(numbers[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    for(let i = 0; i < numbers.length; i++) {
        let mid = binarySearch(i+1, target - numbers[i]);
        if( mid != -1) {
            return [i+1, mid+1];
        }
    }
};

// 349. 两个数组的交集
// https://leetcode-cn.com/problems/intersection-of-two-arrays/
var intersection = function(nums1, nums2) {
    let set = new Set();
    nums2 = nums2.sort((a,b) => a - b);
    for(let i = 0; i < nums1.length; i++) {
        if(search(nums2, nums1[i])) {
            set.add(nums1[i]);
        }
    }
    return [...set];
};

function search(arr, target) {
    let left = 0;
    let right =  arr.length - 1;
    while(left <= right) {
        let mid = left + (right - left >> 1);
        let elem = arr[mid];
        if(elem === target) {
            return true
        } else if(elem < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}
// 33. 搜索旋转排序数组
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
var search = function(nums, target) {
    let n = nums.length;
    if (!n) {
        return -1;
    }
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = l + (r - l  >> 1);
        if (nums[mid] == target) return mid;
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};
