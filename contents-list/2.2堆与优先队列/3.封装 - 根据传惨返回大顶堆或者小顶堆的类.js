/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-08 20:22:31
 * @LastEditTime: 2022-01-08 20:31:54
 * @LastEditors: changqing
 * @Usage: 
 */
let  maxHeap =require('./2.maxHeap');
let  minHeap =require('./1.minHeap');

/**
 * 
 * @param {*} type 
 */
function genHeap(type){
  return type==='max'?maxHeap:minHeap
}