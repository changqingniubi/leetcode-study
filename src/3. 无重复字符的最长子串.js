/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-16 11:01:16
 * @LastEditTime: 2022-01-16 21:30:00
 * @LastEditors: changqing
 * @Usage: 
 */


//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度

//输入: s = "abcabcbb"
//输出: 3 
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var lengthOfLongestSubstring = function(s) {
  if(s===null) return 0;
  if(s.length===0) return 0;
  let res=0;
  let map=new Map();
  for(let i=0,j=0;i<s.length;i++){
      if(map.has(s.charAt(i))){
        j=Math.max(j,map.get(s.charAt(i))+1)
      }
      map.set(s.charAt(i),i)
      res=Math.max(res,i-j+1)
  }
  return res;
};


var lengthOfLongestSubstring2 = function(s) {
    // 哈希集合，记录每个字符是否出现过
    let set=new Set();
    let n= s.length
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
   let rk = -1, ans = 0;
    for(let i=0,j=0;i<n;i++){
      if (i != 0) {
        // 左指针向右移动一格，移除一个字符
        set.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      set.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};


//  let s = "abcabcbb"
//  console.log(lengthOfLongestSubstring2(s));


let s = "pwwkew"
console.log(lengthOfLongestSubstring2(s));

//let s = "bbbbb"
//console.log(lengthOfLongestSubstring(s));


// let s = " "
// console.log(lengthOfLongestSubstring(s));



