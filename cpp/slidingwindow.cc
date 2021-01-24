//
//  slidingwindow.cpp
//  addon
//
//  Created by zhang.dezhong on 2020/10/13.
//

#include <stdio.h>
#include <iostream>
#include <string.h>
#include <vector>
#include <deque>

using namespace std;

class SlidingWindow {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        if(nums.size()==0) return {0};
        
        vector<int> res(nums.size() - k + 1);
        deque<int> deque;
      
        for(int i=0; i < int(nums.size());i++) {
            if(i >= k && i - k + 1 > deque.front()) deque.pop_front();
            while(!deque.empty() && nums[deque.back()] < nums[i]) {
                deque.pop_back();
            }
            deque.push_back(i);
            if(i - k + 1 >= 0) {
                res[i - k + 1] = nums[deque.front()];
            }
        }
      return res;
    }
    
    
};
