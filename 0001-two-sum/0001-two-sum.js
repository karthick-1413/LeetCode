/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let outputArr = [];

    const len = nums.length;
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            if(target === nums[i]+nums[j]) {
               outputArr.push(i, j);
            }
        }
    }

    return outputArr;
};