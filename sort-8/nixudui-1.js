// 剑指 Offer 51. 数组中的逆序对
// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
var reversePairs = function(nums) {
  if (nums.length < 2)  return 0;
  return mergeSort(nums, 0, nums.length - 1, []);
}
function mergeSort(nums, left, right, temp) {
  if (left == right) return 0;
  let mid = left + (right - left >> 1);
  let leftPairs = mergeSort(nums, left, mid, temp);
  let rightPairs = mergeSort(nums, mid + 1, right, temp);
  // if (nums[mid] <= nums[mid + 1]) return leftPairs + rightPairs;
  let crossPairs = mergeAndCount(nums, left, mid, right, temp);
  return leftPairs + rightPairs + crossPairs;
}

function mergeAndCount(nums, left, mid, right, temp) {
  for (let i = left; i <= right; i++) {
      temp[i] = nums[i];
  }
  let i = left;
  let j = mid + 1;
  let count = 0;
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
        count += (mid - i + 1);
      }
  }
  return count;
}
// 493. 翻转对
// https://leetcode-cn.com/problems/reverse-pairs/
var reversePairs = function(nums) {
  return split(nums, 0, nums.length - 1, []);
};

function split(nums, start, end, temp) {
  if (start == end) return 0;
  let mid = start + (end - start >> 1);
  let leftCount = split(nums, start, mid, temp);
  let rightCount = split(nums, mid + 1, end, temp);
  let count = merge(nums, start, mid, end, temp);
  return leftCount +  rightCount + count;
}

function merge(nums, start, mid, end, temp) {
  for (let i = start; i <= end; i++) {
    temp[i] = nums[i];
  }
  let i = start;
  let j = mid + 1;
  let count = 0;
  while (i <= mid && j <= end) {
      if (nums[i] > 2 * nums[j]) {
          count += mid - i + 1;
          j++;
      } else {
          i++;
      }
  }
  i = start;
  j = mid + 1;
  for (let k = start; k <= end; k++) {
    if (i == mid + 1) {
      nums[k] = temp[j];
      j++;
    } else if (j == end + 1) {
      nums[k] = temp[i];
      i++;
    } else if(temp[i] <= temp[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
    }
  }
  return count;
}