/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 思路： 
 *  1. 遍历字符串s
 *  2. 如果s[i]为左边括号，则进栈操作
 *  3. 如果s[i]为右边括号，则和栈顶元素进行匹配
 *    1. 不可以匹配，则返回false
 *    2. 可以匹配，则此对括号匹配完成，将栈顶元素出栈。
 *  4. 遍历结束，查看栈中是否有 剩余元素（没有被匹配的元素）。
 */
var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    // 为左边的括号入栈
    if(str === '(' || str === '[' || str === '{') {
      stack.push(str)
    } else {
      // 为右边的括号，进行匹配
      let temp = stack.pop();
      // 匹配失败就返回false
      if(str === ')') {
        if(temp !== '(') return false;
      } else if(str === ']') {
        if(temp !== '[') return false;
      } else if(str === '}') {
        if(temp !== '{') return false;
      }
    }
  }
  return stack.length === 0;
};

var isValid = function(s) {
  let stack = [];
  // 定义括号对应规则
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  
  for(let chart of s){ // 遍历字符串
    // map[chart]存在， 说明chart为右边的括号
    // 如果匹配，则弹栈操作
    if(map[chart] && stack[stack.length-1] === map[chart]){
      stack.pop();
    } else {
      // chart为左边的括号， 入栈操作
      stack.push(chart)
    }
  }
  return stack.length === 0;
};