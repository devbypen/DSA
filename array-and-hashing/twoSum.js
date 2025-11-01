/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Space Complexity : 0
// Time Complexity: O(n^2)
var twoSum = function(nums, target) {
    for (let i=0; i <nums.length; i++) {
        for (let j=0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target & i !== j) {
                return [i,j]
            }
        }
    }
};