/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-12-17 14:46:11
 * @LastEditTime: 2021-12-17 18:46:06
 * @LastEditors: changqing
 * @Usage: 
 */

//给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1



//思路

//所有的元素一定是按顺序 push 进去的，重要的是怎么 pop 出来？
//假设当前栈顶元素值为 2，同时对应的 popped 序列中下一个要 pop 的值也为 2，那就必须立刻把这个值 pop 出来。因为之后的 push 都会让栈顶元素变成不同于 2 的其他值，这样再 pop 出来的数 popped 序列就不对应了。

//算法

//将 pushed 队列中的每个数都 push 到栈中，同时检查这个数是不是 popped 序列中下一个要 pop 的值，如果是就把它 pop 出来。
//最后，检查不是所有的该 pop 出来的值都是 pop 出来了。




/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
        let N = pushed.length;
        let stack = new Array();
        let j = 0; 
        for (let x of pushed) {
            stack.push(x);
            while (stack.length && j < N && stack[stack.length-1] == popped[j]) {
                stack.pop();
                j++;
            }
        }
        console.log(j);
        return j == N;  // pop的次数 和 pushed数组的的元素数量是否一致
}; 

let a =[1,2,3,4,5]
let b =[4,5,3,2,1]
console.log(validateStackSequences(a,b));


