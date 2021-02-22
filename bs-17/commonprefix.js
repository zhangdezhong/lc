// 14. 最长公共前缀
// https://leetcode-cn.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        prefix = commonPrefix(prefix, strs[i]);
        if (prefix.length == 0) {
            break;
        }
    }
    return prefix;
}

var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[j][i] != strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return "";
    function longestCommonPrefix(strs, start, end) {
        if (start == end) {
            return strs[start];
        }
        let mid = start + (end - start >> 1);
        return commonPrefix(longestCommonPrefix(strs, start, mid), longestCommonPrefix(strs, mid + 1, end));
    }    
    return longestCommonPrefix(strs, 0, strs.length - 1);
}


function commonPrefix(lcpLeft, lcpRight) {
    let minLength = Math.min(lcpLeft.length, lcpRight.length);       
    for (let i = 0; i < minLength; i++) {
        if (lcpLeft[i] != lcpRight[i]) return lcpLeft.slice(0, i);
    }
    return lcpLeft.slice(0, minLength);
}

var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return "";
    function isCommonPrefix(strs, length) {
        for (let i = 1; i < strs.length; i++) {
            for (let j = 0; j < length; j++) {
                if (str[0][j] != strs[i][j]) return false;
            }
        }
        return true;
    }
    let minLength = Infinity
    for (let str of strs) {
        minLength = Math.min(minLength, str.length);
    }
    let low = 0, high = minLength;
    while (low <= high) {
        let mid = Math.floor((high - low + 1) / 2) + low;
        if (isCommonPrefix(strs, mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return strs[0].slice(0, low);
}
