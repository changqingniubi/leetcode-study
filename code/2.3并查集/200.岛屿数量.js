/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

let count = 0;
class UnionSet {
  constructor(n = 100) {
    this.n = n;
    this.father = new Array(n);
    this.init(n);
  }
  init(n) {
    for (let i = 0; i < n; i++) this.father[i] = i;
  }
  
  find(x) {
    return this.father[x] = ((this.father[x] == x ? x : this.find(this.father[x])));
  }
  // 将 a 合并到 b,返回是否新合并
  merge(a, b) {
    const fa = this.find(a); // a的根节点
    const fb = this.find(b); // b的根节点
    if(fa === fb) return false; // 已经在一个集合中
    
    this.father[fa] = fb;
    return true;
  }
}

var numIslands = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  const u = new UnionSet(row * col);
  let count = 0;

  for (let i = 0; i < row; i++) { 
    for (let j = 0; j < col; j++) { 
      if (grid[i][j] == '0') continue;
      count++;

      // if (i > 0 && grid[(i - 1)][j] == '1') { // 左
      //   u.merge(i * col + j, (i - 1) * col + j) && count--; 
      // }
      // if (j > 0 && grid[i][j - 1] == '1') { // 上
      //   u.merge(i * col + j, i * col + j - 1) && count--; 
      // }

      if (j + 1 < col && grid[i] [j + 1] == '1') { // 右
        u.merge(i * col + j, i * col + j + 1) && count--; 
      } 
      if (i + 1 < row && grid[i + 1] [j] == '1') { // 下
        u.merge(i * col + j, (i + 1) * col + j) && count--; 
      }
    }
  }

  return count;
};

// @lc code=end
