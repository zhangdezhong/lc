
const Deque = require('../design/deque')
// 239. 滑动窗口最大值
// https://leetcode-cn.com/problems/sliding-window-maximum/
var maxSlidingWindow = function(nums, k) {
    let result = [];
    if (k == 0) return result;
    let w = new Deque();
    for (let i = 0, n = nums.length; i < n; i++) {
        while (!w.isEmpty() && w.peekFront() <= i - k) {
            w.removeFront();
        }
        while (!w.isEmpty() && nums[w.peekBack()] <= nums[i]) {
            w.removeBack();
        }
        w.addBack(i);
        if (i >= k-1) {
            result.push(nums[w.peekFront()]);
        }
    }
    return result;
}