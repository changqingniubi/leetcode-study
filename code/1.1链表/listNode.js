
 class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

/**
 * 节点 + 指针
 */
function ListNode() {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);

  let p = head, ret = '';
  while(p) {
    ret += ` ${p.val} ->`;
    p = p.next;
  }
  ret += 'null';
  console.log(ret);
}
// ListNode();


/**
 * 双数组
 */
/**
 * data 数组存储数据
 * next 数组存储指针
 */
function listNode2() {
  // 存储数据
  const data = [];
  // next中存储指针， next[0]中存储data[0]下一个节点的地址
  const next = [];

  // 在 ind 节点后面插入节点 p, val: 节点p存储的值
  function addNode(ind, p, val) {
    // 修改下标数组： 
    // p 节点的下一节点，为ind的 下一节点。
    next[p] = next[ind];   // next[ind]：ind的下一节点

    // ind节点的下一个节点换成 p
    next[ind] = p;

    // p节点存储的值为 val
    data[p] = val;
  }

  let head = 3;
  data[3] = 'a';

  addNode(3, 5, 'b');
  addNode(5, 7, 'c');
  addNode(7, 2, 'd');
  addNode(2, 1, 'e');
  addNode(7, 4, 'f');

  let p = head, ret = '';
  while(p) {
    ret += ` ${data[p]} ->` 
    p = next[p];
  }
  ret += 'null';
  console.log(ret);
}
listNode2();