/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-08 18:07:35
 * @LastEditTime: 2021-12-08 18:32:11
 * @LastEditors: changqing
 * @Usage: 
 */

// 实现一个MyQueue类，该类用两个栈来实现一个队列。

// 例子
// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);
// queue.peek();  // 返回 1
// queue.pop();   // 返回 1
// queue.empty(); // 返回 false



/**
 * 思路： 
 *  定义两个栈， 一个（pushStack）用于压入元素，一个（popStack）用于弹出元素
 *  1. 压入操作： pushStack压入元素
 *  2. 弹出操作： 
 *    1. 如果popStack中有元素，则popStack直接弹出，
 *    2. 如果popStack中没有元素，则将pushStack中的元素倒入popStack中，popStack再进行弹出。
 *    3. 如果两个栈中都没有元素，则为空栈
 */
 var MyQueue = function() {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 1. popStack中有元素，直接弹出
  if(this.popStack.length) return this.popStack.pop();
  // 2. 两个栈中都没有元素，直接返回false
  if(!this.pushStack.length) return false;
  // 3. popStack中没有元素，pushStack中有元素，则将pushStack中的元素全部放入popStack
  while (this.pushStack.length) {
    this.popStack.push(this.pushStack.pop())
  }
  return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  // 1. popStack中有元素
  if(this.popStack.length) return this.popStack[this.popStack.length - 1];
  // 2. 两个栈中都没有元素
  if(!this.pushStack.length) return;

  // 3. popStack中没有元素，pushStack中有元素，则将pushStack中的元素全部放入popStack
  while (this.pushStack.length) {
    this.popStack.push(this.pushStack.pop())
  }
  return this.popStack[this.popStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.popStack.length === 0 && this.pushStack.length === 0;
};
