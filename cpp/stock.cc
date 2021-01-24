//
//  stock.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/10/19.
//
#include <stdio.h>
#include <iostream>
#include <string.h>
#include <vector>

using namespace std;

class Stock {
    // https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
    // 121. 买卖股票的最佳时机
    int maxProfit(vector<int>& prices) {
        int maxPro = 0;
        int minPrice = INT_MAX;
        for(size_t i = 0; i < prices.size(); i++){
            minPrice = min(minPrice, prices[i]);
            maxPro = max(maxPro, prices[i] - minPrice);
        }
        return maxPro;
    }
    //122. 买卖股票的最佳时机 II
    // https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
    int maxProfit2(vector<int>& prices) {
        // return calculate(prices, 0);
        int maxprofit = 0;
        for (size_t i = 1; i < prices.size(); i++) {
            maxprofit += max(prices[i] - prices[i - 1], 0);
//            if (prices[i] > prices[i - 1])
//                maxprofit += prices[i] - prices[i - 1];
        }
        return maxprofit;
    }
    
    int calculate(vector<int>& prices, int s) {
        if (s >= int(prices.size())) return 0;
        int max = 0;
        for (size_t start = s; start < prices.size(); start++) {
            int maxprofit = 0;
            for (size_t i = start + 1; i < prices.size(); i++) {
                if (prices[start] < prices[i]) {
                    int profit = calculate(prices, i + 1) + prices[i] - prices[start];
                    if (profit > maxprofit)
                        maxprofit = profit;
                }
            }
            if (maxprofit > max)
                max = maxprofit;
        }
        return max;
    }
};
