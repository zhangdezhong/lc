function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
class MyLinkedList {
  constructor() {
    this.size = 0;
    this.head = new ListNode(0);
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for(let i = 0; i < index + 1; i++) curr = curr.next;
    return curr.val;
  }
  addAtHead(val) {
    this.addAtIndex(0, val);
  }
  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }  
  addAtIndex(index, val) {
    if (index > this.size) return;
    if (index < 0) index = 0;
    this.size++;
    let cur = this.head;
    while (index) {
        cur = cur.next;
        index--;
    }
    let node = new ListNode(val);
    node.next = cur.next;
    cur.next = node;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    this.size--;
    let cur = this.head;
    while (index) {
        cur = cur.next;
        index--;
    }
    cur.next = cur.next.next;
  };
}