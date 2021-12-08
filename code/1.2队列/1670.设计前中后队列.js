/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

var Node = function (val) { 
  this.val = val; 
  this.pre = null; 
  this.next = null; 
}
// 节点前面插入新节点 p
Node.prototype.insert_pre = function (p) { 
  p.next = this; 
  p.pre = this.pre; 
  this.pre && (this.pre.next = p); // this指虚拟尾
  this.pre = p; 
}
// 节点后面插入新节点 p
Node.prototype.insert_next = function (p) { 
  p.pre = this; 
  p.next = this.next; 
  this.next && (this.next.pre = p);  // this指虚拟头
  this.next = p; 
}
Node.prototype.erase = function () { 
  this.next && (this.next.pre = this.pre); 
  this.pre && (this.pre.next = this.next); 
}

// 双向链表实双端队列
var deQueue = function () { 
  this.cnt = 0; 
  this.head = new Node(-1); // 头虚拟节点
  this.tail = new Node(-1); // 尾虚拟结点
  this.head.next = this.tail; 
  this.tail.pre = this.head; 
}
deQueue.prototype.push = function (value) { 
  this.tail.insert_pre(new Node(value));
  this.cnt += 1; 
}
deQueue.prototype.unshift = function (value) { 
  this.head.insert_next(new Node(value)); 
  this.cnt += 1; 
}
deQueue.prototype.pop = function () { 
  if (this.cnt <= 0) return undefined;
  let ret = this.tail.pre.val; 
  this.tail.pre.erase();
  this.cnt--; 
  return ret; 
}
deQueue.prototype.shift = function () { 
  if (this.cnt <= 0) return undefined;
  let ret = this.head.next.val; 
  this.head.next.erase(); 
  this.cnt--; 
  return ret; 
}
deQueue.prototype.front = function () { 
  return this.head.next.val; 
}
deQueue.prototype.back = function () { 
  return this.tail.pre.val; 
}
deQueue.prototype.length = function () { 
  return this.cnt; 
}


/**
 * 思路：用两个双端队列来实现
 * 下面解法借用了数组的api, 应该自己封装双端队列。
 */

var FrontMiddleBackQueue = function() {
  this.leftQueue = new deQueue();
  this.rightQueue = new deQueue(); // 奇数时右侧数组大1
  this.count = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
// 调节两个对列的元素
FrontMiddleBackQueue.prototype.ava = function() {
  // 右侧个数比左侧多，且多于1个
  while(this.rightQueue.length() - this.leftQueue.length() > 1){
    this.leftQueue.push(this.rightQueue.shift())
  } 
  // 左侧比右侧多
  while(this.rightQueue.length() - this.leftQueue.length() < 0){
    this.rightQueue.unshift(this.leftQueue.pop())
  } 
};
FrontMiddleBackQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.leftQueue.unshift(val);
  this.count++;
  this.ava();
  return null;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  this.leftQueue.push(val)
  this.count++;
  this.ava();
  return null;
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.rightQueue.push(val);
  this.count++;
  this.ava();
  return null;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if(this.isEmpty()) return -1;
  let value = ''
  // 优先弹出左侧队列的元素
  if(this.leftQueue.length()){
    value = this.leftQueue.shift();
  } else {
    value = this.rightQueue.shift();
  }
  this.count--;
  this.ava();
  return value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if(this.isEmpty()) return -1;
  let value = ''
  // 如果是偶数个，弹出中间偏左的元素
  if(this.rightQueue.length() === this.leftQueue.length()){
    value = this.leftQueue.pop();
  } else { // 否则中间元素为右队列第一个
    value = this.rightQueue.shift();
  }
  this.count--;
  this.ava();
  return value;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if(this.isEmpty()) return -1;
  let value = this.rightQueue.pop();
  this.count--;
  this.ava();
  return value;
};


/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

