/**
 * 解题思路：
 *  1. 将链表尾结点连接到头节点，组成一个环
 *  2. 找到旋转后的链表头节点的前一个节点
 *  3. 拆环，返回头节点
 */
var rotateRight = function(head, k) {
  if(!head) return null;
  let tail = head;
  let len = 1;
  // 查找链表最后一个节点 同时 记录节点个数
  while(tail.next){ 
    tail = tail.next;
    len++;
  }
  // 此时tail指向最后一个节点， 将tail的next属性指向head,  
  tail.next = head;
  // 此时链表变成了一个环。

  // 将向右旋转变为向左旋转
  let n = len - (k % len);
  let pre = head, ret = head;

  // 用--n 目的少旋转一个，便于操作
  while(--n) { 
    pre = pre.next;
  }
  // ret指向新头节点
  ret = pre.next;

  // 将环拆开
  pre.next = null;
  return ret;
}