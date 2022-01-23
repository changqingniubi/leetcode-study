/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-23 20:36:10
 * @LastEditTime: 2022-01-23 20:50:38
 * @LastEditors: changqing
 * @Usage: 
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
  // 返回没被联通的计算机数量
  return cont - 1;
};

let n = 4, connections = [[0,1],[0,2],[1,2]]

makeConnected(n, connections);
