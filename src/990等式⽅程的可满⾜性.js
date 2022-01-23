/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-23 17:54:00
 * @LastEditTime: 2022-01-23 18:01:20
 * @LastEditors: changqing
 * @Usage: 
 */
/**
 * 两次扫描，第一次遇到 == 进行合并
 * 第二次，遇到 != 如果在一个集合中返回false
 */
 class UnionSet {
  constructor() {
    this.father = new Array(26).fill(0).map((val, index) => index);
  }
  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if(fa === fb) return;
    this.father[fa] = fb;
  }
  find(x) {
    return this.father[x] = (this.father[x] === x ? x : this.find(this.father[x]));
  }
}
var equationsPossible = function(equations) {
  const u = new UnionSet();
  // 联通所有==
  for (let equ of equations) {
    let op = equ[1];
    if(op === '!') continue;
    
    let a = equ[0].charCodeAt() - 'a'.charCodeAt();
    let b = equ[3].charCodeAt() - 'a'.charCodeAt();
    u.merge(a, b);
  }
  // 如果 != 两边的值在一个集合中返回 false
  for (let equ of equations) {
    let op = equ[1];
    if(op === '=') continue;

    let a = equ[0].charCodeAt() - 'a'.charCodeAt();
    let b = equ[3].charCodeAt() - 'a'.charCodeAt();
    if(u.find(a) === u.find(b)) return false;
  }
  return true;
};