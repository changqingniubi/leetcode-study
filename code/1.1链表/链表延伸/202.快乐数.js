/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * 判断链表是否有环的思想
 */
var getNext = function (num) {
  let result = 0;
  while (num) {
    result += (num % 10) * (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

var isHappy = function (n) {
  let pre = n, cur = getNext(n);
  while (cur !== 1) {
    pre = getNext(pre);
    cur = getNext(getNext(cur));
    if(cur === pre){
      return false;
    }
  }
  return true;
};
 // @lc code=end

