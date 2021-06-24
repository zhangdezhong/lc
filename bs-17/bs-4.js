// 704. 二分查找
// https://leetcode-cn.com/problems/binary-search/
// 35. 搜索插入位置
// https://leetcode-cn.com/problems/search-insert-position/ return left;
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};
// 剑指 Offer 53 - I. 在排序数组中查找数字 I
// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
var search = function(nums, target) {
    function helper(nums, target) {
        let i = 0, j = nums.length - 1;
        while(i <= j) {
            let m = i +  (j - i >> 1);
            if(nums[m] <= target) {
                i = m + 1;
            } else {
                j = m - 1;
            }
        }
        return i;
    }
    return helper(nums, target) - helper(nums, target - 1);
}
// 34. 在排序数组中查找元素的第一个和最后一个位置
// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
    return bs(nums, target) - bs(nums, target - 1);
};
function bs(nums, target) {
    let low = 0;
    let hi = nums.length - 1;
    while (low <= hi) {
      let mid = low + (hi - low >> 1);
      if (nums[mid] <= target) {
        low = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return low;
}
// 剑指 Offer 04. 二维数组中的查找
// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;
    let i = 0;
    let j = matrix[0].length - 1;
    while (i < matrix.length && j >= 0) {
        if ( matrix[i][i] == target) return true;
        else if ( matrix[i][i] > target) j--;
        else i++;
    }
    return false;
}

// 查询第一个
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (a[mid] > target) {
            end = mid - 1;
        } else if (a[mid] < target) {
            start = mid + 1;
        } else {
            if (mid == 0 || nums[mid - 1] != target) {
                return mid
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
// 查询最后一个
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (a[mid] > target) {
            end = mid - 1;
        } else if (a[mid] < target) {
            start = mid + 1;
        } else {
            if (mid == nums.length - 1 || nums[mid + 1] != target) {
                return mid
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};

// 第一个大于等于值
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (a[mid] >= target) {
            if (mid == 0 || nums[mid - 1] < target) {
                return mid
            } else {
                end = mid - 1;
            }
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

// 第一个小于等于值
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start >> 1);
        if (a[mid] > target) {
            end = mid - 1;
        } else {
            if (mid == nums.length - 1 || nums[mid + 1] > target) {
                return mid
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};