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