/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = {};
  for(let word of words){
    if(map[word]){
      map[word]++;
    }else {
      map[word] = 1;
    }
  }
  let keys = Object.keys(map).sort((a,b)=>{
    if(map[a] > map[b]){
      return -1;
    } else if(map[a] < map[b]){
      return 1;
    } else {
      if(a > b){
        return 1;
      } else if(a < b){
        return -1;
      } else {
        return 0;
      }
    }
  })
  return keys.slice(0, k);
};
// @lc code=end

