/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 17:32:22
 * @LastEditTime: 2021-12-20 17:45:53
 * @LastEditors: changqing
 * @Usage: 
 */



/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 给定一个 N 叉树，返回其节点值的 前序遍历 。

// 含义：前序遍历树 root， 将结果放入arr中
var getNode = function(root, arr){
  if(!root) return null; // 边界条件： 树不存在则跳出
  arr.push(root.val); // 根结点放入结果数组
  root.children.forEach(item=>{ // 子节点放入结果数组
    getNode(item, arr);
  })
}
var preorder = function(root) {
  let arr = [];
  getNode(root, arr);
  return arr;
};


/**
 * 栈方式实现
 */
 var preorder = function(root) {
  if(!root) return [];
  let arr = [];
  let stack = [root];
  while(stack.length>0){
    let node = stack.pop();
    arr.push(node.val)
    for (let i = node.children.length - 1; i > -1; i--) {
      stack.push(node.children[i])
    }
  }
  return arr;
};