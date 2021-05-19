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
function qsort(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return;
    let piovt = Math.floor(left + Math.random() * (right - left + 1));
    piovt = partition(nums, left, right, piovt);
    qsort(nums, left, piovt - 1);
    qsort(nums, piovt + 1, right);
}
let swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
function partition(nums, left, end, piovt) {
    swap(nums, end, piovt);
    let i = left - 1;
    for (let j = left; j < end; j++) {
        if (nums[j] < nums[end]) {
            i++;
            swap(nums, i, j);
        }
    }
    i++;
    swap(nums, i, end);
    return i;
}
// 面试题 17.14. 最小K个数
// https://leetcode-cn.com/problems/smallest-k-lcci/
var getLeastNumbers = function(arr, k) {
    randomizedSelected(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
};
  
function randomizedSelected(arr, left, right, k) {
    if (left >= right) return;
    let piovt = Math.floor(Math.random() * (right - left + 1) +  left);
    piovt = partition(arr, left, right, piovt);
    let num = piovt - left + 1;
    if (k == num) {
        return;
    } else if (k < num) {
        randomizedSelected(arr, left, piovt - 1, k);
    } else {
        randomizedSelected(arr, piovt + 1, right, k - num);
    }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
    function partition(arr, left, right, piovt) {
    swap(arr, right, piovt);
    let i = left - 1;
    for (let j = left; j <= right; j++) {
        if (arr[j] < arr[right]) {
        i++;
        swap(arr, i, j);
        }
    }
    i++;
    swap(arr, i, right);
    return i;
}