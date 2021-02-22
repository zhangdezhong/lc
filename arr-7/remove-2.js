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
var findRepeatNumber = function(nums) {
    let arr = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length;  i++) {
        arr[nums[i]]++;
    }
    let max = 0, index = 0;
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] >  max) {
            index = i;
            max = arr[i]
        }
    }
    return index;
};

var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}