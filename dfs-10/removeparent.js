
var removeInvalidParentheses = function(s) {
    let ans = [];
    remove(s, ans, 0, 0, ['(', ')']);
    return ans;
}

function remove(s, ans, last_i, last_j, par) {
    for (let stack = 0, i = last_i; i < s.length; ++i) {
        if (s[i] == par[0]) stack++;
        if (s[i] == par[1]) stack--;
        if (stack >= 0) continue;
        for (let j = last_j; j <= i; ++j)
            if (s[j] == par[1] && (j == last_j || s[j - 1] != par[1]))
                remove(s.substring(0, j) + s.substring(j + 1, s.length), ans, i, j, par);
        return;
    }
    let reversed = s.split('').reverse().join('');
    if (par[0] == '(') // finished left to right
        remove(reversed, ans, 0, 0, [')', '(']);
    else // finished right to left
        ans.add(reversed);
}