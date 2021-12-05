

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//有效字符串需满足：
//左括号必须用相同类型的右括号闭合。
//左括号必须以正确的顺序闭合。


// 解法一

// 1.在任意位置上，左括号数量>=右括号数量
// 2. 在最后位置上，左括号数量等于有括号数量
// 3. 程序中只需记住左括号和有括号数量即可


 var isValid1 = function(s) {
    let lnum = 0, rnum = 0;
    for (let i = 0; i < s.length; i++) {
      switch(s[i]) {
        case '(': ++lnum; break;
        case ')': ++rnum; break;
      }
      if(rnum > lnum) return false;
    }
    return lnum === rnum;
  }
  
  var isValid2 = function(s) {
    let lnum = 0;
    for (let i = 0; i < s.length; i++) {
      switch(s[i]) {
        case '(':  ++lnum; break;
        case ')':  --lnum; break;
      }
      if(lnum < 0) return false;
    }
    return lnum === 0;
  }


// 方法二  利用栈

  var isValid3 = function(s) {
    let stack = [];
    let map={
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        if(cur==='('||cur==='['||cur==='{'){
            stack.push(s[i])
        }else{
            let temp = stack.pop();
            if(map[cur]!==temp){
                return false;
            }
        }
     
    }
    return stack.length===0;
    
  }


  var isValid4 = function(s) {
    let stack = [];
    let map={
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for (let k of s) {
        console.log(k)
        if(map[k]&&stack[stack.length-1]===map[k]){
            stack.pop()
        }else{
            stack.push(k)
        }
    }
    return stack.length===0;
    
  }

  s = "()[]{}"

  console.log(isValid4(s));