// 232. 用栈实现队列
// https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 剑指 Offer 09
// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x) {
    this.input.push(x);
  }

  pop() {
    while(this.input.length !== 0){
      this.output.push(this.input.pop())
    }
    var pop = this.output.pop();
    while(this.output.length !== 0){
      this.input.push(this.output.pop())
    }
    return pop
  }

  peek() {
    while(this.input.length !== 0){
      this.output.push(this.input.pop())
    }
  
    var pop = this.output.pop()
    this.output.push(pop)
    while(this.output.length !== 0){
      this.input.push(this.output.pop())
    }
  
    return pop
  }

  empty() {
    return this.input.length <= 0 && this.output.length <= 0;
  }
};
// 225. 用队列实现栈
// https://leetcode-cn.com/problems/implement-stack-using-queues/
class MyStack {
  constructor() {
    this.queue = [];
  }
  push(x) {
    this.queue.push(x);
  }
  pop() {
    let squeue = [];
    let lastElem;
    while(this.queue.length > 1) {
        squeue.push(this.queue.shift())
    }
    lastElem = this.queue.shift();
    this.queue = squeue;
    return lastElem;
  }
  top() {
    let last = this.pop();
    this.queue.push(last);
    return last;
  }
  empty() {
    if(this.queue.length > 0) {
        return false;
    }
    return true;
  }
}
// 155. 最小栈
// https://leetcode-cn.com/problems/min-stack/
class MinStack {
  constructor() {
    this.x_stack = [];
    this.min_stack = [Infinity];
  }
  push(x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
  }
  pop() {
    this.x_stack.pop();
    this.min_stack.pop();
  }
  top() {
    return this.x_stack[this.x_stack.length - 1];
  }
  getMin() {
    return this.min_stack[this.min_stack.length - 1];
  }
};