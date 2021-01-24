// 剑指 Offer 06. 从尾到头打印链表
// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
var reversePrint = function(head) {
    function helper(head, ans) {
        if(!head) return ans;
        helper(head.next, ans);
        res.push(head.val);
        return ans;
    }
    return helper(head, []);
};
// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/
// https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
// 递归 206 反转链表
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
// 迭代  206 反转链表
var reverseList = function(head) {
    let cur = head;
    let prev = null;
    while(cur) {
        // [cur.next, prev, cur] = [prev, cur, cur.next];
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev
};
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 92. 反转链表 II
// https://leetcode-cn.com/problems/reverse-linked-list-ii/
var reverseBetween = function(head, m, n) {
    let successor = null;
    function reverseN(head, n) {
        if (n == 1) { 
            successor = head.next;
            return head;
        }
        let last = reverseN(head.next, n - 1);
        head.next.next = head;
        head.next = successor;
        return last;
    }
    if (m == 1) return reverseN(head, n);
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
};
// 25. K 个一组翻转链表
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
// K 个一组翻转链表
const myReverse = (head, tail) => {
    let prev = tail.next;
    let cur = head;
    while (prev !== tail) {
         [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};
// 234. 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/
var isPalindrome = function(head) {
    let fast = head, slow = head;
    while (!fast && !fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast != null) { // odd nodes: let right half smaller
        slow = slow.next;
    }
    slow = reverseList(slow);
    fast = head;
    
    while (slow != null) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};