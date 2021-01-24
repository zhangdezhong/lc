// 递归 24 两两交换链表中的节点
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let next = head.next
    head.next  = swapPairs(next.next)
    next.next = head
    return next
};
// 迭代 24 两两交换链表中的节点
var swapPairs = function(head) {
    let pre = new ListNode(0);
    pre.next = head;
    let temp = pre;
    while(temp.next && temp.next.next) {
        let start = temp.next;
        let end = temp.next.next;
        temp.next = end;
        start.next = end.next;
        end.next = start;
        temp = start;
    }
    return pre.next;
}
// 328. 奇偶链表
// https://leetcode-cn.com/problems/odd-even-linked-list/
var oddEvenList = function(head) {
    if (head == null) return null;
    let odd = head, even = head.next, evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};
// 86. 分隔链表
// https://leetcode-cn.com/problems/partition-list/
var partition = function(head, x) {
    let h1 = new ListNode(-1), h2 = new ListNode(-1);
    let p1 = h1, p2 = h2;
    while (head) {
        if (head.val < x) {
            p1 = p1.next = head;
        } else {
            p2 = p2.next = head;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = h2.next;
    return h1.next;
};