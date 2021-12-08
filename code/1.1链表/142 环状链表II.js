/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 快慢指针相遇点到环起点的距离相同
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null;
  // pre先走一步，next先走两补。初始值保持他俩两倍关系。
  let pre = head.next, next = head.next.next;
  while(pre != next && next && next.next) {
    pre = pre.next;
    next = next.next.next;
  }
  
  // 两指针相遇：有环 ，否则： 无环
  if(pre != next) return null;

  pre = head;
  while(pre != next) {
    pre = pre.next;
    next = next.next;
  }
  // 两指针相遇
  return pre;
};