/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */


var buddyStrings = function(a, b) {
  // a，b长度不相等
  if(a.length !== b.length) return false;
  // a,b相同切有重复字母，返回TRUE
  if(a === b) return a.length > new Set(a).size;
  
  let temp = []; // 存放不相同字母
  for (let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]){
      temp.push(a[i], b[i]);
    }
    if(temp.length > 4) return false; // 不相同字母超过两个
  }

  return (temp.length === 4) && (temp[0] === temp[3]) && (temp[1] === temp[2]);
}
// @lc code=end

