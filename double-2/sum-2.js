// 15. 三数之和
// https://leetcode-cn.com/problems/3sum/
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = []; 
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 &&  nums[i] == nums[i-1]) continue;
        let lo = i+1, hi = nums.length-1, sum = 0 - nums[i];
        while (lo < hi) {
            if (nums[lo] + nums[hi] == sum) {
                res.push([nums[i], nums[lo], nums[hi]]);
                while (lo < hi && nums[lo] == nums[lo+1]) lo++;
                while (lo < hi && nums[hi] == nums[hi-1]) hi--;
                lo++; hi--;
            } else if (nums[lo] + nums[hi] < sum) { 
                lo++;
            } else {
                hi--;
            }
        }
    }
    return res;
};
// 16. 最接近的三数之和
// https://leetcode-cn.com/problems/3sum-closest/
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length; i++) {
        let start = i + 1, end = nums.length - 1;
        while(start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            if(Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
            }
            sum > target ? end-- : start++;
        }
    }
    return ans;
};
// 18. 四数之和
// https://leetcode-cn.com/problems/4sum/
let fourSum = function(nums, target) {
    let quadruplets = [];
    if (!nums == null || nums.length < 4) return quadruplets;
    nums.sort((a, b) => a - b);
    let length = nums.length;
    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) continue;
        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) continue;
            let left = j + 1, right = length - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return quadruplets;
}


var compress = function(chars) {
    if (!chars) return chars;
    let count = 1;
    let ch = chars[0];
    let ans = [];
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == ch) {
            count++;
        } else {
            ans.push(ch);
            if (count != 1) {
                ans.push(`${count}`);
            }
            ch = chars[i];
            count = 1;
        }
    }
    ans.push(ch, `${count}`);
    return ans;
};

compress(["a","a","b","b","c","c","c"]);