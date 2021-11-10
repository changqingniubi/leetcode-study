/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-09 20:31:58
 * @LastEditTime: 2021-11-10 12:51:08
 * @LastEditors: changqing
 * @Usage: 
 */


// 01 递归

var swapPairs = function(head) {
  // 如果当前结点为null或当前结点下一个结点为null
  // 则递归终止
  if (head == null || head.next == null)
     return head;

  // subResult是head.next.next之后的结点两两交换后的头结点
  let subResult = swapPairs(head.next.next);
  let headNext = head.next;
  headNext.next = head;
  head.next = subResult;
  return headNext;
};

// 02 迭代法

var swapPairs = function(head) {
  let dummyHead = {val:0,next:null};
  dummyHead.next = head;

  let prev = dummyHead;
  // 只有当prev指向的结点之后有两个结点时才需要交换
  while (prev.next != null && prev.next.next != null) {
      let node1 = prev.next;
      let node2 = node1.next;
      let subHead = node2.next;

      node2.next = node1;
      node1.next = subHead;
      prev.next = node2;

      // prev指向交换后的结点的第二个结点，
      // 即未交换结点的前一个结点
      prev = node1;
  }
  return dummyHead.next;
};