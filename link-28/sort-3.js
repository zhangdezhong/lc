// 148. 排序链表
// https://leetcode-cn.com/problems/sort-list/
var sortList  = function(head) {
    if (!head || !head.next) return head;
        
    let prev = null, slow = head, fast = head;
    while (fast != null && fast.next != null) {
        [prev, slow, fast] = [slow, slow.next, fast.next.next];
    }
    
    prev.next = null;
    
    let l1 = sortList(head);
    let l2 = sortList(slow);
    
    return mergeTwoLists(l1, l2);
}

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
// 143. 重排链表
// https://leetcode-cn.com/problems/reorder-list/
var reorderList = function(head) {
    if(head==null||head.next==null) return;
            
    //Find the middle of the list
    let p1=head;
    let p2=head;
    while(p2.next&&p2.next.next){ 
        p1=p1.next;
        p2=p2.next.next;
    }
            
    //Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
    let preMiddle=p1;
    let preCurrent=p1.next;
    while(preCurrent.next!=null){
        let current=preCurrent.next;
        preCurrent.next=current.next;
        current.next=preMiddle.next;
        preMiddle.next=current;
    }
            
    //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
    p1=head;
    p2=preMiddle.next;
    while(p1!=preMiddle){
        preMiddle.next=p2.next;
        p2.next=p1.next;
        p1.next=p2;
        p1=p2.next;
        p2=preMiddle.next;
    }
}

// 147. 对链表进行插入排序
// https://leetcode-cn.com/problems/insertion-sort-list/
var insertionSortList = function(head) {
    if (!head) return head;
    let dummy = new ListNode(0);
    let cur = head;
    let pre = dummy;
    while (cur) {
        while (pre.next != null && pre.next.val < cur.val) {
            pre = pre.next;
        }
        [cur.next, pre.next, cur] = [pre.next, cur, cur.next];
        pre = dummy;
    }
    return dummy.next;
}