class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.sort().some((_, index) => {
            return nums[index] === nums[index + 1];
        })
    }
}
