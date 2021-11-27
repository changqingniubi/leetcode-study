/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-12 17:21:15
 * @LastEditTime: 2021-11-15 19:49:45
 * @LastEditors: changqing
 * @Usage: 
 */


var reserve = function (head, n) {
  let pre = head,
    cur = head,
    con = n
  while (--n && pre) {
    pre = pre.next
  }
  if (!pre) return head

  pre = null;
  while(con--){
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  head.next = cur;
  return pre;
}
var reverseKGroup = function(head, k) {
  if(!head) return null;
  let ret = new ListNode(-1, head);
  let pre = ret;
  do {
    pre.next = reserve(pre.next, k);
    for(let i = 0; i<k && pre; i++) {
      pre = pre.next;
    }
    if(!pre) break;
  } while(1);

  return ret.next;
};