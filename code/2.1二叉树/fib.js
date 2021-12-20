/*
 * @Description  : 
 * @Autor        : yanwang
 * @CreateDate   : 2021-12-18 23:18:06
 * @LastEditors  : yanwang
 * @LastEditTime : 2021-12-19 16:43:38
 */
// 计算斐波那契数列第 n 项的值
function fib(n) {
  if(n <= 2) return n; // K0 是正确的
  // 假设 fib(n-1): 能得到第n-1项的值，fib(n-2)   // 假设Ki是正确的
  return fib(n - 1) + fib(n - 2); // 则： fib(n - 1) + fib(n - 2)就是第n项的值  // 则： Kn是正确的
}
 let result = fib(6);
 console.log(result);