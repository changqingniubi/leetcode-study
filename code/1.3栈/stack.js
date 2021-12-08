class Stack {
  constructor(n) {
    this.arr = new Array(n); // 存储栈数据
    this.top = -1; // 栈顶指针指向栈顶数据
    this.max = n;
  }
}
// 入栈
Stack.prototype.push = function(value) {
  // 栈顶指针向上移动一位，
  // 放入元素
  if(this.full()) return;
  this.arr[++this.top] = value;
}

// 出栈
Stack.prototype.pop = function() {
  if(this.empty()) return;
  // 栈顶置针向下移动一位
  // 返回旧的栈顶元素
  return this.arr[this.top--];
}

// 查看栈顶元素
Stack.prototype.peek = function() {
  return this.arr[this.top];
}

// 判空
Stack.prototype.empty = function() {
  return this.top === -1;
}
Stack.prototype.full = function() {
  return this.top  >= this.max - 1;
}


Stack.prototype.size = function() {
  return this.top + 1;
}

Stack.prototype.output = function() {
  let ret = '';
  for (let i = this.top; i >=0; i--) {
    ret += `${this.arr[i]},`;
  }
  console.log(ret);
}
function test() {
  let stack = new Stack(4);
  stack.push(1);
  stack.push(2);
  stack.pop();
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.output();
}
test();