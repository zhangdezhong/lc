function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
class LinkedList {
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

class DLinkedList {
  constructor() {
    this.size = 0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  addAtHead(val) {
    this.addAtIndex(0, val);
  }
  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    if (index + 1 < this.size - index) {
      for(let i = 0; i < index + 1; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for(let i = 0; i < this.size - index; ++i) {
        curr = curr.prev;
      }
    }
    return curr.val;
  }
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;

    let pred, succ;
    if (index < this.size - index) {
      pred = this.head;
      for(let i = 0; i < index; ++i) {
        pred = pred.next;
      }
      succ = pred.next;
    } else {
      succ = this.tail;
      for (let i = 0; i < this.size - index; ++i) {
        succ = succ.prev;
      }
      pred = succ.prev;
    }
    this.size++;
    let toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    let pred, succ;
    if (index < this.size - index) {
      pred = this.head;
      for(let i = 0; i < index; i++) {
        pred = pred.next;
      }
      succ = pred.next.next;
    } else {
      succ = this.tail;
      for (let i = 0; i < this.size - index - 1; i++) {
        succ = succ.prev;
      }
      pred = succ.prev.prev;
    }
    this.size--;
    pred.next = succ;
    succ.prev = pred;
  }
}