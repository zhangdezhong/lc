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