/**
 * LRU 包含 get 和 set 方法
 * 
 * set: 如果存在数据，则更新数据，记为最后使用；
 *      如果不存在数据，如果超出限制，删除最早使用的数据，然后放入数据，并记为最后使用。
 * 
 * get: 返回数据，更新为最后使用
 */

// object + 双向链表
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.pre = null;
    this.next = null;
  }
}

class LRU {
  constructor(limit = 5) {
    this.limit = limit;
    this.cache = {};
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  // 移动节点到最新
  moveToLast(node) {
    // 如果是尾节点
    if(node === this.tail) return;

    //如果是头结点
    if(node === this.head) {
      this.head = node.next;
      this.tail.next = node;
      node.pre = this.tail;
      node.next = null;
      this.tail = node;
      return;
    }

    // 否则，移动节点
    let preNode = node.pre;
    let nextNode = node.next;
    preNode.next = nextNode;

    this.tail.next = node;
    node.pre = this.tail;
    node.next = null;

    this.tail = node;
  }
  get(key) {
    let item = this.cache[key];
    if(item === undefined) return null;

    // 否则，移动节点
    this.moveToLast(item)

    return item.val;
  }
  set(key, value) {
    let item = this.cache[key];
    // 如果节点不存在
    if(item === undefined) {
      let node = new Node(key, value);
      this.cache[key] = node;
      this.size++;
      if(!this.tail) { // 第一个节点
        this.tail = node;
        this.head = node;
      } else { // 增加节点
        this.tail.next = node;
        node.pre = this.tail;
        this.tail = node;
      }

      // 超出大小限制
      if(this.size > this.limit) {
        let newHead = this.head.next;
        newHead.pre = null;

        // 删除头节点
        this.head.pre = this.head.next = null;
        this.cache[this.head.key] = undefined;
        this.size--;

        this.head = newHead;
      } 
    } else {
      // 节点存在，移动节点
      item.val = value;
      this.moveToLast(item)
    }
  }
}

let lru = new LRU(3);

lru.set('a', 1)
lru.set('b', 2)
lru.set('c', 3)
lru.set('a', 'a') // b c a
lru.set('d', 4)
// lru.set('e', 5) // b c a d e

// console.log(lru.cache)
console.log(lru.get('a'))
// console.log(lru.get('b'))