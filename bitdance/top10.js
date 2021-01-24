// 1. 两数之和 
// https://leetcode-cn.com/problems/two-sum/
// 暴力
var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [0];
}
// hashmap
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if(map.has(rest)) {
            return [map.get(rest), i];
        }
        map.set(nums[i], i);
    }
};

// 3. 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    const occ = new Set();
    const n = s.length;
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            occ.delete(s[i-1]);
        }
        while (rk + 1 < n && !occ.has(s[rk + 1])) {
            occ.add(s[rk+1]);
            ++rk;
        }
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
// 两数相加
// https://leetcode-cn.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        dummy.next = new ListNode(carry);
    }
    return res.next;
};


// https://leetcode-cn.com/problems/3sum/
// 暴力
var threeSum = function(nums) {
    let ret  = new Set();
    let res = [];
    if(nums.length < 3) return res;
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1;  j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] == 0) {
                    let tmp = [nums[i], nums[j], nums[k]];
                    tmp.sort((a,b) => a-b);
                    ret.add(tmp.join(','));
                }
            }
        }
    }
    for(let elm of ret) {
        res.push(elm.split(','))
    }
    return res;
}

// 三数之和 https://leetcode-cn.com/problems/3sum/
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if (i > 0 &&  nums[i] == nums[i-1]) continue;
        let [l, r] = [i + 1, nums.length-1];
        while(l < r){
            let s = nums[i] + nums[l] + nums[r];
            if(s < 0) l += 1;
            else if(s > 0) r -= 1;
            else {
                result.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l+1]) l++;
                while(l < r  && nums[r] === nums[r-1]) r--;
                l++; r--;
            }
        } 
    }
    return result;
};
// 232. 用栈实现队列
// https://leetcode-cn.com/problems/implement-queue-using-stacks/
class MyQueue {
    constructor() {
        this.stIn = [];
        this.stOut = [];
    }

    push(x) {
        this.stIn.push(x);
    }

    pop() {
        if(this.stOut.length ==  0) {
            while(this.stIn.length) {
                this.stOut.push(this.stIn.pop());
            }
        }
        return this.stOut.pop();
    }

    peek() {
        let elem = this.pop();
        this.stOut.push(elem);
        return elem;
    }

    empty() {
        return this.stIn.length == 0 && this.stOut.length == 0;
    }
}

class MyStack {
    constructor() {
        this.queue = [];
        this.tmp = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        while(this.queue.length > 1) {
            this.tmp.push(this.queue.shift());
        }
        let ele = this.queue.shift();
        this.queue = this.tmp;
        this.tmp = [];
        return ele;
    }

    top() {
        while(this.queue.length > 1) {
            this.tmp.push(this.queue.shift());
        }
        let ele = this.queue.shift();
        this.tmp.push(ele);
        this.queue = this.tmp;
        this.tmp = []
        return ele
    }

    empty() {
        return this.queue.length == 0;
    }
}

// 98. 验证二叉搜索树
// https://leetcode-cn.com/problems/validate-binary-search-tree/
function isValidBST(root) {
    function checkBST(root, min, max) {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;
        let left = checkBST(root.left, min, root.val);
        let right = checkBST(root.right, root.val, max);
        return  left && right;
    }
    return checkBST(root, -Infinity, Infinity);
}

// 50. Pow(x, n)
// https://leetcode-cn.com/problems/powx-n/
var myPow = function(x, n) {
    if(n === 0)return 1;
    if( n < 0) return 1/ myPow(x, -n);
    if( n%2) return x * myPow(x, n-1);
    return myPow(x*x, n/2);
};

var myPow = function(x, n) {
    if(n  < 0) {
        x = 1 / x;
        n =  -n
    }
    let pow = 1;
    while(n) {
        if( n & 1) {
            pow *= x;
        }
        x *= x;
        n >>= 1;
    }
    return pow
};