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