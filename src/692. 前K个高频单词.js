/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-11 12:39:21
 * @LastEditTime: 2022-01-11 12:56:55
 * @LastEditors: changqing
 * @Usage: 
 */

//给一非空的单词列表，返回前 k 个出现次数最多的单词。
//返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

//输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
//输出: ["i", "love"]
//解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//注意，按字母顺序 "i" 在 "love" 之前。


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