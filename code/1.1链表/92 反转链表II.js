
// 迭代
/**
 * 思路： 
 * 1. 找到需要翻转的头节点的前一个节点
 * 2. reserve函数：
 *       翻转以头节点开始的k个节点，
 *       返回包含后面未反转部分的新链表
 * 3. 链接前半部分和部分新的链表
 */

// 翻转链表开头 n 个节点，然后返回。
const reserve = function(head, n){
  if(!head) return null;
  let pre = null, cur = head;
  // 翻转前k个节点
  while(cur && n-- > 0) { // 3
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }

  // cur

  // head: 翻转部分的尾结点, pre: 翻转部分的头节点
  // cur: 剩余部分的头节点
  head.next = cur;
  return pre;
}

var reverseBetween = function(head, left, right) {
  if(!head || !head.next) return head;
  if(right - left === 0) return head;
  
  let ret = new ListNode(null, head); // 如果可能更换头节点，就需要用到虚拟头节点

  // 查找left节点的 前一个节点
  let l = left;
  let pre = ret;
  while(--l) {
    pre = pre.next;
  }

  // 此时pre为需要翻转的节点的前一个节点
  // reserve 返回pre之后部分的链表，且left 到 right 部分已被翻转。
  pre.next = reserve(pre.next, right - left + 1);

  return ret.next;
}



// 递归
/**
 * reverseN: 
 *    翻转以头节点开始的k个节点，
 *    返回包含后面未反转部分的新链表
 */
function reverseN(head, n) {
  if(n === 1) return head;
  let pre = head;
  let cur = head.next;
  let p = reverseN(cur, n - 1); 

  // 下面两句发生在递归回溯的阶段，从最后两个翻转的节点开始执行
  pre.next = cur.next;
  cur.next = pre;
  return p;
}

var reverseBetween = function(head, left, right) {
  if(!head || !head.next) return head;
  let ret = new ListNode(null, head);

  let pre = ret;
  let l = left;
  while(--l) {
    pre = pre.next;
  };
  // 此时pre为需要翻转节点的前一个节点
  pre.next = reverseN(pre.next, right - left + 1);

  return ret.next;
}