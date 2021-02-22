// 231. 2的幂
// https://leetcode-cn.com/problems/power-of-two/
var isPowerOfTwo = function(n) {
    if ( n < 1) return false;
    if((n & (n-1)) == 0) return true
    return false
};
// 191. 位1的个数
// https://leetcode-cn.com/problems/number-of-1-bits/
var hammingWeight = function(n) {
    let count = 0;
    while(n !== 0) {
        count++;
        n = n & (n-1);
    }
    return count;
};
// 136. 只出现一次的数字 其他2次
// https://leetcode-cn.com/problems/single-number/
var singleNumber = function(nums) {
    let ans = nums[0];
    if (nums.length == 1) return ans;
    for (let i = 1; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
};
// 137. 只出现一次的数字 II 其他3次
// https://leetcode-cn.com/problems/single-number-ii/
var singleNumber = function(nums) {
    let ones = 0, twos = 0;
    for(let num of nums){
        ones = ones ^ num & ~twos;
        twos = twos ^ num & ~ones;
    }
    return ones;
};
// 260. 只出现一次的数字 III
// https://leetcode-cn.com/problems/single-number-iii/
var singleNumber = function(nums) {
    let ret = 0;
    for (let n of nums) {
        ret ^= n;
    }
    let div = 1;
    while ((div & ret) == 0) {
        div <<= 1;
    }
    let a = 0, b = 0;
    for (let n of nums) {
        if ((div & n) != 0) {
            a ^= n;
        } else {
            b ^= n;
        }
    }
    return [a, b];
};