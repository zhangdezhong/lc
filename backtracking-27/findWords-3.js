// 79. 单词搜索 https://leetcode-cn.com/problems/word-search/
// 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
// 剑指 Offer 12. 矩阵中的路径
// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
var exist = function(board, word) {
    function dfs(i, j, index) {
        if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] != word[index]) {
            return false;
        }
        if (index == word.length - 1) {
            return true;
        }
        let tmp = board[i][j];
        board[i][j] = '.';
        let res = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) ||
                dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);
        board[i][j] = tmp;
        return res;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0))
                return true;
        }
    }
    return false;
}

// 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。
// https://leetcode-cn.com/problems/word-search-ii/
// trie树优化
var findWords = function(board, words) {
    let res = []
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(exist(board, word)) {
            res.push(word);
        }
    }
    return res;
};