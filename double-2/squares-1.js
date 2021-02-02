// 977. 有序数组的平方
// https://leetcode-cn.com/problems/squares-of-a-sorted-array/
var sortedSquares = function(A) {
    let result = new Array(A.length).fill(0);
    let i = 0;
    let j = A.length - 1;
    for (let p = A.length - 1; p >= 0; p--) {
        if (Math.abs(A[i]) > Math.abs(A[j])) {
            result[p] = A[i] * A[i];
            i++;
        } else {
            result[p] = A[j] * A[j];
            j--;
        }
    }
    return result;
}