/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-10 17:26:50
 * @LastEditTime: 2021-11-10 18:16:52
 * @LastEditors: changqing
 * @Usage: 
 */

// 方法一：计算链表长度

var removeNthFromEnd = function(head, n) {
  let dummy = {val:0,next:head};
  let length = getLength(head);
  let cur = dummy;
  for (let i = 1; i < length - n + 1; ++i) {
      cur = cur.next;
  }
  // cur 的下个节点是要删除的节点
  cur.next = cur.next.next;
  let ans = dummy.next;
  return ans;
};

function getLength(head) {
  let length = 0;
  while (head != null) {
      ++length;
      head = head.next;
  }
  return length;
}

// 方法二：栈

var removeNthFromEnd =function(head,n) {
  let dummy = {val:0,next:head};
  let stack = [];
  let cur = dummy;
  while (cur != null) {
      stack.push(cur);
      cur = cur.next;
  }
  for (let i = 0; i < n; ++i) {
      stack.pop();
  }
  let prev = stack[stack.length-1];
  prev.next = prev.next.next;
  let ans = dummy.next;
  return ans;
}
