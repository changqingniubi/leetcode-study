/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-14 18:47:58
 * @LastEditTime: 2022-01-14 19:00:43
 * @LastEditors: changqing
 * @Usage: 
 */
function all2b(str) {
  var result='';
  for(let i=0;i<str.length;i++) {
    let code=str.charCodeAt(i);
    // #全角空格直接转换
    if (code == 12288){
      code = 32
      result+=String.fromCharCode(code-65248);
    }else if(code>=65281&&code<65373){ //#全角字符（除空格）根据关系转化 “65248”是转换码距
      result+=String.fromCharCode(code-65248);
    } else result+=str.charAt(i);
  }
  return result;
}