// 76. 最小覆盖子串
// https://leetcode-cn.com/problems/minimum-window-substring/
var minWindow = function(s, t) {
  let m = new Map();
	for (let c of t) {
    m.set(c, (m.get(c) || 0) + 1);
  }
	let start = 0, end = 0, counter = t.length, minStart = 0, minLen = Infinity;
	while (end < s.length) {
    let char = s[end];
    if (m.has(char)) {
      m.set(char, m.get(char) - 1);
      if (m.get(char) >= 0) {
        counter--;
      }
    }
    end++
		while (counter == 0) {
			if (end - start < minLen) {
				minStart = start;
				minEnd = end;
			}
      let char = s[start];
      if (m.has(char)) {
        m.set(char, m.get(char) + 1)
        if (m.get(char) > 0) {
          counter++;
        }
      }
      start++
		}
	}
	if (minLen == Infinity) return "";
  return s.slice(minStart, minEnd);
};
// 567. 字符串的排列
// https://leetcode-cn.com/problems/permutation-in-string/
var checkInclusion = function(s1, s2) {
    let m = new Map();
    for (let c of s1) {
      m.set(c, (m.get(c) || 0) + 1);
    }
    let start = 0, end = 0, counter = s1.length;
    while (end < s2.length) {
      let char =  s2[end];
      if (m.has(char)) {
        m.set(char, m.get(char) - 1);
        if (m.get(char) >= 0) {
          counter--;
        }
      }
      end++;
      while (counter == 0) {
        if (end - start == s1.length) {
          return true;
        }
        let char = s2[start];
        if (m.has(char)) {
          m.set(char, m.get(char) + 1)
          if (m.get(char) > 0) {
            counter++;
          }
        }
        start++
      }
    }
    return false;
};
// 438. 找到字符串中所有字母异位词
// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function(s, p) {
  let m = new Map();
	for (let c of p) {
    m.set(c, (m.get(c) || 0) + 1);
  }
  let start = 0, end = 0, counter = p.length;
  let ans = [];
  while (end < s.length) {
    let char = s[end];
    if (m.has(char)) {
      m.set(char, m.get(char) - 1);
      if (m.get(char) >= 0) {
        counter--;
      }
    }
    end++;
    while (end - start  >= p.length) {
      if (counter ==  0) {
        ans.push(start);
      }
      let char =  s[start];
      if (m.has(char)) {
        m.set(char, m.get(char) + 1)
        if (m.get(char) > 0) {
          counter++;
        }
      }
      start++;
    }
  }
  return ans;
};
// 3. 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 剑指 Offer 48. 最长不含重复字符的子字符串
// https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
var lengthOfLongestSubstring = function(s) {
  let m = new Map();
  let left = 0, right = 0;
  let res = 0;
  while (right < s.length) {
      let c = s[right];
      right++;
      m.set(c, (m.get(c) || 0) + 1);
      while (m.get(c) > 1) {
          let d = s[left];
          m.set(d, (m.get(d) || 0) - 1);
          left++;
      }
      res = Math.max(res, right - left);
  }
  return res;
};
// 209. 长度最小的子数组
// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
var minSubArrayLen = function(target, nums) {
  let ans = Infinity;
  let start = 0, end = 0;
  let sum = 0;
  while (end < nums.length) {
      sum += nums[end];
      while (sum >= target) {
          ans = Math.min(ans, end - start + 1);
          sum -= nums[start];
          start++;
      }
      end++;
  }
  return ans == Infinity ? 0 : ans;
};
// 1438. 绝对差不超过限制的最长连续子数组
// https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
var longestSubarray = function(nums, limit) {
  let queueMax = [];
  let queueMin = [];
  let start = 0, end = 0;
  let ret = 0;
  while (end < nums.length) {
    while (queueMax.length && queueMax[queueMax.length - 1] < nums[end]) {
      queueMax.pop();
    }
    while (queueMin.length && queueMin[queueMin.length - 1] > nums[end]) {
      queueMin.pop();
    }
    queueMax.push(nums[end]);
    queueMin.push(nums[end]);
    end++;
    while (queueMax.length && queueMin.length && queueMax[0] - queueMin[0] > limit) {
      if (nums[start] == queueMin[0]) {
        queueMin.shift();
      }
      if (nums[start] == queueMax[0]) {
        queueMax.shift();
      }
      start++;
    }
    ret = Math.max(ret, end - start);
  }
  return ret;
}
// 1100. 长度为 K 的无重复字符子串
// https://leetcode-cn.com/problems/find-k-length-substrings-with-no-repeated-characters/
var numKLenSubstrNoRepeats = function(S, K) {
  let start = 0, end = 0;
  let count = 0;
  let window = new Map();
  while (end < S.length) {
    let char = S[end];
    window.set(char, (window.get(char) || 0) + 1);
    end++;
    if (window.get(char) == 1 && end - start == K) {
      count++;
      window.set(S[start], window.get(S[start]) - 1);
      start++;
    }
    while (window.get(char) > 1) {
      window.set(S[start], window.get(S[start]) - 1);
      start++;
    }
  }
  return count;
};


var longestSubstring = function(s, k) {
  const n = s.length;
  return dfs(s, 0, n - 1, k);
}

const dfs = (s, start, end, k) => {
  const cnt = new Array(26).fill(0);
  for (let i = start; i <= end; i++) {
      cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  let split = 0;
  for (let i = 0; i < 26; i++) {
      if (cnt[i] > 0 && cnt[i] < k) {
          split = String.fromCharCode(i + 'a'.charCodeAt());
          break;
      }
  }
  if (split == 0) return end - start + 1;

  let i = start;
  let ret = 0;
  while (i <= end) {
      while (i <= end && s[i] === split) {
        i++;
      }
      if (i > end) break;
      let sstart = i;
      while (i <= end && s[i] !== split) {
        i++;
      }
      const length = dfs(s, sstart, i - 1, k);
      ret = Math.max(ret, length);
  }
  return ret;
};