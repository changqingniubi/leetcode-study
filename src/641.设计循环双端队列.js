/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-27 19:25:13
 * @LastEditTime: 2021-11-27 20:55:17
 * @LastEditors: changqing
 * @Usage: 
 */




//deque：一个固定大小的数组，用于保存循环队列的元素。
//head：一个整数，保存队首 的索引。
//tail：一个整数，保存队尾 的索引。
//count：循环队列当前的长度，即循环队列中的元素数量。
//max：循环队列的容量，即队列中最多可以容纳的元素数量。该属性不是必需的，因为队列容量可以通过数组属性得到，但是由于该属性经常使用，所以我们选择保留它



/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.deque = new Array(k);
  this.max = k;
  this.count = 0;
  // 我这里设计的head和tail分别指向元素两边的空位置。
  // 当然你也可以让它指向两边的元素
  this.head = 0;
  this.tail = 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false;
  this.deque[this.head] = value;
  // 防止出现负数，先加this.max再取模
  this.head = (this.head - 1 + this.max) % this.max;
  this.count++;
  return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false;
  this.deque[this.tail] = value;
  this.tail = (this.tail + 1 + this.max) % this.max;
  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false;
  this.head = (this.head + 1) % this.max;;
  this.count--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false;
  this.tail = (this.tail - 1 + this.max) % this.max;
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1;

  return this.deque[(this.head + 1) % this.max];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return -1;
  return this.deque[(this.tail - 1 + this.max) % this.max];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return (this.count == 0);
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return (this.count == this.max);
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

 let circularDeque = new MyCircularDeque(3); // 设置容量大小为3
 circularDeque.insertLast(1);			        // 返回 true
 circularDeque.insertLast(2);			        // 返回 true
 circularDeque.insertFront(3);			        // 返回 true
 circularDeque.insertFront(4);			        // 已经满了，返回 false
 circularDeque.getRear();  				// 返回 2
 circularDeque.isFull();				        // 返回 true
 circularDeque.deleteLast();			        // 返回 true
 circularDeque.insertFront(4);			        // 返回 true
 circularDeque.getFront();				// 返回 4
 console.log(circularDeque.deque);  //    3 2 1