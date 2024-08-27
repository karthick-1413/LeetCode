/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1
        }
    }
    const max = Object.values(obj).sort((a, b) => b - a)[0];
    for (const key in obj) {
        if (obj[key] === max) {
            return key;
        }
    }
};