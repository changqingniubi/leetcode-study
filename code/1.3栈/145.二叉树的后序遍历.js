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