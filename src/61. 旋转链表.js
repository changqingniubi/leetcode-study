/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-09 16:51:23
 * @LastEditTime: 2021-11-09 19:53:42
 * @LastEditors: changqing
 * @Usage: 
 */

//方法一：闭合为环
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let n = 1;
  let cur = head;
  while (cur.next) {
      cur = cur.next;
      n++;
  }

  let add = n - k % n;
  if (add === n) {
      return head;
  }

  cur.next = head;
  while (add) {
      cur = cur.next;
      add--;
  }

  const ret = cur.next;
  cur.next = null;
  return ret;
};

// 快慢指针
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  // 计算链表中节点个数
  let  len = calculateLen(head);
  k = k%len;
  // 慢指针初始指向头节点
  let slow = head;
  // 快指针初始指向头节点
  let fast = head;
  // 快指针先向前移动k步
  for(let i = 0; i < k; i++) {
    fast= fast.next;
  }
  // 快慢指针同时向前移动，直到快指针指向的节点的
  // 下一个节点为null
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  // 快指针此时在链表末尾
  // 然后其指向的节点的后继指针指向头节点
  // 这时链表首尾相连成环
  fast.next = head;
  // 新的头节点是慢指针所指节点的下一个节点
  head = slow.next;
  // 慢指针所指节点的的后继指针指向null
  // 断开环
  slow.next = null;
  return head;
}

function calculateLen(head){
  let len = 0;
  while (head!=null) {
      head = head.next;
      len++;
  }
  return len;
}
