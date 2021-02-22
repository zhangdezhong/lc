// 84. 柱状图中最大的矩形
// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let ans = 0;
    for (let left = 0; left < n; ++left) {
        let minHeight = Infinity;
        for (let right = left; right < n; ++right) {
            minHeight = Math.min(minHeight, heights[right]);
            ans = Math.max(ans, (right - left + 1) * minHeight);
        }
    }
    return ans;
};
var largestRectangleArea = function(heights) {
    heights = [0, ...heights, 0];
    let maxArea = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        while ( stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};
// 739. 每日温度
// https://leetcode-cn.com/problems/daily-temperatures/
var dailyTemperatures = function(T) {
    let length = T.length;
    let result = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        let current = T[i];
        if (current < 100) {
            for (let j = i + 1; j < length; j++) {
                if (T[j] > current) {
                    result[i] = j - i;
                    break;
                }
            }
        }
    }
    return result;
};
var dailyTemperatures = function(T) {
    let stack = [];
    let ret = new Array(T.length).fill(0);
    for(let i = 0; i < T.length; i++) {
        while(stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let idx = stack.pop();
            ret[idx] = i - idx;
        }
        stack.push(i);
    }
    return ret;
}
// 496. 下一个更大元素 I
// https://leetcode-cn.com/problems/next-greater-element-i/
var nextGreaterElement = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let stack = [];
    let map = new Map();
    for (let i = 0; i < len2; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }
    let res = new Array(len1).fill(0);
    for (let i = 0; i < len1; i++) {
        res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
    }
    return res;
}
// 901. 股票价格跨度
// https://leetcode-cn.com/problems/online-stock-span/
class StockSpanner {
    constructor() {
        this.prices = [];
        this.weights = [];
    }

    next(price) {
        let w = 1;
        while (this.prices.length > 0 && this.prices[this.prices.length - 1] <= price) {
            this.prices.pop();
            w += this.weights.pop();
        }
        this.prices.push(price);
        this.weights.push(w);
        return w;
    }
}