// https://leetcode-cn.com/problems/linked-list-cycle/
// 暴力
var hasCycle = function(head) {
    let start = new Date();
    while(new Date - start < 500) {
        if(head && head.next) {
            head = head.next;
        } else {
            return false
        }
    }
    return true
};
// 递归
var hasCycle = function(head) {
    let slow = head;
    if(!head || !head.next || !head.next.next) {
        return false;
    }
    function helper(slow, fast) {
        if(!fast || !fast.next || !fast.next.next) return false;
        if(fast == slow) return true;
        return helper(slow.next, fast.next.next);
    }
    return helper(slow, head.next.next);
};
// 迭代
var hasCycle = function(head) {
    let slow = head;
    if(!head || !head.next || !head.next.next) {
        return false;
    }
    let fast = head.next.next;
    while(slow && fast && fast.next) {
        if(fast == slow) return true
        slow =  slow.next;
        fast = fast.next.next;
    }
    return false;
};
// 面试题 02.08. 环路检测 https://leetcode-cn.com/problems/linked-list-cycle-lcci/
// 142. 环形链表 II https://leetcode-cn.com/problems/linked-list-cycle-ii/
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (true) {
        if (fast == null || fast.next == null) return null;
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) break;
    }
    fast = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};

// 160. 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
var getIntersectionNode = function(headA, headB) {
    let ha = headA, hb = headB;
    while (ha != hb) {
        ha = ha != null ? ha.next : headB;
        hb = hb != null ? hb.next : headA;
    }
    return ha;
};

// 61. 旋转链表
// https://leetcode-cn.com/problems/rotate-list/
var rotateRight = function(head, k) {
    if(!head) return head;
    
    let len = 1;
    let [newH, tail] = [head, head];
    while(tail.next) {
        tail = tail.next;
        len++;
    }
    tail.next = head; // circle the link

    if(k %= len) {
        // the tail node is the (len-k)-th node (1st node is head)
        for(let i = 0; i <  len - k; i++){
            tail = tail.next;
        } 
    }
    newH = tail.next; 
    tail.next = null;
    return newH;
};