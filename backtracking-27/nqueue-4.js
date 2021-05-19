// 52 N皇后 II 
// https://leetcode-cn.com/problems/n-queens-ii
// 51 N 皇后 
// https://leetcode-cn.com/problems/n-queens
// 面试题 08.12 八皇后
// https://leetcode-cn.com/problems/eight-queens-lcci
 var solveNQueens = function(n) {
    let nQueen = [];
    let res = [];
    for(let i = 0; i < n; i++) {
        nQueen[i] = '';
        for(let j = 0; j < n; j++) {
            nQueen[i] += '.';
        }
    }

    function slove(row) {
        if(row == n) {
            return res.push([...nQueen]);
        }
        for(let col = 0; col < n; col++) {
            if(isValid(row, col)) {
                nQueen[row] = replace(nQueen[row], col, 'Q');
                slove(row+1);
                nQueen[row] = replace(nQueen[row], col, '.');
            }
        }
    }

    function isValid(row, col) {
        for(let i = 0; i < n; i++) {
            if(nQueen[i][col] == 'Q') {
                return false
            }
        }
        for(let i = row - 1, j = col-1; i >= 0 && j>= 0; i--, j--) {
            if(nQueen[i][j] == 'Q') {
                return false
            }
        }
        for(let i = row - 1, j = col+1; i>=0 && j <n; i--, j++) {
            if(nQueen[i][j] == 'Q') {
                return false
            }
        }
        return true;
    }
    function replace(str, index, c) {
        return str.slice(0, index) + c + str.slice(index+1);
    }
    slove(0)
    return res;
};
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
// 37解数独 
// https://leetcode-cn.com/problems/sudoku-solver/
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