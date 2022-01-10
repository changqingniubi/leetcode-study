/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-09 16:27:08
 * @LastEditTime: 2022-01-09 16:45:42
 * @LastEditors: changqing
 * @Usage: 
 */

//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
//你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//你可以按任意顺序返回答案。


// 相似题目 15  16  18 167  259  

//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

var twoSum = function(nums, target) {
    if(nums===null || nums.length<2){
      return [-1,-1]
    }
    let res=[-1,-1]
    let map=new Map();
    for(let i=0;i<nums.length;i++){
      let cur = nums[i]
      let find = target-cur
      if(map.get(find)!==undefined){
        res = [map.get(find),i]
        break;
      }
      map.set(cur,i)
    }
    return res
};

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));