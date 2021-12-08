/**
 * @param {string} s
 * @return {number}
 */
/**
 * 思路： 遍历 s
 *  1. 如果是数字，则拼接数字
 *  2. 如果是运算符，
 *    1. 如果是 + ，则压入栈中
 *    2. 如果是其他运算符，则和上一个数字进行运算再压入栈中
 *    3. 计算栈中的和值
 */

var calculate = function(s) {
  let i = 0;
  let str = '';
  let stack = [];
  let preOp = 0; // 标记上一个运算符 0：+， 1：-， 2：*， 3：/

  while(str = s[i]) {
    // 过滤空格
    if(str === ' ') {
      i++;
      continue;
    }

    // 拼接数字
    let val = str;
    if(str >= '0' && str <= '9'){ // str为数字
      let j = i + 1; // i后面的字符
      while(s[j] >= '0' && s[j] <= '9') { // i后面的字符也是数字
        val += s[j]; // 进行数字拼接
        i++;
        j++;
      }
    }
    
    switch(val) {
      case '+': 
        preOp = 0;
        break;
      case '-': 
        preOp = 1;
        break;
      case '*': 
        preOp = 2;
        break;
      case '/': 
        preOp = 3;
        break;
      default:  // 数字
        if(preOp === 1) { // 前面运算符是 - 
          let temp = -val;
          stack.push(temp);
        } else if(preOp === 2) { // 前面运算符是 *
          let temp = stack.pop() * val;
          stack.push(temp);
        } else if(preOp === 3) { // 前面运算符是 /
          let temp = (stack.pop() / val) | 0;
          stack.push(temp);
        } else { // 前面运算符是 +
          stack.push(val);
        }
        break;
    }
    i++;
  }
  let ret = stack.reduce((a,b)=> +a + +b, 0);
  return ret;
}