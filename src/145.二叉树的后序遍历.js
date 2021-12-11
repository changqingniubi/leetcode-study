/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-11 17:41:07
 * @LastEditTime: 2021-12-11 17:54:46
 * @LastEditors: changqing
 * @Usage: 
 */

// 递归和迭代两种方式

//输入: [1,null,2,3]  
//输出: [3,2,1]

// 递归
function getNode(root, arr) {
  if(!root) return;
  getNode(root.left, arr);
  getNode(root.right, arr);
  arr.push(root.val);
}
var postorderTraversal = function(root) {
  if(!root) return [];
  let ret = [];
  getNode(root, ret);
  return ret;
};

// 迭代
var postorderTraversal = function(root) {
  if(!root) return [];
  let stack = [root], cur = null, ret = [];
  while(cur = stack.pop()) {
    // 从左侧压入ret底部
    ret.unshift(cur.val);
    if(cur.left) stack.push(cur.left);
    if(cur.right) stack.push(cur.right); // 弹出时，sright 先弹出，先被压入底部
  }
  return ret;
};