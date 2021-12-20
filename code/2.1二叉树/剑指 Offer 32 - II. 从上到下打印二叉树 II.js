/*
 * @Description  : 
 * @Autor        : yanwang
 * @CreateDate   : 2021-12-20 11:17:44
 * @LastEditors  : yanwang
 * @LastEditTime : 2021-12-20 11:18:17
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 题解见107
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

var levelOrder = function(root) {
  // 二维数组，arr[i] 存放第i层遍历结果
  let arr = [];

  getNode(root, arr, 0);
  return arr;
};
