/**
 * 循环队列
 */
class Queue{
  constructor(n) {
    this.arr = new Array(n);
    this.head = 0;
    this.tail = 0;
    this.cnt = 0;
  }
}

// 入队
Queue.prototype.enqueue = function(val) {
  if(this.full()) return;
  this.arr[this.tail] = val;
  this.tail += 1;

  this.tail %= this.arr.length; 
  // if(this.tail === this.arr.length) this.tail = 0; // 如果尾指针超出最后一位，将尾指针移到0位置

  
  this.cnt++;

}
// 出队
Queue.prototype.dequeue = function() {
  if(this.empty()) return;
  this.head += 1;
  this.head %= this.arr.length;
  if(this.head === this.arr.length) this.head = 0; // 如果头指针超出最后一位，将尾指针移到0位置

  this.cnt--;
}

Queue.prototype.empty = function() {
  return this.cnt === 0;
}
Queue.prototype.full = function() {
  this.cnt === this.arr.length;
}
Queue.prototype.front = function() {
  return this.arr[this.head];
}
Queue.prototype.size = function() {
  return this.cnt;
}
Queue.prototype.clear = function() {
  this.head = this.tail = this.cnt = 0;
}
Queue.prototype.output = function(val) {
  let temp = [];
  for (let i = 0, j = this.head; i < this.cnt; i++) {
    temp.push(this.arr[j]);
    j++;
    if(j === this.arr.length) j = 0;
  }
  return temp;
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

let opts = ['insert', 'insert', 'insert','dequeue', 'insert', 'insert', 'dequeue', 'insert', 'insert'];
let vals = [1, 2, 3, '', 4, 5, '', 6, 7]
test(opts, vals)