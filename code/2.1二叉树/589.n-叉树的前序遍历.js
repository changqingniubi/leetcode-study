/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

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


// @lc code=end

