/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-09 11:18:23
 * @LastEditTime: 2022-01-09 11:32:32
 * @LastEditors: changqing
 * @Usage: 
 */
interface item {
  val: number;
  origin: [number, number]
}

// 小顶堆
class Heap {
  data: item[];

  constructor(data: item[] = []) {
      this.data = data;
      this.heapify();
  }

  getData() {
      return this.data;
  }

  peek() {
      return this.data[0];
  }

  size() {
      return this.data.length;
  }

  // 创建时堆数据调整
  heapify() {
      if (this.size() < 2) return;
      for (let i = 1; i < this.data.length; i++) {
          this.bubbleUp(i);
      }
  }

  // 头部弹出
  poll() {
      if (!this.size()) return null;
      if (this.size() === 1) return this.data.pop();
      const res = this.data[0]; // 旧的头元素
      this.data[0] = this.data.pop() as item; // 将尾部元素，放到头的位置
      if (this.size()) {
          this.bubbleDown(0); // 向下调整
      }
      return res;
  }

  // 尾部插入元素
  offer(val: item) {
      this.data.push(val);
      this.bubbleUp(this.size() - 1);
  }

  // 交换元素
  swap(i: number, j: number) {
      if (i === j) return;
      const old = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = old;
  }

  // 向上调整
  bubbleUp(index: number) {
      while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.data[index]?.val < this.data[parentIndex]?.val) break;
          this.swap(index, parentIndex);
          index = parentIndex;
      }
  }

  // 向下调整
  bubbleDown(index: number) {
      const lastIndex = this.size();
      while (index < lastIndex) {
          const leftIndex = index * 2 + 1;
          const rightIndex = index * 2 + 2;
          let findIndex = index;
          if (this.data[findIndex]?.val < this.data[leftIndex]?.val) findIndex = leftIndex;
          if (this.data[findIndex]?.val < this.data[rightIndex]?.val) findIndex = rightIndex;
          if (index === findIndex) break;
          this.swap(index, findIndex);
          index = findIndex;
      }
  }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const heap = new Heap();
  for (const val1 of nums1) {
      for (const val2 of nums2) {
          const sum = val1 + val2;
          if (heap.size() === k && sum > heap.peek()?.val) {
              break;
          }
          heap.offer({
              val: val1 + val2,
              origin: [val1, val2],
          })
          if (heap.size() > k) heap.poll();

      }
  }

  const res = [];
  for (let i = 0; i < k; i++) {
      if (!heap.size()) break;
      res.unshift(heap.poll().origin);
  }
  return res;
};