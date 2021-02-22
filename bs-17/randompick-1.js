// 528. 按权重随机选择
// https://leetcode-cn.com/problems/random-pick-with-weight/
class Solution {
    constructor(w) {
        for(let i=1; i < w.length; i++) {
            w[i] += w[i-1];
        }
        this.wSums = w;
    }
    pickIndex() {
        let idx = Math.floor(Math.random() * (this.wSums[this.wSums.length - 1])) + 1;
        let left = 0, right = this.wSums.length - 1;
        while(left <= right){
            let mid = left + (right - left >> 1);
            if (this.wSums[mid] == idx) {
                return mid;
            } else if (this.wSums[mid] < idx) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}