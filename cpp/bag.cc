//
//  test.cpp
//  addon
//  Created by zhang.dezhong on 2020/9/22.
//
#include <stdio.h>
#include <limits.h>
#include <algorithm>
#include <vector>

using namespace std;

class Bag {
public:
    Bag() {}
    ~Bag() {}
    int knapsack(const std::vector<int>& weight, int n, int w) {
        int states[n][w+1];
        states[0][0] = 1;  // 第一行的数据要特殊处理，可以利用哨兵优化
        if (weight[0] <= w) {
            states[0][weight[0]] = 1;
        }
        for (int i = 1; i < n; ++i) { // 动态规划状态转移
            for (int j = 0; j <= w; ++j) {// 不把第i个物品放入背包
              if (states[i-1][j] == 1) states[i][j] = states[i-1][j];
            }
            for (int j = 0; j <= w-weight[i]; ++j) {//把第i个物品放入背包
              if (states[i-1][j]==1) states[i][j+weight[i]] = 1;
            }
        }
        for (int i = w; i >= 0; --i) { // 输出结果
            if (states[n-1][i] == 1) return i;
        }
        return 0;
    }


    int knapsack3(const std::vector<int>& weight, const std::vector<int>& value, int n, int w) {
      int states[n][w+1];
      for (int i = 0; i < n; ++i) { // 初始化states
        for (int j = 0; j < w+1; ++j) {
          states[i][j] = -1;
        }
      }
      states[0][0] = 0;
      if (weight[0] <= w) {
        states[0][weight[0]] = value[0];
      }
      for (int i = 1; i < n; ++i) { //动态规划，状态转移
        for (int j = 0; j <= w; ++j) { // 不选择第i个物品
          if (states[i-1][j] >= 0) states[i][j] = states[i-1][j];
        }
        for (int j = 0; j <= w-weight[i]; ++j) { // 选择第i个物品
          if (states[i-1][j] >= 0) {
            int v = states[i-1][j] + value[i];
            if (v > states[i][j+weight[i]]) {
              states[i][j+weight[i]] = v;
            }
          }
        }
      }
      // 找出最大值
      int maxvalue = -1;
      for (int j = 0; j <= w; ++j) {
        if (states[n-1][j] > maxvalue) maxvalue = states[n-1][j];
      }
      return maxvalue;
    }
    
    int DPB(const std::vector<int>& w, int tn, int rw) {
        if (tn < 0) {
            return 0;
        }
        if (rw < w[tn]) {
            return DPB(w, tn - 1, rw);
        }
        return std::max(DPB(w, tn - 1, rw), DPB(w, tn - 1, rw - w[tn]) + w[tn]);
    }
    
    int DP0(const std::vector<int>& w, int N, int W) {
        int dp[N+1][W+1];
        for (int i = 0; i < N + 1; i++) { dp[i][0] = 0; }
        for (int j = 0; j < W + 1; j++) { dp[0][j] = 0; }
      
        for (int tn = 1; tn < N + 1; tn++) { // 遍历每一件物品
            for (int rw = 1; rw < W + 1; rw++) { // 背包容量有多大就还要计算多少次
                dp[tn][rw] = dp[tn-1][rw];
                if (w[tn-1] <= rw) { // 当背包容量还大于第tn件物品重量时，进一步作出决策
                    dp[tn][rw] = std::max(dp[tn-1][rw], dp[tn-1][rw-w[tn-1]] + w[tn-1]);
                }
            }
        }
        return dp[N][W];
    }
    
    int DPB(const std::vector<int>& w, const std::vector<int>& v, int tn, int rw) {
        if (tn < 0) {
            return 0;
        }
        if (rw < w[tn]) {
            return DPB(w, v, tn - 1, rw);
        }
        return std::max(DPB(w, v, tn - 1, rw), DPB(w, v, tn - 1, rw - w[tn]) + v[tn]);
    }
    
    int DP(const std::vector<int>& w, const std::vector<int>& v, int N, int W) {
      int dp[N+1][W+1];
      // 初始化状态
      for (int i = 0; i < N + 1; i++) { dp[i][0] = 0; }
      for (int j = 0; j < W + 1; j++) { dp[0][j] = 0; }
      
      for (int tn = 1; tn < N + 1; tn++) { // 遍历每一件物品
        for (int rw = 1; rw < W + 1; rw++) { // 背包容量有多大就还要计算多少次
            dp[tn][rw] = dp[tn-1][rw];
            if (w[tn-1] <= rw) { // 当背包容量还大于第tn件物品重量时，进一步作出决策
                dp[tn][rw] = max(dp[tn-1][rw], dp[tn-1][rw-w[tn-1]] + v[tn-1]);
            }
        }
      }
      return dp[N][W];
    }

    int DP1(const std::vector<int>& w, const std::vector<int>& v, int N, int W) {
        int dp[N+1][W+1]; // 创建备忘录
        for (int i = 0; i < N + 1; i++) { dp[i][0] = 0; }
        for (int j = 0; j < W + 1; j++) { dp[0][j] = 0; }
        for (int tn = 1; tn < N + 1; tn++) {
            for (int rw = 1; rw < W + 1; rw++) {
                dp[tn][rw] = dp[tn-1][rw];
                for (int k = 0; k <= rw / w[tn-1]; k++) {
                    dp[tn][rw] = max(dp[tn][rw], dp[tn][rw-k*w[tn-1]] + k*v[tn-1]);
                }
            }
        }
        return dp[N][W];
    }
    
    int DP2(const std::vector<int>& w, const std::vector<int>& v, int N, int W) {
        int dp[N+1][W+1]; // 创建备忘录
        for (int i = 0; i < N + 1; i++) { dp[i][0] = 0; }
        for (int j = 0; j < W + 1; j++) { dp[0][j] = 0; }
        
        for (int tn = 1; tn < N + 1; tn++) { // 遍历每一件物品
            for (int rw = 1; rw < W + 1; rw++) { // 背包容量有多大就还要计算多少次
                dp[tn][rw] = dp[tn-1][rw];
                if (w[tn-1] <= rw) { // 如果可以放入，则尝试放入第tn件物品
                    dp[tn][rw] = max(dp[tn-1][rw], dp[tn][rw-w[tn-1]] + v[tn-1]);
                }
            }
        }
        return dp[N][W];
    }

    int DP3(const std::vector<int>& w, const std::vector<int>& v, int N, int W) {
      int dp[2][W+1];
      
      for (int i = 0; i < 2; i++) { dp[i][0] = 0; }
      for (int j = 0; j < W + 1; j++) { dp[0][j] = 0; }

      for (int tn = 1; tn < N + 1; tn++) {
        for (int rw = 1; rw < W + 1; rw++) {
          int ctn = tn % 2;
          int ptn = tn % 1;
          dp[ctn][rw] = dp[ptn][rw];
          if (w[tn-1] <= rw) {
            dp[ctn][rw] = max(dp[ctn][rw], dp[ctn][rw-w[tn-1]] + v[tn-1]);
          }
        }
      }
      return dp[N % 2][W];
    }

    int DPSol() {
      int N = 3, W = 5; // 物品的总数，背包能容纳的总重量
      std::vector<int> w = {3, 2, 1}; // 物品的重量
      std::vector<int> v = {5, 2, 3}; // 物品的价值
      
      return DP2(w, v, N, W); // 输出答案
    }
};
