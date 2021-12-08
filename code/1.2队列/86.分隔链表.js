/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */

/**
 * 遍历链表，拆分到另外两个链表
 */
var partition = function (head, x) {
  if(!head) return head;
  let minHead = new ListNode(null);
  let MaxHead = new ListNode(null);
  let min = minHead, max = MaxHead; // 标记尾节点
  let cur = head; // 遍历原链表
  while(cur){
    if(cur.val < x){
      min.next = cur;
      min = min.next;
    } else {
      max.next = cur;
      max = max.next;
    }
    
    // 往后走一步
    cur = cur.next;
  }
  max.next = null;
  min.next = MaxHead.next;
  return minHead.next;
}
// @lc code=end

