/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    maxHeap.enqueue('x', stones[i]);
  }
  while (maxHeap.size() > 1) {
    const a = maxHeap.dequeue()['priority'];
    const b = maxHeap.dequeue()['priority'];
    if (a > b) {
      maxHeap.enqueue('x', a - b);
    }
  }
  return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority'];
};
// @lc code=end

