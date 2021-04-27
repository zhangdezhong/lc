// 150. 逆波兰表达式求值
// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
var evalRPN = function(tokens) {
  const stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {
      const token = tokens[i];
      if (isNumber(token)) {
          stack.push(parseInt(token));
      } else {
          const num2 = stack.pop();
          const num1 = stack.pop();
          if (token === '+') {
              stack.push(num1 + num2);
          } else if (token === '-') {
              stack.push(num1 - num2);
          } else if (token === '*') {
              stack.push(num1 * num2);
          } else if (token === '/') {
              stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
          }
      }
  }
  return stack.pop();
};

const isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token );
}
// 224. 基本计算器
// https://leetcode-cn.com/problems/basic-calculator/
var calculate = function(s) {
  let stack = [];
  let result = 0;
  let number = 0;
  let sign = 1;
  for(let i = 0; i < s.length; i++){
    let c = s[i];
    if (c == ' ') {
      continue;
    } else if(c == '+'){
      result += sign * number;
      number = 0;
      sign = 1;
    } else if(c == '-'){
      result += sign * number;
      number = 0;
      sign = -1;
    } else if(c == '('){
      stack.push(result);
      stack.push(sign);
      sign = 1;   
      result = 0;
    } else if(c == ')'){
      result += sign * number;  
      number = 0;
      result *= stack.pop();
      result += stack.pop();
    } else {
      number = 10 * number + (c.charCodeAt() - '0'.charCodeAt());
    }
  }
  if(number != 0) result += sign * number;
  return result;
};