/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-27 19:07:18
 * @LastEditTime: 2021-11-27 19:22:21
 * @LastEditors: changqing
 * @Usage: 
 */


function partition(head, x) {
  if (head == null) {
      return head;
  }
  let pro = head;
  let big = new ListNode(-1);
  let small = new ListNode(-1); 
  let headbig = big; 
  let headsmall =small;  
  //分     
  while (pro!= null) {           
      //大于时，放到 big 链表上
      if (pro.val >= x) {
          big.next = pro;
          big = big.next;
      // 小于放到 small 链表上
      }else {
          small.next = pro;
          small = small.next;
      }
      pro = pro.next;
  }
  //细节
  big.next = null;
  //合
  small.next = headbig.next;
  return headsmall.next;
}
