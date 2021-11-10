/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-08 19:58:32
 * @LastEditTime: 2021-11-08 21:00:26
 * @LastEditors: changqing
 * @Usage: 
 */
//1. 迭代解法
var reverseList = function(head) {
  if(!head){
    return head;
  }
  let pre=null;
  let curr=head;
  while(curr){
    let next = curr.next;
    curr.next=pre;
    pre=curr;
    curr=next;
  }
  return pre;
};


// 2. 递归解法


var reverseList = function(head) {
  if (head == null || head.next == null) return head
  const p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
};
