/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-08 20:39:14
 * @LastEditTime: 2022-01-08 20:47:51
 * @LastEditors: changqing
 * @Usage: 
 */

//输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 小顶堆
class Heap {
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
    const res = this.data[0]; // 旧的头元素
    this.data[0] = this.data.pop(); // 将尾部元素，放到头的位置
    if(this.size()) { 
      this.bubbleDown(0); // 向下调整
    }
    return res;
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

var getLeastNumbers = function(arr, k) {
  let res =[];
  const minHeap = new Heap(arr);
  for(let i =0;i<k;i++){
    res.push(minHeap.poll());
  }
  return res;
};

let arr1=[4,5,1,6,2,7,3,8];
console.log(getLeastNumbers(arr1,4));

let arr2 = [3,2,1]
console.log(getLeastNumbers(arr2,2));

let arr3 = [0,1,2,1]
console.log(getLeastNumbers(arr3,1));