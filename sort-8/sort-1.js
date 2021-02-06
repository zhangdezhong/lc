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
var insertionSort = function(a, n) {
    if (n <= 1) return;
    for (let i = 1; i < n; ++i) {
        let value = a[i];
        let j = i - 1;
        for (; j >= 0; --j) {
            if (a[j] > value) {
                a[j+1] = a[j];
            } else {
                break;
            }
        }
        a[j+1] = value;
    }
}
// 合并排序
var mergeSort = function(nums) {
    if (nums.length < 2) return nums;
    var mid = nums.length >> 1;
    var left = nums.slice(0, mid);
    var right = nums.slice(mid);
    function merge(left, right) {
        var result = [];
        let lLen = left.length;
        let rLen = right.length;
        let l = 0;
        let r = 0;
        while(l < lLen && r < rLen){
            if(left[l] < right[r]){
                result.push(left[l++]);
            } else{
                result.push(right[r++]);
            }
        }  
        return result.concat(left.slice(l)).concat(right.slice(r));
    }
   return merge(mergeSort(left), mergeSort(right));
}
// 快速排序
var qsort = function(nums) {
    let randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);
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
        if(start < end) {
            let pivot = randomInteger(start, end);
            pivot = partition(nums, start, end, pivot);
            qsort(nums, start, pivot - 1);
            qsort(nums, pivot + 1, end);
        }
    }
    qsort(0, nums.length - 1);
    return nums;
};