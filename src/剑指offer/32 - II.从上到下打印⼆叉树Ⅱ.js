/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 17:57:58
 * @LastEditTime: 2021-12-20 20:07:00
 * @LastEditors: changqing
 * @Usage: 
 */
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。


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

var levelOrder = function(root) {
  // 二维数组，arr[i] 存放第i层遍历结果
  let arr = [];

  getNode(root, arr, 0);
  return arr;
};