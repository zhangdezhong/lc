//
//  subarr.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/10/9.
//
#include <stdio.h>
#include <iostream>
#include <string.h>
#include <vector>
#include <deque>

using namespace std;

class SubArr {
public:
    //求最大子数组之和
    int MaxSubArray(vector<int>& nums) {
        int n = nums.size(); if (0 == n) return 0;
        int dp[n];
        for (int i = 0; i < n; i++) dp[i] = INT_MIN; // 初始化状态
        
        dp[0] = nums[0];

        int res = dp[0];
        for (int i = 1; i < n; i++) {
            dp[i] = max(nums[i], dp[i-1] + nums[i]);
            res = max(res, dp[i]);
        }

        return res;
    }
    

    int MaxSubArray2(vector<int>& nums) {
        int n = nums.size(); if (0 == n) return 0;
        int dp_0 = nums[0], dp_1 = 0; // 初始化状态

        int res = dp_0;
        for (int i = 1; i < n; i++) {
            dp_1 = max(nums[i], dp_0 + nums[i]);
            dp_0 = dp_1;
            res = max(res, dp_1);
        }

        return res;
    }
    
    int DP(vector<int>& nums, int i ) {
        if(i  > int(nums.size())) {
            return 0;
        }
        if(i == 0) {
            return 0;
        }
        if(nums[i] > nums[i-1]) {
            return DP(nums, i+1) + 1;
        }
        return DP(nums, i+1);
    }
    //最长连续递增序列
    int FindLengthOfLCIS(std::vector<int>& nums) {
        int n = nums.size(); if (n == 0)  { return 0; }
        int dp[n]; for (int i = 0; i < n; i++) { dp[i] = 1; } // 初始化状态

        int res = 1; // 记录答案的变量
        for (int i = 1; i < n; i++) {
            if (nums[i] > nums[i-1]) { // 决策
                dp[i] = dp[i-1] + 1;
                res = max(res, dp[i]);
            }
        }

        return res; // 输出答案
    }
    
    //62. 不同路径
    int uniquePaths(int m, int n) {
        int dp[m][n];

        // 初始化状态
        for (int i = 0; i < m; i ++) { dp[i][0] = 1; }
        for (int j = 0; j < n; j ++) { dp[0][j] = 1; }

        for (int i = 1; i < m; i ++) { // 状态转移过程
            for (int j = 1; j < n; j ++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1]; // 输出答案
    }
    

    int uniquePathsWithObstacles(const vector<vector<int>>& v) {
        if (v.size() == 0) {
            return 0;
        }
        
        int m = v.size(), n = v[0].size();
        int dp[m][n];
        for (int i = 0; i < m && v[i][0] == 0; i++) {
            dp[i][0] = 1;
        }
        for (int j = 0; j < n && v[0][j] == 0; j++) {
            dp[0][j] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (v[i][j] == 0) {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        return dp[m - 1][n - 1];
    }
    

    int GetMaxProduct(vector<int> nums) {
        int n = static_cast<int>(nums.size());
        int dp[2][n];
        
        for (int i = 0; i < n; i ++) { // 初始化状态
            dp[0][i] = nums[i];
            dp[1][i] = nums[i];
        }
        
        for (int i = 1; i < n; i ++) { // 决策求解
            dp[0][i] = max(dp[0][i-1] * nums[i], max(nums[i], dp[1][i-1] * nums[i]));
            dp[1][i] = min(dp[1][i-1] * nums[i], min(nums[i], dp[0][i-1] * nums[i]));
        }
        
        int ans = dp[0][0];
        for (int i = 1; i < n; i ++) { ans = max(ans, dp[0][i]); }

        return ans; // 输出答案
    }
    
    int GetMaxProduct2(vector<int> nums) {
        int n = static_cast<int>(nums.size());
        int dpmin, dpmax , ans;
        dpmin = dpmax = ans = nums[0];
        for (int i = 1; i < n; i ++) { // 决策求解
            int tmp = dpmax;
            dpmax = max(dpmax*nums[i], max(nums[i], dpmin*nums[i]));
            dpmin = min(dpmin*nums[i], min(nums[i], tmp*nums[i]));
            ans = max(dpmax, ans);
        }

        return ans; // 输出答案
    }
    
};
