/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-27 21:09:27
 * @LastEditTime: 2021-11-27 21:18:41
 * @LastEditors: changqing
 * @Usage: 
 */

//给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
//交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
//例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

var buddyStrings = function(s, goal) {
  // s，goal长度不相等
  if(s.length !== goal.length) return false;
  // s，goal相同切有重复字母，返回TRUE
  if(s === goal) return s.length > new Set(s).size;
  
  let temp = []; // 存放不相同字母
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== goal[i]){
      temp.push(s[i], goal[i]);
    }
    if(temp.length > 4) return false; // 不相同字母超过两个
  }

  return (temp.length === 4) && (temp[0] === temp[3]) && (temp[1] === temp[2]);
};
