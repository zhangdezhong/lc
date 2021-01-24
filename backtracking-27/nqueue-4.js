var solveNQueens  = function(n)  {
    function solve(board){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] == '.'){
                    for(let c = 1; c <= 9; c++){
                        if(isValid(board, i, j, '' + c)){
                            board[i][j] = '' + c;
                            if(solve(board)) {
                                return true;
                            }  else {
                                board[i][j] = '.';
                            }
                        }
                    }
                    
                    return false;
                }
            }
        }
        return true;
    }
    function isValid(board, row, col, c) {
        for(let i = 0; i < 9; i++) {
            if(board[i][col] != '.' && board[i][col] == c) return false;
            if(board[row][i] != '.' && board[row][i] == c) return false;
            let boxi = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            let boxj = 3 * Math.floor(col / 3) + i % 3
            if(board[boxi][boxj] != '.' && board[boxi][boxj] == c) return false; 
        }
        return true;
    }
    if(board.length == 0) return;
    solve(board);
}
// 36. 有效的数独 https://leetcode-cn.com/problems/valid-sudoku/
var isValidSudoku = function(board) {
    const [rows, cols, boxes] = [[], [], []];
    for(let i = 0; i < 9; i++) {
        rows.push(new Set);
        cols.push(new Set);
    }
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            (boxes[i] || (boxes[i] = [])).push(new Set);
        }
    }

    for(let i = 0; i < 9; i ++) {
        for(let j = 0; j < 9; j ++) {
            if(board[i][j] != '.') {
                let cur = board[i][j];
                let boxi = Math.floor(i / 3);
                let boxj = Math.floor(j / 3);
                if(rows[i].has(cur) || cols[j].has(cur) || boxes[boxi][boxj].has(cur)) return false;
                else {
                    rows[i].add(cur);
                    cols[j].add(cur);
                    boxes[boxi][boxj].add(cur);
                }
            }
        }
    }
        
    return true;
}
// 37解数独 https://leetcode-cn.com/problems/sudoku-solver/
var solveSudoku = function(board) {
    function solve(board){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] == '.'){
                    for(let c = 1; c <= 9; c++){
                        if(isValid(board, i, j, '' + c)){
                            board[i][j] = '' + c;
                            if(solve(board)) {
                                return true;
                            }  else {
                                board[i][j] = '.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    function isValid(board, row, col, c) {
        for(let i = 0; i < 9; i++) {
            if(board[i][col] != '.' && board[i][col] == c) return false;
            if(board[row][i] != '.' && board[row][i] == c) return false;
            if(board[3 * Math.floor(row / 3) + Math.floor(i / 3)][ 3 * Math.floor(col / 3) + i % 3] != '.' &&
               board[3 * Math.floor(row / 3) + Math.floor(i / 3)][ 3 * Math.floor(col / 3) + i % 3] == c) return false; 
        }
        return true;
    }
    if(board.length == 0) return;
    solve(board);
}
// 679. 24 点游戏
// https://leetcode-cn.com/problems/24-game/
var judgePoint24 = function(nums) {
    nums = nums.map(num => Number(num.toFixed(4)));
    
    const computeTwoNums = (num1, num2) => {
        return [num1 + num2, num1 - num2, num2 - num1, num1 * num2, num1/num2, num2/num1];
    };
    
    function dfs(list) {
        if(list.length === 1) {
            if(Math.abs(list[0] - 24) < 0.001) return true;
            else return false;
        }
        
        for(let i = 0; i < list.length; i++) {
            for(let j = i + 1; j < list.length; j++) {
                let nextRound = [];
                for(let k = 0; k < size; k++) {
                    if(k !== i && k !== j) nextRound.push(list[k]);
                }
                for(let val of computeTwoNums(list[i], list[j])) {
                    nextRound.push(val);
                    if(dfs(nextRound)) return true;
                    else nextRound.pop();
                }
            }
        }
        return false;
    };
    
    return dfs(nums);
};