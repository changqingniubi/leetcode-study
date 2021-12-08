/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let moneys = { // 记录5元和10元的个数
    '5': 0,
    '10': 0,
  };
  for (let i = 0; i < bills.length; i++) {
    switch(bills[i]){
      case 5:
        moneys['5']++;
        break;
      case 10:
        if(moneys['5'] <= 0) return false;
        moneys['5']--;
        moneys['10']++;
        break;
      case 20:
        if(moneys['10'] > 0) {
          if(moneys['5'] < 1) return false;
          moneys['10']--;
          moneys['5']--;
        } else {
          if(moneys['5'] < 3) return false;
          moneys['5'] -= 3;
        }
        break;
    }
  }
  return true;
}
// @lc code=end

