/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 复制新链表每个节点，旧节点增加line指针指向新节点
 * 因为radom指针的节点可能开始不存在，所以需要遍历两遍
 */
 var copyRandomList = function(head) {
  if(!head) return null;
  let ret = new Node(-1, null, null); // 新链表的的虚拟头节点
  let cur = head; // 旧链表的指针，指向当前节点。
  let newPre = ret; // 新链表的指针，指向前一个节点

  // 创建新链表
  while(cur){
    let newNode = new Node(cur.val, null, null); // 创建节点
    newPre.next = newNode; // 前一个节点与新节点串起来
    cur.link = newNode; // 新节点关联（映射）到老节点

    newPre = newPre.next; // 新节点指针走一步
    cur = cur.next; // 老节点指针走一步
  }

  // 更改新链表random
  cur = head; // 沿着老链表向后走
  while(cur){
    if(cur.random){
      cur.link.random = cur.random.link;
    }
    cur = cur.next;
  }

  // 删除旧链表link属性
  while(cur){
    delete(cur.link);
    cur = cur.next;
  }
  return ret.next;
};

// @lc code=end

