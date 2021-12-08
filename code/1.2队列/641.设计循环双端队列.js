/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start

var MyCircularDeque = function(k) {
  this.deque = new Array(k);
  this.max = k;
  this.count = 0;
  // 我这里设计的head和tail分别指向元素两边的空位置。
  // 当然你也可以让它指向两边的元素
  this.head = 0;
  this.tail = 1;
};

MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false;
  this.deque[this.head] = value; // 指针出放入元素
  // 防止出现负数，先加this.max再取模 // 指针向外移动一步
  this.head = (this.head - 1 + this.max) % this.max;
  this.count++;
  return true;
};

MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false;
  this.deque[this.tail] = value;
  this.tail = (this.tail + 1 + this.max) % this.max;
  this.count++;
  return true;
};

MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false;
  this.head = (this.head + 1) % this.max;;
  this.count--;
  return true;
};

MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false;
  this.tail = (this.tail - 1 + this.max) % this.max;
  this.count--;
  return true;
};

MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1;

  return this.deque[(this.head + 1) % this.max];
};

MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return -1;
  return this.deque[(this.tail - 1 + this.max) % this.max];
};

MyCircularDeque.prototype.isEmpty = function() {
  return this.count === 0;
};

MyCircularDeque.prototype.isFull = function() {
  return this.count === this.max;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 */
// let arr = []
// var param = '';
// obj = new MyCircularDeque(3)
// param = obj.insertFront(9)
// arr.push(param)
// param = obj.getRear()
// arr.push(param)
// param = obj.insertFront(9)
// arr.push(param)
// param = obj.insertLast(3)
// arr.push(param)
// param = obj.deleteFront()
// arr.push(param)
// param = obj.deleteLast()
// arr.push(param)
// param = obj.getFront()
// arr.push(param)
// param = obj.isEmpty()
// arr.push(param)
// param = obj.isFull()
// arr.push(param)
// console.log(arr)
// @lc code=end