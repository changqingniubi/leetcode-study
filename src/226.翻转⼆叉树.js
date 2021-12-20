/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 17:46:37
 * @LastEditTime: 2021-12-20 17:55:53
 * @LastEditors: changqing
 * @Usage: 
 */

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
 * @return {TreeNode}
 */

// 含义： 翻转树 root
var resvers = function(root){
  if(!root) return null; // 边界条件：树不存在
  [root.left, root.right] = [root.right, root.left]; // 左右子树交换
  resvers(root.left); // 翻转左子树
  resvers(root.right); // 翻转右子树
}

var invertTree = function(root) {
  resvers(root);
  return root;
};


// 循环 + 栈 替换递归
var invertTree = function(root) {
  if(!root) return null;
  let stack = [root];
  while(stack.length){
    let node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
  }
  return root;
};