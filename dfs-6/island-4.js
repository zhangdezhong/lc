// 200. 岛屿数量
// https://leetcode-cn.com/problems/number-of-islands/
/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。
*/
var numIslands = function(grid) {
    let islands = 0;
    let d = [ 0, 1, 0, -1 ];
    function dfs(i, j) {
        if (i < 0 || i == grid.length || 
            j < 0 || j == grid[0].length || 
            grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        for (let k =  0; k <  4; k++) {
            dfs(i+d[k], j+d[k+1]);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                islands++;
                dfs(i, j);
            }
        }
    }
    return islands;
};

// 695. 岛屿的最大面积
// https://leetcode-cn.com/problems/max-area-of-island/
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    function dfs(i,  j) {
        if( i <0 || i == grid.length || j < 0 || j == grid[0].length || grid[i][j] == 0) {
            return 0;
        }
        grid[i][j] = 0;
        return 1 + dfs(i-1, j) + dfs(i+1, j) + dfs(i, j-1) + dfs(i, j+1);
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0;  j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }
    return maxArea;
};

// 1254. 统计封闭岛屿的数目
// https://leetcode-cn.com/problems/number-of-closed-islands/
var closedIsland = function(grid) {
    let res = 0;
    function dfs(i, j){
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length){
            return false;
        }
        if (g[i][j] == 1){
            return true;
        }
        g[i][j] = 1;
        let d1 = dfs(i+1, j);
        let d2 = dfs(i-1, j);
        let d3 = dfs(i, j-1);
        let d4 = dfs(i, j+1);
        return d1 && d2 && d3 && d4;
    }
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 0){
                res += dfs(grid, i, j) ? 1 : 0;
            }
        }
    }
    return res;
};
// 463. 岛屿的周长
// https://leetcode-cn.com/problems/island-perimeter/
var islandPerimeter = function(grid) {
    let islands = 0, neighbours = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                islands++;
                if (i < grid.length - 1 && grid[i + 1][j] == 1) {
                    neighbours++; 
                }
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1) {
                    neighbours++;
                }
            }
        }
    }
    return islands * 4 - neighbours * 2;
};