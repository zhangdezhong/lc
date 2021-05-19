// 删除链表中等于给定值 val 的所有节点。
// 203. 移除链表元素
// https://leetcode-cn.com/problems/remove-linked-list-elements/
var removeElements = function(head, val) {
    let res = new ListNode();//哑节点
    res.next = head;
    let now = res;
    while (now.next) {
        if (now.next.val == val) {
            now.next = now.next.next;
        } else {
            now = now.next;
        }
    }
    return res.next;
};
// 删除链表的倒数第N个节点
// 19. 删除链表的倒数第N个节点
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// https://leetcode-cn.com/problems/delete-middle-node-lcci/
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    // https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
    // https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
    // return slow.next.val; 
    slow.next = slow.next.next;
    return dummy.next;
};
// 面试题 02.01. 移除重复节点
// https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
var removeDuplicateNodes = function(head) {
    let set = new Set();
    let pre = new ListNode();
    let cur = pre;
    while(head) {
        if(!set.has(head.val)) {
            set.add(head.val);
            cur.next = new ListNode(head.val);
            cur = cur.next
        }
        head = head.next;
    }
    return pre.next;
};
// 删除排序链表中的重复元素
// 83. 删除排序链表中的重复元素
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur != null && cur.next != null) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
// 82. 删除排序链表中的重复元素 II
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let dummyhead = new ListNode();
    dummyhead.next = head;
    let prev = dummyhead;
    while(prev && prev.next) {
        let curr = prev.next;
        if(!curr.next || curr.next.val != curr.val)  { 
            prev = curr;
        } else {
            while(curr.next && curr.next.val == curr.val) {
                curr = curr.next;
            }
            prev.next = curr.next;
        }  
    }
    return dummyhead.next;
};
// 237. 删除链表中的节点
// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};