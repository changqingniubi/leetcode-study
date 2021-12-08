/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-08 17:36:40
 * @LastEditTime: 2021-12-08 18:37:40
 * @LastEditors: changqing
 * @Usage: 
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    switch(ops[i]) {
      case '+': // val1, val2为前两次得分
        let val1 = +stack[stack.length - 1];
        let val2 = +stack[stack.length - 2];
        stack.push(val1 + val2);
        break;
      case 'D': // 栈顶元素（stack[stack.length - 1]）为前一次得分2倍
        stack.push(+stack[stack.length - 1] * 2);
        break;
      case 'C': // 删除最后一侧得分
        stack.pop();
        break;
      default: // 放入本次得分
        stack.push(+ops[i]);
        break;
    }
  }
  return stack.reduce((a, b) => a + b, 0)
};