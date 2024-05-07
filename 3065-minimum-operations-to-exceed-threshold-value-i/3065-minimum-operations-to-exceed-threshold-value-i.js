/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0;
    for(let num of nums){
        // console.log("k", k ,"num", num)
        if(num < k){
           count++; 
        }
    }
    console.log("value " , count);
    return count;
};