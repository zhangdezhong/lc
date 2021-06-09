// 62. 不同路径
// https://leetcode-cn.com/problems/unique-paths/
var uniquePaths = function(m, n) {
    function helper(row, col) {
        if(row === m && col === n) return 1;
        if(row > m || col > n) return 0;
        const pathsRight = helper(row, col + 1);
        const pathsDown = helper(row + 1, col);
        return pathsRight + pathsDown;
    };
    return helper(1, 1);
};
var uniquePaths = function(m, n) {
    const memo = new Array(m + 1).fill(0);
    for(let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    function helper(row, col, memo) {
        if(row === m && col === n) return 1;
        if(row > m || col > n) return 0;
        if(memo[row][col] === -1) {
            const pathsRight = helper(row, col + 1, memo);
            const pathsDown = helper(row + 1, col, memo);
            memo[row][col] = pathsRight + pathsDown;
        }
        return memo[row][col];
    };
    return helper(1, 1, memo);
};
var uniquePaths = function(m, n) {
    const dp = new Array(m + 1).fill(0);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(1);
    }
    dp[m][n] = 1;
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
        }
    }
    return dp[1][1];
}
var uniquePaths = function(m, n) {
    const dp = new Array(n + 1).fill(1);
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[col] = dp[col] + dp[col + 1];
        }
    }
    return dp[1];
}
// 64. 最小路径和
// https://leetcode-cn.com/problems/minimum-path-sum/
var minPathSum = function(grid) {
    for(let i = 1; i < grid[0].length; i++) {
        grid[0][i] = grid[0][i] + grid[0][i-1];
    }
    for(let i = 1; i < grid.length; i++) {
        grid[i][0] = grid[i][0] + grid[i-1][0];
    }
    for(let i = 1; i < grid.length; i++) {
        for(let j = 1; j < grid[0].length; j++) {
            grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j];
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};
// 63. 不同路径 II
// https://leetcode-cn.com/problems/unique-paths-ii/
var uniquePathsWithObstacles = function(obstacleGrid) {
    function helper(row, col, memo) {
        if (row < 0 || col < 0 || obstacleGrid[row][col] === 1) return 0;
        if (row === 0 && col === 0) return 1;
        const key = row + ',' + col;
        if (memo.has(key)) return memo.get(key);
        const res = helper(row - 1, col, memo) + helper(row, col - 1, memo);
        memo.set(key, res);
        return res;
    }
    return helper(obstacleGrid.length - 1, obstacleGrid[0].length - 1, new Map());
};
var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    let dp = Array(n+1).fill().map(() => Array(m+1).fill(0));
    dp[0][1] = 1;
    for(let row = 1; row <= n; row++) {
        for(let col = 1; col <= m; col++) {
            if(obstacleGrid[row-1][col-1]) continue;
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }
    return dp[n][m];
};
// 657. 机器人能否返回原点
// https://leetcode-cn.com/problems/robot-return-to-origin/
var judgeCircle = function(moves) {
    let map = {
        'R': 0,
        'L': 0,
        'U': 0,
        'D': 0
    }
    for(let m of moves) {
        map[m]++;
    }
    return  map['R'] === map['L'] && map['U'] === map['D'];
};