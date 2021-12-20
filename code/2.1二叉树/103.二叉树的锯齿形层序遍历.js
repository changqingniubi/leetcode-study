/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 注释看 107题
var getNode = function(root, arr, k){
  if(!root) return null;
  if(arr.length === k) arr.push([]);
  arr[k].push(root.val);
  getNode(root.left, arr, k+1);
  getNode(root.right, arr, k+1);
}
var reserve = function(arr){
  let pre = 0;
  let tail = arr.length-1;
  while(pre < tail){
    [arr[pre], arr[tail]] = [arr[tail], arr[pre]];
    pre++;
    tail--;
  }
}
var zigzagLevelOrder = function(root) {
  let arr = [];
  getNode(root, arr, 0);
  for (let i = 1; i < arr.length; i += 2) {
    reserve(arr[i]); // 翻转奇数行
  }
  return arr;
};

// @lc code=end

