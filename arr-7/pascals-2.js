// 118. 杨辉三角
// https://leetcode-cn.com/problems/pascals-triangle/
function generate(numRows) {
  let pascal = [];
  for (let i = 0; i < numRows; i++) {
    pascal[i] = [1];
    for (let j = 1; j < i; j++) {
      pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
    }
    pascal[i][i] = 1;
  }
  return pascal;
};

// 119. 杨辉三角 II
// https://leetcode-cn.com/problems/pascals-triangle-ii/
function getRow(rowIndex) {
  let res = [];
  for (let i = 0; i <= rowIndex; i++) {
    res[0] = 1;
    for (let j = i - 1; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
    }
    res[i] = 1;
  }
  return res;
};