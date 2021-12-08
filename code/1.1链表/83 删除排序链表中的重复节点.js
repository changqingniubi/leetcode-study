/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 解题思路： 
 *  1. 定义pre和cur两个相邻指针
 *  2. 每次两个指针向后移动一位，判断两个节点的值
 *  3. 如果不相等，同时向后移动一位
 *  4. 如果相等，cur指针向后移动一位，pre节点next指向新cur节点
 */
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let pre = head, cur = head.next;
  while(cur) {
    // 如果值相等，第二个指针向后移动一位
    if(pre.val === cur.val) {
      cur = cur.next; // cur往后走一步。
      pre.next = cur;
    } else {
      // 如果值不相等，两个指针分别向后移动一位
      pre = pre.next;
      cur = cur.next;

      [pre, cur] = [pre.next, cur.next]





      // pre = pre.next;
      // cur = pre.next;

      // [pre, cur] = [pre.next, pre.next];


    }
  }
  return head;
};