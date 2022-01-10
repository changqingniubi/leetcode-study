/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function(k, nums) {
//   this.datas = nums;
//   this.k = k;
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */

var KthLargest = function(k, nums) {
  this.heap = new Heap(nums);
  this.k = k;
};

KthLargest.prototype.add = function(val) {
  this.heap.offer(val);
  while(this.heap.size() > this.k){
    this.heap.poll();
  }
  return this.heap.peek();
};

// 小顶堆
class Heap{
  constructor(data=[]){;
    this.data = data;
    this.heapify();
  }
  size(){
    return this.data.length;
  }
  // 创建时调整
  heapify(){
    if(this.size()<2) return;
    for(let i = 1; i<this.size(); i++){
      this.bubbleUp(i);
    }
  }
  // 查看堆顶元素
  peek(){
    if(!this.size()){return null}
    return this.data[0];
  }
  // 添加元素
  offer(val){
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  // 弹出堆顶元素
  poll(){
    if(!this.size()){return null;}
    let res = this.data[0];
    if(this.size()){
      this.data[0] = this.data.pop();
      this.bubbleDown(0);
    }
    return res;
  }
  swap(i, j){
    if(i === j ){return;}
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  // 向上调整
  bubbleUp(index){
    while(index > 0){
      let parentIndex = Math.floor((index-1) / 2);
      if( this.data[index] > this.data[parentIndex] ) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  // 向下调整
  bubbleDown(index){
    let lastIndex = this.size() - 1;
    while(index < lastIndex){
      let leftIndex = index * 2 + 1;
      let rightIndex = leftIndex + 1;
      let findIndex = index;
      if(this.data[leftIndex] < this.data[findIndex]){
        findIndex = leftIndex;
      }
      if(this.data[rightIndex] < this.data[findIndex]){
        findIndex = rightIndex;
      }
      if(index === findIndex) break;
      if(index != findIndex){
        this.swap(index, findIndex);
        index = findIndex;
      }
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

