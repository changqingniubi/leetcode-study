/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-11-27 18:59:48
 * @LastEditTime: 2021-11-27 20:05:57
 * @LastEditors: changqing
 * @Usage: 
 */
//对于一个固定大小的数组，任何位置都可以是队首，只要知道队列长度，就可以根据下面公式计算出队尾位置：
//tailIndex=(headIndex+count−1) mod capacity
//其中 capacity 是数组长度，count 是队列长度，headIndex 和 tailIndex 分别是队首 head 和队尾 tail 索引。


//根据以上原则，列举循环队列的每个属性，并解释其含义。
//queue：一个固定大小的数组，用于保存循环队列的元素。
//headIndex：一个整数，保存队首 head 的索引。
//count：循环队列当前的长度，即循环队列中的元素数量。使用 headIndex 和 count 可以计算出队尾元素的索引，因此不需要队尾属性。
//capacity：循环队列的容量，即队列中最多可以容纳的元素数量。该属性不是必需的，因为队列容量可以通过数组属性得到，但是由于该属性经常使用，所以我们选择保留它

/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.capacity = k;
    this.queue = new Array(k);
    this.headIndex = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.count == this.capacity)
    return false;
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.count == 0)
    return false;
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.count == 0)
    return -1;
    return this.queue[this.headIndex];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.count == 0)
    return -1;
    let tailIndex = (this.headIndex + this.count - 1) % this.capacity;
    return this.queue[tailIndex];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return (this.count == 0);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.count == this.capacity);
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */