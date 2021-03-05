// 20. 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/
function isValid(s) {
    let stack = [];
    let parenMap  = { '(': ')', '[': ']', '{': '}' };
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (parenMap[c]) {
            stack.push();
        } else if (stack.length <= 0 || stack.pop() != c) {
            return false;
        }
    }
    return stack.length <= 0;
}
// 22. 括号生成
// https://leetcode-cn.com/problems/generate-parentheses/
// 面试题 08.09. 括号
// https://leetcode-cn.com/problems/bracket-lcci/
var generateParenthesis = function(n) {
    let res = [];
    function dfs(left, right, ans) {
        if(left > n || right > n || right > left) {
            return
        }
        if(left == right && left == n) {
            res.push(ans);
            return;
        }
        dfs(left + 1, right, ans+'(');
        dfs(left, right + 1, ans+')');
    }
    function bfs(left, right) {
        let queue = [[left, right]];
        let directions = [[1, 0], [0, 1]];
        while (queue.length > 0) {
            let front = queue.shift();
            let curL = front[0];
            let curR = front[1];
            for (let direction of directions) {
                let newL = curL + direction[0];
                let newR = curR + direction[1];
                if (
                    newL > n || newR > n || newR > newL
                ) continue;
                if(newL == newR && newL == n) {
                    res.push(ans);
                    return;
                }
                queue.push([newL, newR]);
            }
        }
    }
    dfs(0,0, '')
    return res;
}