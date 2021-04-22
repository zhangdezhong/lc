// 622. 设计循环队列
// https://leetcode-cn.com/problems/design-circular-queue/
class CircularQueue {
  constructor(k) {
    this.capacity = k + 1;
    this.arr = new Array(this.capacity)
    this.front = this.rear = 0;
  }
  addFront(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.arr[this.front] = value;
    console.log('addFront', this.arr.join(','));
    return true;
  }
  removeFront() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.capacity;
    console.log('removeFront', this.arr.join(','));
    return true;
  }
  peekFront() {
    if (this.isEmpty()) return -1;
    return this.arr[this.front];
  }
  addBack(value) {
    if (this.isFull()) return false;
    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    console.log('addBack', this.arr.join(','));
    return true;
  }
  removeBack() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    console.log('removeBack', this.arr.join(','));
    return true;
  }
  peekBack() {
    if (this.isEmpty()) return -1;
    return this.arr[(this.rear - 1 + this.capacity) % this.capacity];
  }
  isEmpty() {
    return this.front == this.rear;
  }
  isFull() { // 注意：这个设计是非常经典的做法
    return (this.rear + 1) % this.capacity == this.front;
  }
}
class Deque {
  constructor() {
    this.front = this.back = undefined;
  }
  addFront(value) {
    if (!this.front) {
      this.front = this.back = { value };
    } else {
      this.front = this.front.next = { value, prev: this.front };
    }
  }
  removeFront() {
    let value = this.peekFront();
    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      (this.front = this.front.prev).next = undefined;
    }
    return value;
  }
  peekFront() { 
    return this.front && this.front.value;
  }
  addBack(value) {
    if (!this.front) {
      this.front = this.back = { value };
    } else {
      this.back = this.back.prev = { value, next: this.back };
    }
  }
  removeBack() {
    let value = this.peekBack();
    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      (this.back = this.back.next).back = undefined;
    }
    return value;
  }
  peekBack() { 
    return this.back && this.back.value;
  }
  isEmpty() {
    if (this.front == undefined && this.back == undefined) {
      return true;
    }
    return false;
  }
  isFull() {
    return size == capacity;
  }
}

module.exports = Deque;