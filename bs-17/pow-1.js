// 50. Pow(x, n)
// https://leetcode-cn.com/problems/powx-n/
// 剑指 Offer 16. 数值的整数次方
// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
function myPow(x, n) {
    if (n < 0) return 1 / myPow(x, -n);
    if (n === 0) return 1;
    if (n % 2 === 0) return myPow(x * x, Math.floor(n / 2));
    return myPow(x * x, Math.floor(n / 2)) * x;
}