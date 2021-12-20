/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildNode = function(preorder, inorder){
  if(!preorder.length) return null;
  // 查找根结点在中序遍历中的位置
  let p = 0;
  while(inorder[p] !== preorder[0]){
    p++;
  }
  // 构建根节点
  let root = new TreeNode(preorder[0]);

  let leftIn  = inorder.slice(0, p);      // 左子树 中序数组
  let rightIn = inorder.slice(p + 1);     // 右子树 中序数组

  let leftPr  = preorder.slice(1, p + 1); // 左子树 前序数组
  let rightPr = preorder.slice(p + 1);    // 右子树 前序数组
  
  root.left = buildNode(leftPr, leftIn);
  root.right = buildNode(rightPr, rightIn);
  return root;
}
var buildTree = function(preorder, inorder) {
  return buildNode(preorder, inorder);
};

/**
 * 复习 2021-08-04
 */
// var buildNode = function(preorder, inorder){
//   if(!preorder.length || !inorder) return null;
//   let rootVal = preorder[0];
//   let root = new TreeNode(rootVal);

//   let rootIndex = inorder.indexOf(rootVal);

//   let leftInorder = inorder.slice(0, rootIndex);
//   let rightInorder = inorder.slice(rootIndex + 1);

//   let leftPreorder = preorder.slice(1, leftInorder.length + 1);
//   let rightPreorder = preorder.slice(leftInorder.length + 1);
  
//   root.left = buildNode(leftPreorder, leftInorder);
//   root.right = buildNode(rightPreorder, rightInorder);
//   return root;
// }
// var buildTree = function(preorder, inorder) {
//   return buildNode(preorder, inorder);
// }
// @lc code=end

