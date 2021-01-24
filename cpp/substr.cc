//
//  substr.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/9/30.
//

#include <stdio.h>
#include <iostream>
#include <string.h>
#include <vector>

using namespace std;

class SubStr {

public:
    int countSubstrings(string s) {
        int n = int(s.size());
        if (0 == n) return 0;

        int ans = n;
        bool dp[n][n];
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }

        for (int j = 1; j < n; j++) {
            for (int i = 0; i < j; i++) {
                dp[i][j] = false;
                if(s[i] == s[j] && (j-i <3 || dp[i+1][j-1])) {
                    dp[i][j] = true;
                }
                if (dp[i][j]) { ans++; }
            }
        }

        return ans;
    }
    // 回文字串最大长度  回溯算法
    int DP(string s, int i, int j) {
        if (i > j) return 0;
        if (i == j) return 1;

        if (s[i] == s[j]) {
            return DP(s, i + 1, j - 1) + 2;
        }

        return max(DP(s, i + 1, j), DP(s, i, j - 1));
    }
    // 回文字串最大长度  动态规划
    int longestPalindromeSubseq(string s) {
        int n = static_cast<int>(s.size());
        if (0 == n) return 0;

        int dp[n][n];memset(dp, 0, sizeof(dp));
        for (int i = 0; i < n; i++) dp[i][i] = 1; // 初始化状态

        for (int i = n-1; i >= 0; i--) {
            for (int j = i+1; j < n; j++) {
                if (s[i]==s[j]) {
                    dp[i][j] = 2 + dp[i+1][j-1];
                } else {
                    dp[i][j] = max(dp[i+1][j], dp[i][j-1]); // 作出进一步决策
                }
            }
        }

        return dp[0][n-1]; // 输出答案
    }
    // 回文字串最大长度 动态规划 空间优化
    int longestPalindromeSubseq2(string s) {
        int n = s.size();
        int dp[n];
        for(int i = 0; i < n; i++) {
            dp[i] = 1;
        }

        for (int i = n - 1; i >= 0; --i) {
            int prev = 0;
            for (int j = i + 1; j < n; ++j) {
                int temp = dp[j];
                if (s[i] == s[j]) {
                    dp[j] = 2 + prev;
                } else {
                    dp[j] = max(dp[j], dp[j - 1]);
                }
                prev = temp;
            }
        }
        return dp[n - 1];
    }
    // 最长回文字串 
    string longestPalindrome(string s) {
        int length = s.size();
        if(length < 2) return s;
        vector<vector<int> > res(length, vector<int>(length, 0));
        for(int i = 0; i < length; i++) {
            res[i][i] = 1;
        }
        int start = 0;//记录最大回文子串的开始位置
        int maxlength = 1;//记录最大回文子串的长度
        for(int i = 1; i < length; i++) {//两层for循环遍历每一个位置到另一个位置的情况
            for(int j = 0; j < i; j++) {
                if(s[i]==s[j] && (i - j < 3 || res[j+1][i-1])) {
                    res[j][i] = 1;
                }
                if(res[j][i] && i - j + 1 > maxlength) {
                    maxlength = i - j + 1;
                    start = j;
                }
            }
        }
        return s.substr(start,maxlength);
    }
    
    pair<int, int> expandAroundCenter(const string& s, int left, int right) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            --left;
            ++right;
        }
        return {left + 1, right - 1};
    }

    string longestPalindrome2(string s) {
        int start = 0, end = 0;
        for (int i = 0; i < s.size(); ++i) {
            auto [left1, right1] = expandAroundCenter(s, i, i);
            auto [left2, right2] = expandAroundCenter(s, i, i + 1);
            if (right1 - left1 > end - start) {
                start = left1;
                end = right1;
            }
            if (right2 - left2 > end - start) {
                start = left2;
                end = right2;
            }
        }
        return s.substr(start, end - start + 1);
    }

    //1143. 最长公共子序列
    int DP(string text1, string text2, int i, int j) {
        if (i == -1 || j == -1) {
            return 0;
        }
        // 相等即找到一个lcs的字符，加1后继续向前查找
        if (text1[i] == text2[j]) {
            return DP(text1, text2, i - 1, j - 1) + 1;
        }

        return max(DP(text1, text2, i - 1, j), DP(text1, text2,i, j - 1));
    }
    //1143. 最长公共子序列
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size(), m = text2.size();
        int dp[n+1][m+1]; memset(dp, 0, sizeof(dp)); // 多一行一列为了 i, j=1 时有 base value

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (text2[j-1] == text1[i-1]) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        return dp[n][m];
    }
    //跳跃游戏

    bool canJump(vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) { return true; }

        bool dp[n]; memset(dp, 0, sizeof(dp));
        dp[0] = true; // 初始化状态

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) { // j < i
                if (dp[j] && j + nums[j] >= i) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n - 1]; // 输出答案
    }
//    1, If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
//    2, If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
//    3, If p.charAt(j) == '*':
//       here are two sub conditions:
//                   1   if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
//                   2   if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
//                                  dp[i][j] = dp[i-1][j]    //in this case, a* counts as multiple a
//                               or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
//                               or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
    bool isMatch(string s, string p) {
        bool dp[s.size()+1][p.size()+1];
        memset(dp, false, sizeof(dp));
        dp[0][0] = true;
        for (int i = 0; i < int(p.size()); i++) {
            if (p[i] == '*' && dp[0][i-1]) {
                dp[0][i+1] = true;
            }
        }
        for (int i = 0 ; i < int(s.size()); i++) {
            for (int j = 0; j < int(p.size()); j++) {
                if (p[j] == '.' || p[j] == s[i]) {
                    dp[i+1][j+1] = dp[i][j];
                }
                if (p[j] == '*') {
                    if (p[j-1] != s[i] && p[j-1] != '.') {
                        dp[i+1][j+1] = dp[i+1][j-1];
                    } else {
                        dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]);
                    }
                }
            }
        }
        return dp[s.length()][p.length()];
    }
};
