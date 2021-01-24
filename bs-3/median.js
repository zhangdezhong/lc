// 4. 寻找两个正序数组的中位数
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function(nums1, nums2) {
    let N1 = nums1.length;
    let N2 = nums2.length;
    if (N1 < N2) return findMedianSortedArrays(nums2, nums1);

    let lo = 0, hi = N2 * 2;
    while (lo <= hi) {
        let mid2 = lo + hi >> 1;
        let mid1 = N1 + N2 - mid2;

        let L1 = mid1 == 0 ? -Infinity : nums1[mid1 - 1 >> 1];
        let L2 = mid2 == 0 ? -Infinity : nums2[mid2 - 1 >> 1];
        let R1 = mid1 == N1 * 2 ? Infinity : nums1[mid1 >> 1];
        let R2 = mid2 == N2 * 2 ? Infinity : nums2[mid2 >> 1];

        if (L1 > R2) {
            lo = mid2 + 1;	
        } else if (L2 > R1) {
            hi = mid2 - 1;
        } else {
            return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
        }
    }
    return -1;
}


var findMin = function(nums) {
    let start = 0,
        end = nums.length - 1;
    while (start < end) {
        if (nums[start] < nums[end])
            return nums[start];
        let mid = start + end >> 1;
        if (nums[mid] >= nums[start]) {
            start = mid+1;
        } else {
            end = mid;
        }
    }
    return nums[start];
};


var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + r >> 1;
        if (nums[mid] > nums[mid + 1])
            r = mid;
        else
            l = mid + 1;
    }
    return l;
}


var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
        
    let low = 0;
    let high = matrix[0].length - 1;
    
    while(low >= 0 && high >= 0 && high < matrix[0].length && low < matrix.length) {
        if(matrix[low][high] == target)
            return true;
        else if(target < matrix[low][high])
            high--;
        else
            low++;
    }
    
    return false;
}