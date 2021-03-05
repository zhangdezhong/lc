// 417. 太平洋大西洋水流问题
// https://leetcode-cn.com/problems/pacific-atlantic-water-flow/
var pacificAtlantic = function(matrix) {
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
                // bfs(pVisited, i, j);
            }
            if (i == row - 1 || j == col - 1) {
                dfs(aVisited, i, j, matrix[i][j]);
                // bfs(aVisited, i, j);
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
        if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length || visited[r][c] || matrix[r][c] < height) {
            return
        }
        visited[r][c] = true;
        for (let dir of dirArr) {
            dfs(visited, r + dir[0], c + dir[1], matrix[r][c]);
        }
    }
    function bfs(visited, r, c) {
        let queue = [[r, c]];
        visited[r][c] = true;
        while(queue.length > 0) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            for (let dir of dirArr) {
                let nextX = curX + dir[0];
                let nextY = curY + dir[1];
                if (
                    nextX < 0 || nextX >= matrix.length ||
                    nextY < 0 || nextY >= matrix[0].length ||
                    visited[nextX][nextY] || matrix[nextX][nextY] < matrix[curX][curY]
                ) continue;
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY]);
            }
        }
    }
    return ansList;
}
// 130. 被围绕的区域
// https://leetcode-cn.com/problems/surrounded-regions/
var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    let disrections = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    for (let i = 0; i < rows; i++) {
        bfs(i, 0);
        bfs(i, cols - 1);
    }
    for (let i = 0; i < cols; i++) {
        bfs(0, i);
        bfs(rows - 1, i);
    }
    function dfs(i, j) {
        if (
            i < 0 || i >= rows || 
            j < 0 || j >= cols || 
            board[i][j] == 'X' || board[i][j] == 'A'
        ) return;
        board[i][j] = 'A';
        for (let disrection of disrections) {
            dfs(i + disrection[0], j + disrection[1]);
        }
    }
    function bfs(i, j) {
        if (board[i][j] == 'X') return;
        let queue = [[i, j]];
        board[i][j] = 'A';
        while (queue.length > 0) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            for (let disrection of disrections) {
                let newX = curX + disrection[0];
                let newY = curY + disrection[1];
                if (
                    newX < 0 || newX >= rows ||
                    newY < 0 || newY >= cols ||
                    board[newX][newY] == 'A' || board[newX][newY] == 'X'
                ) continue;
                queue.push([newX, newY]);
                board[newX][newY] = 'A';
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] == 'A') {
                board[i][j] = 'O';
            }
        }
    }
};
// 1020. 飞地的数量
// https://leetcode-cn.com/problems/number-of-enclaves/
var numEnclaves = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    function dfs(i, j) {
        if (
            i < 0 || i >= rows ||
            j < 0 || j >= cols || grid[i][j] != 1
        ) return;
        grid[i][j] = 0;
        for (let direction of directions) {
            dfs(i + direction[0], j + direction[1]);
        }
    }
    function bfs(i, j) {
        if (grid[i][j] != 1) return;
        let queue = [[i, j]];
        grid[i][j] = 0;
        while (queue.length > 0) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            for (let direction of directions) {
                let newX = direction[0] + curX;
                let newY = direction[1] + curY;
                if (
                    newX < 0 || newX >= rows ||
                    newY < 0 || newY >= cols ||
                    grid[newX][newY] != 1
                ) continue;
                grid[newX][newY] = 0;
                queue.push([newX, newY]);
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        bfs(i,  0);
        bfs(i, cols - 1);
    }
    for (let i = 0; i < cols; i++) {
        bfs(0, i);
        bfs(rows - 1, i);
    }
    let count = 0;
    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(grid[i][j] == 1) {
                count++;
            }
        }
    }
    return count;
};
// 1034. 边框着色
// https://leetcode-cn.com/problems/coloring-a-border/
var colorBorder = function(grid, r0, c0, color) {
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        visited[i] = new Array(grid[0].length).fill(false);
    }
    function dfs(i, j, pre) {
        if (
            i < 0 || i >= grid.length ||
            j < 0 || j >= grid[0].length ||
            (grid[i][j] != pre && !visited[i][j])
        ) return 0;
        if (visited[i][j]) return 1;
        visited[i][j] = true;
        let count = 0
        for (let direction of directions) {
            count += dfs(i + direction[0], j + direction[1], pre);
        }
        if (count < 4) grid[i][j] = color;
        return 1;
    }
    dfs(r0, c0, grid[r0][c0]);
    return grid;
};
// 733. 图像渲染
// https://leetcode-cn.com/problems/flood-fill/
var floodFill = function(image, sr, sc, newColor) {
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    if (image[sr][sc] == newColor) return image;
    function dfs(i, j, pre) {
        if (
            i < 0 || i >= image.length ||
            j < 0 || j >= image[0].length || image[i][j] != pre
        ) return;
        image[i][j] = newColor;
        for (let direction of directions) {
            dfs(i + direction[0], j + direction[1], pre);
        }
    }
    function bfs(i, j, pre) {
        let queue = [[i, j]];
        image[i][j] = newColor;
        while (queue.length) {
            let front = queue.shift();
            let curX = front[0];
            let curY = front[1];
            for (let direction of directions) {
                let newX = curX + direction[0];
                let newY = curY + direction[1];
                if (
                    newX < 0 || newX >= image.length ||
                    newY < 0 || newY >= image[0].length ||
                    image[newX][newY] != pre
                ) continue;
                image[newX][newY] = newColor;
                queue.push([newX, newY]);
            }
        }
    }
    bfs(sr, sc, image[sr][sc]);
    // dfs(sr, sc, image[sr][sc]);
    return image;
};

function get(obj, str) {
    function dfs(obj, arr) {
       let ele = arr.pop();
       if (!obj || !obj[ele]) return undefined;
       if (arr.length == 0) return obj[ele];
       return dfs(obj[ele], arr);
    }
    return dfs(obj, str.split('.').reverse());
}