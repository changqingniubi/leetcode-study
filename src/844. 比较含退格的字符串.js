/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-09 20:27:41
 * @LastEditTime: 2021-12-09 20:51:19
 * @LastEditors: changqing
 * @Usage: 
 */


//给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
//如果相等，返回 true ；否则，返回 false 。

// 示例
//输入：s = "ab#c", t = "ad#c"
//输出：true
//解释：S 和 T 都会变成 “ac”。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
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

 var backspaceCompare = function(s, t) {
  return getResult(s)===getResult(t);
};


let s = "ab#c", t = "ad#c"
console.log(backspaceCompare(s,t))

let s1 = "a#c", t1 = "b"
console.log(backspaceCompare(s1,t1))
