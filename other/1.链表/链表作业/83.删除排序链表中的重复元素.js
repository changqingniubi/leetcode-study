/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */

/**
 * 思路： 
 * 1. 遍历整个链表
 * 2. 比较 当前指针(cur) 和后 一个指针(cur.next) 的值
 * 3. 如果值相同就将当前指针指向其后面 第三个节点(cur.next.next)
 * 4. 不相同就向后移动一步cur指针
 */
var deleteDuplicates = function(head) {
  if(!head) return null;
  // 放置一个指针标记当前节点
  let cur = head;
  while(cur.next) {
    if( cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next;
    }
  }
  return head;
};
