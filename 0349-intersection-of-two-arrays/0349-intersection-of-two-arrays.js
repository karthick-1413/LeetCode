/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let newArr = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !newArr.includes(nums1[i])) {
                newArr.push(nums1[i]);
            }
        }
    }
    console.log("newArr", newArr);
    return newArr;
};