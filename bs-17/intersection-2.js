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
// 350. 两个数组的交集 II
// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
var intersect = function(nums1, nums2) {
    let dict =  {};
    let res = [];
    for(let i = 0; i < nums1.length; i++) {
        if (dict[nums1[i]]) {
            dict[nums1[i]]++;
        } else {
            dict[nums1[i]] = 1;
        }
    }
    for(let i = 0; i < nums2.length; i++) {
        if(--dict[nums2[i]] >= 0) {
            res.push(nums2[i]);
        }
    }
        
    return res;
}

var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let intersection = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            index2++;
        } else {
            intersection.push(nums1[index1]);
            index1++;
            index2++;
        }
    }
    return intersection;
}