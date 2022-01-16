/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-13 20:27:16
 * @LastEditTime: 2022-01-16 10:59:13
 * @LastEditors: changqing
 * @Usage: 
 */


//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//请你将两个数相加，并以相同形式返回一个表示和的链表。
//你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


//输入：l1 = [2,4,3], l2 = [5,6,4]
//输出：[7,0,8]
//解释：342 + 465 = 807.

//2-> 4->  3
//5 6  4

//8-> 0-> 7


// 返回
//7->0-> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
  let sum =0;
  let dummy=new ListNode(0);
  let p1=l1,p2=l2;
  let cur=dummy
  while(p1||p2){
    if(p1){
      sum+=p1.val;
      p1=p1.next
    }
    if(p2){
      sum+=p2.val;
      p2=p2.next
    }
    console.log('sum%10',sum%10);
    cur.next = new ListNode(sum%10);
    sum= parseInt(sum/10);//进位
    console.log('sum',sum);
    cur=cur.next;
  }
  // 如果还有进位
  if(sum===1){
    cur.next = new ListNode(1);
  }
  return dummy.next;
};

let cur = new ListNode(2)
let l1=cur;
cur.next = new ListNode(4)
cur = cur.next;
cur.next=new ListNode(3)



cur = new ListNode(5)
let l2=cur;
cur.next = new ListNode(6)
cur = cur.next;
cur.next=new ListNode(4)



// var num = 20180728;

// var a = parseInt(num % 10); // 个位数

// var b = parseInt((num % 100) / 10); // 十位数

// var c = parseInt((num % 1000) / 100); // 百位数

// var d = parseInt((num % 10000) / 1000); // 千位数



console.log(addTwoNumbers(l1,l2))