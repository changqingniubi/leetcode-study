/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 20:18:49
 * @LastEditTime: 2021-12-20 20:29:25
 * @LastEditors: changqing
 * @Usage: 
 */
// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）

var zigzagLevelOrder = function(root) {
  let arr = [];
  getNode(root, arr, 0);
  for (let i = 1; i < arr.length; i += 2) {
    arr[i].reverse(); // 翻转奇数行
  }
  return arr;
};
var getNode = function(root, arr, k){
  if(!root) return null;
  arr[k] = arr[k] || [];
  arr[k].push(root.val);
  // 将左子树遍历结果放入arr中
  getNode(root.left, arr, k+1);
  getNode(root.right, arr, k+1);
}