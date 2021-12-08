/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var reserve = function (head, n) {
  let pre = head,
      cur = head,
      con = n
  // 检查够不够n个节点
  while (--n && pre) {
    pre = pre.next
  }
  if (!pre) return head;

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
  while(1) {
    pre.next = reserve(pre.next, k);
    for(let i = 0; i<k && pre; i++) {
      pre = pre.next;
    }
    // pre
    if(!pre) break;
  };

  return ret.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end