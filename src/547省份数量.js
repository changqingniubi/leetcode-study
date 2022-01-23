/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-23 16:57:21
 * @LastEditTime: 2022-01-23 17:29:44
 * @LastEditors: changqing
 * @Usage: 
 */


// 提取并查集
class UnionSet {
  constructor(n) {
    this.father = new Array(n).fill(0).map((val, ind) => ind);
    this.size = new Array(n).fill(1);

    this.count = n;
  }
  find(x) {
    return this.father[x] = (this.father[x] === x ? x : this.find(this.father[x]));
  }
  merge(a, b) {
    let Fa = this.find(a), Fb = this.find(b);
    if (Fa === Fb) return;
    if(this.size[Fa] < this.size[Fb]) {
      this.father[Fa] = Fb;
      this.size[Fb] += this.size[Fa];
    } else {
      this.father[Fb] = Fa;
      this.size[Fa] += this.size[Fb];
    }
    this.count--;
  }
}


var findCircleNum = function(isConnected) {
  const len = isConnected.length;
  const u = new UnionSet(len);
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if(isConnected[i][j]) {
        u.merge(i, j);
      }
    }
  }
  return u.count;
}