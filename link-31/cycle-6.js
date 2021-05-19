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
    if(!head || !head.next || !head.next.next) {
        return false;
    }
    function helper(slow, fast) {
        if(!fast || !fast.next || !fast.next.next) return false;
        if(fast == slow) return true;
        return helper(slow.next, fast.next.next);
    }
    return helper(head, head.next.next);
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
    console.log(slow);
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};
var detectCycle = function(head) {
    if (!head || !head.next || !head.next.next) return null;
    let slow = null;
    function helper(islow, ifalst) {
        if (!ifalst || !ifalst.next || !ifalst.next.next) return;
        if (islow == ifalst) {
            slow = islow;
            return
        }
        return helper(islow.next, ifalst.next.next);
    }
    helper(head.next, head.next.next);
    if(!slow) return null;
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
        if (ha != null) {
            ha = ha.next;
        } else {
            ha = headB;
        }
        if (hb != null) {
            hb = hb.next;
        } else {
            hb = headA;
        }
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
        for(let i = 0; i <  len - k; i++){
            tail = tail.next;
        }
    }
    newH = tail.next;
    tail.next = null;
    return newH;
};