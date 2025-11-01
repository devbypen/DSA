/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    const sortedNum = nums.sort()

    if (nums.length <=1 ) {
        return false
    }
    for (let i = 1; i < nums.length; i++) {
        if (sortedNum[i] === sortedNum[i-1])
            return true
    }
    return false
};