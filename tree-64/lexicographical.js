// 386. 字典序排数
// https://leetcode-cn.com/problems/lexicographical-numbers/
var lexicalOrder = function(n) {
    let res = [];
    function dfs(cur){
        if( cur > n) return;
        res.push(cur);
        for(let i = 0; i < 10; i++){
            // if ( 10 * cur + i > n) return;
            dfs( 10 * cur + i);
        }
    }
    for(let i = 1; i < 10; ++i){
      dfs(i); 
    }
    return res;
}
var lexocalOrder = function(n) {
    let list = [];
    let curr = 1;
    for(let i = 0; i < n; i++){
        list.push(curr);
        if(curr * 10 <= n){
            curr *= 10;
            continue;
        }
        if(curr >= n) {
            curr = Math.floor(curr / 10);
        }
        curr += 1;
        while(curr%10 == 0) {
            curr = Math.floor(curr / 10);
        }
    }
    return list;
}
var lexicalOrder = function(n) {
    let list = [];
    let curr = 1;
    for (let i = 1; i <= n; i++) {
        list.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else if (curr % 10 != 9 && curr + 1 <= n) {
            curr++;
        } else {
            while (Math.floor(curr / 10) % 10 == 9) {
                curr = Math.floor(curr / 10);
            }
            curr = Math.floor(curr / 10) + 1;
        }
    }
    return list;
}
