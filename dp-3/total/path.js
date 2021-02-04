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