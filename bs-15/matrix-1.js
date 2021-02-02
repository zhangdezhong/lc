// 74. 搜索二维矩阵
// https://leetcode-cn.com/problems/search-a-2d-matrix/
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0) return false;
        
    let low = 0;
    let high = matrix[0].length - 1;
    
    while(low >= 0 && high >= 0 && high < matrix[0].length && low < matrix.length) {
        if(matrix[low][high] == target)
            return true;
        else if(target < matrix[low][high])
            high--;
        else
            low++;
    }
    
    return false;
};
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if (m == 0) return false;
    let n = matrix[0].length;

    let left = 0, right = m * n - 1;
    let pivotIdx, pivotElement;
    while (left <= right) {
        pivotIdx = left + (right - left >> 1);
        pivotElement = matrix[ Math.floor(pivotIdx / n)][pivotIdx % n];
        if (target == pivotElement) {
            return true;
        }
        if (target < pivotElement) {
            right = pivotIdx - 1;
        } else {
            left = pivotIdx + 1;
        }
    }
    return false;
}