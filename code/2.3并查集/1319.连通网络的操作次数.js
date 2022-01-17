/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

/**
 * 题意可转化为将所有计算机链成一个集合
 * 所以答案为总集合数减一
 * 如果计算基数大于线缆树+1,则不可能全部链接
 */

class unionSet {
  constructor(n) {
    this.father = new Array(n).fill(0).map((val, i) => i);
  }
  find(x) {
    return this.father[x] = (this.father[x] === x ? x : this.find(this.father[x]));
  }
  merge(a, b) {
    this.father[this.find(a)] = this.find(b); 
  }
}
var makeConnected = function(n, connections) {
  // 如果计算机数量大于网线数量+1
  if(n > connections.length + 1) return -1;

  const u = new unionSet(n);
  for (let i = 0; i < connections.length; i++) {
    const conn = connections[i];
    u.merge(conn[0], conn[1]);
  }

  let cont = 0;
  for (let i = 0; i < n; i++) {
    if(u.find(i) === i) cont++;
  }
  // 返回没被两桶的计算机数量
  return cont - 1;
};
// @lc code=end

