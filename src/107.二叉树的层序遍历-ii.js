/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 20:08:16
 * @LastEditTime: 2021-12-20 20:22:49
 * @LastEditors: changqing
 * @Usage: 
 */
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

var reverse = function(arr){
  let pre = 0;
  let tail = arr.length-1;
  while(pre < tail) {
    [arr[pre], arr[tail]] = [arr[tail], arr[pre]];
    pre++;
    tail--;
  }
  return arr;
}

// 获取树root的层序遍历结果，放入arr中， 层是从上到下的。
// k: 当前遍历的是第几层
var getNode = function(root, arr, k){
  if(!root) return null;
  arr[k] = arr[k] || [];
  arr[k].push(root.val);
  // 将左子树遍历结果放入arr中
  getNode(root.left, arr, k+1);
  getNode(root.right, arr, k+1);
}

var levelOrderBottom = function(root) {
  // 二维数组，arr[i] 存放第i层遍历结果
  let arr = [];

  getNode(root, arr, 0);
  return arr.reverse();
};