/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-08 21:38:36
 * @LastEditTime: 2022-01-08 22:01:51
 * @LastEditors: changqing
 * @Usage: 
 */


//我们可以使用一个大小为 k 的优先队列来存储前 k大的元素，其中优先队列的队头为队列中最小的元素，也就是第 k大的元素。
// 在单次插入的操作中，我们首先将元素 \textit{val}val 加入到优先队列中。如果此时优先队列的大小大于 kk，我们需要将优先队列的队头元素弹出，以保证优先队列的大小为 kk。

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.heapify();
  }
  size() {
    return this.data.length;
  }
  // 创建时堆数据调整
  heapify() {
    if(this.size < 2) return;
    for(let i = 1; i < this.data.length; i++) {
      this.bubbleUp(i);
    }
  }

  // 尾部插入元素
  offer(val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  // 头部弹出
  poll() {
    if(!this.size()) return null;
    if(this.size()==1){
      return this.data.pop()
    }
    const res = this.data[0]; // 旧的头元素
    this.data[0] = this.data.pop(); // 将尾部元素，放到头的位置
    if(this.size()) { 
      this.bubbleDown(0); // 向下调整
    }
    return res;
  }
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }
  // 交换元素
  swap(i, j) {
    if(i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // 向上调整
  bubbleUp(index) {
    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // let parentIndex = (index - 1) >> 1;

      if(this.data[index] > this.data[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // 向下调整
  bubbleDown(index) {
    let lastIndex = this.size() - 1;
    while( index < lastIndex) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      // 比较当前值是否大于左右子节点的值
      let findIndex = index;
      if(this.data[leftIndex] < this.data[findIndex]) {
        findIndex = leftIndex;
      }
      if(this.data[rightIndex] < this.data[findIndex]) {
        findIndex = rightIndex;
      }
      if(index === findIndex) break;
      this.swap(index, findIndex);
      index = findIndex;
    }
  }
}

var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const x of nums) {
      this.add(x);
  }
};

KthLargest.prototype.add = function(val) {
  this.heap.offer(val);
  if (this.heap.size() > this.k) {
      this.heap.poll();
  }
  return this.heap.peek();
};

let  kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4));   // return 8