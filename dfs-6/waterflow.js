// 417. 太平洋大西洋水流问题
// https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
var pacificAtlantic = function(matrix) {
    let res = [];
    if (!matrix.length) return res;
    let m = matrix.length, n = matrix[0].length;
    let visited = new Array(m);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < m; i++) {
        dfs(i, 0, -Infinity, 1);
        dfs(i, n - 1, -Infinity, 2);
    }
    for (let i = 0; i < n; i++) {
        dfs(0, i, -Infinity, 1);
        dfs(m - 1, i, -Infinity, 2);
    }


    function dfs(x, y, pre, preval){
        if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length  
                || matrix[x][y] < pre || (visited[x][y] & preval) == preval) return;
        visited[x][y] |= preval;
        if (visited[x][y] == 3) res.push([x, y]);
        dfs(x + 1, y, matrix[x][y], visited[x][y]); 
        dfs(x - 1, y, matrix[x][y], visited[x][y]);
        dfs(x, y + 1, matrix[x][y], visited[x][y]);
        dfs(x, y - 1, matrix[x][y], visited[x][y]);
    }
    return res;
}