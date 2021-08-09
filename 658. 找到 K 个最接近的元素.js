/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-06 11:03:09
 * @LastEditTime: 2021-08-06 15:37:20
 * @LastEditors: changqing
 * @Usage: 
 */
/* 链接：https://leetcode-cn.com/problems/find-k-closest-elements/
规则：给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
整数 a 比整数 b 更接近 x 需要满足：
|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b */

//二叉查找和双指针
// 算法
// 原本的数组是有序的，所以我们可以像如下步骤利用这一特点。

// 如果目标 x 小于等于有序数组的第一个元素，那么前 k 个元素就是答案。
// 类似的，如果目标 x 大于等于有序数组的最后一个元素，那么最后 k 个元素就是答案。
// 其他情况，我们可以使用二分查找来找到恰好大于 x 一点点的元素的索引 index 。然后让 low 等于 index 左边 k-1 个位置的索引，high 等于 index 右边 k-1 个位置的索引。我们需要的 k 个数字肯定在范围 [index-k-1, index+k-1] 里面。所以我们可以根据以下规则缩小范围以得到答案。
// 如果 low 小于 0 或者 low 对应的元素比 high 对应的元素更接近 x ，那么减小 high 索引。
// 如果 high 大于最后一个元素的索引 arr.size()-1 或者它比起 low 对应的元素更接近 x ，那么增加 low 索引。
// 当且仅当 [low, high] 之间恰好有 k 个元素，循环终止，此时范围内的数就是答案。

// 复杂度分析

// 时间复杂度： O(\log n +k)O(logn+k)。O(\log n)O(logn) 是二分查找的时间，O(k)O(k) 是压缩剩 kk 个元素的时间。

// 空间复杂度： O(k)O(k)。产生结果数组所需要的空间。

function findClosestElements(arr,k,x) {
  let ret = arr;
  let n = ret.length;
  if (x <= ret[0]) {
  return ret.slice(0, k);
  } else if (ret[n - 1] <= x) {
  return ret.slice(n - k, n);
  } else {
    let index = binarySearch(ret, x);
    let low,high;
  if (index >= 0){
    low = Math.max(0, index - k - 1);
    high = Math.min(ret.length - 1, index + k - 1);
  }else{
    index = -index - 1;
    low = Math.max(0, index - k - 1);
    high = Math.max(ret.length - 1, index + k - 1);
  }
  while (high - low > k - 1) {
    // 整数 a 比整数 b 更接近 x 需要满足：
    // |a - x| < |b - x| 或者
    // |a - x| == |b - x| 且 a < b 
    if (compare(ret[low],ret[high],x))
      high--;
    else if (compare(ret[high],ret[low],x))
      low++;
    else if(Math.abs(ret[low]-x)===Math.abs(ret[high]-x))
      high--;
    else console.log("unhandled case: " + low + " " + high);
  }
  return ret.slice(low, high + 1);
  }
}

function binarySearch(a,m) {
  if(a.length == 0) return -1;
  let begin = 0;    //起始位置
  let end = a.length - 1;    //末尾位置
  let mid = Math.ceil((begin + end) / 2);    //要查找的中间位置
  
  while(begin <= end) {
      if(a[mid] == m) {    //返回找到的位置
          return mid;
      }else if(a[mid] > m) {    //如果中间位置的值比所要找的值大，那么末尾位置指向中间位置的上一个位置
          end = mid - 1;
      }else{    //如果中间位置的值比所要找的值小，那么起始位置指向中间位置的下一个位置
          begin = mid + 1;
      }
      mid = Math.ceil((begin + end) / 2);
  }
  return -1;
}
// 整数 a 比整数 b 更接近 x 需要满足：
// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b */
function compare(a,b,x){
  return Math.abs(a-x)<Math.abs(b-x) || (Math.abs(a-x)===Math.abs(b-x) && a < b)
}

let a = [ 1, 3, 6, 8, 9, 10, 12, 18, 20, 34 ];
let i = 12; 
console.log("您所要查找数  "+i+" 的位置是: "+binarySearch(a,i));



// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]
let arr1 = [1,2,3,4,5], k = 4, x = 3
console.log(findClosestElements(arr1,k,x));


// 输入：arr = [1,2,3,4,5], k = 4, x = -1
// 输出：[1,2,3,4]

let arr2 = [1,2,3,4,5], k2 = 4, x2 = -1;
console.log(findClosestElements(arr2,k2,x2));


let arr3 = [1,1,1,10,10,10], k3 = 1, x3 = 9;
console.log(findClosestElements(arr3,k3,x3));