/**
 * @param {string} s
 * @return {string}
 */
/**
 *  思路： 记录左括号 对 右括号的差值diffCnt，
 *    1. 如果 diffCnt 小于0， 说明有括号多，则多处的右括号为无效括号，应该舍弃
 *    2. 如果遍历结束 diffCnt === 0；说明都匹配成功
 *    3. 如果遍历结束 diffCnt 大于 0， 说明左括号多，应删除diffCnt个左括号；
 */
var minRemoveToMakeValid = function(s) {
  let diffCnt = 0; // 记录 l - r数量的差值
  let stack = [];
  // 如果 diffCnt<0 跳过 ) 入栈 
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') diffCnt++;
    if(s[i] === ')') diffCnt--;
    if(diffCnt < 0) {
      diffCnt++; // 恢复上一行的 -- 操作
      continue; //  ')'多出，不入栈
    }
    stack.push(s[i])
  }
  
  // 如果左右相等，直接返回
  if(diffCnt === 0) return stack.join('') || '';

  // 删除右侧多余的‘(’
  for (let i = stack.length - 1; i >= 0 && diffCnt; i--) {
    if(stack[i] === '(' ) {
      stack.splice(i, 1);
      diffCnt--;
    }
  }
  return stack.join('') || '';
};