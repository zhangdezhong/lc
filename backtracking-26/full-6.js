// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 46. 全排列 https://leetcode-cn.com/problems/permutations/
var permute = function(nums) {
    let ans = []
    const visited = new Array(nums.length).fill(false);
    function dfs(level, combine) {
        if(level == nums.length) {
            ans.push(combine);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if (visited[i]) continue
            visited[i] = true
            dfs(level+1, [...combine, nums[i]]);
            visited[i] = false;
        }
    }
    dfs(0, []);
    return ans;
};
// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
// 47. 全排列 II https://leetcode-cn.com/problems/permutations-ii/
var permuteUnique = function(nums) {
    let ans = []
    const visited = [];
    nums.sort((a,b) => a-b);
    function dfs(level, combine) {
        if(level == nums.length) {
            return ans.push(combine);
        }

        for(let i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue;
            }
            visited[i] = true;
            dfs(level+1, [...combine, nums[i]]);
            visited[i] = false;
        }
    }
    dfs(0, [])
    return ans;
};
// 剑指 Offer 38. 字符串的排列
// 面试题 08.07. 无重复字符串的排列组合
var permutation = function(s) {
    const res = []
    const visit = []
    function dfs(path) {
        if(path.length === s.length) {
            return res.push(path)
        }
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue
            visit[i] = true
            dfs(path + s[i])
            visit[i] = false
        }
    }
    dfs('')
    return [...res]
};

// 面试题 08.08. 有重复字符串的排列组合
var permutation = function(S) {
    const res = []
    const visit = []
    S = S.split('').sort().join('')
    function dfs(path) {
        if(path.length === S.length) {
            return res.push(path)
        }
        for (let i = 0; i < S.length; i++) {
            if (visit[i] || (i > 0 && S[i] == S[i - 1] && !visit[i - 1])) continue;
            visit[i] = true
            dfs(path + S[i])
            visit[i] = false
        }
    }
    dfs('')
    return [...res]
};
// 1079. 活字印刷
var numTilePossibilities = function(tiles) {
    let ans = 0;
    let visit = [];
    tiles = tiles.split('').sort().join('');
    const dfs = () => {
        for (let i = 0; i < tiles.length;i++){
            if (visit[i]|| 
                (i > 0 && tiles[i] == tiles[i - 1] && !visit[i - 1]))
                continue;
            visit[i] = true;
            ans++;
            dfs();
            visit[i] = false;
        }
    }
    dfs();
    return ans;
};
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 17. 电话号码的字母组合
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function(digits) {
    let combinations = [];
    if (!digits) {
        return combinations;
    }
    let phoneMap = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };
    function backtrack(index, combination) {
        if (index == digits.length) {
            combinations.push(combination.join(''));
            return;
        }
        let letters = phoneMap[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, [...combination, letters[i]]);
        }
    }
    backtrack(0, []);
    return combinations;
};