/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-17 12:29:48
 * @LastEditTime: 2022-01-23 20:35:23
 * @LastEditors: changqing
 * @Usage: 
 */
/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */

class unionSet {
  constructor(n) {
    this.father = new Array(n).fill(0).map((val, i) => i);
  }
  find(x) {
    return this.father[x] === x ? x : this.find(this.father[x]);
  }
  merge(a, b) {
    this.father[this.find(a)] = this.find(b);
  }
}

var findRedundantConnection = function(edges) {
  const u = new unionSet(edges.length);
  let ret = [];
  // 如果不在一个集合中就联通，如果已经在一个集合中就记录成答案
  for (let i = 0; i < edges.length; i++) {
    const val = edges[i];
    if(u.find(val[0]) === u.find(val[1])) ret = val;
    u.merge(val[0], val[1]);
  }

  return ret;
};
// @lc code=end