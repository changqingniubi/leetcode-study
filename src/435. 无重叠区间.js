/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-08-06 15:41:10
 * @LastEditTime: 2021-08-07 12:06:08
 * @LastEditors: changqing
 * @Usage: 
 */

// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

// 注意:

// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

// 示例 1:

// 输入: [ [1,2], [2,3], [3,4], [1,3] ]

// 输出: 1

// 解释: 移除 [1,3] 后，剩下的区间没有重叠。
// 示例 2:

// 输入: [ [1,2], [1,2], [1,2] ]

// 输出: 2

// 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
// 示例 3:

// 输入: [ [1,2], [2,3] ]

// 输出: 0

// 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。


/* 方法一：动态规划
思路与算法

题目的要求等价于「选出最多数量的区间，使得它们互不重叠」。由于选出的区间互不重叠，因此我们可以将它们按照端点从小到大的顺序进行排序，并且无论我们按照左端点还是右端点进行排序，得到的结果都是唯一的。
这样一来，我们可以先将所有的 n 个区间按照左端点（或者右端点）从小到大进行排序，随后使用动态规划的方法求出区间数量的最大值。设排完序后这 n 个区间的左右端点分别为l0,⋯,ln−1
​以及 r0,⋯,rn−1，那么我们令 f(i）表示「以区间 i 为最后一个区间，可以选出的区间数量的最大值」，状态转移方程即为：

  f(i)=max(f(i), f(j)+1)

即我们枚举倒数第二个区间的编号 j，满足 j<i，并且第 j 个区间必须要与第 i 个区间不重叠。由于我们已经按照左端点进行升序排序了，因此只要第 j 个区间的右端点 rj没有越过第 i 个区间的左端点 li
​，即 rj <= li ​，那么第 j 个区间就与第 i 个区间不重叠。我们在所有满足要求的 j 中，选择 f(j) 
最大的那一个进行状态转移，如果找不到满足要求的区间，那么状态转移方程中 min 这一项就为 0，f(i) 就为 1。
最终的答案即为所有 f(i) 中的最大值。 */
  
function eraseOverlapIntervals(intervals) {
  if (intervals.length===0) {
      return 0;
  }
  intervals = intervals.sort(function(a,b){
    return a[0] - b[0];
  })
  //以区间 i 为最后一个区间，可以选出的区间数量的最大值
  let obj={
    
  }
  intervals.forEach((element,index) => {
    obj[index]=1;
  });
  let n = intervals.length;
  for (let i = 1; i < n; ++i) {
      for (let j = 0; j < i; ++j) {
        if (intervals[j][1] <= intervals[i][0]) {
            obj[i] = Math.max(obj[i],obj[j]+1);
        }
      }
  }
  //求出obj中最大的值
  let max = Math.max(...Object.values(obj))
  console.log('max',max)
  return n - max;
}

// let intervals1 =[ [1,2], [2,3], [3,4], [1,3] ];
// console.log(eraseOverlapIntervals(intervals1));
// // 输出: 1

// let intervals2 =[ [1,2], [1,2], [1,2] ];
// console.log(eraseOverlapIntervals(intervals2));
// // 输出: 2

// let intervals3 =[ [1,2], [2,3] ];
// console.log(eraseOverlapIntervals(intervals3));
// // 输出: 0

// let intervals4=[[1,100],[11,22],[1,11],[2,12]];
// console.log(eraseOverlapIntervals(intervals4));
// 输出: 2




// 方法二：贪心
// 思路与算法

// 我们不妨想一想应该选择哪一个区间作为首个区间。

// 假设在某一种最优的选择方法中，[lk, rk] 是首个（即最左侧的）区间，那么它的左侧没有其它区间，右侧有若干个不重叠的区间。设想一下，如果此时存在一个区间 [lj, rj]，使得 rj < rk
// ​
//  ，即区间 j 的右端点在区间 k 的左侧，那么我们将区间 k 替换为区间 j，其与剩余右侧被选择的区间仍然是不重叠的。而当我们将区间 k 替换为区间 j 后，就得到了另一种最优的选择方法。

// 我们可以不断地寻找右端点在首个区间右端点左侧的新区间，将首个区间替换成该区间。那么当我们无法替换时，首个区间就是所有可以选择的区间中右端点最小的那个区间。因此我们将所有区间按照右端点从小到大进行排序，那么排完序之后的首个区间，就是我们选择的首个区间。

// 如果有多个区间的右端点都同样最小怎么办？由于我们选择的是首个区间，因此在左侧不会有其它的区间，那么左端点在何处是不重要的，我们只要任意选择一个右端点最小的区间即可。

// 当确定了首个区间之后，所有与首个区间不重合的区间就组成了一个规模更小的子问题。由于我们已经在初始时将所有区间按照右端点排好序了，因此对于这个子问题，我们无需再次进行排序，只要找出其中与首个区间不重合并且右端点最小的区间即可。用相同的方法，我们可以依次确定后续的所有区间。

// 在实际的代码编写中，我们对按照右端点排好序的区间进行遍历，并且实时维护上一个选择区间的右端点right。如果当前遍历到的区间 [li, ri]
// 与上一个区间不重合，即
// li ≥right，那么我们就可以贪心地选择这个区间，并将 right 更新为 ri


function eraseOverlapIntervals2(intervals) {
  if (intervals.length===0) {
      return 0;
  }
  intervals = intervals.sort(function(a,b){
    return a[1] - b[1];
  })

  let n = intervals.length;
  let right = intervals[0][1];
  let ans = 1;
  for (let i = 1; i < n; ++i) {
      if (intervals[i][0] >= right) {
          ++ans;
          right = intervals[i][1];
      }
  }
  return n - ans;
}

let intervals1 =[ [1,2], [2,3], [3,4], [1,3] ];
console.log(eraseOverlapIntervals2(intervals1));
// 输出: 1

let intervals2 =[ [1,2], [1,2], [1,2] ];
console.log(eraseOverlapIntervals2(intervals2));
// 输出: 2

let intervals3 =[ [1,2], [2,3] ];
console.log(eraseOverlapIntervals2(intervals3));
// 输出: 0

let intervals4=[[1,100],[11,22],[1,11],[2,12]];
console.log(eraseOverlapIntervals2(intervals4));
// [1,11],[2,12],[11,22],[1,100]
//输出: 2
