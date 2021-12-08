/**
 *  1. 非‘#’ 入栈操作
 *  2. '#' 弹栈操作
 */
var getResult = function (str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if(str[i] === '#') {
      stack.pop();
    } else {
      stack.push(str[i])
    }
  }
  return stack.join('')
}
var backspaceCompare = function(S, T) {
  return getResult(S) === getResult(T);
}