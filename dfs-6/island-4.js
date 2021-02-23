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
    let visited = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        visited[i] = new Array(grid[0].length).fill(false);
    }
    function dfs(i, j) {
        if (i < 0 || i == grid.length || 
            j < 0 || j == grid[0].length || 
            grid[i][j] == '0' || visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        for (let k =  0; k <  4; k++) {
            dfs(i+d[k], j+d[k+1]);
        }
    }
    function bfs(i, j) {
        let queue = [[i, j]];
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        visited[i][j] = true;
        while(queue.length > 0) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            for (let direction of directions) {
                let newX = direction[0] + curX;
                let newY = direction[1] + curY;
                if (
                    newX < 0 || newX >= grid.length ||
                    newY < 0 || newY >= grid[0].length ||
                    visited[newX][newY] || grid[newX][newY] == '0'
                ) continue;
                visited[newX][newY] = true;
                queue.push([newX, newY]);
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1' && !visited[i][j]) {
                islands++;
                dfs(i, j);
                // bfs(i, j);
            }
        }
    }
    return islands;
};
// 1254. 统计封闭岛屿的数目
// https://leetcode-cn.com/problems/number-of-closed-islands/
var closedIsland = function(grid) {
    let res = 0;
    function dfs(i, j){
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return false;
        if (g[i][j] == 1) return true;
        g[i][j] = 1;
        let l1 = dfs(i+1, j);
        let l2 = dfs(i-1, j);
        let l3 = dfs(i, j-1);
        let l4 = dfs(i, j+1);
        return l1 && l2 && l3 && l4;
    }
    function bfs(i, j) {
        let ret = 1;
        let queue = [[i, j]];
        while (queue.length) {
            let pos = queue.shift();
            grid[pos[0]][pos[1]] = 1;
            let vr = [0, 1, 0, -1];
            let vc = [1, 0, -1, 0];
            for (let i = 0; i < 4; i++) {
                let curr = pos[0] + vr[i];
                let curc = pos[1] + vc[i];
                if (curr < 0 || curr >= grid.length || curc < 0 || curc >= grid[0].length) {
                    ret = 0;
                    continue;
                }
                if (grid[curr][curc] == 0) {
                    queue.push([curr, curc]);
                }
            }
        }
        return ret;        
    }
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 0 && dfs(grid, i, j)){
                res++;
            }
        }
    }
    return res;
};
// 695. 岛屿的最大面积
// https://leetcode-cn.com/problems/max-area-of-island/
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Array(row);
    for(let i = 0; i < row; i++) {
        visited[i] = new Array(col).fill(false);
    }
    function bfs(i, j) {
        let count = 0;
        let queue = [[i, j]];
        visited[i][j] = true;
        while (queue.length) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            count++;
            for (let direction of directions) {
                let newX = curX + direction[0];
                let newY = curY + direction[1];
                if (newX < 0 || newX >= row || newY < 0 || newY >= col) continue;
                if (
                    grid[newX][newY] == 1 && 
                    !visited[newX][newY]
                ) {
                    queue.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }
        }
        return count;
    }
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