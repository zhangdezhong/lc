// 93. 复原IP地址 https://leetcode-cn.com/problems/restore-ip-addresses/
var restoreIpAddresses = function(s) {
    let solutions = []
    function dfs(idx, restored, count) {
        if (count > 4) return;
        if (count == 4 && idx == s.length) {
            solutions.add(restored);
        }
        
        for (let i =  1; i < 4; i++) {
            if ( idx + i > s.length) break;
            let tmp = s.substring(idx, idx + i);
            if ( (tmp.startsWith("0") && tmp.length>1) || 
                 (i == 3 && parseInt(tmp) >= 256) ) continue;
            let dot = '.'
            if(count == 3 ) dot = ''
            dfs(idx + i, restored + tmp + dot, count + 1);
        }
    }
    dfs(0, "", 0);
    return solutions;
};

// 131. 分割回文串
// https://leetcode-cn.com/problems/palindrome-partitioning/
var partition = function(s) {
    function dfs(start, tempList) {
        if(start == s.length) return list.push(tempList);
        for(let i = start; i < s.length; i++){        
            if(isPal(start, i)) {
                dfs(i + 1, [...tempList, s.substring(start, i+1)]);
            }
        }
    }
    function isPal(l, r) {
        while(l <= r){
            if(s[l] !== s[r]) return false;
            l++; r--;
        }
        return true;
    }
    let list = [];
    dfs(0, []);
    return list;
}

// 401. 二进制手表
// https://leetcode-cn.com/problems/binary-watch/
var readBinaryWatch = function(num) {
    let res = [];
    let hash= [1, 2, 4, 8, 1, 2, 4, 8, 16,32];
    function backtrack(level, start, time) {
        if(time[0] > 11 || time[1] > 59) {
            return
        }

        if(level == num) {
            let temp_minute= `${time[1]}`;
            if(temp_minute.length==1) {
                temp_minute = `0${temp_minute}`
            }
            res.push(`${time[0]}:${temp_minute}`);
            return;
        }

        for(let i = start; i < 10; i++) {
            let store = [...time];
            if(i < 4) {
                time[0] += hash[i];
            } else {
                time[1] += hash[i];
            }
            backtrack(level + 1, i+1 ,[...time]);
            time = [...store];
        }
    }
    backtrack(0, 0, [0, 0]);
    return res;
};


// 10. 正则表达式匹配