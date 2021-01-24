// 329. 矩阵中的最长递增路径
// https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
const longestIncreasingPath = (matrix) => {
    if(!matrix || matrix.length === 0) return 0;
    const memo = new Array(matrix.length).fill(-1).map(() => new Array(matrix[0].length).fill(0));
    const dirs = [[-1, 0],[1, 0],[0, -1],[0, 1]];
    function dfs(i, j, parent) {
        if(i < 0 || i == matrix.length || j < 0 || j == matrix[0].length || matrix[i][j] <= parent) return 0;
        if(memo[i][j]) return memo[i][j];
        dirs.forEach(dir => {
            memo[i][j] = Math.max(memo[i][j], dfs(i + dir[0], j + dir[1], matrix[i][j]) + 1);
        });
        return memo[i][j];
    };
    let max = 0;
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            max = Math.max(max, dfs(row, col, -Infinity, memo) );
        }
    }
    return max;
};