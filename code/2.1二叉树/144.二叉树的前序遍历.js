/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var getNode = function(root, arr){
  if(!root) return null;
  arr.push(root.val);
  getNode(root.left, arr);
  getNode(root.right, arr);
}
var preorderTraversal = function(root) {
  let arr = [];
  getNode(root, arr);
  return arr;
};

var preorderTraversal = function(root) {
  if(!root) return [];
  let stack = [root];
  let arr = [];
  while(stack.length){
    let node = stack.pop();
    arr.push(node.val);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return arr;
};

// @lc code=end

