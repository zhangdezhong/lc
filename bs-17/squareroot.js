// 69. x 的平方根
// https://leetcode-cn.com/problems/sqrtx/
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let ans  = 0;
    while(left <= right) {
        let mid = left + (right - left >> 1);
        if(mid*mid <= x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans
};