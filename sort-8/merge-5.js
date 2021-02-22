// 88. 合并两个有序数组
// https://leetcode-cn.com/problems/merge-sorted-array/
// 面试题 10.01. 合并排序的数组
// https://leetcode-cn.com/problems/sorted-merge-lcci/
var merge = function(nums1, m, nums2, n) {
    while(m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m];
        } else {
           nums1[m + n - 1] = nums2[--n];
        }
    }
    while(n > 0) {
        nums1[n-1] = nums2[--n];
    }
};
// 252. 会议室
// https://leetcode-cn.com/problems/meeting-rooms/
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] > intervals[i + 1][0]) {
          return false;
      }
  }
  return true;
};
// 56. 合并区间
// https://leetcode-cn.com/problems/merge-intervals/
var merge = function(intervals) {
    if (intervals.length == 0) return [];
    intervals.sort((a, b) => a[0]- b[0]);
    let merged = [];
    for (let i = 0; i < intervals.length; ++i) {
        if (merged.length == 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push([intervals[i][0], intervals[i][1]]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }
    return merged;
}
// 57. 插入区间
// https://leetcode-cn.com/problems/insert-interval/
var insert = function(intervals, newInterval) {
    let res = [];
    let index = 0;
    while(index < intervals.length && intervals[index][1] < newInterval[0]){
        res.push(intervals[index++]);
    }
    while(index < intervals.length && intervals[index][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res = [...res, newInterval, ...intervals.slice(index)];
    return res;
}