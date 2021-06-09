// 49. 字母异位词分组
// https://leetcode-cn.com/problems/group-anagrams/
var groupAnagrams = function(strs) {
  let hash = new Map();
  for (let str of strs) {
    let countArr = new Array(26).fill(0);
    for (let charStr of str) {
      countArr[charStr.charCodeAt() - 'a'.charCodeAt()]++;
    }
    let hashCode = countArr.join('|');
    if (hash.has(hashCode)) {
      hash.get(hashCode).push(str);
    } else {
      hash.set(hashCode, [str]);
    }
  }
  return Array.from(hash.values());
};