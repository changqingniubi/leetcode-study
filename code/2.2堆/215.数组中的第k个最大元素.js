/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
  let heap = [];
  for (let i = 0; i < nums.length; i++) {
    if(heap.length < k){
      heap.push(nums[i]);
      shiftUp(heap, heap.length-1);
    } else if( nums[i] > heap[0] ) {
      heap[0] = nums[i];
      shiftDown(heap, 0);
    }
  }
  return heap[0];
};
function shiftUp(heap, index){
  let parentIndex = (index - 1)/2 | 0;
  if(heap[index] < heap[parentIndex]){
    swap(heap, index, parentIndex);
    shiftUp(heap, parentIndex);
  }
}
function shiftDown(heap, index){
  let leftIndex = index * 2 + 1;
  let rightIndex = leftIndex + 1;
  let minChildIndex = leftIndex;
  if(heap[leftIndex] > heap[rightIndex]){
    minChildIndex = rightIndex;
  }
  if(heap[index] > heap[minChildIndex]){
    swap(heap, index, minChildIndex);
    shiftDown(heap, minChildIndex);
  }
}
function swap(heap, i, j){
  [heap[i], heap[j]] = [heap[j], heap[i]]
}
// @lc code=end

