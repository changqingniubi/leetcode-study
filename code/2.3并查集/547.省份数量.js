/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// 1.  染色法
var findCircleNum = function(isConnected) {
  let len = isConnected.length;
  const color = new Array(len);
  for (let i = 0; i < len; i++) color[i] = i;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if(isConnected[i][j]) {
        // 此处要定义变量保存color[j], 因为下面循环中会改变 color[j] 为 color[i]。
        // 导致j索引后面的元素不会被合并到i。
        const colJ = color[j]; 
        for (let k = 0; k < len; k++) {
          if(color[k] === colJ) color[k] = color[i];
        }
      }
    }
  }
  return new Set(color).size;
};

//2. 树结构
var findCircleNum = function(isConnected) {
  let len = isConnected.length;
  const father = new Array(len);
  for (let i = 0; i < len; i++) father[i] = i;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if(isConnected[i][j]) {
        father[getFather(j)] = getFather(i);
      }
    }
  }

  function getFather(x) {
    return father[x] === x ? x : getFather(father[x]);
  }

  let ans = 0;
  for (let i = 0; i < len; i++) {
    if(getFather(i) === i) ans++;
  }
  return ans;
}

//3. 树结构，增加优化
var findCircleNum = function(isConnected) {
  let len = isConnected.length;
  const father = new Array(len);
  const size = new Array(len); // 可优化getFather效率
  let count = len;
  for (let i = 0; i < len; i++) {
    father[i] = i;
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if(isConnected[i][j]) {
        let fI = getFather(i), fJ = getFather(j);
        if(fI === fJ) continue;
        if(size[fI] < size[fJ]) {
          father[fI] = fJ;
          size[fJ] += size[fI];
        } else {
          father[fJ] = fI;
          size[fI] += size[fJ];
        }
        count--; // 每合并一次，减少一个
      }
    }
  }

  function getFather(x) {
    return father[x] === x ? x : getFather(father[x]);
  }
  return count;
}


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

// @lc code=end