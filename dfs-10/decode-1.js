// 394. 字符串解码
// https://leetcode-cn.com/problems/decode-string/
var decodeString = function(s) {
    let numSet = new Set(['0','1','2','3','4','5','6','7','8','9']);
    let index = 0;
    function decode(s){
        let sb = '';
        let num = 0;
        while(index < s.length) {
            let ch = s[index];
            index++;
            if (numSet.has(ch)) {
                num = num * 10 + ch * 1;
            } else if (ch == '[') {
                let innerStr = decode(s);
                while (num != 0){ 
                    sb += innerStr;
                    num--;
                }
            } else if(ch == ']') {
                break;
            } else {
                sb += ch;
            }
        }
        return sb;
    }
    return decode(s);
};

var decodeString = function(s) {
    let res = "";
    let countStack = [];
    let resStack = [];
    let idx = 0;
    let numSet = new Set(['0','1','2','3','4','5','6','7','8','9']);
    while (idx < s.length) {
        if (numSet.has(s[idx])) {
            let count = 0;
            while (numSet.has(s[idx])) {
                count = 10 * count + s[inx] * 1;
                idx++;
            }
            countStack.push(count);
        } else if (s[idx] == '[') {
            resStack.push(res);
            res = "";
            idx++;
        } else if (s[idx] == ']') {
            let temp = resStack.pop();
            let repeatTimes = countStack.pop();
            for (let i = 0; i < repeatTimes; i++) {
                temp += res;
            }
            res = temp;
            idx++;
        } else {
            res += s[idx++];
        }
    }
    return res;
}