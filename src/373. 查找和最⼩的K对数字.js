/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-08 22:06:30
 * @LastEditTime: 2022-01-09 15:20:02
 * @LastEditors: changqing
 * @Usage: 
 */
//给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。
//定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
//请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

//输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
//输出: [1,2],[1,4],[1,6]


//思路
//最小的 k 对组合只会出现在 num1 的前 k 个数和 num2 的前 k 个数的组合中


// 大顶堆
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

      if(this.data[index]?.val < this.data[parentIndex]?.val) break;
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

      // 比较当前值是否小于左右子节点的值
      let findIndex = index;
      if(this.data[leftIndex]?.val > this.data[findIndex]?.val) {
        findIndex = leftIndex;
      }
      if(this.data[rightIndex]?.val > this.data[findIndex].val) {
        findIndex = rightIndex;
      }
      if(index === findIndex) break;
      this.swap(index, findIndex);
      index = findIndex;
    }
  }
}

var kSmallestPairs = function(nums1, nums2, k) {
  let heap=new Heap([])
  for (let i = 0; i < nums1.length; ++i) {
    for (let j = 0; j < nums2.length; ++j) {
      const sum = nums1[i]+ nums2[j];
      let item={
        val: sum,
        origin: [nums1[i], nums2[j]],
      }
      if (heap.size() < k) {
        heap.offer(item);
      }else if (heap.size() === k) {
        if(sum > heap.peek()?.val){
          break;
        }else{
          heap.poll();
          heap.offer(item);
        }
      }
    }
  }  
  let res=[];
  let size = heap.size()
  for(let i=0;i<size;i++){
    if (!heap.size()) break;
    res.unshift(heap.poll().origin)
  }
  return res
};


//let nums1 = [1,7,11,12], nums2 = [2,4,6], k = 3;
//console.log(kSmallestPairs(nums1, nums2, k))



//let nums1 = [1,1,2], nums2 = [1,2,3], k = 2;
//console.log(kSmallestPairs(nums1, nums2, k))

//let nums1 = [1,2], nums2 = [3], k = 3;
//console.log(kSmallestPairs(nums1, nums2, k))


let nums1 = [1,1,2], nums2 = [1,2,3], k = 10;
console.log(kSmallestPairs(nums1, nums2, k))

