/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    const set = new Set(nums);

    return set.size !== nums.length
};

// nums =
// [1,2,3,4]
// console.log(containsDuplicate(nums))