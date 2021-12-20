/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 14:57:28
 * @LastEditTime: 2021-12-20 17:30:14
 * @LastEditors: changqing
 * @Usage: 
 */


//Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
//Output: [3,9,20,null,null,15,7]
//            3
//        9        20
//              15     7


/* 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
}


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




let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];

console.log(buildTree(preorder,inorder))

