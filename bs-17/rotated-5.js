// 33. 搜索旋转排序数组
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end){
        let mid = start +  (end - start >> 1);
        if (nums[mid] == target) return mid;
    
        if (nums[start] <= nums[mid]){
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }  
        } 
    
        if (nums[mid] <= nums[end]){
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
// 81. 搜索旋转排序数组 II
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = start +  (end - start >> 1);
        if (nums[mid] == target) return true;
        if(nums[mid] > nums[end]){
            if (nums[mid] > target && nums[start] <= target) { 
                end = mid;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < nums[end]){
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid;
            }
        } else {
            end--;
        }
    }
    return false;
}
// 153. 寻找旋转排序数组中的最小值
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = start +  (end - start >> 1);
        if (nums[start] < nums[end]) return nums[start];
        if (nums[mid] >= nums[start]) {
            start = mid+1;
        } else {
            end = mid;
        }
    }
    return nums[start];
};
// 154. 寻找旋转排序数组中的最小值 II 
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
// 剑指 Offer 11. 旋转数组的最小数字
// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = start +  (end - start >> 1);
        if (nums[mid] < nums[end]) {
            end = mid;
        } else if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end--;
        }
    }
    return nums[start];
};