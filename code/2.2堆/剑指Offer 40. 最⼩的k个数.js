/*
 * @Description  : 
 * @Autor        : yanwang
 * @CreateDate   : 2022-01-02 07:39:19
 * @LastEditors  : yanwang
 * @LastEditTime : 2022-01-02 07:39:20
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 class Heap{
  constructor(data=[]){;
    this.data = data;
    this.heapify(); // 初始化堆
  }
  size(){
    return this.data.length;
  }
  // 创建时调整
  heapify(){
    if(this.size() < 2) return;
    for(let i = 1; i < this.size(); i++){
      this.bubbleUp(i); // 依次上浮操作
    }
  }
  // 查看堆顶元素
  peek(){
    if(!this.size()) return null;
    return this.data[0];
  }
  // 添加元素
  offer(val){
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  // 弹出堆顶元素
  poll(){
    if(!this.size()) return null;
    let res = this.data[0];
    this.data[0] = this.data.pop();
    if(this.size()){
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
      let parentIndex = Math.floor((index -1 ) / 2);
      if( this.data[index] < this.data[parentIndex] ) break;
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

      // 比较当前值是否大于左右子节点值
      let findIndex = index; // 记录最小值下标
      if(this.data[leftIndex] > this.data[findIndex]){
        findIndex = leftIndex;
      }
      if(this.data[rightIndex] > this.data[findIndex]){
        findIndex = rightIndex;
      }
      // 当前值不小于子节点的值
      if(index === findIndex) break;
      if(index != findIndex){
        this.swap(index, findIndex);
        index = findIndex;
      }
    }
  }
}

var getLeastNumbers = function(arr, k) {
    if(k === 0) return [];
    const maxHeap = new Heap();
    for(key of arr) {
        maxHeap.offer(key);
        if(maxHeap.size() > k) {
            maxHeap.poll();
        }
    }
    return maxHeap.data;
};