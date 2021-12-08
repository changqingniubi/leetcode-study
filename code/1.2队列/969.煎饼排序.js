/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
/**
 * 思路：将最大元素翻转到最前面，再一起翻转到最后面
 * 同样思路操作剩下的元素
 */
var reverse = function(arr, result){
  if(arr.length === 1) return;
  let arr1 = []; // 去除数组最大的元素后的数组
  //  arr.length就是最大的数字
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr.length) {
      result.push(i + 1);
      // 滤掉了最大元素
      arr1 = arr.slice(0, i).reverse().concat(arr.slice(i + 1)); 
      break;
    };
  }
  result.push(arr.length);
  reverse(arr1.reverse(), result);
}
var pancakeSort = function(arr) {
  var result = [];
  reverse(arr, result);
  return result;
};
// @lc code=end

