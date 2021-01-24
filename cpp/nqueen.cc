//
//  nqueen.cc
//  addon
//
//  Created by zhang.dezhong on 2020/10/15.
//

#include <stdio.h>
#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

class NQueen {
    public:
        vector<vector<string> > res;
        vector<vector<string> > solveNQueens(int n) {
            vector<string> nQueens(n, string(n, '.'));
            solveNQueens(nQueens, 0, n);
            return res;
        }
    private:
        void solveNQueens(vector<string> &nQueens, int row, int &n) {
            if (row == n) {
                res.push_back(nQueens);
                return;
            }
            for (int col = 0; col != n; ++col)
                if (isValid(nQueens, row, col, n)) {
                    nQueens[row][col] = 'Q';
                    solveNQueens(nQueens, row + 1, n);
                    nQueens[row][col] = '.';
                }
        }
        bool isValid(vector<string> &nQueens, int row, int col, int &n) {
            //check if the column had a queen before.
            for (int i = 0; i != row; ++i)
                if (nQueens[i][col] == 'Q')
                    return false;
            //check if the 45° diagonal had a queen before.
            for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j)
                if (nQueens[i][j] == 'Q')
                    return false;
            //check if the 135° diagonal had a queen before.
            for (int i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j)
                if (nQueens[i][j] == 'Q')
                    return false;
            return true;
        }
};


class Sudoku {
    public:
            // 36. 有效的数独 https://leetcode-cn.com/problems/valid-sudoku/
            bool isValidSudoku(vector<vector<char>>& board) {
                vector<unordered_set<int>> rows(9), cols(9);
                vector<vector<unordered_set<int>>> boxes(3, vector<unordered_set<int>>(3));
                for(int i = 0; i < 9; i ++)
                    for(int j = 0; j < 9; j ++)
                        if(board[i][j] != '.') {
                            int cur = board[i][j];
                            if(rows[i].count(cur) || cols[j].count(cur) || boxes[i / 3][j / 3].count(cur)) return false;
                            else {
                                rows[i].insert(cur);
                                cols[j].insert(cur);
                                boxes[i / 3][j / 3].insert(cur);
                            }
                        }
                return true;
            }
            // 37解数独 https://leetcode-cn.com/problems/sudoku-solver/
            void solveSudoku(vector<vector<char> >& board) {
                if(board.size() == 0)
                    return;
                solve(board);
            }
    private:
            bool solve(vector<vector<char>>& board){
                for(int i = 0; i < int(board.size()); i++) {
                    for(int j = 0; j < int(board[0].size()); j++) {
                        if(board[i][j] == '.') {
                            for(char c = '1'; c <= '9'; c++) {
                                if(isValid(board, i, j, c)) {
                                    board[i][j] = c;
                                    if(solve(board)) return true;
                                    else board[i][j] = '.';
                                }
                            }
                            return false;
                        }
                    }
                }
                return true;
            }
        
            bool isValid(vector<vector<char>>& board, int row, int col, char c){
                for(int i = 0; i < 9; i++) {
                    if(board[i][col] != '.' && board[i][col] == c) return false; //check row
                    if(board[row][i] != '.' && board[row][i] == c) return false; //check column
                    if(board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] != '.' &&
                       board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false; //check 3*3 block
                }
                return true;
            }
};







