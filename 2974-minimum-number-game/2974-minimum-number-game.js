/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let newArr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            const temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            i = -1;
        }
    }
    for (let j = nums.length-1; j >= 0; j--) {
        console.log("second ", nums[j]);
        if (j % 2 === 0) {
            newArr.unshift(nums[j]);
            newArr.unshift(nums[j + 1]);
        }
    }
    console.log(newArr)
    return newArr;
};