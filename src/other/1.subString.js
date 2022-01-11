/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-11 20:38:42
 * @LastEditTime: 2022-01-11 20:57:38
 * @LastEditors: changqing
 * @Usage: 
 */
let  GraphemeSplitter = require('grapheme-splitter')
var splitter = new GraphemeSplitter();

// let a = splitter.splitGraphemes("abcd"); // returns ["a", "b", "c", "d"]
// console.log(a);
// let b =splitter.splitGraphemes("अनुच्छेद"); // returns ["अ","नु","च्","छे","द"]
// console.log(b);

//1. 定义一个 res = ''
//2. 先用这个库的 splitGraphemes 方法，把每个 unicode 截出来，得到 arr
//3. 遍历 arr，if (res.length + item.length < 50) res+=item
//4. else break
/**
 * @description: 
 * @param {*}
 * @return {*}
 */

function subString(str,len){
  let res='';
  let arr = splitter.splitGraphemes(str);
  for(let i=0;i<arr.length;i++){
      let cur = arr[i];
      if(res.length+cur.length<=len){
        res+=cur
      }else{
        break;
      }
  }
  return res;
}