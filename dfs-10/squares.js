// 279. 完全平方数
// https://leetcode-cn.com/problems/perfect-squares/
var numSquares = function(n) {
    let queue = [n];
    let visited = new Array(n + 1).fill(false);
    let step = 1;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let front = queue.shift();
            for (let j = 1; j * j <= front; j++) {
                if (j * j == front) {
                    return step;
                }
                let next = front - j * j;
                if (!visited[next]) {
                    queue.push(next);
                    visited[next] = true;
                }
            }
        }
        step++;
    }
    return 0;
};