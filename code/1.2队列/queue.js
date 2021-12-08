/**
 * 普通队列
 * 1. 头指针指向队首第一个元素
 * 2. 尾指针指向队尾元素的下一位
 */
 class Queue{
  constructor(n) {
    // 存放数据
    this.arr = new Array(n);
    // 头指针
    this.head = 0;
    // 尾指针
    this.tail = 0;
  }
}
// 入队
Queue.prototype.enqueue = function(val) {
  if(this.full()) return; // 判满
  this.arr[this.tail] = val; // 尾指针处存入数据
  this.tail +=1; // 尾指针向后移动一位
}
// 出队
Queue.prototype.dequeue = function() {
  if(this.empty()) return; // 判空
  let tem = this.arr[this.head]; 
  //.......
  this.head += 1; // 头指针向后移动一位
  return tem;
}
// 查看队首元素
Queue.prototype.front = function() {
  if(this.empty()) return;
  return this.arr[this.head];
}
// 尾指针指向最后一个元素的下一位
Queue.prototype.full = function() {
  return this.tail === this.arr.length;
}

Queue.prototype.empty = function() {
  return this.size() === 0;
  // return this.head === this.tail;
}

// 队列中元素的个数
Queue.prototype.size = function() {
  return this.tail - this.head;
}


Queue.prototype.output = function() {
  this.arr.slice(this.head, this.tail);
}


function test(opts, vals) {
  let queue = new Queue(5);

  for (let i = 0; i < opts.length; i++) {
    switch(opts[i]) {
      case 'insert': 
        queue.enqueue(vals[i]);
        break;
      case 'front': 
        console.log(`front element: ${queue.front()}`);
        break;
      case 'dequeue': 
        queue.dequeue();
        break;
      case 'size': 
        console.log(`queue size: ${queue.size()}`);
        break;
      default: 
        break;
    }
    console.log(queue.output());
  }
}

let opts = ['insert', 'insert', 'insert','front', 'insert', 'insert', 'dequeue', 'size'];
let vals = [1, 2, 3, '', 4, 5, '', '']
test(opts, vals)