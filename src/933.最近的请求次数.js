/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-27 20:57:03
 * @LastEditTime: 2021-11-27 21:07:40
 * @LastEditors: changqing
 * @Usage: 
 */


/**
 * 解法一：移动指针要比解法二操作数据好
 */
var RecentCounter = function() {
  this.pings = new Array();
  this.cur = 0; // 记录第一个有效位置
};

/** 
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function(t) {
  this.pings.push(t);
  while(t - this.pings[this.cur] - 3000 > 0){
    this.cur++;
  }
  return this.pings.length - this.cur;
};



/**
 * 解法二
 */
var RecentCounter = function() {
  this.pings = [];
};
RecentCounter.prototype.ping = function(t) {
  this.pings.push(t);
  while(t - this.pings[0]> 3000) this.pings.shift();
  return this.pings.length;
};