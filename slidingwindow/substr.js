// 3. 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  let rk = 0, ans = 0;
  for (let i = 0; i < s.length; ++i) {
      if (i != 0) {
          occ.delete(s[i - 1]);
      }
      while (rk < s.length && !occ.has(s[rk])) {
          occ.add(s[rk]);
          ++rk;
      }
      ans = Math.max(ans, rk - i);
  }
  return ans;
};


var minWindow = function(s, t) {
  let min = "", left = 0, right = -1;
  let map = {};
  t.split('').forEach(element => {
      if (map[element]==null) map[element] = 1;
      else map[element] = map[element] + 1;
  });
  let count = Object.keys(map).length;
  while (right <= s.length) {
      if (count == 0) {
        let current = s[left];
        if (map[current] != null) { 
          map[current]++;
        }
        if (map[current] > 0) {
          count++;
        }  
  
        let temp = s.substring(left, right+1)
        if (min == ""){
            min = temp;
        } else {
            min = min.length<temp.length?min:temp;
        }
        left++;
      } else {
          right++;
          let current = s[right];
          if (map[current] != null) {
              map[current]--;
          }
    
          if (map[current] == 0) {
            count--;
          }
      }
  }
  return min;
}