/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-11 16:32:20
 * @LastEditTime: 2021-12-11 17:27:37
 * @LastEditors: changqing
 * @Usage: 
 */

//给你一个由 '('、')' 和小写字母组成的字符串 s。
//你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
//请返回任意一个合法字符串。
//有效「括号字符串」应当符合以下 任意一条 要求：
//空字符串或只包含小写字母的字符串
//可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
//可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」




//解法一


//首先分析 有效 字符串的含义。
//当且仅当 满足以下条件时，字符串中的括号是平衡的：
//字符串中有相同数量的 "(" 和 ")"。
//从左至右遍历字符串，统计当前 "(" 和 ")" 的数量，永远不会出现 ")" 的数量大于 "(" 的数量，称 count("(") - count(")") 为字符串的余量。

//应该让每个 ")" 都与离它最近且尚未匹配的 "(" 匹配。如何在代码中做到这一点？需要知道未匹配的 "(" 的索引。
//使用 栈，每次遇到 "("，都将它的索引压入栈中。每次遇到 ")"，都从栈中移除一个索引，用该 ")" 与栈顶的 "(" 匹配。栈的深度等于余量。需要执行以下操作：
//如果在栈为空时遇到 ")"，则删除该 ")"，防止余量为负。
//如果扫描到字符串结尾有 "("，则删除它，防止余量不为 0

//算法

//将思路的所有内容转换为两步算法：

//确定所有需要删除字符的索引。
//根据删除字符的索引创建一个新字符串。


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let indexesToRemove =new Set();
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      let cur = s[i];
      if(cur=='('){
          stack.push(i)
      }
      if(cur==")"){
          if(stack.length==0){
            indexesToRemove.add(i)
          }else{
            stack.pop()
          }
      }
  }
  while (stack.length!==0) indexesToRemove.add(stack.pop());
  let res = [];
  for (let i = 0; i < s.length; i++) {
      if (!indexesToRemove.has(i)) {
          res.push(s[i])
      }
  }
  return res.join("");
}

//输入：s = "lee(t(c)o)de)"
//输出："lee(t(c)o)de"
let s1 = "lee(t(c)o)de)"
console.log(minRemoveToMakeValid(s1))


//输入：s = "a)b(c)d"
//输出："ab(c)d"

let s2 = "a)b(c)d";
console.log(minRemoveToMakeValid(s2))


//输入：s = "(a(b(c)d)"
//输出："a(b(c)d)"

let s3 = "(a(b(c)d)";
console.log(minRemoveToMakeValid(s3))