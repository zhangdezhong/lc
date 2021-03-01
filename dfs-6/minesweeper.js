// 529. 扫雷游戏
// https://leetcode-cn.com/problems/minesweeper/
var updateBoard = function(board, click) {
    let x = click[0], y = click[1];
    let dir_x = [0, 1, 0, -1, 1, 1, -1, -1];
    let dir_y = [1, 0, -1, 0, 1, -1, 1, -1];
    if (board[x][y] == 'M') {
        board[x][y] = 'X';
        return board;
    }
    function bfs(sx, sy) {
        let queue = [];
        let vis = new Array(board.length);
        for (let i = 0; i < board.length; i++) {
            vis[i] = new Array(board[0].length).fill(false);
        }
        queue.push([sx, sy]);
        vis[sx][sy] = true;
        while (queue.length) {
            let pos = queue.shift();
            let cnt = 0, x = pos[0], y = pos[1];
            for (let i = 0; i < 8; ++i) {
                let tx = x + dir_x[i];
                let ty = y + dir_y[i];
                if (tx < 0 || tx >= board.length || ty < 0 || ty >= board[0].length) {
                    continue;
                }
                if (board[tx][ty] == 'M') {
                    ++cnt;
                }
            }
            if (cnt > 0) {
                board[x][y] = `${cnt}`;
                continue;
            }
            board[x][y] = 'B';
            for (let i = 0; i < 8; ++i) {
                let tx = x + dir_x[i];
                let ty = y + dir_y[i];
                if (tx < 0 || tx >= board.length || ty < 0 || ty >= board[0].length || board[tx][ty] != 'E' || vis[tx][ty]) {
                    continue;
                }
                queue.push([tx, ty]);
                vis[tx][ty] = true;
            }
        }
    }
    function dfs(x, y) {
        let cnt = 0;
        for (let i = 0; i < 8; ++i) {
            let tx = x + dir_x[i];
            let ty = y + dir_y[i];
            if (tx < 0 || tx >= board.length || ty < 0 || ty >= board[0].length) {
                continue;
            }
            cnt += board[tx][ty] == 'M';
        }
        if (cnt > 0) {
            board[x][y] = `${cnt}`;
            return;
        }
        board[x][y] = 'B';
        for (let i = 0; i < 8; ++i) {
            let tx = x + dir_x[i];
            let ty = y + dir_y[i];
            if (tx < 0 || tx >= board.length || ty < 0 || ty >= board[0].length || board[tx][ty] != 'E') {
                continue;
            }
            dfs(tx, ty);
        }
    }
    dfs(x, y);
    return board;
};