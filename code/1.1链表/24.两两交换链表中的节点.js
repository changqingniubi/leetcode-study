/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  if(!head || !head.next) return head;

  let ret = new ListNode(null, head);
  
  // pre： 需要交换节点的第一个节点，
  // tail:  需要交换节点的第二个节点，
  // temp: 两个交换节点的前一个节点，即 **已经交换完的尾结点**
  let pre = ret, tail = head, temp = ret;
  
  while(temp.next && temp.next.next){ // 如果后面还存在两个未交换节点
    pre = pre.next; // 向后走一步
    tail = pre.next; // 在pre位置向后走一步
    // 重新设置两个节点的指向
    [ pre.next, tail.next ] = [ tail.next, pre ];
    // 链接之前翻转的链表和刚翻转的链表
    temp.next = tail;
    // temp移动到反转后的两个节点中的后面那个节点。 此时pre在后面。
    temp = pre;
  }
  return ret.next;
};

// 和上面思路一致
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  // 要改变头节点，最好创建虚拟节点
  let ret = new ListNode(null, head);

  // temp指向交换的两个节点的前一个节点，控制步伐
  let pre = ret, tail = head, temp = ret; 
  while(temp.next && temp.next.next){
    pre = pre.next;
    tail = pre.next;
    [pre.next, tail.next, temp.next] = [tail.next, pre, tail];
    temp = pre;
  }
  return ret.next;
}







return ret.next;

// @lc code=end

