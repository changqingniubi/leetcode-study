/*
 * @Description: 
 * @Author: changqing
 * @Date: 2022-01-09 16:56:46
 * @LastEditTime: 2022-01-09 19:16:07
 * @LastEditors: changqing
 * @Usage: 
 */


// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
//注意：答案中不可以包含重复的三元组。

//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]


//1.先排序 [-4,-1,-1,0,1,2]
/**
 * time O(n^2)
 * space O(n)
 * @param {*} nums 
 */
var threeSum = function(nums) {
  let res =[];
  nums=nums.sort(function(a,b){
    return a-b
  });
  for(let i=0;i<nums.length-2;i++){
    if(i>0&& nums[i]==nums[i-1]) continue; // 去重
    let low = i+1,high=nums.length-1;
    let sum = 0-nums[i];
    while(low<high){
      if(nums[low]+nums[high]==sum){
        res.push([nums[i],nums[low],nums[high]]);
        // 去重
        while(low<high&&nums[low]==nums[low+1]){
          low++
        }
        while(low<high&&nums[high]==nums[high-1]){
          high--
        }
        low++;
        high--;
      }else if(nums[low]+nums[high]<sum){
        low++
      }else{
        high--
      }
    }
  }
  return res
};


let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));
