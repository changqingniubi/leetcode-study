/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let array = [];
  for(let i = 0; i<nums1.length; i++){
    for (let j = 0; j < nums2.length; j++) {
      array.push([nums1[i], nums2[j]])
    }
  }
  array.sort((a,b)=>{
    return (a[0]+a[1]) - (b[0] + b[1])
  });
  return array.slice(0, k);
};

// var kSmallestPairs = function(nums1, nums2, k) {
//   let heap = [];

//   for(let i = 0; i<nums1.length; i++){
//     for (let j = 0; j < nums2.length; j++) {
//       if(heap.length < k){
//         heap.push([nums1[i], nums2[j]]);
//         shiftUp(heap, heap.length - 1);
//       } else if(
//         nums1[i]+ nums2[j] < heap[0][0] + heap[0][1]
//       ){
//         heap[0] = [nums1[i], nums2[j]];
//         shiftDown(heap, 0);
//       }
//     }
//   }
//   return heap.sort((a,b)=>{
//     return (a[0] + a[1]) - (b[0] + b[1])
//   });
// };
// function shiftUp(heap, index){
//   const parentIndex = (index-1)/2 | 0;
//   if(heap[index][0]+heap[index][1] > heap[parentIndex][0]+heap[parentIndex][1]){
//     swap(heap, index, parentIndex);
//     shiftUp(heap, parentIndex);
//   }
// }
// function shiftDown(heap, index){
//   let leftIndex = index * 2 + 1;
//   let rightIndex = index * 2 + 2;
//   let maxChildIndex = leftIndex;
//   if(heap.length > rightIndex && (heap[leftIndex][0]+heap[leftIndex][1] < heap[rightIndex][0]+heap[rightIndex][1])){
//     maxChildIndex = rightIndex;
//   }
//   if(heap[index][0]+heap[index][1] < heap[maxChildIndex][0]+heap[maxChildIndex][1]){
//     swap(heap, index, maxChildIndex);
//     shiftDown(heap, maxChildIndex);
//   }
// }
// function swap(heap, index, parent){
//   [heap[index], heap[parent]] = [heap[parent], heap[index]]
// }
// @lc code=end

