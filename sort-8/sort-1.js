// 912. 排序数组
// https://leetcode-cn.com/problems/sort-an-array/
// 冒泡排序
var bubbleSort = function(a, n) {
    if (n <= 1) return;
    for (let i = 0; i < n; ++i) {
        let flag = false;
        for (let j = 0; j < n - i - 1; ++j) {
            if (a[j] > a[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
}
// 插入排序
var insertionSort = function(nums) {
    if (nums.length <= 1) return;
    for (let i = 1; i < nums.length; ++i) {
        let tmp = nums[i];
        let j = i - 1;
        while(j >= 0) {
            if (tmp < nums[j]) {
                nums[j + 1] = nums[j];
            } else {
                break;
            }
            j--;
        }
        nums[j + 1] = value;
    }
}
// 合并排序
var mergeSort = function(nums) {
    let tmp = new Array(nums.length);
    split(nums, 0, nums.length - 1, tmp);
    return nums;
}
function split(nums, left, right, temp) {
    if (left == right) return 0;
    let mid = left + (right - left >> 1);
    split(nums, left, mid, temp);
    split(nums, mid + 1, right, temp);
    if (nums[mid] <= nums[mid + 1]) return;
    merge(nums, left, mid, right, temp);
}
function merge(nums, left, mid, right, temp) {
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    let i = left;
    let j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i == mid + 1) {
            nums[k] = temp[j];
            j++;
        } else if (j == right + 1) {
            nums[k] = temp[i];
            i++;
        } else if (temp[i] <= temp[j]) {
            nums[k] = temp[i];
            i++;
        } else {
            nums[k] = temp[j];
            j++;
        }
    }
}
// 快速排序
var qsort = function(nums) {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]]
    }
    function partition(arr, start, end, pivot) {
        swap(arr, end, pivot);
        let i = start - 1;
        for(let j = start; j < end; j++) {
            if(arr[j] < arr[end]) {
                i++;
                swap(arr, i, j);
            }
        }
        i++;
        swap(arr, i, end);
        return i;
    }
    function qsort(start, end) {
        if (start == end) return;
        let pivot = randomInteger(start, end);
        pivot = partition(nums, start, end, pivot);
        qsort(nums, start, pivot - 1);
        qsort(nums, pivot + 1, end);
    }
    qsort(0, nums.length - 1);
    return nums;
};