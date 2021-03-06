// 递归 合并两个有序链表
// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 剑指 Offer 25. 合并两个排序的链表
// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};
// 迭代 合并两个有序链表
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let pre = dummy;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            dummy.next = l2;
            l2 = l2.next;
        } else {
            dummy.next = l1;
            l1 = l1.next;
        }
        dummy = dummy.next;
    }
    dummy.next = l1 ? l1 : l2;
    return pre.next;
}
// 合并K个升序链表 分治
// 23. 合并K个升序链表
// https://leetcode-cn.com/problems/merge-k-sorted-lists/
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length-1);
};

function merge(lists, l, r) {
    if (l == r) return lists[l];
    if (l > r) return null;
    let mid = (l + r) >> 1;
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
}
// 2. 两数相加
// https://leetcode-cn.com/problems/add-two-numbers/
// 面试题 02.05. 链表求和
// https://leetcode-cn.com/problems/sum-lists-lcci/
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    function helper(result, l1, l2, carry) {
        if (!l1 && !l2 && carry == 0) return;
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        result.next = new ListNode(sum % 10);
        helper(result.next, l1?.next, l2?.next, carry);
    }
    helper(head, l1, l2, 0);
    return head.next;
}
var addTwoNumbers = function(l1, l2) {
    let head = null, dummy = null;
    let carry = 0;
    head = dummy = new ListNode(0);
    while(l1 || l2 || carry != 0) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return head.next;
};
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let carry = 0;
    let pre = null;
    while (stack1.length || stack2.length || carry != 0) {
        let a = stack1.length ? stack1.pop() : 0;
        let b = stack2.length ? stack2.pop() : 0;
        let cur = a + b + carry;
        carry = Math.floor(cur / 10);
        cur %= 10;
        let curnode = new ListNode(cur);
        curnode.next = pre;
        pre = curnode;
    }
    return pre;
};