/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 思路： 此题关键是如何查找倒数第 n 个节点
 * 1. 定义第一个指针 front，先向后走 n  步；
 * 2. 定义第二个指针 after。 fornt 和 after 一同向后走。
 * 3. 当front走到链表尾节点时，after指向的就是倒数第 n 个节点的前一个节点。
 * 
 * 技巧： 当头节点有很大概率会改变时，需要用到虚拟头节点的技巧；
 *       就是在头部定义一个虚拟的聊表节点，next指针执行head。
 */
var removeNthFromEnd = function(head, n) {
  if(!head) return null;
  // 定义虚拟头节点
  let ret = new ListNode(-1, head);
  
  let front = ret;
  while(n--) {
    front = front.next;
  }

  // 定义after指针，然后两个指针一起向后走
  let after = ret;
  while(front.next) {
    after = after.next;
    front = front.next;
  }

  // 此时after，指向倒数第n个节点的前一个节点
  after.next = after.next.next;
  
  return ret.next;
};

// @lc code=end

