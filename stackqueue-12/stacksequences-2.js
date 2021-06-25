// 剑指 Offer 31. 栈的压入、弹出序列
// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
// 946. 验证栈序列
// https://leetcode-cn.com/problems/validate-stack-sequences/
var validateStackSequences = function(pushed, popped) {
  let i = 0;
  let stack = [];
  for(let elem of pushed) {
    stack.push(elem);
    while (stack.length && stack[stack.length - 1] == popped[i]) {
      stack.pop();
      i++;
    }
  }
  return !stack.length;
};