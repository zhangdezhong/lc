// 346. 数据流中的移动平均值
// https://leetcode-cn.com/problems/moving-average-from-data-stream/
const Deque = require('../design/deque')
const assert = require('assert');
// class MovingAverage {
//   constructor(size) {
//     this.arr = [];
//     this.size = size;
//     this.index = 0;
//     this.total = 0;
//   }
//   next(val) {
//     this.arr.push(val);
//     if(this.arr.length > this.size) {
//       this.index++;
//       this.total -= this.arr[this.index-1];
//     }
//     this.total += val;
//     return this.total / (this.arr.length - this.index);
//   }
// }

// class MovingAverage {
//   constructor(size) {
//     this.size = size;
//     this.windowSum = 0;
//     this.count = 0;
//     this.deque = new Deque();
//   }

//   next(val) {
//     this.count++;
//     this.deque.addBack(val);
//     let tail = this.count > this.size ? this.deque.removeFront() : 0;
//     this.windowSum = this.windowSum - tail + val;
//     return this.windowSum / Math.min(this.size, this.count);
//   }
// }
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.head = 0;
    this.windowSum = 0;
    this.count = 0;
    this.queue = new Array(size).fill(0);
  }

  next(val) {
    this.count++;
    this.head = (this.head + 1) % this.size;
    this.windowSum = this.windowSum - this.queue[this.head] + val;
    this.queue[this.head] = val;
    return this.windowSum / Math.min(this.size, this.count);
  }
}

let m = new MovingAverage(3);
assert.strictEqual(m.next(1), 1);
assert.strictEqual(m.next(10), (1 + 10) / 2);
assert.strictEqual(m.next(3), (1 + 10 + 3) / 3);
assert.strictEqual(m.next(5), (10 + 3 + 5) / 3);
