/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-20 14:39:58
 * @LastEditTime: 2021-12-20 14:56:12
 * @LastEditors: changqing
 * @Usage: 
 */

//输入：root = [1,null,2,3]
//输出：[1,2,3]


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

var preorderTraversal2 = function(root) {
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