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

var pacificAlantic = function(matrix) {
    let ansList = [];
    if (!matrix || matrix.length == 0) return ansList;
    let row = matrix.length, col = matrix[0].length;
    let dirArr = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let pVisited = new Array(row);
    let aVisited = new Array(row);
    for (let i = 0; i < row; i++) {
        pVisited[i] = new Array(col).fill(false);
        aVisited[i] = new Array(col).fill(false);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || j == 0) {
                dfs(pVisited, i, j, matrix[i][j]);
            }
            if (i == row - 1 || j == col - 1) {
                dfs(aVisited, i, j, matrix[i][j]);
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (pVisited[i][j] && aVisited[i][j]) {
                ansList.push([i, j]);
            }
        }
    }
    function dfs(visited, r, c, height) {
        if (inArea(r, c) && !visited[r][c] && matrix[r][c] >= height) {
            visited[r][c] = true;
            for (let dir of dirArr) {
                dfs(visited, r + dir[0], c + dir[1], matrix[r][c]);
            }
        }

    }

    function inArea(r, c) {
        return r >=0 && r < matrix.length && c >=0 && c < matrix[0].length;
    }
    return ansList;
}