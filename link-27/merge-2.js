// 递归 合并两个有序链表
// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/
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
    dummy.next = l1 === null ? l2 : l1;
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
var addTwoNumbers = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let dummy = new ListNode(0);
    let d = dummy;
    let sum = 0;
    while (c1 || c2) {
        sum /= 10;
        if (c1) {
            sum += c1.val;
            c1 = c1.next;
        }
        if (c2) {
            sum += c2.val;
            c2 = c2.next;
        }
        d.next = new ListNode(sum % 10);
        d = d.next;
    }
    if (sum / 10 == 1)
        d.next = new ListNode(1);
    return dummy.next;
};