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
    let prev = null;
    while(head) {
        // [head.next, prev, head] = [prev, head, head.next];
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
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
        const next = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};
// 234. 回文链表
// https://leetcode-cn.com/problems/palindrome-linked-list/
var isPalindrome = function(head) {
    if(!head || !head.next)  return true;
    let fast = head, slow = head, pre = null;
    //1、找到链表的中点，链表长度奇偶不影响
    while(fast && fast.next){
        slow = slow.next;
        fast =  fast.next.next;
    }
    pre = reverseList(slow);
    //3、前后链表进行比较，注意若为奇数链表，后半部分回比前部分多1一个节点，然而我们只比较相同长度的节点值，巧妙地避开这点判断
    while(head && pre){
        if(head.val != pre.val)return false;
        head = head.next;
        pre = pre.next;
    }
    return true;
};